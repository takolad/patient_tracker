const router = require('express').Router();
const personnel_routes = require('./personnel_routes.js');
const patient_routes = require('./patient-routes.js');
const room_routes = require('./room_routes.js');



router.use('/personnel_routes', personnel_routes);
router.use('/patient', patient_routes);
router.use('/room', room_routes);

module.exports = router;