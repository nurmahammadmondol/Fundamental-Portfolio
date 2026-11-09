import { motion } from "framer-motion";
import { SKILLS } from "../data/config";
import { ICONS } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-primary">WHAT I USE</p>
        <h2 className="mb-10 mt-2 font-head text-5xl uppercase">My Skills</h2>
        <div className="space-y-12">
          {SKILLS.map((g) => (
            <div key={g.group}>
              <h3 className="mb-4 border-l-4 border-primary pl-3 font-head text-2xl uppercase">{g.group}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {g.items.map((s, i) => (
                  // নিচ থেকে জুম ইন হয়ে উঠে আসবে
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 70, scale: 0.4 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 rounded-xl border border-base-content/10 bg-base-200 p-4 transition-colors hover:border-primary"
                  >
                    <span className="h-9 w-9 shrink-0">
                      {s.img ? (
                        <img src={s.img} alt={s.name} className={`h-9 w-9 ${s.invert ? "[[data-theme=robidark]_&]:invert" : ""}`} />
                      ) : (
                        ICONS[s.icon]
                      )}
                    </span>
                    <span className="text-sm font-medium">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
