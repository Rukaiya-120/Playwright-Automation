import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly companyInventoryHeader: Locator;
  readonly onHandHeader: Locator;
  readonly restockWarehouseHeader: Locator;
  readonly purchaseOrderHeader: Locator;
  readonly filterButton: Locator;
  readonly statusButton: Locator;
  readonly receivedStatusLink: Locator;
  readonly resetButton: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;
  readonly spillageHeader: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly dateView: Locator;
  readonly dateRangeDropdown: Locator;
  readonly applyButton: Locator;
  readonly rmaHeader: Locator;
  readonly templateHeader: Locator;
  readonly ledgerHeader: Locator;
  readonly logHeader: Locator;
  readonly pendingApprovalLink: Locator;
  readonly pendingApprovalLedgerHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.companyInventoryHeader = page.getByText('Company Inventory - Inventory items', { exact: true });
    this.onHandHeader = page.getByText('On Hand', { exact: true });
    this.restockWarehouseHeader = page.getByText('Restock - Warehouse', { exact: true });
    this.purchaseOrderHeader = page.locator('.page_main_header', { hasText: 'Purchase Order' });
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.statusButton = page.getByRole('button', { name: 'Status' });
    this.receivedStatusLink = page.locator('a').filter({ hasText: /^Received$/ });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.nextButton = page.getByRole('button', { name: 'Next', exact: true });
    this.previousButton = page.getByRole('button', { name: 'Previous', exact: true });
    this.spillageHeader = page.locator('.page_main_header');
    this.searchBox = page.getByPlaceholder('Search by recipient or ID');
    this.searchButton = page.locator('#btnSearch');
    this.dateView = page.locator('.dateviewed');
    this.dateRangeDropdown = page.locator('#DateRange');
    this.applyButton = page.getByRole('button', { name: 'Apply' }).nth(1);
    this.rmaHeader = page.locator('.page_main_header');
    this.templateHeader = page.locator('.page_main_header');
    this.ledgerHeader = page.locator('.page_main_header');
    this.logHeader = page.locator('.page_main_header');
    this.pendingApprovalLink = page.locator('a[data-target="#EqpPendingList"]');
    this.pendingApprovalLedgerHeader = page.getByText('Pending Approval Ledger', { exact: true });
  }
}
