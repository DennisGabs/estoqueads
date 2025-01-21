import { DataTypes } from "sequelize";
import db from "../database.js"

const Produto = db.sequelize.define(
  'produtos',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(150)
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    estoque: {
        type: DataTypes.INTEGER
    },
    status: {
        type: db.Sequelize.INTEGER
    },
    foto: {
        type: DataTypes.STRING(250)
    }
  }
);

Produto.sync()
export default Produto