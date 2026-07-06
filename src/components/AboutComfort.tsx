"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Motion";

export function AboutComfort() {
  return (
    <section className="bg-[#F8F9FA] py-24 md:py-32" id="about">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
            About indoor comfort
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0B1F35] sm:text-5xl lg:text-6xl">
            Creating Healthier Indoor Environments
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="max-w-3xl lg:pt-12">
          <p className="text-lg leading-8 text-[#4B5563]">
            Great comfort is more than warm and cool air. It is HVAC performance
            tuned to your space, balanced humidity, clean filtration, efficient
            equipment, and steady airflow that makes every room feel intentional.
            Zero G HVAC brings those systems together for healthier, quieter,
            more energy-conscious indoor environments.
          </p>
          <ButtonLink href="#services" variant="dark" className="mt-8">
            Learn More
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
