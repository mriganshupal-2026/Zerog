"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { heroFeatures, imageSet } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { fadeUp, motion, stagger } from "./Motion";
import { PremiumImage } from "./PremiumImage";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1F35] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-72"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imageSet.hero}
        aria-hidden="true"
      >
        <source src="/hero-hvac.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,53,0.94)_0%,rgba(11,31,53,0.68)_46%,rgba(11,31,53,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F8F9FA] to-transparent" />

      <div className="section-shell relative z-10 grid min-h-screen items-center gap-12 pb-28 pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#BDEFFF] backdrop-blur"
          >
            Premium HVAC and indoor air quality
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl"
          >
            The World&apos;s Most Capable and Unique Vacuum Cleaner!
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl"
          >
            Professional HVAC installation, repair, maintenance, and indoor air
            quality solutions for homes and businesses.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact">
              Get Free Estimate
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="tel:+15550190000" variant="outline">
              <PhoneCall size={18} aria-hidden="true" />
              Call Now
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-h-[560px] lg:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-12 h-[460px] w-[78%] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 premium-shadow backdrop-blur"
          >
            <PremiumImage
              src={imageSet.purifier}
              alt=""
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full"
            />
          </motion.div>
          <div className="absolute bottom-20 left-0 max-w-sm rounded-3xl border border-white/20 bg-white/12 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-[#BDEFFF]">Air balance</p>
            <p className="mt-2 text-3xl font-semibold">98%</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Optimized airflow, filtration, humidity, and temperature.
            </p>
          </div>
        </motion.div>
      </div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="section-shell relative z-20 -mt-24 grid gap-3 pb-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {heroFeatures.map((feature) => (
          <motion.div
            key={feature.label}
            variants={fadeUp}
            className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/86 p-4 text-[#0B1F35] shadow-xl shadow-[#0B1F35]/10 backdrop-blur"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#EAF8FF] text-[#00A7DD]">
              <feature.icon size={19} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold">{feature.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
