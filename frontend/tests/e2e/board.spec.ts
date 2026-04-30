import { expect, test } from "@playwright/test";

test("renders board header and columns", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Studio Kanban Board" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Backlog" })).toBeVisible();
});
