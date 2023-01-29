const Predict = require('../models/model');

const getPredict_NeuronalNetwork = (req, res) => {
    const prediction = Predict.predict(Number(req.query.input));
    res.send({result: prediction});
};

module.exports = {
    getPredict_NeuronalNetwork
}