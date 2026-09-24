import {test, expect} from '@playwright/test';

test.describe('Teste de carrinho - Sauce Demo', () =>{

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
    });

    test('Deve adicionar múltiplos produtos ao carrinho e atualizar o badge', async ({ page }) => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    const badgeCarrinho = page.locator('.shopping_cart_badge');
    await expect(badgeCarrinho).toHaveText('2');
    });

    test('Deve remover um produto do carrinho diretamente da vitrine', async ({ page }) => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('#remove-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
    });

    test('Deve exibir os produtos corretos dentro da página do carrinho', async ({ page }) => {
      await page.locator('#add-to-cart-sauce-labs-backpack').click();
      await page.locator('.shopping_cart_link').click();
      await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
      const itemCarrinho = page.locator('.cart_item');
      await expect(itemCarrinho.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
      await expect(itemCarrinho.locator('.inventory_item_price')).toHaveText('$29.99');
    });

    test('Deve remover um produto de dentro da página do carrinho', async ({ page }) => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#remove-sauce-labs-backpack').click();
    await expect(page.locator('.cart_item')).toHaveCount(0);
    });

    test('Deve retornar à loja ao clicar em Continue Shopping', async ({ page }) => {
    await page.locator('.shopping_cart_link').click();
    await page.locator('#continue-shopping').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
});