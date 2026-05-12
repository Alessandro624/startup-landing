import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type LegalLayoutProps = {
    children: React.ReactNode;
};

export function LegalLayout({ children }: LegalLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar showSectionLinks={false} />

            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">{children}</main>

            <Footer />
        </div>
    );
}
