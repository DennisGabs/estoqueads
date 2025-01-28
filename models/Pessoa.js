import { DataTypes } from "sequelize"
import db from "../database.js"

const Pessoa = db.sequelize.define(
    'pessoas',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100)
        },
        telefone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        }
    }
);

Pessoa.sync()
export default Pessoa