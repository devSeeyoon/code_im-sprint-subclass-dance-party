/* global BlinkyDancerClass */
if (typeof window === 'undefined') {
	global.BlinkyDancerClass = require('./DancerClass');
} // you don't have to worry about this code. this is for testing.

class HjDancerClass extends BlinkyDancerClass {
	// 슈퍼로 받는다
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.$node = createDancerElement2();
	}

	// 메소드를 재정의
	step() {
		//step의 메소드를 물려받았지..
		super.step();
	}
}

const createDancerElement2 = () => {
	let elDancer = document.createElement('span');
	elDancer.className = 'dancer hj';
	return elDancer;
};

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
	module.exports = HjDancerClass;
}
