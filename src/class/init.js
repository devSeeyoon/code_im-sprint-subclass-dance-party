/* eslint-disable */
const dancers = [];

const arr = [];  // 전역에 빈 arr 선언

function arrSort () {  // 각 클래스에 빈 arr로 자기 자신을 집어 넣는 메쏘드와 sort 메쏘드(이건 위치를 다시 지정) 2개가 구현되어있습니다(상속으로 댄서를 봐주세요)
  for (let i=0; i<arr.length; i=i+1) {
	  arr[i].sort(i+1); // 어레이에서 순서대로 자기 자신의 메쏘드를 실행! -> 좌우로 정렬에 클릭 메쏘드로 달아서 클릭하면 싫행됩니다
  }
}
/*
// 각 클래스마다 정렬 함수담는 함수를 만든다
function arrSort() {
	let d = new DancerClass();
	let t = new TwinkleDancerClass();
	let h = new HjDancerClass();

	// d.sort();
	// t.sort();
	// h.sort();

	//배열에 el는 하나의 HTML문장이므로 div.arr에 appendChild만 해주자
	for (let i = 0; i < d.sortArr; i++) {
		document.querySelector('.arr').appendChild(d.sortArr[i]);
	}
	for (let i = 0; i < t.sortArr; i++) {
		document.querySelector('.arr').appendChild(t.sortArr[i]);
	}
	for (let i = 0; i < h.sortArr; i++) {
		document.querySelector('.arr').appendChild(h.sortArr[i]);
	}
}
*/

function handleClickDancerButton() {
	/* makeBlinkyDancer is the dancer maker functions available in global scope.
	 * A new object of the given type will be created and added
	 * to the stage.
	 */

	// make a dancer with a random position
	let dancer = new BlinkyDancerClass(
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 1000
	);
	document.body.appendChild(dancer.$node);
}

//환장댄스버튼 추가 HjDancerClass HjDancer

function handleClickDancerButtonTwinkle() {
	let dancer = new TwinkleDancerClass(
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 500
	);

	document.body.appendChild(dancer.$node);
}

function handleClickDancerButton3() {
	let HjDancer = new HjDancerClass(
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 1000
	);

	document.body.appendChild(HjDancer.$node);
	for (let i = 0; i < document.getElementsByClassName('Hj').length; i++) {
		document.getElementsByClassName('Hj')[i].innerHTML = `<i class="fas fa-walking"></i>`;
	}

	// document.getElementsByClassName('Hj').innerHTML = ``;
}

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.addDancerButton');
	elAddDancerButton.addEventListener('click', handleClickDancerButton);
});

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('#HjDancer');
	elAddDancerButton.addEventListener('click', handleClickDancerButton3);
});

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.addDancerButtonTwinkle');
	elAddDancerButton.addEventListener('click', handleClickDancerButtonTwinkle);
});


window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.sortArr');
	elAddDancerButton.addEventListener('click', arrSort);
});

