import { test, expect } from '@playwright/test';

test.describe('Menu lateral - Sauce Demo', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Acessar a página e fazer login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();    
    
    // 2. Abre o menu lateral em todos os testes
    await page.locator('#react-burger-menu-btn').click();
  });

  test('Test redirecionar para All items', async ({ page }) => {
    await page.locator('#inventory_sidebar_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Deve redirecionar para a página About', async ({ page }) => {
    // Não precisa clicar no #react-burger-menu-btn aqui, o beforeEach já abriu o menu!
    await page.locator('#about_sidebar_link').click();
    await expect(page).toHaveURL(/saucelabs.com/);
  });

  test('Deve realizar Logout com sucesso', async ({ page }) => {
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Deve resetar o estado da aplicação ao clicar em Reset App State', async ({ page }) => {
    await page.locator('#react-burger-cross-btn').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    const contadorCarrinho = page.locator('.shopping_cart_badge');
    await expect(contadorCarrinho).toHaveText('1');
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#reset_sidebar_link').click();
    await expect(contadorCarrinho).toBeHidden();
  });

});