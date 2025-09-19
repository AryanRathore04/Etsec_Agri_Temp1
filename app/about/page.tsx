import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              About ETSEC
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Leading the revolution in sustainable agriculture through
              innovation, dedication, and a commitment to feeding the world
              responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At ETSEC, we believe that sustainable agriculture is not just
                about growing crops—it's about cultivating a better future for
                our planet and generations to come. Our mission is to
                revolutionize farming practices through cutting-edge technology
                and time-tested wisdom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work hand-in-hand with farmers worldwide to implement
                sustainable practices that increase yield while preserving the
                environment, ensuring food security for a growing global
                population.
              </p>
            </div>
            <div className="relative">
              <img
                src="/farmers-working-in-sustainable-greenhouse-with-mod.jpg"
                alt="Sustainable farming practices"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from research and
              development to farmer partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                Every solution we develop prioritizes long-term environmental
                health and resource conservation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge technology and research to solve
                agriculture's biggest challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Partnership
              </h3>
              <p className="text-muted-foreground">
                We believe in collaborative relationships with farmers,
                researchers, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="team" className="text-3xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving agricultural innovation and sustainable
              farming practices worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/professional-agricultural-scientist-portrait.jpg"
                alt="Dr. Sarah Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dr. Sarah Chen
              </h3>
              <p className="text-primary font-medium mb-2">
                Chief Executive Officer
              </p>
              <p className="text-muted-foreground text-sm">
                20+ years in agricultural research and sustainable farming
                innovation.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/agricultural-technology-expert-portrait.jpg"
                alt="Michael Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Michael Rodriguez
              </h3>
              <p className="text-primary font-medium mb-2">
                Chief Technology Officer
              </p>
              <p className="text-muted-foreground text-sm">
                Expert in precision agriculture and smart farming technologies.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/sustainable-agriculture-specialist-portrait.jpg"
                alt="Dr. Emily Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dr. Emily Johnson
              </h3>
              <p className="text-primary font-medium mb-2">
                Head of Sustainability
              </p>
              <p className="text-muted-foreground text-sm">
                Leading environmental scientist specializing in regenerative
                agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Timeline (from previous company page) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010 by a group of agricultural scientists and
                passionate farmers, ETSEC emerged from a simple yet powerful
                vision: to revolutionize farming practices while preserving our
                planet for future generations.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a small research initiative has grown into a
                global leader in sustainable agriculture, serving over 50,000
                farmers across 40 countries and contributing to food security
                worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push the boundaries of agricultural
                innovation, combining cutting-edge technology with time-tested
                farming wisdom to create solutions that benefit both farmers and
                the environment.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder-aiub7.png"
                alt="ETSEC headquarters"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Awards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform agriculture and promote
              sustainability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2010
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Company Founded
                  </h3>
                  <p className="text-muted-foreground">
                    ETSEC was established with a mission to develop sustainable
                    agricultural solutions that benefit both farmers and the
                    environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2013
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    First Product Launch
                  </h3>
                  <p className="text-muted-foreground">
                    Launched our flagship organic fertilizer line, helping
                    1,000+ farmers improve crop yields while reducing
                    environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2016
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Global Expansion
                  </h3>
                  <p className="text-muted-foreground">
                    Expanded operations to 15 countries, establishing
                    partnerships with local farmers and agricultural
                    organizations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2019
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Technology Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    Introduced precision agriculture technologies and digital
                    farming solutions, revolutionizing how farmers monitor and
                    manage their crops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2022
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Sustainability Milestone
                  </h3>
                  <p className="text-muted-foreground">
                    Achieved carbon neutrality across all operations and helped
                    farmers reduce water usage by 30% through innovative
                    irrigation solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">
                    2024
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    50,000 Farmers Milestone
                  </h3>
                  <p className="text-muted-foreground">
                    Reached our goal of serving 50,000+ farmers globally, with
                    operations spanning 40 countries and continuing to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and sustainability has been
              recognized by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sustainable Agriculture Award
              </h3>
              <p className="text-muted-foreground text-sm">
                Global Agriculture Council 2023
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Innovation in Farming
              </h3>
              <p className="text-muted-foreground text-sm">
                AgTech Innovation Awards 2022
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Environmental Excellence
              </h3>
              <p className="text-muted-foreground text-sm">
                Green Business Awards 2021
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Best Employer
              </h3>
              <p className="text-muted-foreground text-sm">
                AgriCareers Excellence 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
