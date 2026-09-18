import { Locator, Page } from '@playwright/test';

export class TechPayrollPage {
  readonly page: Page;
  readonly filterButton: Locator;
  readonly branchFilter: Locator;
  readonly employeeFilter: Locator;
  readonly resetButton: Locator;
  readonly applyButton: Locator;
  readonly customerSearch: Locator;
  readonly searchButton: Locator;
  readonly dateRangeDropdown: Locator;
  readonly dateRangeCell: Locator;
  readonly tabs: Locator;
  readonly batchFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.branchFilter = page.locator('#FilterBranch');
    this.employeeFilter = page.locator('#FilterEmployee');
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.customerSearch = page.getByRole('textbox', { name: 'Find a customer by name or id' });
    this.searchButton = page.locator('#searchBtnWillBePaid');
    this.dateRangeDropdown = page.locator('#DateRange');
    this.dateRangeCell = page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' });
    this.tabs = page.locator('#myTab');
    this.batchFilter = page.locator('#FilterBatch');
  }
}
