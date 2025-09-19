"use client";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export function ProductsSection() {
  const products = [
    {
      name: "LIVING ORGANIC",
      image: "/organic-fertilizer-package--sustainable-agricultur.jpg",
      rating: 4.8,
      price: "$24.99",
    },
    {
      name: "PERFECT START",
      image: "/seed-starter-kit-package--agricultural-supplies.jpg",
      rating: 4.9,
      price: "$19.99",
    },
    {
      name: "ORGANIC BOOSTER",
      image: "/organic-plant-booster-product--sustainable-farming.jpg",
      rating: 4.7,
      price: "$29.99",
    },
    {
      name: "PROTECTION",
      image: "/plant-protection-spray-bottle--organic-pest-contro.jpg",
      rating: 4.6,
      price: "$34.99",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Explore our range of agricultural products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover high-quality agricultural products designed to enhance your
            farming operations and promote sustainable agricultural practices.
          </p>
        </div>

        <MotionDiv
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-card rounded-lg p-6 text-center space-y-4"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-32 object-contain mx-auto"
              />
              <h3 className="font-bold text-foreground">{product.name}</h3>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {product.rating}
                </span>
              </div>
              <div className="text-lg font-bold text-primary">
                {product.price}
              </div>
            </motion.div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
