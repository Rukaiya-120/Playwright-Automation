import { Locator, Page } from '@playwright/test';

export class InstalledTrackerPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;
  readonly applyButton: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search by name, ID, address, or stipulation keyword' });
    this.searchButton = page.getByTitle('Search');
    this.dateRangeCell = page.locator('span.date-start');
     this.dateRangeDropdown = page.locator('#DateRange');
    this.applyButton = page.getByRole('button', { name: 'Apply', exact: true });
    this.nextButton = page.getByRole('button', { name: 'Next', exact: true }).nth(1);
    this.previousButton = page.getByRole('button', { name: 'Previous', exact: true }).nth(1);
  }
}
