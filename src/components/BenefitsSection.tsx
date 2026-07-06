"use client";

import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Motion";

export function BenefitsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
            Better indoor living
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#0B1F35] sm:text-5xl">
            Designed for Homes and Businesses That Expect More
          </h2>
          <ButtonLink href="#contact" variant="dark" className="mt-8">
            Request a Free Estimate
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-4 rounded-3xl border border-[#E5E7EB] bg-[#F8F9FA] p-6"
              >
                <CheckCircle2
                  size={24}
                  className="mt-1 shrink-0 text-[#00A7DD]"
                  aria-hidden="true"
                />
                <p className="text-base leading-7 text-[#4B5563]">{benefit}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
