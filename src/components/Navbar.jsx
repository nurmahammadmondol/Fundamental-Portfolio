import { useEffect, useState } from "react";
import { User, GraduationCap, Code2, Mail, Sun, Moon, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About", Icon: User },
  { href: "#education", label: "Education", Icon: GraduationCap },
  { href: "#skills", label: "Skills", Icon: Code2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34">
      <rect width="34" height="34" rx="8" fill="#ff5a00" />
      <path d="M7 25V9l7 10V9M19 25V9l5 8 5-8v16" fill="none" stroke="#000" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // স্ক্রিনের মাঝখানে যে সেকশন, মেনুতে সেটা হাইলাইট হবে
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...LINKS.map((l) => l.href.slice(1))].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-base-content/10 bg-base-100/85 backdrop-blur">
      <div className="mx-auto flex h-14  items-center px-5 md:px-10">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="font-head text-xl tracking-wide">ROB<span className="text-primary">i</span></span>
        </a>

        <div className="ml-auto mr-3 hidden gap-1 text-sm md:flex">
          {LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href.slice(1))}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
                active === href.slice(1) ? "font-semibold text-primary" : "opacity-80 hover:text-primary"
              }`}
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="btn btn-circle btn-ghost btn-sm border border-base-content/25 hover:border-primary">
            {theme === "robidark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="btn btn-ghost btn-sm md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-3 px-5 pb-4 md:hidden">
          {LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => { setOpen(false); setActive(href.slice(1)); }}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 ${active === href.slice(1) ? "font-semibold text-primary" : ""}`}
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
