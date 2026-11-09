import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ABOUT } from "../data/config";

const STEP = 6;       // প্রতিবার কয়টি অক্ষর
const INTERVAL = 12;  // মিলিসেকেন্ড

// n = এ পর্যন্ত টাইপ হওয়া মোট অক্ষর; start = এই প্যারাগ্রাফের শুরুর অবস্থান
function Para({ text, start, n, className }) {
  const shown = Math.min(Math.max(n - start, 0), text.length);
  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      <span aria-hidden="true" className="invisible">{text.slice(shown)}</span>
    </p>
  );
}

export default function About() {
  const ref = useRef(null);
  // সেকশনে ঢুকলে শুরু থেকে টাইপ, বেরিয়ে গেলে রিসেট — আবার ফিরলে নতুন করে টাইপ হবে
  const inView = useInView(ref, { amount: 0.15 });
  const total = ABOUT.join("").length;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) { setN(0); return; }
    if (n >= total) return;
    const t = setTimeout(() => setN((v) => Math.min(v + STEP, total)), INTERVAL);
    return () => clearTimeout(t);
  }, [inView, n, total]);

  let offset = 0;
  return (
    <section id="about" ref={ref} className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm tracking-widest text-primary">ABOUT ME</p>
          <h2 className="mt-2 font-head text-5xl uppercase">Who I Am</h2>
        </div>
        <div className="space-y-5 leading-relaxed md:col-span-2">
          {ABOUT.map((p, i) => {
            const el = <Para key={i} text={p} start={offset} n={n} className={i === 0 ? "text-xl font-medium" : "opacity-80"} />;
            offset += p.length;
            return el;
          })}
        </div>
      </div>
    </section>
  );
}
