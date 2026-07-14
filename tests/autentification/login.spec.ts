import { test, expect } from '@playwright/test';

test('login_test', async ({ page }) => {
  await page.goto('https://demos.staging.khor.mx/');

  await page.getByRole('textbox', { name: 'Usuario info-circle' })
    .fill('patricio.escalante');

  await page.getByRole('textbox', { name: 'Contraseña' })
    .fill('Pato12345@');

  await page.getByRole('button', { name: 'Iniciar Sesión' })
    .click();

  await expect(page).toHaveURL(
    'https://demos.staging.khor.mx/companies'
  );
});

