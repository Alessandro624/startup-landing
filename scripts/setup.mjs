import { readFile, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import path from "node:path";
import process from "node:process";

const rl = createInterface({ input: process.stdin, output: process.stdout });

const root = process.cwd();
const siteConfigPath = path.join(root, "config", "site.ts");
const contentPath = path.join(root, "data", "content.ts");

function escapeString(value) {
    return value.replace(/\\/g, "\\\\").replace(/\"/g, '\\"').replace(/\r?\n/g, " ");
}

function getValue(content, key) {
    const match = content.match(new RegExp(`${key}\\s*:\\s*\"([^\"]*)\"`, "m"));
    return match?.[1] ?? "";
}

function getSectionValue(content, sectionName, key) {
    const match = content.match(
        new RegExp(
            `export const ${sectionName} = \\{[\\s\\S]*?\\b${key}\\s*:\\s*\"([^\"]*)\"`,
            "m"
        )
    );
    return match?.[1] ?? "";
}

function replaceValue(content, key, value) {
    if (!value) return content;
    const safe = escapeString(value);
    const regex = new RegExp(`(${key}\\s*:\\s*)\"[^\"]*\"`, "m");
    if (!regex.test(content)) return content;
    return content.replace(regex, `$1\"${safe}\"`);
}

function replaceSectionValue(content, sectionName, key, value) {
    if (!value) return content;
    const safe = escapeString(value);
    const regex = new RegExp(
        `(export const ${sectionName} = \\{[\\s\\S]*?\\b${key}\\s*:\\s*)\"[^\"]*\"`,
        "m"
    );
    if (!regex.test(content)) return content;
    return content.replace(regex, `$1\"${safe}\"`);
}

async function prompt(label, fallback) {
    const suffix = fallback ? ` (${fallback})` : "";
    const answer = (await rl.question(`${label}${suffix}: `)).trim();
    return answer || fallback || "";
}

async function main() {
    const siteConfig = await readFile(siteConfigPath, "utf8");
    const content = await readFile(contentPath, "utf8");

    const startupName = await prompt("Startup name", getValue(siteConfig, "name"));
    const startupTagline = await prompt("Tagline", getValue(siteConfig, "tagline"));
    const companyDescription = await prompt("Description", getValue(siteConfig, "description"));
    const siteUrl = await prompt("Site URL", getValue(siteConfig, "url"));
    const contactEmail = await prompt("Contact email", getValue(siteConfig, "contactEmail"));
    const logoPath = await prompt("Logo path", getValue(siteConfig, "logoPath"));
    const ogImage = await prompt("OG image path", getValue(siteConfig, "ogImage"));
    const twitterHandle = await prompt("Twitter handle", getValue(siteConfig, "twitterHandle"));
    const linkedinUrl = await prompt("LinkedIn URL", getValue(siteConfig, "linkedin"));
    const githubUrl = await prompt("GitHub URL", getValue(siteConfig, "github"));
    const twitterUrl = await prompt("Twitter URL", getValue(siteConfig, "twitter"));

    const heroHeadline = await prompt(
        "Hero headline",
        getSectionValue(content, "heroContent", "headline")
    );
    const heroSubheadline = await prompt(
        "Hero subheadline",
        getSectionValue(content, "heroContent", "subheadline")
    );
    const primaryCta = await prompt(
        "Primary CTA",
        getSectionValue(content, "heroContent", "primaryCta")
    );
    const secondaryCta = await prompt(
        "Secondary CTA",
        getSectionValue(content, "heroContent", "secondaryCta")
    );
    const heroImage = await prompt(
        "Hero image path",
        getSectionValue(content, "heroContent", "image")
    );
    const ctaHeadline = await prompt(
        "CTA headline",
        getSectionValue(content, "ctaContent", "headline")
    );
    const ctaSubheadline = await prompt(
        "CTA subheadline",
        getSectionValue(content, "ctaContent", "subheadline")
    );
    const ctaButton = await prompt(
        "CTA button label",
        getSectionValue(content, "ctaContent", "buttonLabel")
    );

    let nextSiteConfig = siteConfig;
    nextSiteConfig = replaceValue(nextSiteConfig, "name", startupName);
    nextSiteConfig = replaceValue(nextSiteConfig, "tagline", startupTagline);
    nextSiteConfig = replaceValue(nextSiteConfig, "description", companyDescription);
    nextSiteConfig = replaceValue(nextSiteConfig, "url", siteUrl);
    nextSiteConfig = replaceValue(nextSiteConfig, "logoPath", logoPath);
    nextSiteConfig = replaceValue(nextSiteConfig, "contactEmail", contactEmail);
    nextSiteConfig = replaceValue(nextSiteConfig, "ogImage", ogImage);
    nextSiteConfig = replaceValue(nextSiteConfig, "twitterHandle", twitterHandle);
    nextSiteConfig = replaceValue(nextSiteConfig, "linkedin", linkedinUrl);
    nextSiteConfig = replaceValue(nextSiteConfig, "github", githubUrl);
    nextSiteConfig = replaceValue(nextSiteConfig, "twitter", twitterUrl);

    let nextContent = content;
    nextContent = replaceSectionValue(nextContent, "heroContent", "headline", heroHeadline);
    nextContent = replaceSectionValue(
        nextContent,
        "heroContent",
        "subheadline",
        heroSubheadline
    );
    nextContent = replaceSectionValue(nextContent, "heroContent", "primaryCta", primaryCta);
    nextContent = replaceSectionValue(
        nextContent,
        "heroContent",
        "secondaryCta",
        secondaryCta
    );
    nextContent = replaceSectionValue(nextContent, "heroContent", "image", heroImage);
    nextContent = replaceSectionValue(nextContent, "ctaContent", "headline", ctaHeadline);
    nextContent = replaceSectionValue(
        nextContent,
        "ctaContent",
        "subheadline",
        ctaSubheadline
    );
    nextContent = replaceSectionValue(
        nextContent,
        "ctaContent",
        "buttonLabel",
        ctaButton
    );

    if (startupName) {
        nextContent = nextContent.replace(/Startup Name/g, startupName);
    }

    await writeFile(siteConfigPath, nextSiteConfig, "utf8");
    await writeFile(contentPath, nextContent, "utf8");

    console.log("Setup complete. Updated config/site.ts and data/content.ts.");
}

main()
    .catch((error) => {
        console.error("Setup failed:", error);
        process.exitCode = 1;
    })
    .finally(() => rl.close());
