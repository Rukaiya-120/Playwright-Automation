import { test, expect } from '@playwright/test';

import { BlitzTrackerPage } from '../../pages/BlitzTrackerPage';

test.setTimeout(120000);

test('Blitz Tracker', async ({ page }) => {
  const blitzTrackerPage = new BlitzTrackerPage(page);

  await page.goto('/blitz/tracker');
  await expect(blitzTrackerPage.heading).toBeVisible();
});