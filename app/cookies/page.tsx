import { siteConfig } from "@/config/site";

export default function CookiesPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-24">
            <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
            <p className="mt-4 text-muted-foreground">
                This is a starter cookie policy for {siteConfig.name}. Replace this
                content with your official policy before publishing.
            </p>

            <section className="mt-10 space-y-4">
                <h2 className="text-xl font-semibold">What are cookies</h2>
                <p className="text-sm text-muted-foreground">
                    Cookies are small text files stored in your browser to remember
                    preferences and measure usage.
                </p>

                <h2 className="text-xl font-semibold">How we use cookies</h2>
                <p className="text-sm text-muted-foreground">
                    We use cookies for analytics and to improve site performance.
                </p>

                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="text-sm text-muted-foreground">
                    For cookie questions, email {siteConfig.contactEmail}.
                </p>
            </section>
        </main>
    );
}
