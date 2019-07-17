/**
 * 
 */
window.onload = init;
//window.onresize = init;

function init(){
	readJson("../resource/json/index.json", function(json) {
		var list = json.list;
		var innerList = document.getElementById("inner_list");
		var str = "";
		for (var i = 0; i < list.length; i++) {
			str += "<li class=\"inner_item\" onclick=\"redirect(innerText)\">" + list[i].title + "</li>";
		}
		innerList.innerHTML = str;
		var items = innerList.getElementsByClassName("inner_item");
		var totalHeight = list.length*72;
		var height =getHeight()-72;
		for (var i = 0; i < items.length; i++) {
			items[i].style.width = totalHeight>height?"225px":"228px";
			console.log(totalHeight+"/"+height+"/"+items[i].style.width);
		}
	});
}

function redirect(type){
	type = type.toLowerCase();
	window.open("../"+type);
}

function readJson(url, fun) {
	var request = new XMLHttpRequest();
	request.open("get", url);
	request.send(null);
	request.onload = function() {
		if (request.status == 200) {
			var json = JSON.parse(request.responseText)
			fun(json);
		}
	}
}

function getWidth() {
	// 获取窗口宽度
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientWidth) {
		winWidth = document.documentElement.clientWidth;
	}
	return winWidth;
}

function getHeight() {
	// 获取窗口高度
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientHeight) {
		winHeight = document.documentElement.clientHeight;
	}
	return winHeight;
}