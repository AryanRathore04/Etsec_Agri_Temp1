import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Careers at ETSEC</h1>
          <p className="text-muted-foreground">
            We're growing — check back here for open roles and internship
            opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
