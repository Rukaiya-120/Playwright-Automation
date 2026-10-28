import { Locator, Page } from '@playwright/test';

export class ToolsPage {
  readonly page: Page;
  readonly quick_access: Locator;
  readonly quickHeading: Locator;
  readonly customerSytem: Locator;
  readonly titleSettings: Locator;
  readonly buildVersion: Locator;
  

  
  constructor(page: Page) {
    this.page = page;
    this.quick_access = page.getByRole('link', { name: 'Quick Menu' });
    this.quickHeading = page.locator('.top_menu_text_head');
    this.customerSytem = page.getByRole('link', { name: 'Customers System No.' });
    this.titleSettings = page.getByRole('link', { name: 'Title Settings' });
    this.buildVersion = page.getByRole('link', { name: 'Build Version' });
  }
}
