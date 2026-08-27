# Codex Kanban

A minimal client-side Kanban board built with Next.js — drag-and-drop cards, renameable
columns, and a full test suite. No backend, no persistence, just a board that works.

## What it does

Five columns you can rename to match your workflow, cards you can add with a title and
details or delete outright, and drag-and-drop between columns using native HTML5 events. It
opens with a populated board so there's something to try immediately.

## Running it

```bash
git clone https://github.com/ThaiBenjamin/codex_kanban.git
cd codex_kanban/frontend
npm install
npm run dev
```

Open http://localhost:3000. Needs Node 18+.

```bash
npm test           # unit tests
npm run test:e2e   # end to end, needs the dev server running
```

## Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | App framework, client-rendered |
| React 19 | UI components |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| CSS Modules | Component-scoped styles |
| Vitest | Unit testing |
| Playwright | End-to-end testing |

## What I actually did here

I started from an open-source Kanban boilerplate and took it to something finished. The
original had the basic structure; the work was in fixing the drag-and-drop, adding column
renaming, writing the test coverage, and settling on a consistent design.

The drag-and-drop was the real problem. Cards were snapping to the wrong positions, and the
fix wasn't a tweak to the drop handler — it was in how the native HTML5 drag events were
being sequenced in the first place. Native DnD is a genuinely awkward API: `dragover` has to
have its default prevented or `drop` never fires at all, and the event target during a drag
isn't always the element you think it is. Tracking down why a card landed one column over
than intended taught me more about browser event flow than anything else in this project.

Writing Playwright tests for drag interactions was the other useful piece. Asserting that a
card ended up in the right column after a simulated drag is a much better test than
asserting a function returned the right array, and it's the kind of test that would have
caught the original bug.
