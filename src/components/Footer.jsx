import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { SITE } from "../data/config";

const LINKS = [
  { label: "GitHub", href: SITE.github, Icon: Github },
  { label: "LinkedIn", href: SITE.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: Mail },
  { label: "Previous Portfolio", href: SITE.oldPortfolio, Icon: ExternalLink },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-100 px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-head text-2xl uppercase">{SITE.name}</h3>
          <p className="mt-3 text-sm opacity-65">
            {SITE.title} building full-stack web applications with MongoDB, Express.js, React.js and Node.js.
          </p>
        </div>
        <div className="space-y-2 text-sm opacity-80">
          {LINKS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
        <div className="text-sm opacity-60 md:text-right">
          © {new Date().getFullYear()} {SITE.name}.<br />All rights reserved.
        </div>
      </div>
    </footer>
  );
}
