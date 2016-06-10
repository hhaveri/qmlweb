registerQmlType(class {
  static module = 'QtQuick';
  static element = 'Animation';
  static versions = /.*/;
  static baseClass = 'QtQml.QtObject';
  static direct = true;

  static enums = {
    Animation: {
      Infinite: -1
    }
  };

  static properties = {
    alwaysRunToEnd: 'bool',
    loops: { type: 'int', initialValue: 1 },
    paused: 'bool',
    running: 'bool'
  };

  constructor(meta) {
    callSuper(this, meta);
  }
  restart() {
    this.stop();
    this.start();
  }
  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  pause() {
    this.paused = true;
  }
  resume() {
    this.paused = false;
  }
  complete() {
    // To be overridden
    console.log('Unbound method for', this);
  }
});
