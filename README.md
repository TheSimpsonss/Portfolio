# DevOps + AI Portfolio

A dark-themed, responsive portfolio built with React, Tailwind CSS, Framer Motion, and Lucide icons. The site is SEO-friendly, accessible, and easy to update through a single data file.

## Features
- Dark, professional UI with subtle gradients and hover effects
- Smooth scroll animations (Framer Motion)
- Fully responsive layout (desktop, tablet, mobile)
- Resume preview modal + download button
- Easy content updates via `src/data/profile.js`
- Ready for Vercel or Netlify deployment

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Update Content
Edit `src/data/profile.js` to update:
- Name, title, and tagline
- Tech stack lists
- Project cards
- Experience timeline
- Social links

Replace `public/resume.pdf` with your latest resume.

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment
- **Vercel**: import the repository and deploy the default build command (`npm run build`).
- **Netlify**: build command `npm run build`, publish directory `dist/`.

## Accessibility Notes
- Semantic headings with clear hierarchy
- Descriptive labels on form inputs
- Keyboard-friendly resume modal
