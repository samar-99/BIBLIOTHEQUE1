const express = require('express');
const router = express.Router();

const {
    AfficherLivresParAuteurId,
    AfficherLivrerParTitreOuDescrption,
    CreerLivre,
    AfficherLivres,
    ModifierLivre,
    SupprimerLivre
} = require('../controllers/LivreController');



router.post('/livres', CreerLivre);

router.get('/livres', AfficherLivres);

router.put('/livres/:id', ModifierLivre);


router.delete('/livres/:id', SupprimerLivre);


router.get('/livres/:auteurID', AfficherLivresParAuteurId);
router.get('/livres/search', AfficherLivrerParTitreOuDescrption);


module.exports = router