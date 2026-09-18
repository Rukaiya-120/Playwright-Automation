import { test, expect } from '@playwright/test';

import { LeadsPage } from '../../pages/LeadsPage';

test.setTimeout(120000);

test('Inside Sales', async ({ page }) => {
  const leadsPage = new LeadsPage(page);

  await page.goto('https://dev-asg.rmrcloud.com/inside-sales');
  await expect(leadsPage.insideSalesHeader).toBeVisible();
});

test('Stter', async ({ page }) => {
  const leadsPage = new LeadsPage(page);

  await page.goto('https://dev-asg.rmrcloud.com/setter-leads');
  await leadsPage.setterLeadsLink.click();
});

test('Website', async ({ page }) => {
  const leadsPage = new LeadsPage(page);

  await page.goto('https://dev-asg.rmrcloud.com/website-leads');
  await leadsPage.websiteLeadsLink.click();
});
