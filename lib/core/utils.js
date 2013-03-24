// Generated by CoffeeScript 1.4.0
(function() {

  exports.tryTransform = function(transformer, method, value, callback) {
    if (!transformer) {
      return callback(null, value);
    }
    return transformer[method].call(transformer, value, callback);
  };

}).call(this);