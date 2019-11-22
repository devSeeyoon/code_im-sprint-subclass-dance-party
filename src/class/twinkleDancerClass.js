if (typeof window === 'undefined') {
	global.DancerClass = require('./DancerClass');
} 

// eslint-disable-next-line no-undef
class TwinkleDancerClass extends DancerClass {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);  // 다시 할당하면 기존 assign이 풀림!!   // step()  // setposition() // thisnode
    // this. arr ~
    // create() -> setposion !!!!!!!!!
    // 
  }

  step() {
    super.step();
    let color = this.arr[this.count];
    this.$node.className = `twinkle${color}`
    this.count = this.count +1;
    if (this.count === 7) {
        this.count = 0;
    }
  }
  gone() {
    super.gone();
  }
}

if (typeof window === 'undefined') {
	module.exports = TwinkleDancerClass;
}