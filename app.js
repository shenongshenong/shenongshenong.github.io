var dog = document.getElementById("dogPic");
var cat = document.getElementById("catPic");
var duck = document.getElementById("duckPic");
var moving = false;


var pixels = 100;
var screenWidth = window.screen.width;
var percentage = ( screenWidth - pixels ) / screenWidth ;


function move(e){

  var newX = e.screenX - 500;
  var newY = e.screenY - 100;
//	var moveX = (e.pageX * -1 / 15);

  image.style.left = newX + "px";
}

	cat.addEventListener("mousemove", catMove, false);

const catEl = document.getElementById("catPic");
	catEl.style.position = "relative";
	catEl.style.width = percentage;
	let catPos = 0;
	let catDir = -1;

function catMove(e) {
		if (catPos == 7) { catDir = 1 }
		else if (catPos == -17) { catDir = -1 }
		catPos += -2 * (catDir/16);
		catEl.style.left = catPos+"%";
		
	}

dog.addEventListener("mousemove", dogMove, false);

const dogEl = document.getElementById("dogPic");
	dogEl.style.position = "relative";
	let dogPos = 0;
	let dogDir = -1;

function dogMove(e) {
		if (dogPos == 7) { dogDir = 1 }
		else if (dogPos == -17) { dogDir = -1 }
		dogPos += -2 * (dogDir/16);
		dogEl.style.left = dogPos+"%";
		
	}

duck.addEventListener("mousemove", duckMove, false);

const duckEl = document.getElementById("duckPic");
	duckEl.style.position = "relative";
	let duckPos = 0;
	let duckDir = -1;

function duckMove(e) {
		if (duckPos == 7) { duckDir = 1 }
		else if (duckPos == -17) { duckDir = -1 }
		duckPos += -2 * (duckDir/16);
		duckEl.style.left = duckPos+"%";
		
	}
	
// smooth scroll


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* logoslide */

document.getElementById("mySidenav").style.width = "0%";

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* logoMoving */



/*  moving = !moving;
  image = this;

  document.addEventListener("mouseenter", move, false);
    document.addEventListener("mouseleave", move, false);
	  document.addEventListener("mouseover", move, false);
	    document.addEventListener("mousemove", move, false);

}  */
/*
document.getElementById("demo").onmouseover = function() {mousemove()};

function mousemove() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
} */

/* POSTERS PAGE */

