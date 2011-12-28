function Movie(vTitle, vRating, vId) {
	this.title = vTitle;
	this.rating = vRating;
	this.id = vId;
}
// METHODS
Movie.prototype.getTitle = function() {
	this.title;
}
Movie.prototype.setTitle = function(t) { 
	this.title = t;
}
Movie.prototype.getRating = function() {
	this.rating;
}
Movie.prototype.setRating = function(r) {
	this.rating = r;
}

Movie.prototype.getId = function() {
	this.id;
}
Movie.prototype.setId = function(i) {
	this.id = i;
}

Movie.prototype.play = function() {
	var obs = new MovieObserverClass();
	obs.fire("Playing "+this.title);
	//alert("Playing "+this.title); 
}
Movie.prototype.stop = function() {
	var obs = new MovieObserverClass();
	alert("Stop");
}

/*
// ID should be a Number
if (isNan(this.id)) {
	alert("Data-Typing Error");
}
// RATING should be a Number
if(isNan(this.rating)) {
	alert("Data-Typing Error");
}
*/