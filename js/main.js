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
  var result = "";
  if (isNaN(gen_times) == true || isnull(gen_times) == true || (gen_times <= 0) == true) {//检测是否是非数值型
    mdui.alert('Invalid Input. Check again. ');
  } else {
    var i;
    for (i = 0; i < gen_times; i++) {
      var sentence_type = randomNum(0, 4);
      switch (sentence_type) {
        case 0:
          var m_range = randomNum(1, 357);
          var d_range = randomNum(0, 393);
          var j_range = randomNum(0, 4);
          result += (meishi[m_range] + jyoushi[j_range] + doushi[d_range] + '\n');
          break;
        case 1:
          var m_range = randomNum(1, 357);
          var f_range = randomNum(1, 24);
          var d_range = randomNum(1, 393);
          var j_range = randomNum(0, 4);
          result += (meishi[m_range] + jyoushi[j_range] + fukushi[f_range] + 'に' + doushi[d_range] + '\n');
          break;
        case 2:
          var m_range = randomNum(1, 357);
          var dt_range = randomNum(1, 393);
          var d_range = randomNum(1, 393);
          var j_range = randomNum(0, 4);
          result += (doushi_te[dt_range] + meishi[m_range] + jyoushi[j_range] + doushi[d_range] + '\n');
          break;
        case 3:
          var dm_range = randomNum(1, 28);
          var j_range = randomNum(0, 5);
          var f_range = randomNum(1, 24);
          var d_range = randomNum(1, 393);
          result += (daimeishi[dm_range] + jyoushi[j_range] + fukushi[f_range] + 'に' + doushi[d_range] + '\n')
        default:
          var i1;
          var rantimes = randomNum(1, 4);
          for (i1 = 0; i1 < rantimes; i1++) {
            var mc_range = randomNum(1, 448);
            result += (michi[mc_range]+' ');
          };
          result += ('\n');
          break;
      }
    };
    document.getElementById(gen_id).rows = (Number(gen_times) + 1);
    document.getElementById(gen_id).value = result;//输出到文本对象
  }
};
