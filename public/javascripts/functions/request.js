/**
 * @Description:
 * @params:
 * @return:
 * Created by chencc on 2018/12/22.
 */

document.getElementById('loginBtn').click=function(){
  console.log('22222')
}

function goEgg () {
  console.log('http://jandan.net/pic')
  console.log('请求煎蛋的网站')
}

function goHupu() { // 进来了
  // document.write("land on");
  console.log('请求虎扑的网站')
}
function goCatMovie() { // 猫眼电影的接口
  getUrl('/spider/catMovie?starName='+ 'aaa')
  console.log('请求猫眼电影')
}
function goBbTree() {
  console.log('请求宝宝树')
}

function getUrl(url) { // 请求接口
  //步骤一:创建异步对象
  let ajax = new XMLHttpRequest();
  //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
  ajax.open('get',url);
  //步骤三:发送请求
  ajax.send();
  //步骤四:注册事件 onreadystatechange 状态改变就会调用
  ajax.onreadystatechange = function () {
    if (ajax.readyState===4 && ajax.status===200) {
      //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
      console.log(ajax.responseText);//输入相应的内容
      let title = (JSON.parse(ajax.responseText).title);//输入相应的内容
      document.getElementById('renderDiv').innerHTML = title
    }
  }
}


/*
module.exports = {
  loginClick: function() {
    console.log('请求后端的按钮')
  }
}*/
