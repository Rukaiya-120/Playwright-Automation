import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly quick_access: Locator;
  readonly quickHeading: Locator;
  readonly manufacturers: Locator;
  readonly categories: Locator;
  readonly services: Locator;
  readonly vendors: Locator;

  
  constructor(page: Page) {
    this.page = page;
    this.quick_access = page.getByRole('link', { name: 'Quick Menu' });
    this.quickHeading = page.locator('.top_menu_text_head');
    this.manufacturers = page.getByRole('link', { name: 'Manufacturers' });
    this.categories = page.locator('span', { hasText: 'Categories' });
    this.services = page.getByRole('link', { name: 'Services' });
    this.vendors = page.getByRole('link', { name: 'Vendors' });
  }
}
