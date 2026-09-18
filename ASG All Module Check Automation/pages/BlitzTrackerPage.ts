import { Locator, Page } from '@playwright/test';

export class BlitzTrackerPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Blitz Tracker' });
  }
}
