import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loja', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


await sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso!')
}).catch((err) => console.log('Erro: ' + err))
export default {Sequelize, sequelize}