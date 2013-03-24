// Generated by CoffeeScript 1.4.0
(function() {

  module.exports = (function() {
    /*
    */

    function _Class(options) {
      if (typeof options === "function") {
        options = {
          from: options,
          to: options
        };
      }
      this.options = options;
    }

    /*
    */


    _Class.prototype.from = function(value, next) {
      return this._transform("from", value, next);
    };

    /*
    */


    _Class.prototype.to = function(value, next) {
      return this._transform("to", value, next);
    };

    /*
    */


    _Class.prototype._transform = function(method, value, next) {
      var transform;
      transform = this.options[method];
      if (!transform) {
        return next(null, value);
      }
      if (transform.length === 1) {
        return next(null, transform(value));
      } else {
        return transform(value, next);
      }
    };

    return _Class;

  })();

}).call(this);