import { Locator, Page } from '@playwright/test';

export class CompanyPage {
  readonly page: Page;
  readonly quick_access: Locator;
  readonly quickHeading: Locator;
  readonly financecompany: Locator;
  readonly announcements: Locator;
  readonly branchSettings: Locator;
  readonly emailSms: Locator;
  readonly languageSetup: Locator;
  readonly manageGroups: Locator;
  readonly manageUsers: Locator;
  readonly systemSettings: Locator;
  readonly valueSettings: Locator;
  readonly payScale: Locator;
  readonly sop: Locator;
  readonly office: Locator;
  readonly decisionTree: Locator;
  readonly tag: Locator;
  readonly stateTax: Locator;
  readonly proposalTemp: Locator;
  readonly loanStatus: Locator;
  readonly cameraPackage: Locator;

  
  constructor(page: Page) {
    this.page = page;
    this.quick_access = page.getByRole('link', { name: 'Quick Menu' });
    this.quickHeading = page.locator('.top_menu_text_head');
    this.financecompany = page.getByRole('link', { name: 'Finance Company' });
    this.announcements = page.getByRole('link', { name: 'Announcements' });
    this.branchSettings = page.getByRole('link', { name: 'Branch Settings' });
    this.emailSms = page.getByRole('link', { name: 'Email & SMS Templates' });
    this.languageSetup = page.getByRole('link', { name: 'Language Setup' });
    this.manageGroups = page.getByRole('link', { name: 'Manage Groups' });
    this.manageUsers = page.getByRole('link', { name: 'Manage Users' });
    this.systemSettings = page.getByRole('link', { name: 'System Settings' });
    this.valueSettings = page.getByRole('link', { name: 'Value Settings' });
    this.payScale = page.getByRole('link', { name: 'Pay Scale' });
    this.sop = page.getByRole('link', { name: 'SOP' });
    this.office = page.locator('a[href="/office"]');
    this.decisionTree = page.getByRole('link', { name: 'Decision Tree for Team' });
    this.tag = page.getByRole('link', { name: 'Tag Management' });
    this.stateTax = page.getByRole('link', { name: 'State Tax' });
    this.proposalTemp = page.getByRole('link', { name: 'Proposal Templates' });
    this.loanStatus = page.getByRole('link', { name: 'Loan Status Mapper' });
    this.cameraPackage = page.getByRole('link', { name: 'Camera Packages' });
  }
}
