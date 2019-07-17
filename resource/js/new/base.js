/**
 * 
 */

window.onload = search

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

function search(){
	var input = document.getElementById("html_header_search_input");
	console.log(input.value);
	if(!input.value){
		return;
	}
	window.open("https://wanandroid.com/article/query?k="+input.value);
}