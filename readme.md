# Configurando o ORM Sequelize no NodeJS com ExpressJS

O Sequelize é um ORM (Object-Relational Mapper) para Node.js, que tem suporte aos seguintes bancos de dados: 

* PostgreSQL
* MariaDB
* MySQL
* SQLite
* MSSQL

Como ORM ele faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.

Ele permite criar, buscar, alterar e remover dados do banco de dados utilizando métodos JS, além de permitir a modificação da estrutura das tabelas, com isso temos muita facilidade tanto na criação, população e migração de banco de dados.

## Artigo Relacionado

* https://blog.rocketseat.com.br/nodejs-express-sequelize/

## Comandos Banco de Dados

* npx sequelize migration:create --name=create-users
* npx sequelize db:migrate

## Links uteis

* https://sequelize.org/v5/
* https://sequelize.org/master/manual/model-querying-finders.html
* https://sequelize.org/master/manual/migrations.html#the-sequelizerc-file