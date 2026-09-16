import {test, expect} from '@playwright/test';

test.describe('Funcionalidade de Checkout - Sauce Demo', () => {

        test('Login deve ser realizado com sucesso e checkout da pagina', async ({page}) => {
        //1. Acessar a página de login do Sauce Demo
        await page.goto('https://www.saucedemo.com/');
        //2.c Preencher o campo de usuário com nome valido e senha valida
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // Implementar o caso de teste para checkout bem-sucedido
        await page.goto('https://www.saucedemo.com/inventory.html');

        const botaoCheckout = page.locator('#react-burger-menu-btn');
        await botaoCheckout.waitFor({ state: 'visible' });
        await botaoCheckout.click();

        //await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});