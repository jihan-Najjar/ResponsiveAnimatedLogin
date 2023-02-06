const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;// input-div
	parent.classList.add("focus");
    console.log(parent);
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});