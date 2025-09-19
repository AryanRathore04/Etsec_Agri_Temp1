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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  E
                </span>
              </div>
              <span className="text-2xl font-bold text-foreground">ETSEC</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Committed to sustainable agriculture and innovative farming
              solutions for a better tomorrow.
            </p>
            <div className="flex items-center space-x-4 mt-3">
              {/* Twitter */}
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.82.49-1.73.84-2.7 1.03C18.2 4.6 17 4 15.65 4c-2.34 0-4.23 1.9-4.23 4.24 0 .33.03.65.11.96C7.69 9.06 4.07 7.13 1.64 4.14c-.36.63-.57 1.37-.57 2.16 0 1.49.76 2.8 1.92 3.57-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.22-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.98 4.05 3.01-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.7-.02-1.04-.06C6.08 20.29 8.34 21 10.77 21c6.9 0 10.68-5.72 10.68-10.68 0-.16 0-.33-.01-.49.73-.53 1.36-1.19 1.86-1.95-.67.3-1.38.5-2.12.59z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.9V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.19 22 17.06 22 12.07z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
              <div className="md:flex-1">
                <h4 className="font-semibold text-foreground mb-4 text-lg">Company</h4>
                <ul className="space-y-3 text-base text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                  </li>
                </ul>
              </div>

              <div className="md:flex-1 mt-6 md:mt-0">
                <h5 className="font-semibold text-foreground mb-2">Contact</h5>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>1234 Agriculture Way</li>
                  <li>Green Valley, CA 90210</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@etsec.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ETSEC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Design by the Team ETSEC Services
          </p>
        </div>
      </div>
    </MotionFooter>
  );
}
