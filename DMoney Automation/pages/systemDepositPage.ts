import { Page } from '@playwright/test';

export class SystemDepositPage {
	constructor(private readonly page: Page) {}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net/admin/deposit');
	}

	async depositToSystem(amount: string): Promise<void> {
		await this.page.getByRole('textbox', { name: 'SYSTEM Account Phone Number' }).fill('SYSTEM');
		await this.page.getByRole('spinbutton', { name: 'Amount (BDT)' }).fill(amount);
		await this.page.getByRole('button', { name: 'DEPOSIT TO SYSTEM' }).click();
        await this.page.waitForTimeout(2000);

	}
}