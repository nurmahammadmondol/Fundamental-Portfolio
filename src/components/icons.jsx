const sq = (color, letter) => (
  <svg viewBox="0 0 36 36" className="h-full w-full">
    <rect width="36" height="36" rx="7" fill={color} />
    <text x="18" y="25" fontSize="20" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Arial">{letter}</text>
  </svg>
);
const stroke = { fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

export const ICONS = {
  Word: sq("#2b579a", "W"),
  Excel: sq("#217346", "X"),
  PowerPoint: sq("#d24726", "P"),
  DaisyUI: (
    <svg viewBox="0 0 36 36" className="h-full w-full">
      <circle cx="18" cy="18" r="17" fill="#1ad1a5" /><circle cx="18" cy="18" r="9" fill="#ff9903" /><circle cx="18" cy="18" r="4" fill="#fff" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 36 36" className="h-full w-full"><path d="M18 6 32 30H4z" fill="currentColor" /></svg>
  ),
  Browser: (
    <svg viewBox="0 0 36 36" className="h-full w-full" stroke="#4da3ff" {...stroke}>
      <circle cx="18" cy="18" r="14" /><ellipse cx="18" cy="18" rx="6" ry="14" /><path d="M4 18h28M7 10h22M7 26h22" />
    </svg>
  ),
  Computer: (
    <svg viewBox="0 0 36 36" className="h-full w-full" stroke="#ff5a00" {...stroke}>
      <rect x="3" y="6" width="30" height="19" rx="2" /><path d="M12 31h12M18 25v6" />
    </svg>
  ),
  Folder: (
    <svg viewBox="0 0 36 36" className="h-full w-full"><path d="M3 9h11l3 4h16v16H3z" fill="#f5b301" /></svg>
  ),
  Windows: (
    <svg viewBox="0 0 36 36" className="h-full w-full" fill="#00a4ef"><path d="M4 7l13-2v12H4zM19 4.7 33 3v14H19zM4 19h13v12L4 29zM19 19h14v14l-14-2z" /></svg>
  ),
};
