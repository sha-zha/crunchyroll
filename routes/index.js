var express = require('express');
var router = express.Router();
const mainController = require("../controllers/MainController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crunchyroll' });
});

router.get('/liste', mainController.index);
router.post('/listing',mainController.listing);

module.exports = router;
