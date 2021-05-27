require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const cors = require('./config/cors.config');
const logger = require('morgan');

const app = express();

app.use(express.static(`${__dirname}/react-app`));

app.use(express.json());
app.use(logger('dev'));
app.use(cors);


const router = require('./config/routes.config');
app.use('/api', router);

/** Configuración de rutas para Docker: Le digo que todas las peticiones GET las envíe al INDEX-HTML siempre y cuando no empiecen
 * por /API */ 
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/react-app/index.html`)
})


/** ERRORS */
app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.ValidationError) error = createError(400, error)
    else if (error instanceof mongoose.Error.CastError) error = createError(404, 'Resourcenot found')
    else if (error.message.incudes('E11000')) error = createError(400, 'Already exists')
    else if (!error.status) error = createError(500, error)

    console.error(error);


    const data = {}
    data.message = error.message;
    data.error = error.errors ? 
        Object.keys(error.errors)
            .reduce((error, key) => ({...error, [key]: error.errors[key]?.message || error.errors[key] }), {}) :
        undefined;

    res.status(error.status),json(data)
});

const port = Number(process.env.PORT || 3001);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Ready! Listening on port ${port}`)
    })
}

module.exports = app;
