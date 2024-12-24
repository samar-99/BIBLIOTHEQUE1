const { Op } = require('sequelize');
const Livre = require('../models/livre');

const CreerLivre = async (req , res) => {
    try{
        const livre = await Livre.create(req.body);
        res.status(201).json({message:"Livre cree"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const AfficherLivres = async (req , res) => {
    try{
        const livres = await Livre.findAll();
        res.status(200).json(livres)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const ModifierLivre = async (req, res) =>{
    try{
        const { id } = req.params;
        // etape 1: recherche 
        const livre = Livre.findByPk(id);
        // etape 2: verification
        if(livre){
            return res.status(404).json({error: 'livre non trouve'})
        }
        await Livre.update(req.body)
        res.status(200).json({message:'livre mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const SupprimerLivre = async (req, res) =>{
    try{
        const { id } = req.params;
        // etape 1: recherche 
        const livre = Livre.findByPk(id);
        // etape 2: verification
        if(livre){
            return res.status(404).json({error: 'livre non trouve'})
        }
        await livre.destroy()
        res.status(200).json({message:'livre mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const AfficherLivresParAuteurId = async (req, res) =>{
    try{
        
        const { auteurID } = req.params;

        const livres = await Livre.findAll({
            where : { auteur_id: auteurID}
        })
        
        res.status(200).json(livres);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const AfficherLivrerParTitreOuDescrption  = async (req, res) =>{
    try{
        
        const { searchText } = req.query

        const livres = await Livre.findAll({
            where : { 
                [Op.or]:[
                    {titre: {[Op.like]: `%${searchText}%`}},
                    {description: {[Op.like]: `%${searchText}%`}},
                ]
            }
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    CreerLivre,
    AfficherLivres,
    ModifierLivre,
    SupprimerLivre,
    AfficherLivresParAuteurId,
    AfficherLivrerParTitreOuDescrption
}