class Section {
  constructor(id, startPx, height = window.innerHeight, halt = defaultHalt, isFirst = false) {
    height = Math.max(document.getElementById(id).offsetHeight, window.innerHeight);
    this.id = id;
    this.startPx = startPx;
    this.contentHeight = (isFirst) ? Math.max(height, window.innerHeight) : Math.max(height + transitionHeight, window.innerHeight);
    this.height = this.contentHeight + halt;
    this.halt = halt;
    this.isFirst = isFirst;
    this.element = document.getElementById(id);
    this.element.style.height = height + "px";
    this.top = (isFirst) ? 0 : 5000;
    this.element.style.top = this.top + "px";
  }

  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
  }

  run(y) {
    this.top = (this.isFirst) ? Math.max(-y, window.innerHeight - this.contentHeight) : (y > this.startPx) ? Math.max(this.startPx + window.innerHeight - y + transitionHeight, window.innerHeight - this.contentHeight + transitionHeight) : 5000;
    this.element.style.top = this.top + "px";
    this.runScrollDependentBehavior(y);
  }
}