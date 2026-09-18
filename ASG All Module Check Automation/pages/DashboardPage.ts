import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly personalLink: Locator;
  readonly officeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalLink = page.getByRole('link', { name: 'Personal' });
    this.officeLink = page.getByRole('link', { name: 'Office', exact: true });
  }
}
