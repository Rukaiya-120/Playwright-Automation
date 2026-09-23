import { expect, Page } from '@playwright/test';

export class AdminUsersPage {
	constructor(private readonly page: Page) {}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net/admin/users');
	}

	async expectDashboard(): Promise<void> {
		await expect(this.page).toHaveURL(/\/admin\/users/);
		await expect(this.page.getByText('Admin Dashboard')).toBeVisible();
	}
	async expectUserUpdated(): Promise<void> {
		await expect(this.page.getByText('User updated successfully', { exact: true })).toBeVisible();
	}
	async activateFirstUser(): Promise<void> {
		const firstRow = this.page.locator('tbody tr').first();
		await expect(firstRow).toBeVisible();
		await firstRow.getByRole('button', { name: 'VIEW' }).click();
		await this.page.waitForTimeout(2000);
		await this.page.getByRole('button', { name: 'Edit User' }).click();
		await this.page.getByRole('combobox').nth(1).click();
		await this.page.getByRole('option', { name: 'Active' }).click();
		await this.page.getByRole('button', { name: 'Save Changes' }).click();
	}
}