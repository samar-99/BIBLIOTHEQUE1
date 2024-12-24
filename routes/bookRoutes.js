const express = require('express')
const { CreerAuteur, AfficherAuteurs, ModifierAuteur, SupprimerAuteur } = require('../controllers/AuteurController')

const router = express.Router()

router.post('/auteur', CreerAuteur);

router.get('/auteur', AfficherAuteurs);

router.put('/auteur/:id', ModifierAuteur);

router.delete('/auteur/:id', SupprimerAuteur);

module.exports = router