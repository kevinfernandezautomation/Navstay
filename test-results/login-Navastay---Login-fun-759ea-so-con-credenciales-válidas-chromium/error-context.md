# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Navastay - Login funcional >> LOGIN-003 - Login exitoso con credenciales válidas
- Location: tests\login.spec.ts:38:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('Salir', { exact: true }).first()
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" getByText('Salir', { exact: true }).first() with timeout 10000ms
  - waiting for getByText('Salir', { exact: true }).first()
    23 × locator resolved to <a title="" target="" data-otel-label="" href="apex_authentication.logout?p_app_id=104&p_session_id=216563667152869">Salir</a>
       - unexpected value "hidden"

```

```yaml
- link "Saltar al contenido principal":
  - /url: "#main"
- banner:
  - link "Inicio":
    - /url: /ords/r/navastay/navasoft109/home?session=216563667152869
    - img "Inicio"
  - list:
    - listitem:
      - button "About"
    - listitem:
      - link "Notificaciones 19":
        - /url: "#action$a-dialog-open?url=%2Fords%2Fr%2Fnavastay%2Fnavasoft109%2Fnotificaciones%3Fsession%3D216563667152869%26dialogCs%3DRLg2K-7X_iCL_tjUQeitbRsIPn_Yv8iqrL3Pk8FHfQYW3OQi6PXpIGINKa9SAJRvaX3nw_LnoSLcadpfnuUZKQ&appId=104&pageId=182&tmpl=modal-dialog&title=Notificaciones&h=auto&w=720&mxw=960&isModal=true&dlgCls=&pageCls=&trgEl=%2377947985183491638"
    - listitem:
      - button "Seguridad"
    - listitem:
      - button "PRUEBA"
  - menubar:
    - menuitem "Home"
    - menuitem "📋 General"
    - menuitem "🗃️ Administrativo"
    - menuitem "⚙️ Operativo"
    - menuitem "📢 Comunicación"
    - menuitem "❌ Salir"
- main:
  - region "Breadcrumb":
    - heading "Breadcrumb" [level=2]
    - 'heading "Nava Stay: Donde cada inmueble encuentra su orden" [level=1]':
      - text: Nava
      - img
      - text: "Stay: Donde cada inmueble encuentra su orden"
    - text: Inmueble PRUEBA SIR ▾ VIERNES, 18 DE SEPTIEMBRE DE 2026
  - img
  - text: Casos Activos 2
  - img
  - text: Reservas Activas 0
  - img
  - text: Facturas de Venta Registradas 25
  - img
  - text: Facturas de Compra Registradas 10
  - link "Facturas de Venta Cuotas mantenimiento y otros cobros":
    - /url: /ords/r/navastay/navasoft109/83?session=216563667152869
    - img
    - paragraph: Facturas de Venta
    - paragraph: Cuotas mantenimiento y otros cobros
  - link "Recibos Comprobantes de pago":
    - /url: /ords/r/navastay/navasoft109/21?session=216563667152869
    - img
    - paragraph: Recibos
    - paragraph: Comprobantes de pago
  - link "Estados de Cuenta Por propiedad":
    - /url: /ords/r/navastay/navasoft109/42?session=216563667152869
    - img
    - paragraph: Estados de Cuenta
    - paragraph: Por propiedad
  - link "Facturas de Compra Proveedores":
    - /url: /ords/r/navastay/navasoft109/94?session=216563667152869
    - img
    - paragraph: Facturas de Compra
    - paragraph: Proveedores
  - link "Pagos Historial y programación":
    - /url: /ords/r/navastay/navasoft109/92?session=216563667152869
    - img
    - paragraph: Pagos
    - paragraph: Historial y programación
  - link "Facturas Pendientes Requieren atención":
    - /url: /ords/r/navastay/navasoft109/99?session=216563667152869
    - img
    - paragraph: Facturas Pendientes
    - paragraph: Requieren atención
  - link "Reservas Áreas comunes y espacios":
    - /url: /ords/r/navastay/navasoft109/71?session=216563667152869
    - img
    - paragraph: Reservas
    - paragraph: Áreas comunes y espacios
  - link "Convocatorias Asambleas y reuniones":
    - /url: /ords/r/navastay/navasoft109/65?session=216563667152869
    - img
    - paragraph: Convocatorias
    - paragraph: Asambleas y reuniones
  - link "Actas Registro de acuerdos":
    - /url: /ords/r/navastay/navasoft109/67?session=216563667152869
    - img
    - paragraph: Actas
    - paragraph: Registro de acuerdos
  - paragraph: Ingresos vs. gastos
  - text: últimos 6 meses
  - 'application "Visualización de Datos: Gráfico"':
    - img: 0 50 K 100 K 150 K 200 K 250 K 300 K Abr May Jun Jul Ago Sep
    - img
  - text: Moneda
  - combobox "Moneda":
    - option "COLON" [selected]
  - paragraph: Estado de facturas
  - text: al día de hoy
  - 'application "Visualización de Datos: Tarta: Estado de Facturas"':
    - img: Pagadas Pendientes Pendientes Pagadas
    - img
