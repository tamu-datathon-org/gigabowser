class Information extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200;  override default height
    super(id, startPx, height, halt, isFirst);
  }
  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }
}

// put interaction based code under here (button clicks, hover event, etc)