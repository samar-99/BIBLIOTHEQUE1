const {  DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Livre = sequelize.define('Livre',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT
    },
    date_publication:{
        type: DataTypes.DATE
    },
    theme:{
        type: DataTypes.STRING
    }
})

module.exports = Livre;