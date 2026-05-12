-- Supabase schema for the waitlist table
-- Matches app/api/waitlist/route.ts and lib/validations.ts

create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_key on public.waitlist (email);
