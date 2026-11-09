# Nur Mahammad Mondol Robiul – Portfolio

React + Vite + Tailwind CSS + DaisyUI + Lucide React

## চালানোর নিয়ম
```bash
npm install
npm run dev      # লোকালে দেখুন
npm run build    # প্রোডাকশন বিল্ড (dist ফোল্ডার)
```

## নিজের তথ্য বদলানো
- `src/data/config.js` : GitHub, LinkedIn, ইমেইল, বায়ো, Education, Skills
- ছবি: `public/profile.webp` | CV: `public/cv.pdf` (এই নামে আপনার CV PDF রাখুন)

## Contact ফর্ম (EmailJS)
1. https://www.emailjs.com এ ফ্রি অ্যাকাউন্ট খুলুন, একটি Service ও Template বানান
   (Template এ `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` ব্যবহার করুন)
2. `.env.example` কপি করে `.env` বানান এবং তিনটি মান বসান
3. Netlify/Vercel এ ডিপ্লয় করলে একই তিনটি Environment Variable যোগ করুন

কনফিগার না করলে "Send Message" চাপলে ইমেইল অ্যাপ খুলবে।
