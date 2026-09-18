import { Locator, Page } from '@playwright/test';

export class TechSupportPage {
  readonly page: Page;
  readonly leadSearch: Locator;
  readonly searchButton: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leadSearch = page.getByRole('textbox', { name: 'Find a lead' });
    this.searchButton = page.getByTitle('Search');
    this.dateRangeCell = page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' });
    this.dateRangeDropdown = page.locator('#DateRange');
  }
}
