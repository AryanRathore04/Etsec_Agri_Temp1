import { Button } from "@/components/ui/button";
import Image from "next/image";
export function ExcellenceSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/modern-agricultural-greenhouse-structure--sustaina.jpg"
                alt="Modern agricultural greenhouse"
                className="rounded-lg w-full h-auto"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <Image
                src="/farmers-working-together-in-field--agricultural-te.jpg"
                alt="Farmers working together"
                className="rounded-lg w-full h-auto"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src="/lush-green-agricultural-field--sustainable-crop-pr.jpg"
                alt="Sustainable crop field"
                className="rounded-lg w-full h-auto"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <Image
                src="/agricultural-workers-in-greenhouse--sustainable-fa.jpg"
                alt="Agricultural team in greenhouse"
                className="rounded-lg w-full h-auto"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Cultivating Excellence and Shaping Tomorrow's Agriculture
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At the forefront of agricultural innovation, we are dedicated to
              developing sustainable solutions that address the challenges of
              modern farming. Our commitment to excellence drives us to
              continuously improve our methods and technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through collaborative partnerships with farmers, researchers, and
              industry leaders, we are building a more sustainable and
              productive future for agriculture worldwide.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
