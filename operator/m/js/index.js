mask();
function mask(){
	var btnMask = document.querySelectorAll(".btn_mask");
	var delMask = document.querySelector(".delete");
	var mask = document.querySelector(".mask");
    var body = document.querySelector("body");
	for(let i=0;i<btnMask.length;i++){
		btnMask[i].onclick = function (){
			mask.style.display = "block";
            body.style.overflow = "hidden";
		}
	}
	delMask.onclick = function (){
		mask.style.display = "none";
        body.style.overflow = "auto";
	}
}