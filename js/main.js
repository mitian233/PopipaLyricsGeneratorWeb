function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
};
var bool=[
  'False',
  'True'
];

function gen(text) {
  var have_ni = randomNum(0,1);
  console.log(bool[have_ni])
  var m_range = randomNum(0, 13);
  console.log('Meishi:' + m_range);
  var f_range = randomNum(0, 1);
  console.log('Fukushi:' + f_range);
  var d_range = randomNum(0, 3);
  console.log('Doushi:' + d_range);
  var j_range = randomNum(0, 4);
  console.log('Jyoushi:' + j_range);
  var result = meishi[m_range]+jyoushi[j_range]+doushi[d_range];
  console.log(result);
  document.getElementById(text).innerText = result;
};
