import { Locator, Page } from '@playwright/test';

export class InstalledTrackerPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search by name, ID, address,' });
    this.searchButton = page.getByTitle('Search');
    this.dateRangeCell = page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' });
    this.dateRangeDropdown = page.locator('#DateRange');
    this.nextButton = page.getByRole('button', { name: 'Next', exact: true });
    this.previousButton = page.getByRole('button', { name: 'Previous', exact: true });
  }
}
