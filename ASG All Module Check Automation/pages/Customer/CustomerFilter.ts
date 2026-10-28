import { Locator, Page } from '@playwright/test';

export class CustomerFilter {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly customerCardNumber1: Locator;
  readonly customerCardLabel: Locator;
  readonly filter: Locator;
  readonly branchFilter: Locator;
  readonly financeCompanyFilter: Locator;
  readonly officeFilter: Locator;
  readonly officeOptions: Locator;
  readonly teamSearch: Locator;
  readonly teamFilter: Locator;
  readonly buyoutFilter: Locator;
  readonly buyoutFilteroptions: Locator;
  readonly applyButton: Locator;
  readonly resetButton: Locator;
  readonly loanStatusFilter: Locator;
  readonly loanStatusFilteroptions: Locator;
  readonly accountStatusFilter: Locator;
  readonly accountStatusFilteroptions: Locator;
  readonly repFilter: Locator;
  readonly techFilter: Locator;
  readonly dateRangeCell: Locator;
  readonly dateRangeDropdown: Locator;
  readonly dateApplyButton: Locator;
  readonly previousButton: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.locator('#btnSearchCustomer');
    this.customerCardLabel = page.locator('.summary-label', {hasText: 'Customers'});
    this.customerCardNumber1 = page.locator('.summary-number').first();
    this.filter = page.getByRole('button', { name: 'Filter' });
    this.branchFilter = page.locator('#FilterBranch');
    this.financeCompanyFilter = page.locator('#FilterFinanceCompany');
    this.officeFilter = page.locator('button[data-id="FilterOffice"]');
    this.officeOptions = page.locator('ul.dropdown-menu.inner:visible').getByRole('option', { name: 'ASG Office', exact: true });
    this.teamFilter = page.locator('button[data-id="FilterTeam"]');
const teamSearch = page.locator(
  '.dropdown-menu.open .bs-searchbox input[aria-label="Search"]'
);
    this.teamSearch = teamSearch;
    this.buyoutFilter = page.locator('#BuyoutStatusFilter');
    this.buyoutFilteroptions = page.locator('#BuyoutStatusFilter');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.loanStatusFilter = page.locator('button[data-id="StatusList"]');
    this.loanStatusFilteroptions=  page.getByRole('listbox').getByRole('option', { name: 'Approved', exact: true });
    this.accountStatusFilter = page.locator('button[data-id="AccountStatus33"]');
    this.accountStatusFilteroptions = page.getByRole('listbox').getByRole('option', { name: 'Installed' });
    this.repFilter = page.getByRole('button', { name: 'All Sales Reps' });
    this.techFilter = page.getByRole('button', { name: 'All Techs' });
    this.dateRangeCell = page.locator('._GArn');
    this.dateRangeDropdown = page.locator('#DateRange');
    this.dateApplyButton = page.locator('button.btn-apply-Datefilter');
    this.previousButton = page.getByRole('button', { name: 'Previous', exact: true });
    this.nextButton = page.getByRole('button', { name: 'Next', exact: true });
  }
}
