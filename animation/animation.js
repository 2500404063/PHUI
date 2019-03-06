function anim_scale(obj){
	obj.classList.add("anim-scale");
	setTimeout(function(){
		obj.classList.remove("anim-scale");
	},300)
}
function anim_fadein(obj){
	obj.classList.add("anim-fadein");
	setTimeout(function(){
		obj.classList.remove("anim-fadein");
	},300)
}