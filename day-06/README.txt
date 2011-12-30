DAY 6: AMD + RequierJS
Practice:

1 . Add RequireJS to the provided index.php
2 . Create the same movie class as in the previous practice, but inside a module; the module will be an external file
3 . Create a director class inside a module and set it as a dependency on the movie module
4 . add director a name property, a setQuotes() and speak() methods; calling speak() will display jQuery Mobile dialogs with director's quotes
5 . Add a director to a Movie with the method setDirector()
	you should be able to do something like this in the console:
	var alien = new Movie;
	...
	var RidleyScott = new Director('Ridley Scott'); // sets name in constructor
	RidleyScott.setQuotes(['Cast is everything.','Do what you haven´t...']);
	alien.setDirector(RidleyScott);
	alien.getDirector().speak(): // output: Ridley Scott says: 'Cast is...'
6 . Add jQuery as a module
7 . add jQuery Mobile as a module
8 . Make Movie's Director speak random quotes inside jQuery Mobile dialogs

KEY POINT: 2,3