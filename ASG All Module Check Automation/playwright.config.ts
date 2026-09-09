import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
declare const process: {
  env: Record<string, string | undefined>;
};
export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [

    // Authentication Setup
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },

    // Login Test
    {
      name: 'auth',
      testMatch: /.*auth\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },

    // Application Tests
    {
      name: 'chromium',
      testIgnore: /auth\/.*/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});