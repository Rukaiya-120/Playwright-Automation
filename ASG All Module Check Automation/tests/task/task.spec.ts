import { test, expect } from '@playwright/test';

import { TaskPage } from '../../pages/TaskPage';

test.setTimeout(120000);

test('Task List ', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await page.goto('/tasks');
  await expect(taskPage.taskListHeader).toBeVisible();
});