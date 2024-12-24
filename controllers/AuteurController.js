const Auteur = require('../models/auteur');


const CreerAuteur = async (req , res) => {
    try{
        const auteur = await Auteur.create(req.body);
        res.status(201).json({message:"Auteur cree"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const AfficherAuteurs = async (req , res) => {
    try{
        const auteurs = await Auteur.findAll();
        res.status(200).json(auteurs)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const ModifierAuteur = async (req, res) =>{
    try{
        const { id } = req.params;
        const { nom, prenom, biographie } = req.body;
        // etape 1: recherche 
        const auteur = await Auteur.findByPk(id);
        // etape 2: verification
        if(!auteur){
            return res.status(404).json({error: 'auteur non trouve'})
        }
        auteur.nom = nom;
        auteur.prenom = prenom;
        auteur.biographie = biographie;
        await auteur.save()
        res.status(200).json({message:'auteur mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const SupprimerAuteur = async (req, res) =>{
    try{
        const { id } = req.params;
        // etape 1: recherche 
        const auteur = await Auteur.findByPk(id);
        // etape 2: verification
        if(!auteur){
            return res.status(404).json({error: 'auteur non trouve'})
        }
        await auteur.destroy()
        res.status(200).json({message:'auteur mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    CreerAuteur,
    AfficherAuteurs,
    ModifierAuteur,
    SupprimerAuteur
}