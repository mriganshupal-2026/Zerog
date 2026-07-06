"use client";

import { Camera } from "lucide-react";
import { socialImages } from "@/lib/content";
import { fadeUp, motion, stagger } from "./Motion";
import { PremiumImage } from "./PremiumImage";

export function SocialProof() {
  return (
    <section className="bg-[#F8F9FA] py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
              Social proof
            </p>
            <h2 className="text-4xl font-semibold text-[#0B1F35] sm:text-5xl">
              Follow Our Work
            </h2>
          </div>
          <a
            href="https://www.instagram.com/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F35] transition hover:text-[#00A7DD]"
          >
            <Camera size={18} aria-hidden="true" />
            Instagram
          </a>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {socialImages.map((image, index) => (
            <motion.a
              key={image}
              href="https://www.instagram.com/"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-white"
              aria-label={`View Zero G HVAC project ${index + 1} on Instagram`}
            >
              <PremiumImage
                src={image}
                alt=""
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="h-full"
                imageClassName="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 grid place-items-center bg-[#0B1F35]/0 text-white opacity-0 transition group-hover:bg-[#0B1F35]/42 group-hover:opacity-100">
                <Camera size={28} aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
