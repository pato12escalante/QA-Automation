import { test, expect } from '@playwright/test';
test.setTimeout(120000);
test('test_direcciones', async ({ page }) => {
  await page.goto('https://demos.staging.khor.mx/');
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).click();
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).fill('patricio.escalante');
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Pato123456@');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('Enter');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).first().click();
  await page.getByRole('img', { name: 'cover' }).click();
  await page.locator('div:nth-child(3) > .ant-card-body > .anticon > svg').first().click();
  await page.getByRole('menu').getByText('Personas').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Buscar...' }).click();
  await page.getByRole('textbox', { name: 'Buscar...' }).fill('genaroooo');
  await page.getByRole('textbox', { name: 'Buscar...' }).press('Enter');
  await page.getByRole('cell', { name: 'INT00003539 mail genarooo.' }).locator('a').click();
  await page.waitForTimeout(5000);
  await page.getByRole('tab', { name: 'Direcciones' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agregar' }).click();
  await page.getByRole('combobox', { name: '* Tipo de Vía' }).click();
  await page.getByText('Calle').nth(1).click();
  await page.getByRole('textbox', { name: '* Calle' }).click();
  await page.getByRole('textbox', { name: '* Calle' }).fill('1');
  await page.getByRole('textbox', { name: 'No. Exterior' }).click();
  await page.getByRole('textbox', { name: 'No. Exterior' }).fill('3');
  await page.getByRole('textbox', { name: 'No. Interior' }).click();
  await page.getByRole('textbox', { name: 'No. Interior' }).fill('3');
  await page.getByRole('textbox', { name: 'Edificio' }).click();
  await page.getByRole('textbox', { name: 'Edificio' }).fill('Black');
  await page.getByRole('textbox', { name: 'Código Postal' }).click();
  await page.getByRole('textbox', { name: 'Código Postal' }).fill('97124');
  await page.getByRole('textbox', { name: 'Colonia' }).click();
  await page.getByRole('textbox', { name: 'Colonia' }).fill('Rodriguez Vazquez');
  await page.getByRole('combobox', { name: '* País' }).click();

  await page.getByRole('combobox', { name: '* País' }).fill('mex');

  await page.getByText('México').nth(1).click();

  await page.getByRole('combobox', { name: '* Estado' }).click();

  await page.getByRole('combobox', { name: '* Estado' }).fill('yuca');

  await page.getByText('Yucatán').nth(1).click();

  await page.getByRole('combobox', { name: '* Municipio' }).click();

  await page.getByRole('combobox', { name: '* Municipio' }).fill('pro');

  await page.getByText('Progreso').click();

  await page.getByRole('textbox', { name: 'Referencia' }).click();
  await page.getByRole('textbox', { name: 'Referencia' }).fill('Casa blanca');
  await page.getByRole('switch', { name: '* ¿Domicilio Fiscal?' }).click();
  await page.getByRole('switch', { name: '¿Dirección preferida?' }).click();
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.waitForTimeout(2000);

});

test('test_telefonos', async ({ page }) => {
  await page.goto('https://demos.staging.khor.mx/');
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).click();
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).fill('patricio.escalante');
  await page.getByRole('textbox', { name: 'Usuario info-circle' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Pato123456@');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('Enter');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).first().click();
  await page.getByRole('img', { name: 'cover' }).click();
  await page.locator('div:nth-child(3) > .ant-card-body > .anticon > svg').first().click();
  await page.getByRole('menu').getByText('Personas').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Buscar...' }).click();
  await page.getByRole('textbox', { name: 'Buscar...' }).fill('genaroooo');
  await page.getByRole('textbox', { name: 'Buscar...' }).press('Enter');
  await page.getByRole('cell', { name: 'INT00003539 mail genarooo.' }).locator('a').click();
  await page.waitForTimeout(5000);
  await page.getByRole('tab', { name: 'Teléfonos' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agregar' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: '* Número Telefónico' }).click();
  await page.getByRole('textbox', { name: '* Número Telefónico' }).fill('9997451204');
  await page.getByRole('textbox', { name: 'Extensión' }).click();
  await page.getByRole('textbox', { name: 'Extensión' }).fill('104');
  await page.getByRole('textbox', { name: 'Código País question-circle' }).click();
  await page.getByRole('textbox', { name: 'Código País question-circle' }).fill('52');
  await page.getByRole('textbox', { name: 'Código Internacional question' }).click();
  await page.getByRole('textbox', { name: 'Código Internacional question' }).fill('00');
  await page.getByRole('textbox', { name: 'Código Nacional question-' }).click();
  await page.getByRole('textbox', { name: 'Código Nacional question-' }).fill('99');
  await page.getByRole('combobox', { name: '* Tipo de Línea' }).click();
  await page.getByText('LINEA 15').click();
  await page.getByRole('combobox', { name: '* Tipo de Teléfono' }).click();
  await page.getByText('Corporativo').click();
  await page.getByRole('switch', { name: '¿Teléfono Preferido?' }).click();
  /*await page.getByRole('button', { name: 'Sí, continuar' }).click();*/
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.waitForTimeout(2000);


});