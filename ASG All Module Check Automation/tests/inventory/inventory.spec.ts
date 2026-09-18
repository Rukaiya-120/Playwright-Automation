import { test, expect } from '@playwright/test';

import { InventoryPage } from '../../pages/InventoryPage';

test.setTimeout(120000);

test('Inventory', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.companyInventoryHeader).toBeVisible();
});

test('On Hand', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/onhand');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.onHandHeader).toBeVisible();
});

test('Restock Warehouse', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/restock-warehouse');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.restockWarehouseHeader).toBeVisible();
});

test('Purchase Order', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/po');
  await expect(inventoryPage.purchaseOrderHeader).toBeVisible();
  await inventoryPage.filterButton.click();
  await inventoryPage.statusButton.click();
  await inventoryPage.receivedStatusLink.click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await inventoryPage.filterButton.click();
  await inventoryPage.resetButton.click();

  await expect(inventoryPage.nextButton).toBeVisible({ timeout: 30000 });
  await inventoryPage.nextButton.click();
  await expect(inventoryPage.previousButton).toBeVisible({ timeout: 30000 });
  await inventoryPage.previousButton.click();
});

test('Spillage', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/spillage');
  await expect(inventoryPage.spillageHeader).toHaveText('Spillage');

  await inventoryPage.searchBox.click();
  await inventoryPage.searchBox.fill('test');
  await expect(inventoryPage.searchButton).toBeVisible();
  await inventoryPage.searchButton.click();

  await inventoryPage.searchBox.click();
  await inventoryPage.searchBox.fill('');
  await expect(inventoryPage.searchButton).toBeVisible();
  await inventoryPage.searchButton.click();

  await inventoryPage.dateView.click();
  await expect(inventoryPage.dateRangeDropdown).toBeVisible();
  await inventoryPage.dateRangeDropdown.selectOption('AllTime');
  await expect(inventoryPage.dateRangeDropdown).toHaveValue('AllTime');
  await inventoryPage.applyButton.click();
});

test('RMA', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/rma-s');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.rmaHeader).toHaveText("RMA's");
});

test('Inventory Template', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inv-template');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.templateHeader).toHaveText('Inventory Template');
});

test('Inventory Ledger', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory-ledger');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.ledgerHeader).toHaveText('Inventory Ledger');
});

test('Inventory Log', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/inventory-log');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.logHeader).toHaveText('Inventory Log');
});

test('Pending Approval', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/equipment-pending-approval#eqp-pending-list');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.pendingApprovalLink).toBeVisible();
});

test('Pending Approval Ledger', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await page.goto('/equipment-pending-approval#pending-approval-ledger');
  await page.waitForTimeout(3000);
  await expect(inventoryPage.pendingApprovalLedgerHeader).toBeVisible();
});