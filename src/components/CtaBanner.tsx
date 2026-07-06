"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Motion";

export function CtaBanner() {
  return (
    <section className="bg-white py-10" id="contact">
      <div className="section-shell overflow-hidden rounded-[2rem] bg-[#0B1F35] px-6 py-14 text-white premium-shadow md:px-12">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00C2FF]">
              Free Estimates Available
            </p>
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Free Estimates Available
            </h2>
            <p className="mt-4 text-lg text-white/72">
              Schedule your HVAC consultation today.
            </p>
          </div>
          <ButtonLink href="tel:+15550190000" className="lg:min-w-48">
            Book Service
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
