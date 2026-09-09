import { test, expect } from '@playwright/test';


test.setTimeout(120000);
test('Funding Auditing', async ({ page }) => {
  await page.goto('/auditing-list');
  await page.getByRole('heading', { name: 'Funding Audit Queue' }).click();
  // Wait for pagination to appear after search results load
      const nextButton = page.getByRole('button', { name: 'Next →' });
  
      await expect(nextButton).toBeVisible({ timeout: 30000 });
  
      // Scroll to pagination
      await nextButton.scrollIntoViewIfNeeded();
  
      // Click Next
      await nextButton.click();
  
      // Find the new Previous button after pagination updates
      const previousButton = page.getByRole('button', { name: '← Prev' })
      await previousButton.click();
  
});