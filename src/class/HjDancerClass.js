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
	}

	arrPush() {
		super.arrPush();
	}

	sort(order) {
		super.sort(order);
	}
	/*
	//정렬메소드3
	sort() {
		let target = document.querySelectorAll('span');
		for (let i = 0; i < target.length; i++) {
			if (target[i].className.includes('Hj')) {
				this.sortArr.push(target[i]);
			}
		}
	} */
}

//HJ가

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
	module.exports = HjDancerClass;
}
