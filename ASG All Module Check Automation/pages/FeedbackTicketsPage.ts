import { Locator, Page } from '@playwright/test';

export class FeedbackTicketsPage {
  readonly page: Page;
  readonly filterButton: Locator;
  readonly feedbackCategoryFilter: Locator;
  readonly statusFilter: Locator;
  readonly statusLabel: Locator;
  readonly resetButton: Locator;
  readonly applyButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.feedbackCategoryFilter = page.locator('#filterFeedbackCategory');
    this.statusFilter = page.locator('#filterStatus');
    this.statusLabel = page.locator('label').filter({ hasText: 'Status' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.applyButton = page.getByRole('button', { name: 'Apply' });
  }
}
