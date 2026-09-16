//Realiza o import da bliblioteca de testes Playwright
import {test, expect} from '@playwright/test';

//Descrição do caso de teste e inicialização dos metodos de teste
test.describe('Funcionalidade de Login - Sauce Demo', () => {

    test('Login não deve ser realizado senha inválida', async ({page}) => {
        //1. Acessar a página de login do Sauce Demo
        await page.goto('https://www.saucedemo.com/');

        //2.a Preencher o campo de usuário com nome valido e senha invalida
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('senha_invalida');
        await page.locator('#login-button').click();

        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Login não deve ser realizado usuário inválido', async ({page}) => {
        //1. Acessar a página de login do Sauce Demo
        await page.goto('https://www.saucedemo.com/');
        //2.b Preencher o campo de usuário com nome invalido e senha valida
        await page.locator('#user-name').fill('usuário_errado');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Login deve ser realizado com sucesso', async ({page}) => {
        //1. Acessar a página de login do Sauce Demo
        await page.goto('https://www.saucedemo.com/');
        //2.c Preencher o campo de usuário com nome valido e senha valida
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });


});