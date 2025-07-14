import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config(); // .env を読み込み
 
const URL = process.env.BASE_URL ?? "http://localhost:3000";
 
test("動作確認成功！！", async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle(/Hello from Fargate!/);
  await expect(page.getByText('動作確認成功！！')).toBeVisible();
});

// const URL = "https://playwright.dev/";
// const URL = "http://172.31.36.26";

// test("has title", async ({ page }) => {
//   await page.goto(URL);

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/動作確認成功！！/);
//   // await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });


