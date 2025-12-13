========================== DOM ============================

👉 Allows us to make JavaScript interact with the browser;

👉 We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events;

👉 DOM tree is generated from an HTML document, which we can then interact with;

👉 DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree

.querySelector() / .addEventListener() / .createElement() /
.innerHTML / .textContent / .children / etc ...

=============================== DOM STructure ===============================================

DOM (Document Object Model) is a programming interface that represents a web page as a tree structure of objects so that programming languages like JavaScript can interact with it.

1. Node:
   Everything in the DOM—elements, text, comments—comes from the Node interface.
   Nodes are represented in JavaScript as objects.

Common Node Properties:

- .textContent
- .childNodes
- .parentNode
- .cloneNode()

2. EventTarget

All nodes inherit these:
.addEventListener()
.removeEventListener()

3. Node Subtypes
   The DOM tree has different node types:

a) Element Node
Example: <p>Paragraph</p>

Element inherits from:
Node
EventTarget

Common Element Properties/Methods:
.innerHTML
.classList
.children
.parentElement
.append()
.remove()
.insertAdjacentHTML()
.querySelector()
.closest()
.matches()
.scrollIntoView()
.setAttribute()

b) Text Node : Example: text inside tags → Paragraph

c) Comment Node: Example: <!-- Comment -->

d) Document: Top-level DOM node.
Document Methods:
.querySelector()
.createElement()
.getElementById()

Window (Global Object):
Contains many properties/methods (not all related to DOM)

Summary:
-DOM uses a hierarchical inheritance structure.
-Node is the parent of everything.
-Element → HTMLElement → Specific elements.
-Document and Window provide top-level access.
-All DOM objects share properties because of inheritance.

=================================== Selecting elements =========================

What is HTMLCollection?
HTMLCollection is a live array-like object that contains a list of HTML elements.
It is returned by certain DOM methods such as:

-If the DOM changes, the HTMLCollection updates automatically.

document.getElementsByTagName()
document.getElementsByClassName()
document.forms
element.children

Common ways HTMLCollection is created:

1. getElementsByTagName()
   const divs = document.getElementsByTagName("div");

2. getElementsByClassName()
   const items = document.getElementsByClassName("item");

3. children
   const kids = document.querySelector("ul").children;

// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// INSERTING & CREATING ELEMENTS

1. .innerHTML: .innerHTML is a property used to get or set the HTML content inside an element.
   -Insert HTML
   -Replace existing content
   -Read the HTML inside an element
   Ex. message.innerHTML = 'We used cookies for improved functionality and analytics, <button class="btn btn--close-cookie">Got it!</button>';

// create a child

2. .prepend():.prepend() inserts content at the beginning of an element (as the first child).
   Ex. header.prepend(message);

3. .append():.append() inserts content at the end of an element (as the last child).
   Ex. header.append(message);

// create a siblings

4. element.before(): Inserts content just before the element, as its previous sibling.
   Ex.header.before(message);

5. element.after(): Inserts content just after the element, as its next sibling..
   Ex.header.after(message);

6. cloneNode() is a DOM method that creates a copy (clone) of a DOM node.
   Ex. header.append(message.cloneNode(true));
   true Deep clone → copies the node and all its children
   false Shallow clone → copies only the node without children

//REMOVE ELEMENT

Removing (deleting) an element from the DOM can be done using several methods.

1. .remove() : permanently deletes an element from the DOM.

2. element.innerHTML = "" (Removes all children)

document
.querySelector('.btn--close-cookie')
.addEventListener('click', function () {
message.remove();
});

============================ Style ================================

//STYLE
message.style.backgroundColor = '#312e2e';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.height);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
Number.parseFloat(getComputedStyle(message).height) + 25 + 'px';

//Attribute
const logo = document.querySelector('.nav\_\_logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful Logo';

//Non-standard
console.log(logo.designer); //undefined
console.log(logo.setAttribute('compnay', 'Nivi'));

console.log(logo.src); //http://127.0.0.1:5502/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

getComputedStyle() is a built-in browser method that lets you read the final, computed CSS styles of any element — exactly as the browser is applying them.
Syntax:
getComputedStyle(element).propertyName;
Ex.
message.style.height =
Number.parseFloat(getComputedStyle(message).height) + 25 + 'px';

Data Attributes: Data Attributes allow you to store extra information inside HTML elements using custom attributes that start with: data-
-They are mainly used to pass data to JavaScript.

✔ Note:
data-user → becomes → dataset.user
data-user-name → becomes → dataset.userName
Ex. console.log(logo.dataset.versionNumber);

//classlist have 4 methods:
1)add
2)remove
3)toggle
4)contains

Ex.//classList
logo.classList.add('test', 'dummy');

=======================================================================================

1. element.getBoundingClientRect(): is a JavaScript method that returns the size of an element and its position relative to the viewport (the visible area of the browser).

- It gives an object with properties like:top, left, right, bottom, width, height, x, y
  Ex. const s1coords = section1.getBoundingClientRect();

2. window.scrollTo(): is a JavaScript method used to scroll the browser window to a specific position on the page.
   -It scrolls the entire document, not a single element.
   Ex. window.scrollTo(s1coords.left, s1coords.top);

Ex. window.scrollTo({
top: 800,
behavior: "smooth"
});

3. element.scrollIntoView(): is a JavaScript method that scrolls the webpage so that the element becomes visible inside the viewport.
   It scrolls the page automatically to bring the selected element into view.
   Ex. section1.scrollIntoView({ behavior: 'smooth' });

Viewport height: document.documentElement.clientHeight
Viewport width: document.documentElement.clientWidth

==================== Types of events and events handler =========================

In JavaScript (DOM), events are actions that happen in the browser, and event handlers are functions that respond to those events.

//TYPE OF EVENTS
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
alert('You are reading the mouseenter events!');
h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

h1.onclick = function (e) {
alert('You are reading the onClick events!');
};

removeEventListener() in JavaScript
removeEventListener() is used to remove an event handler that was previously added using addEventListener().

h1.removeEventListener('mouseenter', alertH1);
