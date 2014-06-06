(function () {
    "use strict";

    var db = [
        {id:0, name: "test0" },
        {id:1, name: "test1" },
        {id:2, name: "test2" }
    ];

    module.exports = {
      list: function listAction (req, res, next) {
        res.send(db);
        return next();
      },

      getId: function getIdAction (req, res, next) {
        var id = parseInt(req.params.id);
        res.send(db[id]);
        return next();
      }
    }
}())