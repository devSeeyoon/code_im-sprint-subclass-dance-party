if (typeof window === 'undefined') {
	var jsdom = require('jsdom');
	var { JSDOM } = jsdom;
	var { document } = new JSDOM('').window;
} // you don't have to worry about this code. this is for testing.
const dancers = [];
// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
	// 컨스트럭터, 메소드를 받는게 있죵
	constructor(top, left, timeBetweenSteps) {
		this.$node = createDancerElement();
		this.timeBetweenSteps = timeBetweenSteps;
		this.count = 0;
		this.arr = ['red', 'orange', 'yellow', 'green', 'blue', 'midnightblue', 'purple']; // 순서.....
		this.count2 = 0;
		this.switArr = ['On', 'Off'];
		this.step();
		// this.step2();
		this.setPosition(top, left);
		this.gone();

		//정렬에 필요한 배열
		//this.sortArr = [];
		this.arrPush();
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
			Object.assign(target.style, {
				top: `${600 + (Math.random() + 0.5) * 100}px`,
				left: `${120 +(Math.random() + 1.5) * 100}px`,
			});
		};
	}

	// 정렬을 합시다

	arrPush() {
		// eslint-disable-next-line no-undef
		dancers.push(this); // 자기 자신을 전역의 arr 추가, 즉시실행도 시켜놓음 , 즉 만들어지는순간 추가됨
	}

	sort(order) {
		// 좌우로 정렬을 누르면 이 메소드가 실행되게 되어있습니다! 이 메소드는 자기 자신의 위치를 다시 재조정하는데 left를 배열의 인덱스 가지고 잡게 되어있습니다
		let target = this.$node;
		Object.assign(target.style, {
			top: `300px`,
			left: `${order * 50}px`,
		});
	}
	/*
	sort() {
		//각 클래스들을 배열에 담아서
		let target = document.querySelectorAll('span');
		for (let i = 0; i < target.length; i++) {
			if (target[i].className === this.$node.className) {
				this.sortArr.push(target[i]);
			}
		}
	}*/
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
