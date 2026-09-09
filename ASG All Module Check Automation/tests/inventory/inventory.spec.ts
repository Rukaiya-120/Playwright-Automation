import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Inventory', async ({ page }) => {
    await page.goto('/inventory');
       await expect(
        page.getByText('Company Inventory - Inventory items', { exact: true })
    ).toBeVisible();
    
});

test('On Hand', async ({ page }) => {
    await page.goto('/onhand');
       await expect(
        page.getByText('On Hand', { exact: true })
    ).toBeVisible();
    
});


test('Restock Warehouse', async ({ page }) => {
    await page.goto('/restock-warehouse');
    await page.waitForTimeout(3000);
    await expect(page.getByText('Restock - Warehouse', { exact: true })).toBeVisible();

    
});

test('Purchase Order', async ({ page }) => {
    await page.goto('/po');
        await expect(page.locator('.page_main_header', { hasText: 'Purchase Order' })).toBeVisible();
        await page.getByRole('button', { name: 'Filter' }).click();
        await page.getByRole('button', { name: 'Status' }).click();
        await page.locator('a').filter({ hasText: /^Received$/ }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.getByRole('button', { name: 'Filter' }).click();
        await page.getByRole('button', { name: 'Reset' }).click();

        await expect(
    page.getByRole('button', { name: 'Next', exact: true })
  ).toBeVisible({ timeout: 30000 });

  // Get the current Next button only when we are ready to click it
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  // Wait for pagination to finish updating
  await expect(
    page.getByRole('button', { name: 'Previous', exact: true })
  ).toBeVisible({ timeout: 30000 });

  // Get the NEW Previous button after DOM refresh
  await page.getByRole('button', { name: 'Previous', exact: true }).click();

    
});

test('Spillage', async ({ page }) => {
    await page.goto('/spillage');

    await expect(page.locator('.page_main_header'))
        .toHaveText('Spillage');

    const searchBox = page.getByPlaceholder('Search by recipient or ID');

    // Search
    await searchBox.click();
    await searchBox.fill('test');

    // Wait for search button and click
    await expect(page.locator('#btnSearch'))
        .toBeVisible();
    await page.locator('#btnSearch').click();

    // Clear search
    await searchBox.click();
    await searchBox.fill('');

    // Search again
    await expect(page.locator('#btnSearch'))
        .toBeVisible();
    await page.locator('#btnSearch').click();

    // Open Date Filter
    await page.locator('.dateviewed').click();

    // Verify date range dropdown is visible
    await expect(
        page.locator('#DateRange')
    ).toBeVisible();

    // Select All Time
    await page.locator('#DateRange').selectOption('AllTime');

    // Verify All Time is selected
    await expect(
        page.locator('#DateRange')
    ).toHaveValue('AllTime');

    // Apply Date Filter
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
        // Wait for pagination to appear after search results load
    const nextButton = page.getByRole('button', { name: 'Next' });

 

    // Scroll to pagination
    await nextButton.scrollIntoViewIfNeeded();
    await expect(nextButton).toBeVisible({ timeout: 30000 });
    // Click Next
    await nextButton.click();

    // // Find the new Previous button after pagination updates
    // const previousButton = page.getByRole('button', { name: 'Previous' });
    // await previousButton.click();

});
test('RMA', async ({ page }) => {
    await page.goto('/rma-s');
    await page.waitForTimeout(3000);
    await expect(page.locator('.page_main_header')).toHaveText("RMA's");
});

test('Inventory Template', async ({ page }) => {
    await page.goto('/inv-template');
    await page.waitForTimeout(3000);
    await expect(page.locator('.page_main_header')).toHaveText('Inventory Template');
    
});

test('Inventory Ledger', async ({ page }) => {
    await page.goto('/inventory-ledger');
    await page.waitForTimeout(3000);
    await expect(page.locator('.page_main_header')).toHaveText('Inventory Ledger');
    
});

test('Inventory Log', async ({ page }) => {
    await page.goto('/inventory-log');
    await page.waitForTimeout(3000);
    await expect(page.locator('.page_main_header')).toHaveText('Inventory Log');
    
});

test('Pending Approval', async ({ page }) => {
    await page.goto('/equipment-pending-approval#eqp-pending-list');
    await page.waitForTimeout(3000);

        await expect(
        page.locator('a[data-target="#EqpPendingList"]')
    ).toBeVisible();
    
});

test('Pending Approval Ledger', async ({ page }) => {
    await page.goto('/equipment-pending-approval#pending-approval-ledger');
    await page.waitForTimeout(3000);

       await expect(page.getByText('Pending Approval Ledger', { exact: true })).toBeVisible();
    
});