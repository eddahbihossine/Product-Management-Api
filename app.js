const e = require('express');
const express = require('express');
const app = express();

try 
{
    const productRoutes = require('./routes/products');
    app.use('/products', productRoutes);
}
catch (error) { 
    console.log(error);
}


module.exports = app;