// this playwright file is created by the code generator tool

import { test, expect } from '@playwright/test';

test('Auto generated script by the playwright', {tag:'@sanity'}, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000)
  const after_login_URL = await page.url()
  console.log(after_login_URL)
  expect(after_login_URL.includes('/dashboard/index')).toBeTruthy()
  // await page.getByRole('banner').getByText('James Raj').click();
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});