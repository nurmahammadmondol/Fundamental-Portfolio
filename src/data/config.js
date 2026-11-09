// ===== এখানে নিজের তথ্য ও লিংক বদলান =====
export const SITE = {
  name: "Nur Mahammad Mondol Robiul",
  short: "ROBi",
  title: "MERN Stack Developer",
  location: "Rangpur, Bangladesh",
  email: "nurmahammadmondolrobiul@gmail.com",
  github: "https://github.com/nurmahammadmondol",  
  linkedin: "https://www.linkedin.com/in/nur-mohammad-mondol-robiul-8672b4334", 
  oldPortfolio: "https://nurmahammadmondol.netlify.app/",
  cv: "/myCV.pdf", // public/cv.pdf ফাইলটি রাখুন
};

// Hero তে প্রতি ১০ সেকেন্ডে একটার পর একটা এই টাইটেলগুলো দেখাবে
export const ROLES = [
  "MERN Stack Developer",
  "Software Developer",
  "Full Stack Developer",
  "Entrepreneur",
  "Computer Operator",
];

export const ABOUT = [
  "I'm Nur Mahammad Mondol Robiul, a MERN Stack Developer from Rangpur, Bangladesh, passionate about building meaningful things on the web.",
  "I grew up in Lalmonirhat, where I completed my SSC at Kashipur B/L High School and my HSC in Commerce at Sheikh Shafiuddin Commerce College. Those years built my analytical thinking and discipline, and gave me a strong base before I moved into technology.",
  "My curiosity for computers led me to the Diploma in Engineering (Computer Science and Technology) at Rangpur Ideal Institute of Technology, where I am developing my knowledge of programming, web development, databases and computer technology. Alongside my studies, I also completed a 6-month web development course at Programming Hero.",
  "My journey as a web developer began with HTML, CSS and JavaScript. Step by step I moved to modern tools like React.js, Tailwind CSS, Bootstrap and DaisyUI, and I am now learning backend technologies such as Node.js, Express.js, MongoDB and Firebase to grow into a well-rounded developer.",
  "I am dedicated, patient and always eager to learn. I enjoy solving problems, writing clean and beginner-friendly code, and improving my skills every day. My goal is to become a skilled software engineer who creates useful, polished products and keeps learning new technologies throughout my career.",
];

export const EDUCATION = [
  {
    years: "2022 – Present",
    title: "Diploma in Engineering",
    place: "Rangpur Ideal Institute of Technology – Rangpur, Bangladesh",
    text: "Currently, I am pursuing a Diploma in Computer Science and Technology at Rangpur Ideal Institute of Technology. My goal is to become a skilled software engineer with expertise in various programming languages and modern technologies. Throughout my academic journey, I am developing my knowledge of programming, web development, databases and computer technology.",
  },
  {
    years: "2020 – 2021",
    title: "Higher Secondary Certificate (HSC)",
    place: "Sheikh Shafiuddin Commerce College – Lalmonirhat, Bangladesh",
    text: "I pursued my Higher Secondary Certificate (HSC) from Sheikh Shafiuddin Commerce College, specializing in Commerce. This period was instrumental in enhancing my analytical skills and understanding of business, accounting and technology-related subjects.",
  },
  {
    years: "2018 – 2019",
    title: "Secondary School Certificate (SSC)",
    place: "Kashipur B/L High School – Kashipur, Lalmonirhat, Bangladesh",
    text: "I studied there from class 6 to class 10, and it was a formative period of my life. The school not only shaped my academic journey but also gave me many unforgettable childhood memories. From friendships that lasted beyond the classroom to lessons that shaped my values, this place holds a special place in my heart.",
  },
];

const dev = (n) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}/${n}-original.svg`;

// img = অনলাইন লোগো, icon = src/components/icons.jsx এর নাম, invert = ডার্ক থিমে উল্টে সাদা হবে
export const SKILLS = [
  { group: "Web Development", items: [
    { name: "HTML5", img: dev("html5") }, { name: "CSS3", img: dev("css3") },
    { name: "JavaScript", img: dev("javascript") }, { name: "React.js", img: dev("react") },
    { name: "Next.js", img: dev("nextjs"), invert: true },
    { name: "Tailwind CSS", img: dev("tailwindcss") }, { name: "Bootstrap", img: dev("bootstrap") },
    { name: "DaisyUI", icon: "DaisyUI" },
  ]},
  { group: "Backend & Database", items: [
    { name: "Node.js", img: dev("nodejs") }, { name: "Express.js", img: dev("express"), invert: true },
    { name: "MongoDB", img: dev("mongodb") }, { name: "Firebase", img: dev("firebase") },
  ]},
  { group: "Tools & Technologies", items: [
    { name: "Git", img: dev("git") }, { name: "GitHub", img: dev("github"), invert: true },
    { name: "VS Code", img: dev("vscode") }, { name: "Netlify", img: dev("netlify") },
    { name: "Vercel", icon: "Vercel" }, { name: "Postman", img: dev("postman") },
  ]},
  { group: "Computer Office Applications", items: [
    { name: "Microsoft Word", icon: "Word" }, { name: "Microsoft Excel", icon: "Excel" },
    { name: "Microsoft PowerPoint", icon: "PowerPoint" }, { name: "Internet Browsing", icon: "Browser" },
    { name: "Computer Fundamentals", icon: "Computer" }, { name: "File Management", icon: "Folder" },
    { name: "Windows Operating System", icon: "Windows" },
  ]},
];
