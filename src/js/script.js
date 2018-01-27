window.onload = function(){
	createSelect();
}

function createSelect(){
	var select = document.querySelector(".genderSelect");
		selectedOption = document.querySelector('.wrapper > .selected-option'),
		iconSelect = document.querySelector('.wrapper > .icon-select'),
		list = document.querySelector(".list-options > ul");

	for(var i = 0; i < select.length; i++){
		var li  = document.createElement("li");
		select[i].setAttribute("data-index", i);
		select[i].value = select[i].innerHTML;
		li.setAttribute("data-index", i);
		li.innerHTML = select[i].innerHTML;
		li.addEventListener("click", setSelect.bind(null, li));
		list.appendChild(li);
	}

	select[0].selected = true;
	selectedOption.innerHTML = select[0].innerHTML;
	selectedOption.addEventListener("click", toggleList);
	iconSelect.addEventListener("click", toggleList);
}

function setSelect(element){
	var select = document.querySelector(".genderSelect"),
		selectedOption = document.querySelector('.wrapper > .selected-option'),
		dataIndex = element.getAttribute("data-index"),
		value = element.innerHTML,
		selected = document.querySelector(".genderSelect > option[data-index='" + dataIndex + "']");

	for(var i = 0; i < select.length; i++){
		select[i].selected = false;
	}

	selected.selected = true;
	selectedOption.innerHTML = value;
	toggleList();
}

function toggleList(){
	var ul = document.querySelector(".list-options > ul"),
		arrow = document.querySelector(".icon-select"),
		height = 0;

	if(!ul.getAttribute("data-open") || ul.getAttribute("data-open") === "false"){
		var li = document.querySelectorAll(".list-options > ul > li");	
		ul.setAttribute('data-open', 'true');
		arrow.style.transform = 'rotate(180deg)';
		for(var i = 0; i < li.length; i++){
			height +=li[i].offsetHeight;
		}
	}else{
		ul.setAttribute('data-open', 'false');	
		arrow.style.transform = 'rotate(0deg)';
	}
	
	ul.style.height = height + 'px';
}