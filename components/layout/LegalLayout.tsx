import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type LegalLayoutProps = {
    children: React.ReactNode;
};

export function LegalLayout({ children }: LegalLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar showSectionLinks={false} />

            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to home
                    </Link>
                </div>
                {children}
            </main>

            <Footer />
        </div>
    );
}
