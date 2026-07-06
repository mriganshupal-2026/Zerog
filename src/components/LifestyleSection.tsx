"use client";

import Image from "next/image";
import { imageSet } from "@/lib/content";
import { Reveal } from "./Motion";

export function LifestyleSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#0B1F35]">
      <Image
        src={imageSet.lifestyle}
        alt="Family relaxing comfortably indoors"
        width={2200}
        height={1467}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,53,0.82)_0%,rgba(11,31,53,0.42)_56%,rgba(11,31,53,0.16)_100%)]" />
      <div className="section-shell relative z-10 flex min-h-[620px] items-center">
        <Reveal className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#BDEFFF]">
            Everyday comfort
          </p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Comfort You Can Feel Every Day
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            Clean air, steady temperatures, and quiet equipment create the kind
            of indoor comfort that fades into the background because it simply
            works.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
