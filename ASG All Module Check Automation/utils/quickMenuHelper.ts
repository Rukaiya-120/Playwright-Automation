import { Page, expect } from '@playwright/test';
import { CompanyPage } from '../pages/quick_menu/Company';
import { ProductPage } from '../pages/quick_menu/product';
import { ToolsPage } from '../pages/quick_menu/tools';
import { ProfilePage } from '../pages/quick_menu/profile';


export async function openQuickMenu(page: Page) {
    const companyPage = new CompanyPage(page);

    await page.goto('/dashboard');

    await companyPage.quick_access.click();

    await page.waitForTimeout(2000);

    await expect(
        companyPage.quickHeading.filter({ hasText: 'Quick Menu' })
    ).toBeVisible({ timeout: 10000 });

    return companyPage;
}

export async function openQuickMenuProduct(page: Page) {
    const productPage = new ProductPage(page);

    await page.goto('/dashboard');

    await productPage.quick_access.click();

    await page.waitForTimeout(2000);

    await expect(
        productPage.quickHeading.filter({ hasText: 'Quick Menu' })
    ).toBeVisible({ timeout: 10000 });

    return productPage;
}

export async function openQuickMenuTools(page: Page) {
    const toolsPage = new ToolsPage(page);

    await page.goto('/dashboard');

    await toolsPage.quick_access.click();

    await page.waitForTimeout(2000);

    await expect(
        toolsPage.quickHeading.filter({ hasText: 'Quick Menu' })
    ).toBeVisible({ timeout: 10000 });

    return toolsPage;
}

export async function openQuickMenuProfile(page: Page) {
    const profilePage = new ProfilePage(page);

    await page.goto('/dashboard');

    await profilePage.quick_access.click();

    await page.waitForTimeout(2000);

    await expect(
        profilePage.quickHeading.filter({ hasText: 'Quick Menu' })
    ).toBeVisible({ timeout: 10000 });

    return profilePage;
}