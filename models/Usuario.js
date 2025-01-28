import db from "../database.js"
import Pessoa from "./Pessoa.js"

const Usuario = db.sequelize.define(
    'usuarios',
    {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: db.Sequelize.STRING(100)
        },
        senha: {
            type: db.Sequelize.STRING(250)
        },
        categoria: {
            type: db.Sequelize.INTEGER
        },
        status: {
            type: db.Sequelize.INTEGER
        }
    }
);

Usuario.belongsTo(Pessoa, {
    foreignKey: 'pessoa_id',
    constraints: true,
    onDelete: 'CASCADE',
    as: 'pessoa'
});

Usuario.sync()

export default Usuario