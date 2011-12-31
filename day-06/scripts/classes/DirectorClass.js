/*!! KEYPOINT ex 3: Create a director class inside a module and set it as a dependey on the movie module */
var directorModule = (function() {
	var name;
	var quotes;
	return {
		setName: function(n) {
			name = n;
		},
		getName: function() {
			return name;
		},
		setQuotes: function(q) {
			quotes = q;
		},
		speak: function() {
			return quotes;
		},
	}
});