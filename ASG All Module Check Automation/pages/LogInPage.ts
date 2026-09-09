import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('/');
    }

    async clickGetStarted() {
        const getStarted = this.page.getByRole('link', { name: 'GET STARTED' });

        if (await getStarted.isVisible()) {
            await getStarted.click();
        }
    }

    async enterUsername(username: string) {
        const usernameInput = this.page.getByRole('textbox', { name: 'Username' });

        await expect(usernameInput).toBeVisible({ timeout: 30000 });
        await usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        const passwordInput = this.page.getByRole('textbox', { name: 'Password' });

        await expect(passwordInput).toBeVisible({ timeout: 30000 });
        await passwordInput.fill(password);
    }

    async clickLogin() {
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

    async login(username: string, password: string) {
        await this.goto();

        await this.clickGetStarted();

        await this.enterUsername(username);
        await this.enterPassword(password);

        await this.clickLogin();

        await this.page.waitForLoadState('networkidle');
    }
}