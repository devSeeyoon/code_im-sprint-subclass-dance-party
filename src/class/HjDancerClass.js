/* global TwinkleDancerClass */
if (typeof window === 'undefined') {
	global.DancerClass = require('./DancerClass');
} // you don't have to worry about this code. this is for testing.

class HjDancerClass extends TwinkleDancerClass {
	// 슈퍼로 받는다
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
		this.icon();
	}

	// 메소드를 재정의
	step() {
		//step의 메소드를 물려받았지..
		super.step();
		this.$node.style.borderRadius = "50px";
		this.$node.style.animation = "changeSize 3s linear infinite";
		this.$node.style.borderWidth = "10px";
	}

	arrPush() {
		super.arrPush();
	}

	sort(order) {
		super.sort(order);
	}

	icon() {
		this.$node.innerHTML = `<i class="fas fa-walking fa-3x"></i>`;
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
