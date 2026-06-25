// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('search for playwright', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await page.getByLabel('Search').click();
//   await page.getByPlaceholder('Search docs').fill('browser');
//   await page.keyboard.press('Enter');

//   await expect(page.locator('body')).toContainText('browser');
// });

// test('user login', async ({ page }) => {
//   await page.goto('https://example.com/login');

//   await page.getByLabel('Username').fill('testuser');
//   await page.getByLabel('Password').fill('password123');

//   await page.getByRole('button', { name: 'Login' }).click();

//   await expect(page.getByText('Welcome')).toBeVisible();
// });

//new line added
