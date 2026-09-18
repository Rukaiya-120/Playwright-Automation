import { Locator, Page } from '@playwright/test';

export class SchedulingPage {
  readonly page: Page;
  readonly installQueueLink: Locator;
  readonly serviceQueueHeading: Locator;
  readonly unfinishedInstallQueueLink: Locator;
  readonly calendarLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.installQueueLink = page.locator('#new_tab_peel').getByRole('link', { name: 'Install Queue' });
    this.serviceQueueHeading = page.getByRole('heading', { name: 'Service Queue' });
    this.unfinishedInstallQueueLink = page.getByRole('link', { name: 'Unfinished Install Queue' });
    this.calendarLink = page.locator('#new_tab_peel').getByRole('link', { name: 'Calendar' });
  }
}
