"use client";

import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { seedColumns } from "@/lib/seedData";
import type { Card, Column } from "@/lib/types";
import styles from "./kanban.module.css";

function cardLocation(columns: Column[], cardId: string) {
  for (const column of columns) {
    const cardIndex = column.cards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      return { columnId: column.id, cardIndex };
    }
  }
  return null;
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(seedColumns);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

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
    const next = window.prompt("Rename column");
    if (!next?.trim()) return;
    setColumns((current) => current.map((col) => (col.id === columnId ? { ...col, title: next.trim() } : col)));
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    const from = cardLocation(columns, String(active.id));
    const toColumnId = String(over.data.current?.columnId ?? over.id);
    if (!from) return;
    if (from.columnId === toColumnId) return;

    setColumns((current) => {
      const source = current.find((col) => col.id === from.columnId);
      const target = current.find((col) => col.id === toColumnId);
      if (!source || !target) return current;
      const moved = source.cards[from.cardIndex];
      return current.map((col) => {
        if (col.id === source.id) return { ...col, cards: col.cards.filter((card) => card.id !== moved.id) };
        if (col.id === target.id) return { ...col, cards: [...col.cards, moved] };
        return col;
      });
    });
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Studio Kanban Board</h1>
        <p>Simple, elegant project flow for one team.</p>
      </header>
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <section className={styles.board}>
          {columns.map((column) => (
            <article key={column.id} className={styles.column}>
              <button className={styles.rename} onClick={() => renameColumn(column.id)}>{column.title}</button>
              <div className={styles.cards}>
                {column.cards.map((card) => (
                  <div key={card.id} className={styles.card}>
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
      </DndContext>
    </main>
  );
}
