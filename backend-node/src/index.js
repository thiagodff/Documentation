const express = require('express');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(express.json());

app.use(routes);

// if process.env === 'development'
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333);
