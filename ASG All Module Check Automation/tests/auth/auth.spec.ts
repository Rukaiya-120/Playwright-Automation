import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LogInPage';

declare const process: {
  env: Record<string, string | undefined>;
};

test.setTimeout(120000);

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    process.env.LOGIN_USERNAME!,
    process.env.LOGIN_PASSWORD!
  );

  await expect(page.getByText('Feedback', { exact: true })).toBeVisible();
});