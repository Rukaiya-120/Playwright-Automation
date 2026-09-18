import { Locator, Page } from '@playwright/test';

export class FundingBuyoutPage {
  readonly page: Page;
  readonly customerSearch: Locator;
  readonly searchButton: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.customerSearch = page.getByRole('textbox', { name: 'Find by customer' });
    this.searchButton = page.getByTitle('Search');
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.previousButton = page.getByRole('button', { name: 'Previous' });
  }
}
