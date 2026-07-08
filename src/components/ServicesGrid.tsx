"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { fadeUp, motion, stagger } from "./Motion";
import { PremiumImage } from "./PremiumImage";

export function ServicesGrid() {
  return (
    <section className="bg-white py-24 md:py-32" id="services">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
              ZEROG PREMIUM DELUXE
            </p>
            <h2 className="text-4xl font-semibold text-[#0B1F35] sm:text-5xl">
              Everything Included with Your ZeroG
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#6B7280]">
            Every ZeroG F3D Premium Deluxe includes a carefully selected collection of premium tools and accessories designed to deliver exceptional 
            performance on carpets, hard floors, stairs, upholstery, and more—right out of the box.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-[#F8F9FA] premium-shadow"
            >
              <div className="relative h-80 overflow-hidden">
                <PremiumImage
                  src={service.image}
                  alt={`${service.title} by Zero G HVAC`}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-full"
                  imageClassName="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/76 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-full bg-white text-[#00A7DD]">
                  <service.icon size={22} aria-hidden="true" />
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#0B1F35]">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-20 text-base leading-7 text-[#6B7280]">
                  {service.description}
                </p>
                <ButtonLink href="#contact" variant="dark" className="mt-6">
                  Learn More
                  <ArrowUpRight size={17} aria-hidden="true" />
                </ButtonLink>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