- contentinfo:
  - text: Release 2.0
  - link "Inicio de la página":
    - /url: "#top"
```

# Test source

```ts
  44  |   // ==========================================================
  45  |   // NAVEGACIÓN
  46  |   // ==========================================================
  47  | 
  48  |   async goto() {
  49  | 
  50  |     await this.page.goto(
  51  |       '/ords/r/navastay/navasoft109/login_desktop'
  52  |     );
  53  | 
  54  |     await this.page.waitForLoadState('domcontentloaded');
  55  |   }
  56  | 
  57  | 
  58  |   // ==========================================================
  59  |   // LOGIN
  60  |   // ==========================================================
  61  | 
  62  |   async login(
  63  |     username: string,
  64  |     password: string
  65  |   ) {
  66  | 
  67  |     await this.username.fill(username);
  68  | 
  69  |     await this.password.fill(password);
  70  | 
  71  |     await this.loginButton.click();
  72  |   }
  73  | 
  74  | 
  75  |   // ==========================================================
  76  |   // LOGIN CON CREDENCIALES DEL .ENV
  77  |   // ==========================================================
  78  | 
  79  |   async loginWithValidCredentials() {
  80  | 
  81  |     const username = process.env.NAVASTAY_USER;
  82  |     const password = process.env.NAVASTAY_PASSWORD;
  83  | 
  84  |     if (!username || !password) {
  85  | 
  86  |       throw new Error(
  87  |         'NAVASTAY_USER y NAVASTAY_PASSWORD deben estar configurados en .env'
  88  |       );
  89  |     }
  90  | 
  91  |     await this.login(
  92  |       username,
  93  |       password
  94  |     );
  95  |   }
  96  | 
  97  | 
  98  |   // ==========================================================
  99  |   // VERIFICAR PANTALLA DE LOGIN
  100 |   // ==========================================================
  101 | 
  102 |   async verifyLoginPage() {
  103 | 
  104 |     await expect(
  105 |       this.username
  106 |     ).toBeVisible();
  107 | 
  108 |     await expect(
  109 |       this.password
  110 |     ).toBeVisible();
  111 | 
  112 |     await expect(
  113 |       this.loginButton
  114 |     ).toBeVisible();
  115 |   }
  116 | 
  117 | 
  118 |   // ==========================================================
  119 |   // VERIFICAR LOGIN EXITOSO
  120 |   // ==========================================================
  121 | 
  122 |   async verifySuccessfulLogin() {
  123 | 
  124 |     // Evidencia 1: navegación a /home
  125 |     await expect(
  126 |       this.page
  127 |     ).toHaveURL(
  128 |       /\/home(?:\?|$)/,
  129 |       {
  130 |         timeout: 15_000
  131 |       }
  132 |     );
  133 | 
  134 |     // Evidencia 2: Home visible
  135 |     await expect(
  136 |       this.homeMenu
  137 |     ).toBeVisible({
  138 |       timeout: 10_000
  139 |     });
  140 | 
  141 |     // Evidencia 3: opción Salir visible
  142 |     await expect(
  143 |       this.logoutButton
> 144 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  145 |       timeout: 10_000
  146 |     });
  147 | 
  148 |     // Evidencia 4: botón de Login desapareció
  149 |     await expect(
  150 |       this.loginButton
  151 |     ).not.toBeVisible();
  152 |   }
  153 | 
  154 | 
  155 |   // ==========================================================
  156 |   // VERIFICAR LOGIN RECHAZADO
  157 |   // ==========================================================
  158 | 
  159 |   async verifyLoginRejected() {
  160 | 
  161 |     // No debe alcanzar Home
  162 |     await expect(
  163 |       this.page
  164 |     ).not.toHaveURL(
  165 |       /\/home(?:\?|$)/
  166 |     );
  167 | 
  168 |     // Debe continuar mostrando el formulario de Login
  169 |     await expect(
  170 |       this.username
  171 |     ).toBeVisible({
  172 |       timeout: 10_000
  173 |     });
  174 | 
  175 |     await expect(
  176 |       this.password
  177 |     ).toBeVisible({
  178 |       timeout: 10_000
  179 |     });
  180 | 
  181 |     await expect(
  182 |       this.loginButton
  183 |     ).toBeVisible({
  184 |       timeout: 10_000
  185 |     });
  186 |   }
  187 | 
  188 | 
  189 |   // ==========================================================
  190 |   // LIMPIAR CAMPOS
  191 |   // ==========================================================
  192 | 
  193 |   async clearCredentials() {
  194 | 
  195 |     await this.username.clear();
  196 | 
  197 |     await this.password.clear();
  198 |   }
  199 | }
```