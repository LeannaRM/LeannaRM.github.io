window.addEventListener("load", function (){

	trigger = document.getElementsByClassName("hamburger_container")[0];
	trigger.addEventListener("click",showLinks);

	function showLinks() {
		nav = document.getElementsByClassName("navbar")[0];
		if (nav.classList.contains("showlinks")) {
			nav.classList.remove('showlinks');
		} else {
			nav.classList.add('showlinks');
		};
	};

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