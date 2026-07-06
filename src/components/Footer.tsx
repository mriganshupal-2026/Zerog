import { Mail, MapPin, PhoneCall } from "lucide-react";
import { socialLinks } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

const companyLinks = ["About", "Services", "Financing", "Contact"];
const serviceLinks = ["Installation", "Repair", "Maintenance", "Indoor Air Quality"];

export function Footer() {
  return (
    <footer className="bg-[#0B1F35] text-white">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Zero G HVAC home">
              <span className="grid size-12 place-items-center rounded-full bg-[#00C2FF] text-base font-black text-[#0B1F35]">
                ZG
              </span>
              <span className="text-xl font-semibold tracking-wide">Zero G HVAC</span>
            </a>
            <p className="mt-6 max-w-sm text-base leading-7 text-white/66">
              Premium HVAC installation, repair, maintenance, indoor air quality,
              air purification, and commercial HVAC service.
            </p>
            <ButtonLink href="#contact" className="mt-8">
              Request a Free Estimate
            </ButtonLink>
          </div>

          <FooterColumn title="Company" items={companyLinks} />
          <FooterColumn title="Services" items={serviceLinks} />

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
              Contact
            </h2>
            <div className="mt-5 grid gap-4 text-sm text-white/72">
              <a href="tel:+15550190000" className="flex gap-3 transition hover:text-white">
                <PhoneCall size={18} className="text-[#00C2FF]" aria-hidden="true" />
                (555) 019-0000
              </a>
              <a
                href="mailto:hello@zerogvac.com"
                className="flex gap-3 transition hover:text-white"
              >
                <Mail size={18} className="text-[#00C2FF]" aria-hidden="true" />
                hello@zerogvac.com
              </a>
              <p className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#00C2FF]" aria-hidden="true" />
                Serving residential and commercial clients across the region
              </p>
            </div>
            <div className="mt-7 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="grid size-11 place-items-center rounded-full border border-white/14 text-white/72 transition hover:border-[#00C2FF] hover:text-[#00C2FF]"
                >
                  <link.icon size={19} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/48 md:flex-row">
          <p>© {new Date().getFullYear()} Zero G HVAC. All rights reserved.</p>
          <p>Licensed & insured HVAC professionals.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#services" className="text-sm text-white/68 transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
