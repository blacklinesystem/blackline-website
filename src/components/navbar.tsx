"use client";

import Link from "next/link";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#161616]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Blackline"
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-[#f34749] hover:bg-[#d93d3f] text-white">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#161616] px-4 pb-6 pt-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-4 w-full bg-[#f34749] hover:bg-[#d93d3f] text-white">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
