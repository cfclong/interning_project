mask();
function mask(){
	var mask = document.querySelectorAll(".mask");
	var delMask = document.querySelector(".del-mask");
	var maskTel = document.querySelector(".mask-tel");
	var body = document.querySelector("body");
	for(let i = 0;i < mask.length; i++){
		mask[i].onclick = function(){
			//if(maskTel.style.display == "none"){
				maskTel.style.display = "block";
				body.style.overflow = "hidden";
			//};
		}
	}
	delMask.onclick = function(){
		maskTel.style.display = "none";
		body.style.overflow = "auto";
	}
}
