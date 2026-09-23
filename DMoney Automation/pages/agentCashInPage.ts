import { Page } from '@playwright/test';

export class AgentCashInPage {
	constructor(private readonly page: Page) {}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net/agent/cash-in');
	}

	async cashIn(phone: string, amount: string): Promise<void> {
		await this.page.getByRole('textbox', { name: 'Customer Phone Number' }).fill(phone);
		await this.page.getByRole('spinbutton', { name: 'Amount (BDT)' }).fill(amount);
		await this.page.getByRole('button', { name: 'Cash In →' }).click();
        await this.page.waitForTimeout(2000);
	}
}