import { Locator, Page } from '@playwright/test';

export class LeadsPage {
  readonly page: Page;
  readonly insideSalesHeader: Locator;
  readonly setterLeadsLink: Locator;
  readonly websiteLeadsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.insideSalesHeader = page.getByText('Inside Sales List', { exact: true });
    this.setterLeadsLink = page.getByRole('link', { name: 'Setter Leads', exact: true });
    this.websiteLeadsLink = page.getByRole('link', { name: 'Website Leads', exact: true });
  }
}
