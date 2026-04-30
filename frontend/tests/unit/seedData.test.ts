import { describe, expect, it } from "vitest";
import { seedColumns } from "../../src/lib/seedData";

describe("seedColumns", () => {
  it("contains five fixed columns", () => {
    expect(seedColumns).toHaveLength(5);
  });

  it("starts with one card in each column", () => {
    expect(seedColumns.every((col) => col.cards.length >= 1)).toBe(true);
  });
});
