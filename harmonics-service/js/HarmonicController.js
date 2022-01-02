/********************************************************
Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*********************************************************/


// class:	HarmonicController
// desc:
// ------------------------------------------------
var HarmonicController = function() {

	// ----------------
	// variables
	// ----------------
	// my main canvas object
	this.cv;
	// Array to store Harmonics.
	this.arrHarmonics = new Array();
	// Frequency of the bass lowest note (starting on F)
	this.startingFrequency = 174.61;
	// initialize
	this.init();

}

// function:	mouseDown
// ------------------------------------------------
HarmonicController.prototype.init = function() {
	// canvas
	this.cv = ctx;

	// create Harmonics
	for (var i = 0; i < HARMONICS; i++) {
		this.arrHarmonics[i] = new Harmonic(i, this);
	}
}
/**
 * ------------------------------------------------
 * Begin
 * ------------------------------------------------
 */
HarmonicController.prototype.begin = function() {
}

// function:	upd
// desc:
// ------------------------------------------------
HarmonicController.prototype.upd = function() {

	// Update the tracks
	for (var i = 0; i < HARMONICS; i++) {
		this.arrHarmonics[i].isATouchOverMe = false;
		this.arrHarmonics[i].upd();
	}

	// Is the mouse pressed?
	if (isMousePressing) {
		// Check if that touch event is intersecting a harmonic
		for (var j = 0; j < HARMONICS; j++) {
			this.arrHarmonics[j].checkIfATouchIsOverMe(xMouse, yMouse);
		}

	// Else check for touches
	} else {

		var currentTouch;
		// Go through the touch events
		for (var i=0; i < currentTouches.length; i++) {
			currentTouch = currentTouches[i];
			// Check if that touch event is intersecting a harmonic
			for (var j = 0; j < HARMONICS; j++) {
				this.arrHarmonics[j].checkIfATouchIsOverMe(currentTouch.pageX, currentTouch.pageY);
			}
		}
	}

	// Update the tracks
	for (var i = 0; i < HARMONICS; i++) {
		this.arrHarmonics[i].checkIfIShouldBePlaying();
	}
}

/**
 * ------------------------------------------------
 * Update the size.
 * ------------------------------------------------
 */
HarmonicController.prototype.updateSizeAndPosition = function() {

	for (var i = 0; i < HARMONICS; i++) {
		var h = this.arrHarmonics[i];
		if (h) {
		  h.updateSizeAndPosition();
	  	}
	}

}


// function:	mouseDown
// ------------------------------------------------
HarmonicController.prototype.mouseDown = function() {
	if (Tone.context.state !== "running") {
    Tone.context.resume();
  }
}

// function:	mouseUp
// ------------------------------------------------
HarmonicController.prototype.mouseUp = function() {
}

