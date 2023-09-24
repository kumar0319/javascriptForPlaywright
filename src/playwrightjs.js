import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Feature Videos', exact: true }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Community' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Community' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Community' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: '.NET' }).click();
});