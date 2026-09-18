import { Locator, Page } from '@playwright/test';

export class VerificationCallsPage {
  readonly page: Page;
  readonly allCustomersHeader: Locator;
  readonly customerSearch: Locator;
  readonly searchButton: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;
  readonly applyButton: Locator;
  readonly queueSearch: Locator;
  readonly queueDropdown: Locator;
  readonly resolutionSearch: Locator;
  readonly resolutionStatus: Locator;
  readonly employeeDropdown: Locator;
  readonly sopSearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allCustomersHeader = page.locator('#divVerCustomerTable').getByText('All Customers');
    this.customerSearch = page.getByRole('textbox', { name: 'Search by customer' });
    this.searchButton = page.locator('#btnSearchCustomer');
    this.dateRangeCell = page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' });
    this.dateRangeDropdown = page.locator('#DateRange');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.queueSearch = page.getByRole('textbox', { name: 'Search' });
    this.queueDropdown = page.locator('#VreificationcallQueue');
    this.resolutionSearch = page.getByRole('textbox', { name: 'Find a Resolution' });
    this.resolutionStatus = page.locator('#ResolutionStatus');
    this.employeeDropdown = page.locator('#EmployeeDropdown');
    this.sopSearchButton = page.locator('#searchSOPbutton');
  }
}
