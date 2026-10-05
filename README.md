# Nus Hills Montessori — Website

A multi-page React + Tailwind CSS website for Nus Hills Montessori School, built with Vite.

## Getting started

1. Install [Node.js](https://nodejs.org/) (version 18 or later) if you don't already have it.
2. Open this folder in VS Code.
3. In the terminal, install dependencies:
   ```
   npm install
   ```
4. Start the local dev server:
   ```
   npm run dev
   ```
5. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Building for production

```
npm run build
```

This creates a `dist` folder you can upload to any web host (Netlify, Vercel, cPanel, etc.).

## Project structure

```
src/
  assets/         → your uploaded photos
  components/     → shared layout pieces (TopBar, Nav, Footer, UI elements)
  pages/          → one file per page (Home, About, Academics, Why, Gallery, News, Admission, Contact)
  data.js         → all editable content: phone, email, address, programmes, news, testimonials
  App.jsx         → page routes
  main.jsx        → app entry point
```

## What to edit first

Open `src/data.js` — nearly all the text you'll want to change (phone number, email,
address, hours, programme descriptions, news items, testimonials) lives in this one file.

Placeholders to replace, marked with square brackets:
- School address and phone number
- Event dates
- Team member names
- Fees and required documents
- Parent testimonial names

The contact and admission forms are currently demo-only (they show a confirmation message
but don't send anywhere). Connect them to an email service (e.g. Formspree, EmailJS) or
your own backend when you're ready to go live.
