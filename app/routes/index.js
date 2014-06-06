module.exports = function routes(server) {

  var indexController = require('../controllers/indexController');
  server.get('/', indexController.list);
  server.get('/:id', indexController.getId)

}