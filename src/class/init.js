/* eslint-disable */
const dancers = [];

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
function handleClickDancerButton3() {
	/* makeBlinkyDancer is the dancer maker functions available in global scope.
	 * A new object of the given type will be created and added
	 * to the stage.
	 */

	// make a dancer with a random position
	let HjDancer = new HjDancerClass(
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 1000
	);

	document.body.appendChild(HjDancer.$node);
}

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.addDancerButton');
	elAddDancerButton.addEventListener('click', handleClickDancerButton);
});

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('#HjDancer');
	elAddDancerButton.addEventListener('click', handleClickDancerButton3);
});
