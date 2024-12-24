const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Auteur = sequelize.define('Auteur',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    biographie:{
        type: DataTypes.TEXT
    },
})

module.exports = Auteur;