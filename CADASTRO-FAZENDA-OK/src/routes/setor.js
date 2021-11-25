var express = require('express');
var router = express.Router();

var setorController = require('../controllers/setorController');

router.get('/', function (req, res) {
  setorController.testar(req, res);
});

router.post('/setor/:idFazenda', function (req, res) {
  setorController.setor(req, res);
});

module.exports = router;
