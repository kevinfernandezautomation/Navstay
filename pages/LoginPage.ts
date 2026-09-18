import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  // Login
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  // Página autenticada
  readonly homeMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {

    this.page = page;

    // Selectores obtenidos realmente mediante Playwright Codegen
    this.username = page.getByRole('textbox', {
      name: 'username'
    });

    this.password = page.getByRole('textbox', {
      name: 'password'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Ingresar'
    });

    // Elementos observados después de iniciar sesión
    this.homeMenu = page.getByText('Home', {
      exact: true
    }).first();

    this.logoutButton = page.getByText('Salir', {
      exact: true
    }).first();
  }


  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================

  async goto() {

    await this.page.goto(
      '/ords/r/navastay/navasoft109/login_desktop'
    );

    await this.page.waitForLoadState('domcontentloaded');
  }


  // ==========================================================
  // LOGIN
  // ==========================================================

  async login(
    username: string,
    password: string
  ) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();
  }


  // ==========================================================
  // LOGIN CON CREDENCIALES DEL .ENV
  // ==========================================================

  async loginWithValidCredentials() {

    const username = process.env.NAVASTAY_USER;
    const password = process.env.NAVASTAY_PASSWORD;

    if (!username || !password) {

      throw new Error(
        'NAVASTAY_USER y NAVASTAY_PASSWORD deben estar configurados en .env'
      );
    }

    await this.login(
      username,
      password
    );
  }


  // ==========================================================
  // VERIFICAR PANTALLA DE LOGIN
  // ==========================================================

  async verifyLoginPage() {

    await expect(
      this.username
    ).toBeVisible();

    await expect(
      this.password
    ).toBeVisible();

    await expect(
      this.loginButton
    ).toBeVisible();
  }


  // ==========================================================
  // VERIFICAR LOGIN EXITOSO
  // ==========================================================

  async verifySuccessfulLogin() {

    // Evidencia 1: navegación a /home
    await expect(
      this.page
    ).toHaveURL(
      /\/home(?:\?|$)/,
      {
        timeout: 15_000
      }
    );

    // Evidencia 2: Home visible
    await expect(
      this.homeMenu
    ).toBeVisible({
      timeout: 10_000
    });

    // Evidencia 3: opción Salir visible
    await expect(
      this.logoutButton
    ).toBeVisible({
      timeout: 10_000
    });

    // Evidencia 4: botón de Login desapareció
    await expect(
      this.loginButton
    ).not.toBeVisible();
  }


  // ==========================================================
  // VERIFICAR LOGIN RECHAZADO
  // ==========================================================

  async verifyLoginRejected() {

    // No debe alcanzar Home
    await expect(
      this.page
    ).not.toHaveURL(
      /\/home(?:\?|$)/
    );

    // Debe continuar mostrando el formulario de Login
    await expect(
      this.username
    ).toBeVisible({
      timeout: 10_000
    });

    await expect(
      this.password
    ).toBeVisible({
      timeout: 10_000
    });

    await expect(
      this.loginButton
    ).toBeVisible({
      timeout: 10_000
    });
  }


  // ==========================================================
  // LIMPIAR CAMPOS
  // ==========================================================

  async clearCredentials() {

    await this.username.clear();

    await this.password.clear();
  }
}