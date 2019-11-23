if (typeof window === 'undefined') {
	global.DancerClass = require('./DancerClass');
}

// eslint-disable-next-line no-undef
class TwinkleDancerClass extends DancerClass {
	constructor(top, left, timeBetweenSteps) {
		super(top, left, timeBetweenSteps);
	}

	step() {
		super.step();
		let color = this.arr[this.count];
		this.$node.style.border = `10px solid ${color}`; // 이렇게 스타일에 border를 직접 건드리면되더라구요!
		//this.$node.className = `twinkle${color}`;
		this.count = this.count + 1;
		if (this.count === 7) {
			this.count = 0;
		}
	}
	gone() {
		super.gone();
	}

	arrPush() {
		super.arrPush();
	}

	sort(order) {
		super.sort(order);
	}
	/*
	// 정렬메소드 2
	//document.querySelectorAll('span')[2].className.includes('twinkle') && !document.querySelectorAll('span')[2].className.includes('HJ')
	sort() {
		let target = document.querySelectorAll('span');
		for (let i = 0; i < target.length; i++) {
			if (target[i].className.includes('twinkle') && !target[i].className.includes('Hj')) {
				this.sortArr.push(target[i]);
			}
		}
	} */
}

// 구분되는 클래스가

if (typeof window === 'undefined') {
	module.exports = TwinkleDancerClass;
}
