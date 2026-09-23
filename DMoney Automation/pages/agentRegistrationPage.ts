import { Page } from '@playwright/test';

export class AgentRegistrationPage {
	constructor(private readonly page: Page) {}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net');
		await this.page.getByRole('link', { name: 'Get Started Free →' }).click();
	}

	async fillAgentDetails(details: {
		name: string;
		email: string;
		password: string;
		phone: string;
		nationalId: string;
	}): Promise<void> {
		await this.page.getByRole('textbox', { name: 'Full Name' }).fill(details.name);
		await this.page.getByRole('textbox', { name: 'Email Address' }).fill(details.email);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(details.password);
		await this.page.getByRole('textbox', { name: 'Phone Number' }).fill(details.phone);
		await this.page.getByRole('textbox', { name: 'National ID (NID)' }).fill(details.nationalId);
		await this.page.getByRole('combobox').click();
		await this.page.getByRole('option', { name: '🏪 Agent' }).click();
	}

	async createAccount(): Promise<void> {
		await this.page.getByRole('button', { name: 'Create Account →' }).click();
	}
}