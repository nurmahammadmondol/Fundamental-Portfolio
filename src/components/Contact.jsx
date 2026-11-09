import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SITE } from "../data/config";

const SOCIALS = [
  { label: "GitHub", href: SITE.github, Icon: Github },
  { label: "LinkedIn", href: SITE.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: Mail },
];

const { VITE_EMAILJS_SERVICE_ID: SERVICE, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE, VITE_EMAILJS_PUBLIC_KEY: KEY } = import.meta.env;
const field = "w-full rounded-none border-black/20 bg-white text-black placeholder:text-black/50 focus:border-primary";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // EmailJS কনফিগার না থাকলে ইমেইল অ্যাপ খুলবে
    if (!SERVICE || !TEMPLATE || !KEY) {
      const f = new FormData(form.current);
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`)}`;
      return;
    }
    try {
      setStatus("Sending...");
      await emailjs.sendForm(SERVICE, TEMPLATE, form.current, { publicKey: KEY });
      setStatus("Message sent. Thank you!");
      form.current.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#ffd9c2] px-5 py-20 text-black">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-widest text-primary">GET IN TOUCH</p>
          <h2 className="mt-2 font-head text-5xl uppercase">Let's Work <span className="text-primary">Together</span></h2>
          <p className="mt-5 max-w-md text-black/70">
            Have a project, a job opportunity or just want to say hello? Send me a message and I'll reply as soon as possible.
          </p>
          <div className="mt-6 space-y-3 text-black/80">
            <p className="flex items-center gap-2"><Mail size={18} /> <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></p>
            <p className="flex items-center gap-2"><MapPin size={18} /> {SITE.location}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-none border-black/30 text-black hover:border-primary hover:bg-primary hover:text-black">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={onSubmit} className="space-y-4">
          <input name="name" required placeholder="Full Name" className={`input input-bordered ${field}`} />
          <input name="email" type="email" required placeholder="Email Address" className={`input input-bordered ${field}`} />
          <input name="subject" required placeholder="Subject" className={`input input-bordered ${field}`} />
          <textarea name="message" required rows={5} placeholder="Message" className={`textarea textarea-bordered ${field}`} />
          <button className="btn rounded-none border-black bg-black text-white hover:bg-primary hover:text-black">
            Send Message
            {/* আইকনটি ধীরে ধীরে লাফাতে থাকবে */}
            <motion.span
              className="inline-flex"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Send size={16} />
            </motion.span>
          </button>
          <p className="text-sm text-black/70">{status}</p>
        </form>
      </div>
    </section>
  );
}
