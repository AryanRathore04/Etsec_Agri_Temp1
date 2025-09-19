import { Button } from "@/components/ui/button"
export function JourneySection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/vast-agricultural-field-landscape--sustainable-far.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-white text-balance">Unveiling Our Agricultural Journey</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Discover the story behind our commitment to sustainable agriculture and the innovative solutions that are
            transforming farming practices worldwide.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Our Story
          </Button>
        </div>
      </div>
    </section>
  )
}
