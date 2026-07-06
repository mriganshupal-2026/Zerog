"use client";

import { projectGallery } from "@/lib/content";
import { fadeUp, motion, stagger } from "./Motion";
import { PremiumImage } from "./PremiumImage";

export function GallerySection() {
  return (
    <section className="bg-white py-24 md:py-32" id="projects">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00A7DD]">
            Recent Projects
          </p>
          <h2 className="text-4xl font-semibold text-[#0B1F35] sm:text-5xl">
            Recent Projects
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid auto-rows-[260px] gap-5 md:grid-cols-3 lg:grid-cols-5"
        >
          {projectGallery.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-[1.5rem] ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 1 ? "lg:col-span-2" : ""}`}
            >
              <PremiumImage
                src={project.image}
                alt={project.title}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                className="h-full"
                imageClassName="transition duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/78 via-[#0B1F35]/12 to-transparent" />
              <h3 className="absolute bottom-5 left-5 right-5 text-xl font-semibold text-white">
                {project.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
