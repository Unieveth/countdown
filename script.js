var Timer = function(opts) {
  var self = this;

  self.opts     = opts || {};
  self.element  = opts.element || null;
  self.minutes  = opts.minutes || 0;
  self.seconds  = opts.seconds || 30;

  self.start = function() {
    self.interval = setInterval(countDown, 1000);
  };

  self.stop = function() {
    clearInterval(self.interval);
  };

  function countDown() {
    self.seconds--;
    if (self.minutes == 0 && self.seconds == 0) {
      self.stop();
    }

    if (self.seconds < 0) {
      self.seconds = 59;
      self.minutes--;
    }

    if (self.seconds <= 9) { self.seconds = '0' + self.seconds; }

    self.element.textContent = self.minutes + ':' + self.seconds;
  }
};

var myTimer = new Timer({
  minutes: 5,
  seconds: 00,
  element: document.querySelector('#timer')
});

myTimer.start();