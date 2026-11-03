import test from 'node:test';
import assert from 'node:assert/strict';
import { saveSignup } from '../lib/signup.ts';

const signup = { email: 'person@example.com', name: 'Example' };

test('new signup waits for notification completion', async () => {
  const calls = [];
  const result = await saveSignup(signup, async (data) => {
    assert.deepEqual(data, signup);
    calls.push('saved');
    return { error: null };
  }, async () => { await Promise.resolve(); calls.push('notified'); }, () => assert.fail());
  assert.deepEqual(result, { created: true });
  assert.deepEqual(calls, ['saved', 'notified']);
});

test('duplicate signup never sends another email', async () => {
  const result = await saveSignup(signup, async () => ({ error: { code: '23505' } }),
    async () => assert.fail('duplicate notification'), () => assert.fail());
  assert.deepEqual(result, { created: false });
});

test('storage failures do not send a notification', async () => {
  await assert.rejects(saveSignup(signup, async () => ({ error: { code: 'storage_error' } }),
    async () => assert.fail('notification before durable save'), () => assert.fail()), /storage failed/);
});

test('notification failure is reported without claiming the saved signup failed', async () => {
  let reported = false;
  const result = await saveSignup(signup, async () => ({ error: null }),
    async () => { throw new Error('provider unavailable'); }, () => { reported = true; });
  assert.equal(reported, true);
  assert.equal(result.created, true);
});
