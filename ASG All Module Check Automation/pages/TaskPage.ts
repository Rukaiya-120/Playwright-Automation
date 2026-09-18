import { Locator, Page } from '@playwright/test';

export class TaskPage {
  readonly page: Page;
  readonly taskListHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.taskListHeader = page.getByText('Task List', { exact: true });
  }
}
