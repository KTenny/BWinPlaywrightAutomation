    import { test, expect } from '@playwright/test';
    import {loginPage} from '../../pages/login';

test('test', async ({ page }) => {

    const login = new loginPage(page);

    await login.gotoLoginPage();
    await login.login('standard_user','secret_sauce');


//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
});