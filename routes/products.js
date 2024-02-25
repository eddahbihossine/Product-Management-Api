const express = require('express');
const router = express.Router();


// get all products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});



exports.default = router;
