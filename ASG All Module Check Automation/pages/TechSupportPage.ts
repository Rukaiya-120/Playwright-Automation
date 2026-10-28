import { Locator, Page } from '@playwright/test';

export class TechSupportPage {
  readonly page: Page;
  readonly leadSearch: Locator;
  readonly searchButton: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;
  readonly techRow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leadSearch = page.getByRole('textbox', { name: 'Find a lead' });
    this.searchButton = page.getByTitle('Search');
    this.dateRangeCell = page.locator('.dateTable');
    this.dateRangeDropdown = page.locator('#DateRange');
    this.techRow = page.locator('.cb_ticket_line');
  }
}
