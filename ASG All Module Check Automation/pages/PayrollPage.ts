import { Locator, Page } from '@playwright/test';

export class PayrollPage {
  readonly page: Page;
  readonly accountsHeader: Locator;
  readonly oldPayscaleOverrides: Locator;
  readonly newPayscaleOverrides: Locator;
  readonly deductionsHeader: Locator;
  readonly addOnsHeader: Locator;
  readonly auditingTabs: Locator;
  readonly filterButton: Locator;
  readonly batchFilter: Locator;
  readonly applyButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsHeader = page.locator('.tb_head').filter({ hasText: 'Accounts' });
    this.oldPayscaleOverrides = page.getByText('Old Payscale Overrides');
    this.newPayscaleOverrides = page.getByText('New Payscale Overrides');
    this.deductionsHeader = page.locator('#payrollAccountsTable').getByText('Deductions');
    this.addOnsHeader = page.getByText('Add-Ons');
    this.auditingTabs = page.locator('#myTab');
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.batchFilter = page.locator('#FilterBatch');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
  }
}
