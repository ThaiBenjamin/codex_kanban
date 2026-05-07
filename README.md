# 📋 Codex Kanban

A clean, minimal Kanban board web app built with Next.js — featuring drag-and-drop card management, a polished UI, and a full test suite.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vitest](https://img.shields.io/badge/Tested-Vitest%20%2B%20Playwright-6E9F18?logo=vitest&logoColor=white)

---

## ✨ Features

- **Drag-and-Drop Interface** — Move cards between columns with native HTML5 drag-and-drop
- **5 Customizable Columns** — Rename any column to match your workflow
- **Card Management** — Add cards with a title and details; delete cards instantly
- **Pre-loaded Seed Data** — Opens with a populated board so you can try it immediately
- **Gorgeous UI** — Custom color scheme (Navy, Yellow, Blue, Purple) with a clean card-based layout
- **Tested** — Unit tests with Vitest and end-to-end tests with Playwright

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | App framework (client-rendered) |
| React 19 | UI components |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| CSS Modules | Component-scoped styles |
| Vitest | Unit testing |
| Playwright | End-to-end testing |

---

## 🚀 Setup & Running

### Prerequisites
- Node.js 18+

```bash
git clone https://github.com/ThaiBenjamin/codex_kanban.git
cd codex_kanban/frontend
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### Running Tests

```bash
# Unit tests
npm test

# End-to-end tests (requires running dev server)
npm run test:e2e
```

---

## 🧠 What I Built and Why

I started with an open-source Kanban boilerplate as a foundation and extended it into a fully tested, production-quality MVP. The original project had basic Kanban structure; I built on top of it by implementing proper drag-and-drop behavior (fixing the native DnD flow root cause that caused cards to snap incorrectly), adding column renaming, wiring up full unit and e2e test coverage, and polishing the UI with a consistent design system.

The focus was on delivering a slick user experience with minimal complexity — no backend, no persistence, just a client-side board that works beautifully. It taught me how to structure a Next.js app cleanly, how to write meaningful tests for UI interactions, and how to debug tricky browser drag events.
