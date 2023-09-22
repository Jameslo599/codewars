// Simple Events

class Event {
  constructor() {
    this.subs = 0;
    this.handlers = [];
    this.args = 0;
  }

  subscribe(fn) {
    this.fn = fn;
    this.handlers.push({
      id: this.subs,
      sub: true,
      f: this.fn,
    });
    this.subs++;
  }
  unsubscribe() {
    for (let i = this.handlers.length - 1; i >= 0; i--) {
      if (!this.handlers[i].f.calls || this.handlers[i].sub === false) continue;
      this.handlers[i].sub = false;
      break;
    }
  }
  emit(...args) {
    for (const element of this.handlers) {
      if (element.sub === false) continue;
      element.f();
      element.f.args = args;
    }
  }
}

//Pseudocode
// declare handler variable to store function. write subscribe method which
// sets handler = fn. write unsubscribe method which changes handler back to null.
// write emit method which takes ...args rest parameter syntax and we use for of loop
// to call handler using arg of args
