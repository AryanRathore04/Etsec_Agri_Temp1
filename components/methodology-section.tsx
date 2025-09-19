export function MethodologySection() {
  const methods = [
    {
      title: "RESEARCH",
      description:
        "Comprehensive research and development programs focused on sustainable agricultural practices and innovative farming techniques.",
    },
    {
      title: "PRODUCTION",
      description:
        "State-of-the-art production facilities that implement environmentally responsible manufacturing processes and quality control.",
    },
    {
      title: "QUALITY",
      description:
        "Rigorous quality assurance protocols to ensure all products meet the highest standards for safety, efficacy, and environmental impact.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Cultivating Sustainability: Our Methodical Journey from Seed to
            Harvest
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our comprehensive approach to sustainable agriculture encompasses
            every stage of the farming process, from initial research and
            development to final harvest and distribution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {method.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
