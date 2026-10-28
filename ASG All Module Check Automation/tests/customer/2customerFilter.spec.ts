import { expect, Page, test } from '@playwright/test';
import { CustomerFilter } from '../../pages/Customer/CustomerFilter';

test.setTimeout(180000);
async function verifyCustomerCountOnPagination(
  customerFilter: CustomerFilter,
  page: Page
) {
  await expect(customerFilter.customerCardLabel).toBeVisible();

  const customerCountBefore = (await customerFilter.customerCardNumber1.textContent())?.trim();

  await customerFilter.nextButton.click();
  await page.waitForTimeout(2000);

  await expect(customerFilter.customerCardLabel).toBeVisible();
  await expect(customerFilter.customerCardNumber1).toBeVisible();

  const customerCountAfterNext = (await customerFilter.customerCardNumber1.textContent())?.trim();

  console.log('Customer count before:', customerCountBefore);
  console.log('Customer count after Next:', customerCountAfterNext);

  expect(customerCountAfterNext).toBe(customerCountBefore);

  await customerFilter.previousButton.click();
await page.waitForTimeout(2000);
  await expect(customerFilter.customerCardLabel).toBeVisible();
  await expect(customerFilter.customerCardNumber1).toBeVisible();

  const customerCountAfterPrevious = (await customerFilter.customerCardNumber1.textContent())?.trim();

  expect(customerCountAfterPrevious).toBe(customerCountBefore);
  console.log('Customer count after Previous:', customerCountAfterPrevious);
}

test('Customer list can be searched', async ({ page }) => {
  const customerFilter = new CustomerFilter(page);

  await page.goto('/customers');

  await expect(customerFilter.searchBox).toBeVisible();
  await customerFilter.searchBox.click();

  await expect(customerFilter.searchBox).toBeEditable();
  await customerFilter.searchBox.fill('Test');

  await customerFilter.searchButton.click();
  await page.waitForTimeout(2000);
  await expect(customerFilter.searchBox).toHaveValue('Test');
  

  await customerFilter.searchBox.fill('');
  await customerFilter.searchButton.click();
  await page.waitForTimeout(2000);
});

test('Customer filters can be applied and reset', async ({ page }) => {

  
  const customerFilter = new CustomerFilter(page);

  await page.goto('/customers');
  await customerFilter.filter.click();
  // Branch Filter
  await expect(customerFilter.branchFilter).toBeVisible();
  customerFilter.branchFilter.selectOption({ index: 1 });
  await customerFilter.applyButton.click();

  //Company Filter
  await customerFilter.filter.click();
  await expect(customerFilter.financeCompanyFilter).toBeVisible();
  await customerFilter.financeCompanyFilter.selectOption({ index: 1 });
  await customerFilter.applyButton.click();
  await page.waitForTimeout(10000);
  await verifyCustomerCountOnPagination(customerFilter, page);
  await page.waitForTimeout(5000);
  await customerFilter.filter.click();
  await customerFilter.resetButton.click();
  //Office Filter
  await customerFilter.filter.click();
  await customerFilter.officeFilter.click();
  await customerFilter.officeOptions.click();
  await customerFilter.applyButton.click();
  await page.waitForTimeout(10000);
  await verifyCustomerCountOnPagination(customerFilter, page);
  await page.waitForTimeout(5000);
  await customerFilter.filter.click();
  await customerFilter.resetButton.click();

  //Buyout Filter
  await customerFilter.filter.click();
  await expect(customerFilter.buyoutFilter).toBeVisible();
  await customerFilter.buyoutFilter.click();
  await customerFilter.buyoutFilteroptions.selectOption({ index: 1 });
  await customerFilter.applyButton.click();
  await page.waitForTimeout(10000);
  await verifyCustomerCountOnPagination(customerFilter, page);
  await page.waitForTimeout(5000);
  await customerFilter.filter.click();
  await customerFilter.resetButton.click();

  //Loan Status Filter

  await expect(customerFilter.loanStatusFilter).toBeVisible();
  await customerFilter.loanStatusFilter.click();
  await customerFilter.loanStatusFilteroptions.click();
  await page.waitForTimeout(10000);
  await verifyCustomerCountOnPagination(customerFilter, page);
  await page.waitForTimeout(5000);
  await customerFilter.filter.click();
  await customerFilter.resetButton.click();
  //Account Status Filter
  await expect(customerFilter.accountStatusFilter).toBeVisible();
  await customerFilter.accountStatusFilter.click();
  await customerFilter.accountStatusFilteroptions.click();
  await page.waitForTimeout(10000);
  await verifyCustomerCountOnPagination(customerFilter, page);
  await page.waitForTimeout(5000);
  await customerFilter.filter.click();
  await customerFilter.resetButton.click();
  await page.waitForTimeout(5000);
  //Rep Filter
  //Tech Filter




});

test('Customer list date range can be changed', async ({ page }) => {
  const customerFilter = new CustomerFilter(page);

  await page.goto('/customers');
  await expect(customerFilter.dateRangeCell).toBeVisible();
  await customerFilter.dateRangeCell.click();
  await customerFilter.dateRangeDropdown.selectOption('AllTime');
  await expect(customerFilter.dateRangeDropdown).toHaveValue('AllTime');
  await customerFilter.dateApplyButton.click();
  page.waitForTimeout(2000);

  await customerFilter.nextButton.click();
  await customerFilter.previousButton.click();
});