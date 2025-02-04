Teste Automatizado de Login

Este projeto contém testes automatizados para verificar diferentes cenários de login inválido no site SauceDemo.

📂 Estrutura do Projeto

📦 cypress/ ┣ 📂 downloads/ # Diretório para downloads durante os testes ┣ 📂 e2e/ # Testes de ponta a ponta ┃ ┗ 📜 Testemanual.cy.js # Arquivo com os testes automatizados ┣ 📂 fixtures/ # Arquivos de dados para os testes ┃ ┗ 📜 example.json # Exemplo de dados utilizados nos testes ┣ 📂 support/ # Suporte para os testes ┃ ┣ 📜 commands.js # Comandos personalizados do Cypress ┃ ┗ 📜 e2e.js # Configuração global do Cypress ┣ 📜 cypress.config.js # Configuração do Cypress ┣ 📜 package.json # Dependências e scripts do projeto

✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

Node.js

Cypress

📥 Instalação

Clone o repositório:

git clone https://github.com/Fgneto690/Teste-automatizado-de-login.git cd Teste-automatizado-de-login

Instale as dependências do projeto:

npm install

🚀 Executando os Testes

Para executar os testes, utilize o seguinte comando:

npx cypress open

Isso abrirá a interface do Cypress, onde você pode selecionar e rodar os testes.

📝 Testes

Os testes estão localizados no arquivo Testemanual.cy.js e cobrem os seguintes cenários de login inválido:

🔹 Login inválido (Nome de usuário inválido)

Visita a página de login

Insere um nome de usuário inválido

Insere a senha correta

Clica no botão de login

Verifica se a mensagem de erro é exibida

🔹 Login inválido (Senha inválida)

Visita a página de login

Insere o nome de usuário correto

Insere uma senha inválida

Clica no botão de login

Verifica se a mensagem de erro é exibida

🔹 Login inválido (Usuário e senha inválidos)

Visita a página de login

Insere um nome de usuário inválido

Insere uma senha inválida

Clica no botão de login

Verifica se a mensagem de erro é exibida

📌 Estrutura dos Arquivos

example.json: Contém dados de exemplo usados nos testes.

commands.js: Define comandos personalizados do Cypress.

e2e.js: Configuração global do Cypress.

cypress.config.js: Configuração principal do Cypress.

package.json: Arquivo de configuração do npm, contendo as dependências do projeto.

🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

📜 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
