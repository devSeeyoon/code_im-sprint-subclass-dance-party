if (typeof window === 'undefined') {
  var jsdom = require('jsdom');
  var { JSDOM } = jsdom;
  var { document } = (new JSDOM('')).window;
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다

function Dancer (top, left, timeBetweenSteps) {
  // your code here

  this.$node = createDancerElement();

  this.step(timeBetweenSteps);
  this.setPostion(top, left)
  
}

const createDancerElement = () => {
  let elDancer = document.createElement('span');
  elDancer.className = 'dancer';
  return elDancer;
};

//메소드 생성

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step, timeBetweenSteps)
}

Dancer.prototype.setPostion = function(top, left) {
  Object.assign(this.$node.style, {
    top: `${top}px`,
    left: `${left}px`
  });
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = Dancer;
}
