/**
 * 
 */

window.onload = readHomeJson

function readHomeJson(){
	readJson("../api/home/home.json", function (json){
		var list = json.list;
		
		var ul = document.getElementById("content_list");
		
		var str = "";
		
		for(var i = 0; i < list.length; i ++){
			var item = list[i];
			
			str += "<li class=\"list_item left\">" +
					"<span class=\"list_item_tag\" onclick=\"toTagView(innerText)\">"+item.tag+"</span>" +
					"<a class=\"list_item_title\" href=\""+item.url+"\" target=\"_blank\">"+item.title+"</a>" +
					"<span class=\"list_item_time\">发布于"+item.ctime+"</span>" +
					"<a class=\"list_item_read\" href=\""+item.url+"\" target=\"_blank\">阅读全文</a>";
		}
		
		ul.innerHTML = str;
	});
}

function toTagView(innerText){
	if("Android" == innerText){
		window.open("https://wanandroid.com");
	}else{
		window.open("https://www.baidu.com");
	}
}

