import { test, expect } from '@playwright/test';

import { SchedulingPage } from '../../pages/SchedulingPage';

test.setTimeout(120000);

test('Install Queue', async ({ page }) => {
  const schedulingPage = new SchedulingPage(page);

  await page.goto('/install-queue');
  await expect(schedulingPage.installQueueLink).toBeVisible();
});

test('Service Scheduler', async ({ page }) => {
  const schedulingPage = new SchedulingPage(page);

  await page.goto('/service-queue');
  await expect(schedulingPage.serviceQueueHeading).toBeVisible();
});

test('Unfinished Install', async ({ page }) => {
  const schedulingPage = new SchedulingPage(page);

  await page.goto('/unfinished-install-queue');
  await expect(schedulingPage.unfinishedInstallQueueLink).toBeVisible();
});

test('Calendar', async ({ page }) => {
  const schedulingPage = new SchedulingPage(page);

  await page.goto('/calendar');
  await expect(schedulingPage.calendarLink).toBeVisible();
});
