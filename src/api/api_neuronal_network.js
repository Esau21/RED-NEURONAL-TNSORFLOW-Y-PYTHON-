const express = require('express');
const PredictController = require('../controllers/predict');
const router = express.Router();

router.get('/predict', PredictController.getPredict_NeuronalNetwork);

module.exports = router;

