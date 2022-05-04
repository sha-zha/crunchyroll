var express = require('express');
var router = express.Router();
const mainController = require("../controllers/MainController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crunchyroll' });
});

router.get('/liste', mainController.index);
router.get('/show/:id', mainController.show);
router.get('/listing',mainController.listing);
router.get('/showing/:id', mainController.showing);

module.exports = router;
