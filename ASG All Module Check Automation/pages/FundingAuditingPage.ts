import { Locator, Page } from '@playwright/test';

export class FundingAuditingPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', { name: 'Funding Audit Queue' });
    this.nextButton = page.getByRole('button', { name: 'Next →' });
    this.previousButton = page.getByRole('button', { name: '← Prev' });
  }
}
