import { test, expect } from '@playwright/test';

import { FeedbackTicketsPage } from '../../pages/FeedbackTicketsPage';

test.setTimeout(120000);

test('Feedback Tickets', async ({ page }) => {
  const feedbackPage = new FeedbackTicketsPage(page);

  await page.goto('/feedback-tickets');

  await expect(feedbackPage.filterButton).toBeVisible();

  await feedbackPage.filterButton.click();
  await expect(feedbackPage.feedbackCategoryFilter).toBeVisible();

  await feedbackPage.feedbackCategoryFilter.selectOption('UI/Display Issue');
  await expect(feedbackPage.feedbackCategoryFilter).toHaveValue('UI/Display Issue');

  await feedbackPage.applyButton.click();
  await expect(feedbackPage.filterButton).toBeVisible();

  await feedbackPage.filterButton.click();
  await expect(feedbackPage.statusLabel).toBeVisible();

  await feedbackPage.statusLabel.click();
  await expect(feedbackPage.resetButton).toBeVisible();

  await feedbackPage.resetButton.click();
  await expect(feedbackPage.filterButton).toBeVisible();

  await feedbackPage.filterButton.click();
  await expect(feedbackPage.statusFilter).toBeVisible();

  await feedbackPage.statusFilter.selectOption('Closed');
  await expect(feedbackPage.statusFilter).toHaveValue('Closed');

  await feedbackPage.applyButton.click();
  await expect(feedbackPage.filterButton).toBeVisible();

  await feedbackPage.filterButton.click();
  await expect(feedbackPage.resetButton).toBeVisible();

  await feedbackPage.resetButton.click();
  await expect(feedbackPage.filterButton).toBeVisible();
});

