if (typeof window === 'undefined') {
	global.DancerClass = require('./DancerClass');
}

// eslint-disable-next-line no-undef
class TwinkleDancerClass extends DancerClass {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps); // 다시 할당하면 기존 assign이 풀림!!   // step()  // setposition() // thisnode
		// this. arr ~
		// create() -> setposion !!!!!!!!!
		//
	}

	step() {
		super.step();
		let color = this.arr[this.count];
		this.$node.className = `twinkle${color}`;
		this.count = this.count + 1;
		if (this.count === 7) {
			this.count = 0;
		}
	}
	gone() {
		super.gone();
	}
	// 정렬메소드 2
	//document.querySelectorAll('span')[2].className.includes('twinkle') && !document.querySelectorAll('span')[2].className.includes('HJ')
	sort() {
		let target = document.querySelectorAll('span');
		for (let i = 0; i < target.length; i++) {
			if (target[i].className.includes('twinkle') && !target[i].className.includes('Hj')) {
				this.sortArr.push(target[i]);
			}
		}
	}
}

// 구분되는 클래스가

if (typeof window === 'undefined') {
	module.exports = TwinkleDancerClass;
}
