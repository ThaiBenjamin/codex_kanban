import type { Column } from "./types";

export const seedColumns: Column[] = [
  { id: "backlog", title: "Backlog", cards: [{ id: "c-1", title: "Homepage polish", details: "Refine hero spacing and typography." }] },
  { id: "todo", title: "To Do", cards: [{ id: "c-2", title: "Kanban skeleton", details: "Build 5-column board layout." }] },
  { id: "in-progress", title: "In Progress", cards: [{ id: "c-3", title: "Drag and drop", details: "Enable smooth card movement." }] },
  { id: "review", title: "Review", cards: [{ id: "c-4", title: "UX walkthrough", details: "Check accessibility and keyboard flow." }] },
  { id: "done", title: "Done", cards: [{ id: "c-5", title: "Color system", details: "Apply brand palette across board." }] }
];
