import { describe, expect, it } from "vitest";
import { moveCard } from "../../src/lib/boardUtils";
import { seedColumns } from "../../src/lib/seedData";

describe("moveCard", () => {
  it("moves a card from one column to another", () => {
    const next = moveCard(seedColumns, "c-1", "done");
    expect(next.find((c) => c.id === "backlog")?.cards.some((c) => c.id === "c-1")).toBe(false);
    expect(next.find((c) => c.id === "done")?.cards.some((c) => c.id === "c-1")).toBe(true);
  });

  it("leaves board unchanged when card is missing", () => {
    const next = moveCard(seedColumns, "missing", "done");
    expect(next).toEqual(seedColumns);
  });
});
