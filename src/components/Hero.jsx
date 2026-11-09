import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { SITE, ROLES } from "../data/config";

const TYPE_LINES = ["Hello, I'm", "Nur Mahammad", "Mondol Robiul"]; // পেজ খুললে একবারই টাইপ হবে
const RESTART_AFTER = 5000;  // টাইপ শেষ হওয়ার ৫ সেকেন্ড পর মুছে আবার শুরু
const TYPE_SPEED = 80;       // প্রতি অক্ষরে মিলিসেকেন্ড
const ROLE_EVERY = 10000;    // প্রতি ১০ সেকেন্ডে টাইটেল বদলাবে

// টাইপ হতে থাকা অক্ষরের সংখ্যা দেয়; শেষ হলে ৫ সেকেন্ড অপেক্ষা করে আবার ০ থেকে শুরু
function useTypewriter(total) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const wait = n >= total ? RESTART_AFTER : n === 0 ? 400 : TYPE_SPEED;
    const t = setTimeout(() => setN(n >= total ? 0 : n + 1), wait);
    return () => clearTimeout(t);
  }, [n, total]);
  return n;
}

function Cursor() {
  return (
    <span className="relative inline-block w-0 align-baseline">
      <motion.span
        className="absolute left-0 top-[0.08em] h-[0.9em] w-[3px] bg-black"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </span>
  );
}

// একটি লাইনের টাইপ করা অংশ + (লুকানো) বাকি অংশ, যাতে লেআউট নড়ে না
function Line({ text, start, n, last }) {
  const shown = Math.min(Math.max(n - start, 0), text.length);
  const active = n >= start && (n < start + text.length || (last && n >= start + text.length)); // টাইপ শেষ হলে কার্সর চলে যায়
  return (
    <span className="block">
      {text.slice(0, shown)}
      {active && <Cursor />}
      <span className="invisible">{text.slice(shown)}</span>
      {text.length === 0 && "\u00A0"}
    </span>
  );
}

export default function Hero() {
  const total = TYPE_LINES.join("").length;
  const n = useTypewriter(total);
  const [role, setRole] = useState(0);

  let offset = 0;
  const lines = TYPE_LINES.map((text, i) => {
    const el = <Line key={text} text={text} start={offset} n={n} last={i === TYPE_LINES.length - 1} />;
    offset += text.length;
    return el;
  });

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % ROLES.length), ROLE_EVERY);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="overflow-hidden bg-primary pt-10 lg:pt-20 text-black">
      <div className="mx-auto grid min-h-[60vh] max-w-6xl items-end gap-6 px-5 md:grid-cols-2">
        <div className="self-center py-8">
          <p className="mb-3 font-semibold">{lines[0]}</p>
          <h1 className="font-head text-4xl uppercase leading-[.95] sm:text-5xl lg:text-6xl">
            {lines.slice(1)}
          </h1>

          <div className="mt-5 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[role]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-block bg-black px-3 py-1 text-sm font-semibold text-white"
              >
                {ROLES[role]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-4 max-w-md text-black/80">
            I build complete, responsive and user-friendly web applications with MongoDB, Express.js, React.js and Node.js.
            Based in Rangpur, Bangladesh, I turn ideas into fast, modern web experiences.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn rounded-none border-black bg-black text-white hover:bg-white hover:text-black">
              Contact Me <ArrowRight size={16} />
            </a>
            <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-none border-2 border-black text-black hover:bg-black hover:text-white">
              <FileText size={16} /> View Resume
            </a>
          </div>
        </div>
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/profile.webp" alt={SITE.name} className="max-h-[62vh] w-auto max-w-full object-contain object-bottom md:max-h-[66vh]" />
        </motion.div>
      </div>
    </section>
  );
}
