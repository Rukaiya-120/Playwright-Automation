import { Page } from '@playwright/test';

export class LoginPage {
	constructor(private readonly page: Page) {}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net/login');
	}

async openFromHome(): Promise<void> {
    await this.page.goto('/', {
        waitUntil: 'domcontentloaded',
    });

    console.log('Current URL:', this.page.url());
    console.log('Page title:', await this.page.title());

    await this.page.getByRole('link', {
        name: 'Login to Dashboard',
    }).click();
}
	async login(emailOrPhone: string, password: string): Promise<void> {
		await this.page.getByRole('textbox', { name: 'Email or Phone Number' }).fill(emailOrPhone);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
		await this.page.getByRole('button', { name: 'Login →' }).click();
	}
}