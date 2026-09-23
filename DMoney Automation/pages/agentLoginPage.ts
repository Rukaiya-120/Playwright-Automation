import { expect, Locator, Page } from '@playwright/test';

export class AgentLoginPage {
	private readonly emailInput: Locator;
	private readonly passwordInput: Locator;
	private readonly loginButton: Locator;
	private readonly otpInput: Locator;
	private readonly verifyOtpButton: Locator;
    private readonly currBalance: Locator;

	constructor(private readonly page: Page) {
		this.emailInput = page.getByRole('textbox', { name: 'Email or Phone Number' });
		this.passwordInput = page.getByRole('textbox', { name: 'Password' });
		this.loginButton = page.getByRole('button', { name: 'Login →' });
		this.otpInput = page.getByRole('textbox', { name: 'Enter 4-Digit OTP' });
		this.verifyOtpButton = page.getByRole('button', { name: 'Verify OTP →' });
        this.currBalance = page.getByRole('textbox', { name: 'Current Balance (BDT)' });

	}

	async open(): Promise<void> {
		await this.page.goto('https://dmoneyportal.roadtocareer.net/login');
	}

	async submitCredentials(email: string, password: string): Promise<void> {
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	async enterOtp(otp: string): Promise<void> {
		await expect(this.otpInput).toBeVisible();
		await this.otpInput.fill(otp);
	}

	async verifyOtp(): Promise<void> {
		await this.verifyOtpButton.click();
	}

	async expectCurrentBalance(expectedBalance: string): Promise<void> {
		await expect(this.currBalance).toHaveValue(expectedBalance);
	}
}