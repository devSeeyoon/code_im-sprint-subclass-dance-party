if (typeof window === 'undefined') {
	var jsdom = require('jsdom');
	var { JSDOM } = jsdom;
	var { document } = new JSDOM('').window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
	// 컨스트럭터, 메소드를 받는게 있죵
	constructor(top, left, timeBetweenSteps) {
		this.$node = createDancerElement();
		this.timeBetweenSteps = timeBetweenSteps;
		this.count = 0;
		this.arr = ['Red', 'Orangered', 'Yellow', 'Green', 'Blue', 'Navy', 'Indigo']; // 순서.....
		this.count2 = 0;
		this.switArr = ['On', 'Off'];
		this.step();
		// this.step2();
		this.setPosition(top, left);
		this.gone();
	}

	step() {
		setTimeout(this.step.bind(this), this.timeBetweenSteps);
	}

	step2() {
		setTimeout(this.step2.bind(this), this.timeBetweenSteps);
	}

	setPosition(top, left) {
		Object.assign(this.$node.style, {
			top: `${top}px`,
			left: `${left}px`,
		});
	}

	gone() {
		let target = this.$node;
		target.onclick = function() {
			target.style.animation = "bigger 1s linear 1 forwards";
			Object.assign(target.style, {
				top: `${(Math.random()+ 0.5 )* 100}px`,
				left: `${(Math.random()+ 0.5) * 100}px`
			})
		}
	}
}

const createDancerElement = () => {
	let elDancer = document.createElement('span');
	elDancer.className = 'dancer';
	return elDancer;
};
// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
	module.exports = DancerClass;
}
