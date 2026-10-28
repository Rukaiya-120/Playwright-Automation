import { test, expect } from '@playwright/test';
import { openQuickMenuProduct } from '../../utils/quickMenuHelper';

test('Manufacturers', async ({ page }) => {
    const productPage = await openQuickMenuProduct(page);

    await productPage.manufacturers.click();

    await expect(page).toHaveURL('/Manufacturers', {
        timeout: 10000
    });
});

test('Categories', async ({ page }) => {
    const productPage = await openQuickMenuProduct(page);

    await productPage.categories.click();

    await expect(page).toHaveURL('/ProductCategory', {
        timeout: 10000
    });
});

test('Services', async ({ page }) => {
    const productPage = await openQuickMenuProduct(page);

    await productPage.services.click();

    await expect(page).toHaveURL('/ServiceInventory', {
        timeout: 10000
    });
});


test('Vendors', async ({ page }) => {
    const productPage = await openQuickMenuProduct(page);

    await productPage.vendors.click();

    await expect(page).toHaveURL('/vendors', {
        timeout: 10000
    });
});




