MyGame.input.Keyboard = function (model) {
  let that = {
    keys: {},
    handlers: {}
  };

  function keyPress(e) {
    that.keys[e.key] = e.timeStamp;
  }

  function keyRelease(e) {
    delete that.keys[e.key];
  }

  that.update = function (elapsedTime) {
    // console.log(that.keys);
    for (let key in that.keys) {
      if (that.keys.hasOwnProperty(key)) {
        if (that.handlers[key]) {
          that.handlers[key](elapsedTime);
        }
      }
    }
  };

  that.register = function (key, handler) {
    that.handlers[key] = handler;
  };

  that.unregister = function (key) {
    delete that.handlers[key];
  }


  window.addEventListener('keydown', keyPress);
  window.addEventListener('keyup', keyRelease);

  return that;
};
