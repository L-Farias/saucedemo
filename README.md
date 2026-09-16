🧪 Automação de Testes E2E com Playwright - SauceDemo

Este repositório contém a suíte de testes automatizados End-to-End (E2E) desenvolvida para a aplicação web SauceDemo.

O principal objetivo deste projeto é a prática contínua e aprimoramento de habilidades em Garantia de Qualidade (QA), com foco em automação de testes moderna, boas práticas de arquitetura de código e desenvolvimento profissional.

🎯 Objetivos do Projeto

Prática Profissional: Desenvolver scripts de automação robustos e confiáveis aplicando padrões de mercado.

Domínio de Ferramentas: Aprofundar conhecimentos no ecossistema do Playwright com JavaScript/TypeScript.

Gestão de Sincronismo: Trabalhar com interações de UI, auto-waiting, validações dinâmicas e gerenciamento de estado/sessão.

Versionamento: Aplicar boas práticas de controle de versão com Git e GitHub.

🚀 Tecnologias Utilizadas

Playwright: Framework principal para automação E2E.

Node.js: Ambiente de execução JavaScript.

Git & GitHub: Versionamento de código e hospedagem do repositório.

📋 Cenários de Teste Automatizados

[x] Autenticação: Validação de login com credenciais válidas.

[x] Tratamento de Erros: Validação de mensagens para usuários bloqueados ou dados incorretos.

[x] Navegação e Menu: Validação das opções da barra lateral (Logout, links de navegação).

[ ] Fluxo de Compras (E2E): Adição de produtos ao carrinho e finalização do checkout (em desenvolvimento).

🛠️ Como Executar o Projeto Localmente

Pré-requisitos

Possuir o Node.js (versão 18 ou superior) instalado em sua máquina.

Passo a Passo

Clonar o repositório:

git clone https://github.com/L-Farias/saucedemo.git
cd saucedemo


Instalar as dependências:

npm install


Instalar os navegadores do Playwright:

npx playwright install


Executar os testes:

Executar todos os testes em modo headless (segundo plano):

npx playwright test


Executar testes com a interface do navegador visível:

npx playwright test --headed


Executar um arquivo específico (ex: login.spec.js):

npx playwright test tests/login.spec.js


Abrir o painel interativo do Playwright (UI Mode):

npx playwright test --ui


Visualizar o Relatório de Execução:

npx playwright show-report


👤 Autor

Desenvolvido por L-Farias como parte da jornada de estudos e evolução contínua na área de Garantia de Qualidade e Automação de Testes.

Projeto mantido para fins de estudo e portfólio profissional.
