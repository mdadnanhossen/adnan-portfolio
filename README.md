# Md Adnan Hossen — Developer Portfolio

A modern, responsive personal developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **React Icons**.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Icons**: React Icons
- **Runtime**: Node.js 22

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Design tokens + global styles
└── components/
    ├── Navbar.tsx         # Sticky responsive navbar + mobile menu
    ├── Hero.tsx           # Hero with typewriter effect
    ├── About.tsx          # About me section
    ├── Skills.tsx         # Skills by category
    ├── Projects.tsx       # Featured project cards
    ├── Education.tsx      # University education
    ├── WhatIDo.tsx        # Focus area cards
    ├── Contact.tsx        # Contact info + social links
    ├── Footer.tsx         # Footer with copyright
    └── ScrollToTop.tsx    # Floating scroll-to-top button
```

## ▶️ Running Locally

```bash
# 1. Navigate into the project folder
cd e:\protfolio\portfolio

# 2. Install dependencies (already done)
npm install

# 3. Start the development server
npm run dev
# → Open http://localhost:3000 in your browser

# 4. Build for production
npm run build

# 5. Start the production server
npm start
```

## ✏️ Customization

| What to change | Where |
|---|---|
| Personal info, bio, social links | `Hero.tsx`, `About.tsx`, `Contact.tsx` |
| Projects | `Projects.tsx` — add to the `PROJECTS` array |
| Skills | `Skills.tsx` — add/remove skills from groups |
| Colors & fonts | `globals.css` CSS variables in `:root` |
| SEO metadata | `app/layout.tsx` |

## 📝 Things to Add

- [ ] **Profile photo** — add your photo to `public/` and use `<Image>` in the Hero section
- [ ] **Email address** — add your email to the Contact section links array
- [ ] **More projects** — add additional projects to `Projects.tsx` as you build them
- [ ] **Project GitHub repos** — add `sourceUrl` to projects once repos are public
- [ ] **Resume/CV download** — add a PDF to `public/` and link it from the Hero/About section
