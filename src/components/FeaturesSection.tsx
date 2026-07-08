"use client";

import { features, imageSet } from "@/lib/content";
import { fadeUp, motion, stagger } from "./Motion";
import { PremiumImage } from "./PremiumImage";

export function FeaturesSection() {
  return (
    <section className="overflow-hidden bg-[#F8F9FA] py-24 md:py-32" id="features">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
            Vacuum Wars Tested
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0B1F35] sm:text-5xl lg:text-6xl">
            The ZeroG Achieves a Best-Ever Score
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#BDEFFF] hover:shadow-xl hover:shadow-[#0B1F35]/8"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-full bg-[#EAF8FF] text-[#00A7DD]">
                  <feature.icon size={21} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-[#0B1F35]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[520px]"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-6 mx-auto h-[460px] max-w-xl overflow-hidden rounded-[2rem] bg-white premium-shadow"
          >
            <PremiumImage
              src={imageSet.equipment}
              alt="Modern HVAC equipment installation"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full"
            />
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/70 bg-white/88 p-6 shadow-2xl backdrop-blur md:left-10 md:right-auto md:w-80">
            <p className="text-sm font-semibold text-[#00A7DD]">
              Precision system care
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#0B1F35]">24/7</p>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Installation, repair, maintenance, air purification, and
              commercial HVAC support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
