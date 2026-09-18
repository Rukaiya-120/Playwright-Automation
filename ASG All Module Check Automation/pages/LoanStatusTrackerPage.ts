import { Locator, Page } from '@playwright/test';

export class LoanStatusTrackerPage {
  readonly page: Page;
  readonly customerSearch: Locator;
  readonly searchButton: Locator;
  readonly filterButton: Locator;
  readonly dispositionFilter: Locator;
  readonly resetButton: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.customerSearch = page.getByRole('textbox', { name: 'Find by customer' });
    this.searchButton = page.getByTitle('Search');
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.dispositionFilter = page.locator('#filterDisposition');
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.nextButton = page.getByRole('button', { name: 'Next', exact: true });
    this.previousButton = page.getByRole('button', { name: 'Previous', exact: true });
  }
}
