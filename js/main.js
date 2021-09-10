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

var bool = [
  'false',
  'true'
];

function isnull(val) {

  var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;

  if (str == '' || str == undefined || str == null) {
    return true;
  } else {
    return false;
  }
};

function gen(input_id, gen_id) {
  var gen_times = document.getElementById(input_id).value //取文本输入框值
  console.log(gen_times);
  console.log(isNaN(gen_times));
  console.log(isnull(document.getElementById(input_id).value))
  if (isNaN(gen_times) == true || isnull(gen_times) == true || (gen_times <= 0) == true) {//检测是否是非数值型
    mdui.alert('Check input');
  } else {
    var result="";
    var i;
    for (i = 0; i < gen_times; i++) {
      var result;
      var have_ni = randomNum(0, 1);
      if (have_ni == 0) {
        var m_range = randomNum(1, 13);
        var f_range = randomNum(0, 1);
        var d_range = randomNum(0, 3);
        var j_range = randomNum(0, 4);
        result += meishi[m_range] + jyoushi[j_range] + doushi[d_range] + "\n";
      } else {
        var m_range = randomNum(1, 13);
        var f_range = randomNum(0, 1);
        var d_range = randomNum(1, 3);
        var j_range = randomNum(0, 4);
        result += meishi[m_range] + jyoushi[j_range] + fukushi[1] + 'に' + doushi[d_range] + "\n";
      }
    }
  }
  ;
  console.log('have_ni:' + bool[have_ni] + ' m:' + meishi[m_range] + ' d_range:' + doushi[d_range] + ' j_range:' + jyoushi[j_range]);
  document.getElementById(gen_id).innerText = result;//输出到文本对象
};
