"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionFooter = motion.footer;

export function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-muted py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  E
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                EverGreen
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Committed to sustainable agriculture and innovative farming
              solutions for a better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-primary transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services/sustainable-farming"
                  className="hover:text-primary transition-colors"
                >
                  Sustainable Farming
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crop-management"
                  className="hover:text-primary transition-colors"
                >
                  Crop Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-primary transition-colors"
                >
                  Agricultural Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/research"
                  className="hover:text-primary transition-colors"
                >
                  Research & Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1234 Agriculture Way</li>
              <li>Green Valley, CA 90210</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@evergreen.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 EverGreen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Design by the Team ETSEC Services
          </p>
        </div>
      </div>
    </MotionFooter>
  );
}
