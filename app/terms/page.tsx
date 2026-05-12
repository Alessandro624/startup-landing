import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <>
            <main className="mx-auto max-w-3xl px-6 py-24">
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    Back to home
                </Link>
                <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
                <p className="mt-4 text-muted-foreground">
                    This is a starter terms page for {siteConfig.name}. Replace this content with
                    your official terms before publishing.
                </p>

                <section className="mt-10 space-y-4">
                    <h2 className="text-xl font-semibold">Use of the service</h2>
                    <p className="text-sm text-muted-foreground">
                        By using this site, you agree to use it responsibly and lawfully.
                    </p>

                    <h2 className="text-xl font-semibold">Limitation of liability</h2>
                    <p className="text-sm text-muted-foreground">
                        The service is provided as is, without warranties of any kind.
                    </p>

                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="text-sm text-muted-foreground">
                        For questions, email {siteConfig.contactEmail}.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
