Modal
document.queryselector() - If the selector in the queryselector() method matches multiple element it returns or select first matching element

document.queryselectorAll() - queryselectorAll() method returns a nodeList of all the matching elements(elements having same classname or same selectors)

NodeList is not an array but its similar to the array

=============================================================================================================

Working With Classes

classList - Using the classList property on html element of object we can get the classes present on that element.We can remove add or remove classes using add() and remove() methods.

const modal = document.querySelector('.modal');
modal.classList.remove('hidden');
modal.classList.add('hidden');

-We can add/remove multiple classes using comma separated class names.
modal.classList.remove('hidden', 'hide');
