import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { GrowthSection } from "@/components/growth-section"
import { MethodologySection } from "@/components/methodology-section"
import { ExcellenceSection } from "@/components/excellence-section"
import { JourneySection } from "@/components/journey-section"
import { ProductsSection } from "@/components/products-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <GrowthSection />
      <MethodologySection />
      <ExcellenceSection />
      <JourneySection />
      <ProductsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
