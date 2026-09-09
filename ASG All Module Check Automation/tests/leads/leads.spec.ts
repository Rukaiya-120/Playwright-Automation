import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Inside Sales', async ({ page }) => {
    await page.goto('https://dev-asg.rmrcloud.com/inside-sales');
       await expect(
        page.getByText('Inside Sales List', { exact: true })
    ).toBeVisible();
    

});


test('Stter', async ({ page }) => {
    await page.goto('https://dev-asg.rmrcloud.com/setter-leads');
    await page.getByRole('link', { name: 'Setter Leads'  , exact: true}).click();

});

test('Website', async ({ page }) => {
    await page.goto('https://dev-asg.rmrcloud.com/website-leads');
     await page.getByRole('link', { name: 'Website Leads'  , exact: true}).click();

});
