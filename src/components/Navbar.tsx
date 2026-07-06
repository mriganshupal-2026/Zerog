"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { motion } from "./Motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/25 bg-[#0B1F35]/78 px-4 py-3 text-white shadow-2xl shadow-[#0B1F35]/20 backdrop-blur-xl md:px-6"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-3" aria-label="Zero G HVAC home">
          <span className="grid size-10 place-items-center rounded-full bg-[#00C2FF] text-sm font-black text-[#0B1F35]">
            ZG
          </span>
          <span className="text-base font-semibold tracking-wide">Zero G HVAC</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/78 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="tel:+15550190000" variant="outline" className="min-h-10 px-5">
            <PhoneCall size={16} aria-hidden="true" />
            Call Now
          </ButtonLink>
          <ButtonLink href="#contact" className="min-h-10 px-5">
            Free Estimate
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {open && (
        <div className="section-shell mt-3 rounded-3xl bg-[#0B1F35] p-4 text-white shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#contact" className="mt-2 w-full">
              Get Free Estimate
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
