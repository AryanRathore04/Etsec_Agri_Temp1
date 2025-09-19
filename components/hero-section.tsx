"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
const MotionDiv = motion.div;

function AnimatedLetters({ text }: { text: string }) {
  const shouldReduce = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);

  if (shouldReduce) {
    return <span>{text}</span>;
  }

  return (
    <span aria-hidden className="inline-block overflow-hidden align-middle">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-2 align-middle">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.03 + wi * 0.06,
                ease: "backOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              <AnimatedLetters
                text={
                  "Nurturing Growth, Harvest Excellence: The Future of Sustainable Agriculture Starts Here."
                }
              />
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to advancing agricultural excellence and
              innovation in sustainable farming practices. Our mission is to
              empower farmers with cutting-edge solutions that promote
              environmental stewardship while maximizing crop yields and
              profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MotionDiv
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </MotionDiv>
              <MotionDiv
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="inline-block"
              >
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </MotionDiv>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {mounted && (
              <Image
                src="/two-farmers-in-agricultural-field-with-crops--sust.jpg"
                alt="Two farmers working in sustainable agricultural field"
                className="rounded-lg shadow-lg w-full h-auto"
                width={1200}
                height={800}
              />
            )}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
