"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { fadeUp, motion, stagger } from "./Motion";

export function TestimonialSection() {
  return (
    <section className="bg-[#F8F9FA] py-24 md:py-32" id="reviews">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
            Customer Reviews
          </p>
          <h2 className="text-4xl font-semibold text-[#0B1F35] sm:text-5xl">
            Customer Reviews
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-full bg-[#0B1F35] text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F35]">{testimonial.name}</h3>
                  <div
                    className="mt-1 flex gap-1 text-[#00A7DD]"
                    aria-label="5 out of 5 star rating"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${index}-${starIndex}`}
                        size={15}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-[#4B5563]">
                &quot;{testimonial.review}&quot;
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
