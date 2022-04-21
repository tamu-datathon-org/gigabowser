class Sponsors extends Section {
  constructor(id, startPx, height, isFirst = false) {
    // height = 1200; // override default height
    super(id, startPx, height, isFirst);
  }
  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }
}