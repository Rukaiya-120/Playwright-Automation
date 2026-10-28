import { Locator, Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly quick_access: Locator;
  readonly quickHeading: Locator;
  readonly profile: Locator;
  readonly company: Locator;


  
  constructor(page: Page) {
    this.page = page;
    this.quick_access = page.getByRole('link', { name: 'Quick Menu' });
    this.quickHeading = page.locator('.top_menu_text_head');
    this.profile = page.getByRole('link', { name: 'User Profile' });
    this.company =page.getByText('Company', { exact: true });
  }
}
