const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
router.post('/', controller.newFLight)
router.get('/', controller.allFLight)
router.get('/', controller.singleFlight)
router.patch('/:id', controller.updateFlight)
router.delete('/', controller.deleteFlight)


module.exports = router;

