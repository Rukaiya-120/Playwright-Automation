import { test, expect } from '@playwright/test';
import {openQuickMenuTools } from '../../utils/quickMenuHelper';

test('Customer System No.', async ({ page }) => {
    const toolsPage = await openQuickMenuTools(page);

    await toolsPage.customerSytem.click();

    await expect(page).toHaveURL('/InstallCustomerSystemNo', {
        timeout: 10000
    });
});

test('Title Settings', async ({ page }) => {
    const toolsPage = await openQuickMenuTools(page);

    await toolsPage.titleSettings.click();

    await expect(page).toHaveURL('/title-settings', {
        timeout: 10000
    });
});

test('Build Version', async ({ page }) => {
    const toolsPage = await openQuickMenuTools(page);

    await toolsPage.buildVersion.click();

    await expect(page).toHaveURL('/build-version', {
        timeout: 10000
    });
});





