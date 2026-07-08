"use client";

import { Activity, Wind, Zap } from "lucide-react";
import { imageSet, trustItems } from "@/lib/content";
import { Reveal, motion } from "./Motion";
import { PremiumImage } from "./PremiumImage";

const metrics = [
  { label: "Cleaner airflow", value: "3x", icon: Wind },
  { label: "Energy-minded", value: "SEER2", icon: Zap },
  { label: "Balanced comfort", value: "24h", icon: Activity },
];

export function ProductShowcase() {
  return (
    <section className="bg-[#0B1F35] py-24 text-white md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00C2FF]">
            ZeroG = Zero Gravity
          </p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Why ZeroG?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            The ZeroG floats on a cushion of air.
            There are no wheels.
            It effortlessly follows you across carpet and hard flooring.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4"
              >
                <item.icon size={19} className="text-[#00C2FF]" aria-hidden="true" />
                <span className="text-sm font-medium text-white/82">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-4 premium-shadow">
            <div className="h-[520px] overflow-hidden rounded-[1.5rem]">
              <PremiumImage
                src={imageSet.commercial}
                alt="Premium commercial interior supported by HVAC systems"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-full"
              />
            </div>
            <div className="absolute inset-x-8 bottom-8 grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/18 bg-[#0B1F35]/72 p-4 backdrop-blur-xl"
                >
                  <metric.icon size={18} className="text-[#00C2FF]" aria-hidden="true" />
                  <p className="mt-3 text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium text-white/64">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
