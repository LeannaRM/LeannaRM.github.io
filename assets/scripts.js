window.addEventListener("load", function (){

	trigger = document.getElementsByClassName("hamburger_container")[0];
	trigger.addEventListener("click",showLinks);
	nav = document.getElementsByClassName("navbar")[0];
	nav.addEventListener("transitionend",fixZindex);

	function showLinks() {
		
		if (nav.classList.contains("showlinks")) {
			nav.classList.remove("posZindex");
			nav.classList.remove('showlinks');
		} else {
			nav.classList.add('showlinks');
		};
	};

	function fixZindex() {
		if (nav.classList.contains("showlinks")) {
			nav.classList.add('posZindex');
		} 
	}

	let element = document.getElementById("slidingMenu");
element.addEventListener("transitionend", function(event) {
  element.innerHTML = "Done!";
}, false);

	// fixed = document.getElementsByClassName("fixed")[0]
	// unfixed = document.getElementsByClassName("unfixed")[0]
	// fixed.addEventListener("click",makeFixed);
	// unfixed.addEventListener("click",makeAbsolute);

	// function makeFixed(e) {
	// 	bluediv = document.getElementsByClassName("absolute2")[0].children[1].children[0]
	// 	bluediv.style.position = "fixed";
	// 	debugger;
	// }

	// function makeAbsolute(e) {
	// 	bluediv = document.getElementsByClassName("absolute2")[0].children[1].children[0]
	// 	bluediv.style.position = "absolute";
	// }


});