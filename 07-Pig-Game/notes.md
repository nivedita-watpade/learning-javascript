-We can also access an HTML element using document.getElementById(). This method takes the id of an element as an argument and returns a reference to that element in the DOM, which we can then use to read or modify its content, style, or attributes.

Ex. const playerScoreEl0 = document.getElementById('score--0');

-We can use document.querySelector() or document.getElementById() to access HTML elements from the DOM.

Toggle
element.classList.toggle("className")
-If the element already has the class, it removes it.
-If the element does not have the class, it adds it.
