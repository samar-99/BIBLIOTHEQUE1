const { sequelize } = require('../config/db')



const Auteur = require('./auteur');
const Livre = require('./livre');


Auteur.hasMany(Livre, { foreignKey: 'auteur_id'});
Livre.belongsTo(Auteur, { foreignKey: 'auteur_id'});

sequelize.sync({force: false})
    .then(()=> console.log('database synchronized'))
    .catch((error) => console.log('error database synchronization:',error))


module.exports= {
    sequelize,
    Livre,
    Auteur
}

/**
 * one-to-one
 * one-to-many
 * many-to-one
 * many-to-many etudiant, formations, inscription
 */