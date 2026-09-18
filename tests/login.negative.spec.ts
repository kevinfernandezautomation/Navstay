import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { loginData } from '../test-data/loginData';


test.describe('Navastay - Login negativo', () => {


  test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.verifyLoginPage();

  });


  test(
    'LOGIN-004 - Usuario inexistente y password incorrecto',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.invalidUser,
        loginData.invalidPassword
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-005 - Usuario válido y password incorrecto',
    async ({ page }) => {

      const username =
        process.env.NAVASTAY_USER;

      if (!username) {

        throw new Error(
          'NAVASTAY_USER no está configurado'
        );

      }

      const login = new LoginPage(page);

      await login.login(
        username,
        loginData.invalidPassword
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-006 - Usuario vacío',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.password.fill(
        loginData.invalidPassword
      );

      await login.loginButton.click();

      await expect(
        login.username
      ).toBeVisible();

      await expect(page).not.toHaveURL(
        /\/home(?:\?|$)/
      );

    }
  );


  test(
    'LOGIN-007 - Password vacío',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.username.fill(
        loginData.invalidUser
      );

      await login.loginButton.click();

      await expect(
        login.password
      ).toBeVisible();

      await expect(page).not.toHaveURL(
        /\/home(?:\?|$)/
      );

    }
  );


  test(
    'LOGIN-008 - Usuario y password vacíos',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.loginButton.click();

      await expect(
        login.username
      ).toBeVisible();

      await expect(
        login.password
      ).toBeVisible();

      await expect(page).not.toHaveURL(
        /\/home(?:\?|$)/
      );

    }
  );


  test(
    'LOGIN-009 - Usuario compuesto solamente por espacios',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.whitespace,
        loginData.invalidPassword
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-010 - Password compuesto solamente por espacios',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.invalidUser,
        loginData.whitespace
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-011 - Caracteres especiales',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.specialCharacters,
        loginData.specialCharacters
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-012 - Caracteres Unicode',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.unicodeUser,
        loginData.invalidPassword
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-013 - Usuario de longitud elevada',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.longUser,
        loginData.invalidPassword
      );

      await login.verifyLoginRejected();

    }
  );


  test(
    'LOGIN-014 - Password de longitud elevada',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.login(
        loginData.invalidUser,
        loginData.longPassword
      );

      await login.verifyLoginRejected();

    }
  );

});