import { test, expect } from '@playwright/test';

import { CustomerPage } from '../../pages/Customer/CustomerPage';

test.setTimeout(120000);

test('Customer Pre Qualify tab', async ({ page }) => {
	const customerPage = new CustomerPage(page);
    await page.goto('/customers');
    
	await customerPage.newCustomer.click();
    await expect(
        customerPage.pageHeading.filter({ hasText: 'Primary Applicant Info' })
    ).toBeVisible({ timeout: 10000 });	
	await customerPage.prequalifyTab.click();
	await customerPage.firstName.fill('Taylor');
	await customerPage.lastName.fill('Automation');
    await customerPage.address.fill('Beverly Hills');
	await expect(customerPage.address).toHaveValue('Beverly Hills');
	await customerPage.zipCode.click();
	await customerPage.zipCode.fill('');
	await customerPage.zipCode.pressSequentially('76040', {
		delay: 100
	});

	const suggestions = page.locator('.tt-suggestion');

	await expect(suggestions.first()).toBeVisible({
		timeout: 15000
	});

	await suggestions.first().click();
	await page.waitForTimeout(2000);
    await customerPage.dob.fill('01/01/1990');
	await expect(customerPage.email).toBeVisible();
    await customerPage.email.fill('rukaiya.csm@gmail.com');
	await expect(customerPage.phone).toBeVisible();
    await customerPage.phone.fill('8004444444');
	await expect(customerPage.secondaryPhone).toBeVisible();
    await customerPage.secondaryPhone.fill('8005555555');
	await expect(customerPage.ssn).toBeVisible();
    await customerPage.ssn.fill('123456789');
	await expect(customerPage.nextStep).toBeVisible();
    await customerPage.nextStep.click();
});
