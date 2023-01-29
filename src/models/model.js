const tf = require('@tensorflow/tfjs')

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});


const xs = tf.tensor2d([1,2,3,4],[4,1]);
const ys = tf.tensor2d([1,3,5,7], [4,1]);

model.fit(xs, ys, {epochs: 10}).then(() => {
    console.log("Comenzando entrenamiento");
});

const predict = (input) => {
    const prediction =  model.predict(tf.tensor2d([input], [1,1]));
    return prediction.dataSync()[0];
};


module.exports = {
    predict
};