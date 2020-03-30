const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const cors = require('cors');
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', routes);

app.listen(8080, () => console.log('Server listening on port 8080'));