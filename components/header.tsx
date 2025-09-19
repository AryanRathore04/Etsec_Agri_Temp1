"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";
const MotionDiv = motion.div;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <MotionDiv
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-background border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href="/" className="flex items-center space-x-1">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image
                src="/Pine-Tree--Streamline-Flex-Remix.svg"
                alt="Pine Tree logo"
                width={24}
                height={24}
                className="text-primary-foreground"
              />
            </div>
            <span className="text-2xl font-normal text-foreground">
              EverGreen
            </span>
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center space-x-8"
        >
          <MotionDiv
            className="inline-block"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
          </MotionDiv>

          <MotionDiv
            className="inline-block"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
          </MotionDiv>

          <MotionDiv
            className="inline-block"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
          </MotionDiv>

          <MotionDiv
            className="inline-block"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href="/company"
              className="text-foreground hover:text-primary transition-colors"
            >
              Company
            </Link>
          </MotionDiv>
        </nav>

        <div className="flex items-center gap-3">
          <MotionDiv
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block"
          >
            <Link href="/contact">
              <Button
                variant="outline"
                className="hidden md:inline-flex bg-transparent"
              >
                Contact
              </Button>
            </Link>
          </MotionDiv>

          {/* Mobile menu button */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <motion.nav
                aria-label="Mobile navigation"
                className="flex flex-col"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/products", label: "Products" },
                  { href: "/company", label: "Company" },
                ].map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="py-2"
                  >
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="mt-3"
                >
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact
                    </Button>
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionDiv>
  );
}
