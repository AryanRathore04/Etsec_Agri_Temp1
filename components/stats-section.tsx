"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "./countup";

import { motion } from "framer-motion";
const MotionDiv = motion.div;

export function StatsSection() {
  const stats = [
    {
      number: 50000,
      label: "Active Farmers",
      sublabel: "Across three continents",
      suffix: "+",
    },
    {
      number: 100000,
      label: "Crops",
      sublabel: "Grown sustainably",
      suffix: "+",
    },
    { number: 105, label: "Countries", sublabel: "Global reach", suffix: "+" },
    {
      number: 140,
      label: "Projects",
      sublabel: "Completed successfully",
      suffix: "+",
    },
  ];

  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-16 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Discover the essence of our dedication, develop and shape the
              future of sustainable agriculture.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From pioneering cutting-edge research in agricultural innovation,
              we have been at the forefront of sustainable farming practices.
              Our commitment to excellence and environmental stewardship has
              enabled us to make a lasting impact on agriculture and the lives
              of farmers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {visible ? (
                    <>
                      <CountUp from={0} to={stat.number} duration={1400} />
                      {stat.suffix}
                    </>
                  ) : (
                    `${new Intl.NumberFormat("en-US").format(stat.number)}${
                      stat.suffix
                    }`
                  )}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
