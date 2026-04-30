import type { Column } from "./types";

export function moveCard(columns: Column[], cardId: string, toColumnId: string): Column[] {
  let movedCard: { id: string; title: string; details: string } | null = null;

  const withoutCard = columns.map((column) => {
    const found = column.cards.find((card) => card.id === cardId);
    if (!found) return column;
    movedCard = found;
    return { ...column, cards: column.cards.filter((card) => card.id !== cardId) };
  });

  if (!movedCard) return columns;

  return withoutCard.map((column) =>
    column.id === toColumnId ? { ...column, cards: [...column.cards, movedCard!] } : column
  );
}
