var projectInfo = [
	{
		name: "Wellington Waterfront",
		image: "",
		text: "Wellington city contains a variety of unique and"+
		" interesting places and spaces. Each with its own"+
		" community and culture, history, traditions, symbols,"+
		" language, values and beliefs.<br><br>We needed to design a"+
		" responsive website for an existing space in Wellington city where users"+
		" can see what it is about. ",
		url: "https://massey.isaako.yoobee.net.nz/Module_1/formative_3/index.html"
	},
	{
		name: "Whitcoulls Libraria",
		image: "",
		text: "Whitcoulls was testing the feasibility of a new service that connects"+
		" owners with borrowers.<br><br>Owners of books can list"+
		" them online for borrowers to access. Borrowers browse and"+
		" search for items.<br><br>Users needed the ability to rate each other as"+
		" a method of maintaining positive interactions and"+
		" encouraging a healthy and vibrant online community.<br><br>"+
		" The service can be accessed in browsers from desktops,"+
		" tablets and phones.<br><br><i>Note: Listing items and browsing is not functional</i>",
		url: "https://massey.isaako.yoobee.net.nz/Module_1/uxsummative_libraria/index.html"
	},
	{
		name: "Traverse",
		image: "",
		text: "Tourism New Zealand works with the tourism industry"+
		" to positively promote New Zealand internationally. They have"+
		" initiated a new campaign aimed at tourists visiting for short"+
		" periods of time.<br><br>This is a single page web application"+
		" allowing users to input information and provide meanigful feedback"+
		" based on their input.",
		url: "https://masseyisaako.github.io/Tourism-App/"
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
	});

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
			$(".fa-bars").css("color", "#000");
			$(".scrollChangeLink").css("color", "#000");
			$(".mobileScroller").css("color", "#FFF");
			$("#brand").attr("src", "images/brandBlack.png");
		} else{
			// Changing background color to black when scroll_start > 0 (When on origin)
			navContainer.css("background-color", "rgba(0,0,0,0)");
			navContainer.css("box-shadow", "none");
			$(".fa-bars").css("color", "#FFF");
			$(".scrollChangeLink").css("color", "#fff");
			$(".mobileScroller").css("color", "#FFF");
			$("#brand").attr("src", "images/brandWhite.png"); 	
		}
	});

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
			openTAB.css("color", "#000");
			$(".contactMe").css("color", "#000");
			$("#extraLinksTAB").css("background-color", "#FFF");
		}
	});

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

	// Filling in popup modal content with information about projects.
	thumbnail.click(function(){
		var selection = $(this)[0].parentNode.childNodes[1].innerText;
		var headingText = $("#modal-content")[0].childNodes[1];
		var bodyText = $("#modal-body-text")[0];
		var image = $("#modal-content")[0].childNodes[5].childNodes[0];
		var link = $("#live-site-link")[0];

		for (var i = 0; i < projectInfo.length; i++) {
			if(selection === projectInfo[i].name){
				headingText.innerText = projectInfo[i].name;
				bodyText.innerHTML = projectInfo[i].text;
				link.href = projectInfo[i].url;
			}
		}

		image.src = "images/wellington-waterfront-mac.png";
		modal.fadeIn("fast");
	});

	// Closing the popup modal
	$("#closeModal").click(function(){
		modal.fadeOut("fast");
	});
});