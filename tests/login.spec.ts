import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test.describe('Navastay - Login funcional', () => {


  test(
    'LOGIN-001 - Pantalla de Login carga correctamente',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.goto();

      await login.verifyLoginPage();

    }
  );


  test(
    'LOGIN-002 - Credenciales configuradas en .env',
    async () => {

      expect(
        process.env.NAVASTAY_USER
      ).toBeTruthy();

      expect(
        process.env.NAVASTAY_PASSWORD
      ).toBeTruthy();

    }
  );


  test(
    'LOGIN-003 - Login exitoso con credenciales válidas',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.goto();

      await login.verifyLoginPage();

      await login.loginWithValidCredentials();

      await login.verifySuccessfulLogin();

    }
  );

});