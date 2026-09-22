import {test, expect} from '@playwright/test';

test.describe('Teste de filtro - Sauce Demo', () => {

    test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();    
    });

    test('Deve ordenar os produtos por Preço (do menor para o maior)', async ({ page }) => {
    // 1. Seleciona o elemento <select> pelo seletor CSS ou pela classe .product_sort_container
    const seletorFiltro = page.locator('.product_sort_container');

    // 2. Altera o filtro para "Price (low to high)" usando o valor do atributo 'value' ('lohi')
    await seletorFiltro.selectOption('lohi');

    // 3. Captura os preços de todos os produtos exibidos na página
    // O locator '.inventory_item_price' pega todos os preços da lista
    const elementoPrecos = page.locator('.inventory_item_price');
    const textosPrecos = await elementoPrecos.allTextContents();

    // 4. Converte os textos (ex: "$7.99") para números (ex: 7.99)
    const precosNumericos = textosPrecos.map(preco => parseFloat(preco.replace('$', '')));

    // 5. Valida se o primeiro item é o mais barato ($7.99) e o último o mais caro ($49.99)
    expect(precosNumericos[0]).toBe(7.99);
    expect(precosNumericos[precosNumericos.length - 1]).toBe(49.99);

    // 6. (Opcional) Valida se toda a lista está em ordem crescente
    const precosOrdenados = [...precosNumericos].sort((a, b) => a - b);
    expect(precosNumericos).toEqual(precosOrdenados);
    });

    test('Deve ordenar os produtos de Z a A', async ({ page }) => {
    // 1. Altera a ordenação para Nome (Z a A) usando a value 'za'
    await page.locator('.product_sort_container').selectOption('za');

    // 2. Captura os nomes do primeiro e do último produto visíveis
    const primeiroProduto = page.locator('.inventory_item_name').first();
    const ultimoProduto = page.locator('.inventory_item_name').last();

    // 3. Valida se o primeiro produto começa com 'T' (Test.allTheThings() T-Shirt)
    // e o último começa com 'A' (Sauce Labs Backpack)
    await expect(primeiroProduto).toHaveText('Test.allTheThings() T-Shirt (Red)');
    await expect(ultimoProduto).toHaveText('Sauce Labs Backpack');
    });
})