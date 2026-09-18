import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


test.describe(
  'Navastay - Login UI y accesibilidad básica',
  () => {


    test.beforeEach(async ({ page }) => {

      const login = new LoginPage(page);

      await login.goto();

    });


    test(
      'LOGIN-019 - Controles principales visibles',
      async ({ page }) => {

        const login = new LoginPage(page);

        await expect(
          login.username
        ).toBeVisible();

        await expect(
          login.password
        ).toBeVisible();

        await expect(
          login.loginButton
        ).toBeVisible();

      }
    );


    test(
      'LOGIN-020 - Controles principales habilitados',
      async ({ page }) => {

        const login = new LoginPage(page);

        await expect(
          login.username
        ).toBeEnabled();

        await expect(
          login.password
        ).toBeEnabled();

        await expect(
          login.loginButton
        ).toBeEnabled();

      }
    );


    test(
      'LOGIN-021 - Username puede recibir foco',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.username.focus();

        await expect(
          login.username
        ).toBeFocused();

      }
    );


    test(
      'LOGIN-022 - Password puede recibir foco',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.password.focus();

        await expect(
          login.password
        ).toBeFocused();

      }
    );


    test(
      'LOGIN-023 - Botón Ingresar puede recibir foco',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.loginButton.focus();

        await expect(
          login.loginButton
        ).toBeFocused();

      }
    );


    test(
      'LOGIN-024 - Navegación Username a Password mediante Tab',
      async ({ page }) => {

        const login = new LoginPage(page);

        await login.username.focus();

        await expect(
          login.username
        ).toBeFocused();

        await page.keyboard.press('Tab');

        await expect(
          login.password
        ).toBeFocused();

      }
    );

  }
);