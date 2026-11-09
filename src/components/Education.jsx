import { motion } from "framer-motion";
import { EDUCATION } from "../data/config";

export default function Education() {
  return (
    <section id="education" className="overflow-hidden bg-[#f1eeea] px-5 py-20 text-black">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm tracking-widest text-primary">JOURNEY</p>
        <h2 className="mb-10 mt-2 font-head text-5xl uppercase">
          Educational <span className="text-primary">Qualification</span>
        </h2>
        <div className="relative space-y-6 border-l-2 border-primary/40 pl-6">
          {EDUCATION.map((e, i) => (
            // ১ম ও ৩য় কার্ড ডান দিক থেকে, ২য় কার্ড বাম দিক থেকে আসবে
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? 150 : -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="card relative rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 border-[#f1eeea] bg-primary" />
              <span className="text-sm font-semibold text-primary">{e.years}</span>
              <h3 className="mt-1 font-head text-2xl uppercase">{e.title}</h3>
              <p className="mb-3 text-sm italic text-black/60">{e.place}</p>
              <p className="text-sm leading-relaxed text-black/75">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
