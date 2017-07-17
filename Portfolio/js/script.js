var projectInfo = [
	{
		name: "Wellington Waterfront",
		image: "",
		text: "",
		url: ""
	},
	{
		name: "Whitcoulls Libraria",
		image: "",
		text: "",
		url: ""
	},
	{
		name: "Card Generator",
		image: "",
		text: "",
		url: ""
	},
	{
		name: "Traverse",
		image: "",
		text: "",
		url: ""
	}
];

$(document).ready(function(){
	// Setting some global variables
	var navContainer = $("#nav-container");
	var navOpen = false;
	var openTAB = $("#openTAB");
	var tabLinks = $("#extraLinksTAB");
	var extraLinksBTN = $("#extraLinksBTN");
	var extraClick = false;
	var thumbnail = $(".open-modal");
	var modal = $("#modal-fullscreen");
	tabLinks.hide();

	// This is the heading fade in effect the user sees once the page is open
	$("#text-container").hide();
	$("#text-container").fadeIn(3000);

	// This is the mobile/tablet navigation system.
	$("#mobile-nav").click(function(){
		if(navOpen === false){
			$("#mobile-links").slideDown(250);
			navOpen = true;
		} else if(navOpen === true){
			$("#mobile-links").slideUp(250);
			navOpen = false;
		}
	})

	// Smooth scroll to divs, this code only selects links with @href starting with '#'
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});

	// Change navigation color on scroll
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();		
		if (scroll > ($("#home").height() - 75)) {
			// Changing background color to white when scroll_start = 0 (When scrolling away)
			navContainer.css({"background-color": "rgb(255,255,255)", "box-shadow": "0px 0px 10px #333"});
			// navContainer.css("box-shadow", "0px 0px 10px #333;");
			$(".fa-bars").css("color", "#000")
			$(".scrollChangeLink").css("color", "#000");
			$(".mobileScroller").css("color", "#FFF");
			$("#brand").attr("src", "images/brandBlack.png");
		} else{
			// Changing background color to black when scroll_start > 0 (When on origin)
			navContainer.css("background-color", "rgba(0,0,0,0)");
			navContainer.css("box-shadow", "none");
			$(".fa-bars").css("color", "#FFF")
			$(".scrollChangeLink").css("color", "#fff");
			$(".mobileScroller").css("color", "#FFF");
			$("#brand").attr("src", "images/brandWhite.png"); 	
		}
	})

	// Changing extra links color on scroll
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();		
		if (scroll > (extraLinksBTN.height() - 10)) {
			// Changing background color to white when scroll_start = 0 (When scrolling away)
			extraLinksBTN.css("background-color", "rgb(0,0,0)");
			openTAB.css("color", "#FFF");
			$(".contactMe").css("color", "#FFF");
			$("#extraLinksTAB").css("background-color", "#000");
		} else{
			// Changing background color to black when scroll_start > 0 (When on origin)
			extraLinksBTN.css("background-color", "rgb(255,255,255)");
			openTAB.css("color", "#000")
			$(".contactMe").css("color", "#000");
			$("#extraLinksTAB").css("background-color", "#FFF");
		}
	})

	// Extra Links TAB Interactivity
	openTAB.click(function(){
		if(extraClick === false){
			openTAB.removeClass("fa-plus");
			openTAB.addClass("fa-chevron-left");
			tabLinks.fadeIn(500);
			extraClick = true;
		} else if(extraClick === true){
			openTAB.removeClass("fa-chevron-left");
			openTAB.addClass("fa-plus");
			tabLinks.fadeOut(500);
			extraClick = false;
		}
	});

	// // Filling in popup modal content with information about projects.
	// thumbnail.click(function(){
	// 	// var selection = $(this)[0].parentNode.childNodes[1].innerText;
	// 	var headingText = $("#modal-content")[0].childNodes[1];
	// 	var image = $("#modal-content")[0].childNodes[5].childNodes[0];
	// 	// console.log(selection);
	// 	console.log(headingText);

	// 	for (var i = 0; i < projectInfo.length; i++) {
	// 		if (headingText.innerText === projectInfo[i].name){
	// 			console.log("Match");
	// 			headingText.innerText = projectInfo[i].name;
	// 		}

	// 		// if (selection === projectInfo[i].name){
	// 		// 	console.log("Match");
	// 		// 	console.log(selection + " " + " " + projectInfo[i].name);
	// 		// }
	// 	}

	// 	image.src = "images/wellington-waterfront.png";
	// 	modal.fadeIn("fast");
	// });

	$("#closeModal").click(function(){
		modal.fadeOut("fast");
	});
});