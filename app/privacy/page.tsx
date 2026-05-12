import { siteConfig } from "@/config/site";
import { LegalLayout } from "@/components/layout/LegalLayout";

export default function PrivacyPage() {
    return (
        <LegalLayout>
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">
                This is a starter privacy policy for {siteConfig.name}. Replace this content
                with your official policy before publishing.
            </p>

            <section className="mt-10 space-y-4">
                <h2 className="text-xl font-semibold">Information we collect</h2>
                <p className="text-sm text-muted-foreground">
                    We may collect basic contact details submitted through the waitlist form and
                    anonymous usage data for analytics.
                </p>

                <h2 className="text-xl font-semibold">How we use information</h2>
                <p className="text-sm text-muted-foreground">
                    We use information to contact you about the product and improve the
                    experience.
                </p>

                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="text-sm text-muted-foreground">
                    For privacy questions, email {siteConfig.contactEmail}.
                </p>
            </section>
        </LegalLayout>
    );
}
