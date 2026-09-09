import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/LogInPage';
declare const process: {
  env: Record<string, string | undefined>;
};
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login(
        process.env.LOGIN_USERNAME!,
        process.env.LOGIN_PASSWORD!
    );

    await page.context().storageState({
        path: authFile
    });
});