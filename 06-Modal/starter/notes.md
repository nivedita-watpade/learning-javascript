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

=============================================================================================================

key events/ keyboards events:

-keydown is a event it fires only when we press the keydown key.
-Here, we set keydown event on the whole document.
-Some of the keyboard events are keydown and keyup. Within these events, the keys that can be detected include Enter, Escape, Space, Arrow keys, and so on.
-When we pass e (or event) as an argument to the function, it represents the event object created by JavaScript whenever the keydown event occurs. This object contains many properties, and one of them is key, which holds the value of the key that was pressed on the keyboard.

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
hideModal();
}
});
