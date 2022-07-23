/*
 * @Author: szx
 * @Date: 2022-07-23 13:24:12
 * @LastEditTime: 2022-07-23 13:24:12
 * @Description:
 * @FilePath: \push-markdown\vitest.config.js
 */
/**
 * Config for global end-to-end tests
 * placed in project root tests folder
 * @type {import('vite').UserConfig}
 * @see https://vitest.dev/config/
 */
const config = {
  test: {
    /**
     * By default, vitest search test files in all packages.
     * For e2e tests have sense search only is project root tests folder
     */
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    /**
     * A default timeout of 5000ms is sometimes not enough for playwright.
     */
    testTimeout: 120000 * 5,
    hookTimeout: 120000 * 5
  }
};

export default config;
