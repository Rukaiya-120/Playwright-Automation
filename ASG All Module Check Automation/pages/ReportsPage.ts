import { Locator, Page } from '@playwright/test';

export class ReportsPage {
  readonly page: Page;
  readonly downloadLogHeader: Locator;
  readonly pendVertStatusHeader: Locator;
  readonly salesCohortReportHeader: Locator;
  readonly techCheckInOutHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadLogHeader = page.getByText('Download Log List', { exact: true });
    this.pendVertStatusHeader = page.getByText('Pend Vert Status List', { exact: true });
    this.salesCohortReportHeader = page.getByText('Sales Activity Cohort Report', { exact: true });
    this.techCheckInOutHeader = page.getByText('Reports 1 Sep, 2026 - 30 Sep');
  }
}
