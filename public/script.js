/*  JavaScript 6th Edition v 2.17
    Chapter 10
    Hands-on Project 10-5

    Author: 
    Date:   

    Filename: script.js
	
										      Latitude       Longitude
	    Coordinates:
          SU:					      38.34433		 -75.60556
					Beijing:  	      39.913908		 116.397196
					Paris:			      48.85655		   2.35222
					Rio de Janeiro:	 -22.97114		 -43.18396

	Note to Students:  You will need to test this in either IE, Firefox or Safari as Chrome does not enable local coordinates
	                   from a file system.
	*/

"use strict";

// global variables
var waitForUser;

function setUpPage() {
   geoTest();
   var buttons = document.querySelectorAll("#cities div");  //each city has it's own <div> element
   for (var i = 0; i < buttons.length; i++ ) {
      buttons[i].addEventListener("click", createMap, false);
   }
}

function geoTest() {
   waitForUser = setTimeout(fail, 10000);
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
   } else {
      fail();
   }
}

function createMap(position) {
  
}

function fail() {
   document.getElementById("map").innerHTML = "Unable to access your current location.";
}

// run setUpPage() function when page finishes loading
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
}