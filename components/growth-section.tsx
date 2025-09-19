import { Button } from "@/components/ui/button"
export function GrowthSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">It Starts With Growers In Mind.</h2>
            <p className="text-muted-foreground leading-relaxed">
              For the past fifty-five years, we have been committed to helping farmers achieve sustainable growth
              through innovative agricultural solutions. We understand the challenges farmers face and are dedicated to
              providing them with the tools, knowledge, and support they need to succeed in today's evolving
              agricultural landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines traditional farming wisdom with cutting-edge technology, ensuring that every
              solution we provide is both practical and environmentally responsible. By focusing on the needs of
              growers, we create lasting partnerships that benefit both farmers and the communities they serve.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Know More</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/modern-greenhouse-interior-with-green-plants--sust.jpg"
                alt="Modern greenhouse with sustainable crops"
                className="rounded-lg w-full h-auto"
              />
              <img
                src="/farmer-working-with-crops-in-field--agricultural-w.jpg"
                alt="Farmer working in agricultural field"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/close-up-of-green-leafy-vegetables--sustainable-fa.jpg"
                alt="Fresh sustainable produce"
                className="rounded-lg w-full h-auto"
              />
              <img
                src="/female-farmer-in-greenhouse-with-plants--agricultu.jpg"
                alt="Female farmer in greenhouse"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
