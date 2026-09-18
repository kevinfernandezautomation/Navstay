import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { loginData } from '../test-data/loginData';


test.describe(
  'Navastay - Seguridad funcional del Login',
  () => {


    test.beforeEach(async ({ page }) => {

      const login = new LoginPage(page);

      await login.goto();

    });


    test(
      'LOGIN-015 - Password debe estar protegido',
      async ({ page }) => {

        const login = new LoginPage(page);

        await expect(
          login.password
        ).toHaveAttribute(
          'type',
          'password'
        );

      }
    );


    test(
      'LOGIN-016 - Password no aparece como texto visible',
      async ({ page }) => {

        const login = new LoginPage(page);

        const syntheticPassword =
          'QA_PASSWORD_TEST_987654!';

        await login.password.fill(
          syntheticPassword
        );

        const visibleText =
          await page.locator('body').innerText();

        expect(
          visibleText
        ).not.toContain(
          syntheticPassword
        );

      }
    );


    test(
      'LOGIN-017 - Credenciales inválidas no conceden acceso a Home',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.login(
          loginData.invalidUser,
          loginData.invalidPassword
        );

        await expect(page).not.toHaveURL(
          /\/home(?:\?|$)/
        );

        await expect(
          login.loginButton
        ).toBeVisible();

      }
    );


    test(
      'LOGIN-018 - Refresh posterior a autenticación fallida no concede acceso',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.login(
          loginData.invalidUser,
          loginData.invalidPassword
        );

        await login.verifyLoginRejected();

        await page.reload();

        await expect(page).not.toHaveURL(
          /\/home(?:\?|$)/
        );

      }
    );

  }
);