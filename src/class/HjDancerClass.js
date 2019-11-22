/* global TwinkleDancerClass */
if (typeof window === 'undefined') {
	global.DancerClass = require('./DancerClass');
} // you don't have to worry about this code. this is for testing.

class HjDancerClass extends TwinkleDancerClass {
	// 슈퍼로 받는다
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
	}

	// 메소드를 재정의
	step() {
		//step의 메소드를 물려받았지..
		super.step();
		if (this.count2 === 0) {
			this.$node.className = `${this.$node.className} Hj ${this.switArr[this.count2]}`;
			this.count2 = this.count2 + 1;
		} else if (this.count2 === 1) {
			this.$node.className = `${this.$node.className} Hj ${this.switArr[this.count2]}`;
			this.count2 = this.count2 - 1;
		}
	}
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
	module.exports = HjDancerClass;
}
