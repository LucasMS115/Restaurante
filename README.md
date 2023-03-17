# Restaurante

Running here: https://restaurante-sintese.netlify.app/#/
OBS: the project back-end was running with heroku free dynos. So, it is not running anymore :(

<p>SPA template for a restaurant with a reservation, login and adm systems using Node.js, Postgresql, Sequelize and React.js</p>

<p>Security features have not yet been implemented, the adm and reserves systems might need some upgrades as well :)</p>

<p>To run the backend locally use a DB on Postgresql, the connection is done in "./src/config/databese.js", run  " ... sequelize db:migrate" to create the tables.</p>

# Scripts:
<p>server -> run the back-end locally</p>
<p>client -> run the front-end</p>
<p>dev -> run both</p>


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<p>------------------------------------------------------------------------------------------------------------------------------</p>

<p>O projeto consiste em uma ideia de SPA para um sistema de reservas online de um restaurante, ele se encontra funcional e responsivo, porém não foram implementadas medidas de segurança em relação ao login dos usuários. Ele contém uma home page de apresentação, uma página com os formulários para a realização das reservas, uma página de cardápio que mostra pratos e preços e possui alguns filtros por tipo, uma página de login, uma página do usuário onde é possível visualizar as reservas feitas ou alterar informações cadastrais. Também há uma página de administrador para a visualização das reservas feitas e gerência dos pratos disponíveis no cardápio.</p>

<p> O back-end consiste de uma restfull API feita em Node.js, PostgreSQL e Sequelize ORM, esta se encontra na pasta raiz deste repositório. O front-end foi feito em React.js e se encontra na pasta “client” deste repositório. </p>

<h2>Rodando o projeto localmente</h2>

<p>Para rodar o back-end localmente, clone este repositório normalmente e execute o comando npm install na pasta raiz, para instalar as dependências do back-end, mude para o diretório client e execute o mesmo comando para instalar as dependências do front. </p>

<p>Apenas isto já torna possível a execução local do front, basta executar o comando npm run client no diretório raiz, ou npm run start no diretório client. A aplicação iniciará na porta 3000 do seu localhost utilizando a API hospedada no https://www.heroku.com/.</p>

<p>Para utilizar uma API local, crie um BD no PostgresSQL da maneira que preferir, e crie um arquivo “.env” na pasta raiz do projeto com as variáveis a seguir e preencha de acordo com as informações do seu banco.</p>

<p>
NODE_ENV=dev <br>
APP_URL= onde a aplicacao iniciará (ex: http://localhost:5000) <br>
DATABASE_URL=postgres://postgres:<sua senha>@<seu host>:5432/<nome do seu banco> <br>
USER=postgres <br>
PASSWORD=<sua senha> <br>
DATABASE=<nome do seu banco> <br>
HOST=seu host (ex: 127.0.0.1)
</p>

<p>Após feita a conexão, execute o comando npx sequelize-cli db:migrate para rodar as migrations e criar as tabelas no seu BD.</p>

<p>Para conectar a sua API local ao front basta mudar a url presente no início do arquivo ./client/src/Api.js para onde ela esteja rodando.</p>

<p>Pode ser útil a consulta a documentação do Sequilize caso ocorra algum imprevisto. https://sequelize.org/master/index.html
Vale lembrar também que a configuração de conexão do sequelize está em ./src/config/database.js .</p>

<p>Para iniciar apenas o server da API, npm run server na pasta raiz, para iniciar a API local e o front, npm run dev na raiz.</p>

<p>Nem todas as funcionalidades presentes na API são utilizadas de fato no projeto, todas as funções estão em ./src/sql/controllers/ . OBS: as funcionalidades relacionadas a upload de imagens só funcionam rodando localmente, elas foram testadas no back porém não foram implementadas no front, imagens carregadas ficam na pasta ./uploads.</p>

<h2>Alguns vídeos que serviram como base para a construção da aplicação:</h2>

<span>-Iniciando com react</span>
<p>https://youtu.be/sBws8MSXN7A <br>
<p>https://youtu.be/Law7wfdg_ls</p>

<span>-Context API</span>
<p>https://youtu.be/FVxdFxxkdDI</p>

<span>Nav-bar responsiva com styled-components</span>
<p>https://youtu.be/GGkBwpxV7AI</p>

<span>- Sequelize</span>
<p>https://youtu.be/mpKXSe08yqA <br>
https://youtu.be/Fbu7z5dXcRs</p>
</p>
<span>-A respeito do upload de imagens:</span>
<p>https://youtu.be/MkkbUfcZUZM</p>

<p>Link do design original: https://www.figma.com/file/80SIALyhhM0GZ34m5YzGsG/Restaurante-S%C3%ADntese?node-id=0%3A1 </p>

