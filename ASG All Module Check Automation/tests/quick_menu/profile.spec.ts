import { test, expect } from '@playwright/test';
import { openQuickMenuProduct, openQuickMenuProfile } from '../../utils/quickMenuHelper';

test('Company', async ({ page }) => {
    const profilePage = await openQuickMenuProfile(page);

    await profilePage.company.click();

    await expect(page).toHaveURL('/CompanyInfo', {
        timeout: 10000
    });
});

test('User Profile', async ({ page }) => {
    const profilePage = await openQuickMenuProfile(page);

    await profilePage.profile.click();

    await expect(page).toHaveURL('/UserProfile', {
        timeout: 10000
    });
});






