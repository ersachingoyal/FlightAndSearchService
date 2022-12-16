const express = require('express');
const router = express.Router();


const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes); //sp if we have any route that starts with v1 will be routed to v1ApiRoutes

module.exports = router;