import { Locator, Page } from '@playwright/test';

export class CustomerPage {
  readonly page: Page;
  readonly newCustomer: Locator;
  readonly pageHeading: Locator;
  readonly prequalifyTab: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly zipCode: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly dob: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly secondaryPhone: Locator;
  readonly ssn: Locator;
  readonly nextStep: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newCustomer = page.locator('a[title="New Customer"]');
    this.pageHeading = page.locator('.asg_light_table_header');
    this.prequalifyTab = page.getByRole('tab', { name: 'Pre Qualify' });
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.address = page.locator('#Address');
    this.zipCode = page.getByRole('textbox', { name: 'Zip' });
    this.city = page.getByRole('textbox', { name: 'City' });
    this.state = page.getByRole('combobox', { name: 'State' });
    this.dob = page.getByRole('textbox', { name: 'Date Of Birth' });
    this.email = page.locator('#EmailAddress');
    this.phone = page.locator('#HomePhone');
    this.secondaryPhone = page.locator('#CellPhone');
    this.ssn = page.locator('#SocialSecurityNumber');
    this.nextStep = page.getByRole('button', { name: 'Next Step' });
  }
}
