"use client";

import { useState } from "react";
import { seedColumns } from "@/lib/seedData";
import { moveCard } from "@/lib/boardUtils";
import type { Card, Column } from "@/lib/types";
import styles from "./kanban.module.css";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(seedColumns);

  const addCard = (columnId: string) => {
    const title = window.prompt("Card title");
    if (!title?.trim()) return;
    const details = window.prompt("Card details") ?? "";
    const newCard: Card = { id: crypto.randomUUID(), title: title.trim(), details: details.trim() };
    setColumns((current) => current.map((col) => (col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col)));
  };

  const deleteCard = (columnId: string, cardId: string) => {
    setColumns((current) => current.map((col) => (col.id === columnId ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) } : col)));
  };

  const renameColumn = (columnId: string) => {
    const next = window.prompt("Rename column", columns.find((c) => c.id === columnId)?.title ?? "");
    if (!next?.trim()) return;
    setColumns((current) => current.map((col) => (col.id === columnId ? { ...col, title: next.trim() } : col)));
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Studio Kanban Board</h1>
        <p>Simple, elegant project flow for one team.</p>
      </header>
      <section className={styles.board}>
        {columns.map((column) => (
          <article
            key={column.id}
            className={styles.column}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              const cardId = event.dataTransfer.getData("text/card-id");
              if (!cardId) return;
              setColumns((current) => moveCard(current, cardId, column.id));
            }}
          >
            <button className={styles.rename} onClick={() => renameColumn(column.id)}>{column.title}</button>
            <div className={styles.cards}>
              {column.cards.map((card) => (
                <div
                  key={card.id}
                  className={styles.card}
                  draggable
                  onDragStart={(event) => event.dataTransfer.setData("text/card-id", card.id)}
                >
                  <h3>{card.title}</h3>
                  <p>{card.details}</p>
                  <button className={styles.delete} onClick={() => deleteCard(column.id, card.id)}>Delete</button>
                </div>
              ))}
            </div>
            <button className={styles.add} onClick={() => addCard(column.id)}>+ Add card</button>
          </article>
        ))}
      </section>
    </main>
  );
}
