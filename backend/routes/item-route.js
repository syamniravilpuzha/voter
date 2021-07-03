var express = require('express');
var router = express.Router();
let itemController = require('../controllers/item-controller');

// item routes
router.post('/save-item',itemController.saveItem.bind(itemController));
router.get('/get-items',itemController.getAllItems.bind(itemController));
router.put('/vote/:id',itemController.updateVote.bind(itemController));
module.exports = router;