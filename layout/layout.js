let phui_keep_list = new Array();
document.body.onload = function(){
	var li = document.getElementsByClassName("layout-keepwh");
	console.log(li);
	for (var i = 0; i < li.length; i++) {
		phui_keep_list.push(li[i].clientHeight / li[i].clientWidth);
	}
}
document.body.onresize = function(){
	var li = document.getElementsByClassName("layout-keepwh");
	for (var i = 0; i < li.length; i++) {
		li[i].style.height = (li[i].clientWidth * phui_keep_list[i]) + "px";
	}
}