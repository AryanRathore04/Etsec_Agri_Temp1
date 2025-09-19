"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
const MotionDiv = motion.div;

export function CTASection() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-balance">
              Your First Steps Toward Agricultural Innovation.
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Take the first step towards transforming your agricultural
              practices. Explore our innovative solutions and join thousands of
              farmers who have already embraced sustainable farming methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:brightness-95"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
