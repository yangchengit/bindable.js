// Generated by CoffeeScript 1.6.2
(function() {
  var CollectionSetter, FnSetter, ObjSetter;

  FnSetter = require("./fn");

  ObjSetter = require("./object");

  CollectionSetter = require("./collection");

  module.exports = (function() {
    function _Class() {}

    /*
    */


    _Class.prototype.createSetter = function(binding, target) {
      if (!target) {
        return null;
      }
      if (typeof target === "function") {
        return new FnSetter(binding, target);
      } else if (target.__isCollection) {
        return new CollectionSetter(binding, target);
      } else if (target.insert || target.update || target.remove || target.replace) {
        return new ObjSetter(binding, target);
      }
      return null;
    };

    return _Class;

  })();

}).call(this);