import { test, expect } from '@playwright/test';
import { openQuickMenu } from '../../utils/quickMenuHelper';

test('Finance Company', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.financecompany.click();

    await expect(page).toHaveURL('/funding-source', {
        timeout: 10000
    });
});

test('Announcements', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.announcements.click();

    await expect(page).toHaveURL('/CustomerAnnouncement', {
        timeout: 10000
    });
});

test('Branch Settings', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.branchSettings.click();

    await expect(page).toHaveURL('/CompanyBranchInfo', {
        timeout: 10000
    });
});


test('Email & SMS Templates', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.emailSms.click();

    await expect(page).toHaveURL('/Templates', {
        timeout: 10000
    });
});

test('Language Setup', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.languageSetup.click();

    await expect(page).toHaveURL('/Localization', {
        timeout: 10000
    });
});


test('Manage Groups', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.manageGroups.click();

    await expect(page).toHaveURL('/UserGroup', {
        timeout: 10000
    });
});


test('Manage User', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.manageUsers.click();

    await expect(page).toHaveURL('/UserMgmt', {
        timeout: 10000
    });
});


test('System Settings', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.systemSettings.click();

    await expect(page).toHaveURL('/setup-details-info', {
        timeout: 10000
    });
});


test('Value Settings', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.valueSettings.click();

    await expect(page).toHaveURL('/setup-dropdown', {
        timeout: 10000
    });
});


test('Payscale', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.payScale.click();

    await expect(page).toHaveURL('/pay-scale#sheet', {
        timeout: 10000
    });
});


test('Company SOP', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.sop.click();

    await expect(page).toHaveURL('/company-sop', {
        timeout: 10000
    });
});

test('Office', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.office.click();

    await expect(page).toHaveURL('/office', {
        timeout: 10000
    });
});

test('Decision Tree for Team', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.decisionTree.click();

    await expect(page).toHaveURL('/decision-tree-team', {
        timeout: 10000
    });
});


test('Tag Management', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.tag.click();

    await expect(page).toHaveURL('/tag', {
        timeout: 10000
    });
});


test('State Tax', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.stateTax.click();

    await expect(page).toHaveURL('/state-tax', {
        timeout: 10000
    });
});

test('Proposal Template', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.proposalTemp.click();

    await expect(page).toHaveURL('/proposal-template', {
        timeout: 10000
    });
});

test('Loan Status Mapper', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.loanStatus.click();

    await expect(page).toHaveURL('/status-mapper-list', {
        timeout: 10000
    });
});

test('Camera Package', async ({ page }) => {
    const companyPage = await openQuickMenu(page);

    await companyPage.cameraPackage.click();

    await expect(page).toHaveURL('/camera-packages', {
        timeout: 10000
    });
});




