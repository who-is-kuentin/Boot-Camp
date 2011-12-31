/*!! KEYPOINT ex 2: Create the same movie class as in the previous practice, but inside a module; the module will be an external file */
define(["DirectorClass"],function(directorModule) {
/*	single global variable movieModule												*/
var movieModule = (function() {
	/*	private vars and methods are allowed here*/
	var title;
	var rating;
	var id;
	var director;
	/*	returning one anonymous object literal that would expose privileged methods	*/
	return {
		/*	the methods inside the return object are called as privileged methods:	*/
		/*	it has access to the private methods and vars								*/
		setTitle: function(t) {
			title = t;
		},
		getTitle: function() {
			return title;
		},
		setRating: function(r) {
			rating = parseInt(r,10);
		},
		getRating: function() {
			return rating;
		},
		setId: function(i) {
			id = parseInt(i,10);
		},
		getId: function() {
			return id;
		},
		setDirector: function(d) {
			director = d;
		},
		getDirector: function() {
			return director;
		}
	}	
	});	/*	end of privileged methods												*/
});