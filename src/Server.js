const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./api/api_neuronal_network');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api/neuronal', api);

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
    console.log('The server is running in port', app.get('port'));
});