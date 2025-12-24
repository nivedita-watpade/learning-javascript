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

=============================== Event Propogation - Capturing & Bubbling ==============================
Event Propagation – Bubbling Phase
Definition
The bubbling phase is the last phase of event propagation in the DOM.
In this phase, the event starts from the target element and moves upward through its parent elements until it reaches the root (document / window).

Order:
Target → Parent → Body → HTML → Document → Window
By default, event listeners listen in the bubbling phase

Example: Bubbling Phase in Action

HTML

<div id="parent">
  <button id="child">Click me</button>
</div>

JavaScript
document.getElementById("parent").addEventListener("click", () => {
console.log("Parent clicked (bubbling)");
});

document.getElementById("child").addEventListener("click", () => {
console.log("Child clicked");
});

Output when button is clicked
Child clicked
Parent clicked (bubbling)

✔️ The event is handled first by the child,
✔️ then it bubbles up to the parent

================ Example (Bubbling + e.target vs e.currentTarget):================

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", function (e) {
console.log("Parent listener");
console.log("e.target:", e.target.id);
console.log("e.currentTarget:", e.currentTarget.id);
});

document.getElementById("child").addEventListener("click", function (e) {
console.log("Child listener");
console.log("e.target:", e.target.id);
console.log("e.currentTarget:", e.currentTarget.id);
});

Output:

Child listener
e.target: child
e.currentTarget: child

Parent listener
e.target: child
e.currentTarget: parent

Quick Rule to Remember
target = clicked element
currentTarget = listener element

document.getElementById("child").addEventListener("click", (e) => {
e.stopPropagation();
});
This prevents the event from reaching parent elements

================= Event Propagation – Capturing Phase =================
Definition
The capturing phase (also called the trickling phase) is the first phase of event propagation in the DOM.
In this phase, the event travels from the top of the DOM tree (window → document → ancestors) down to the target element, before the event actually reaches the element where it occurred.

Order:
Window → Document → HTML → Body → Parent → Target
By default, event listeners do NOT listen in the capturing phase.
To enable capturing, you must explicitly set it to true.

<div id="parent">
<button id="child">Click me</button>

</div>

document.getElementById("parent").addEventListener(
"click",
() => {
console.log("Parent clicked (capturing)");
},
true // enable capturing
);

document.getElementById("child").addEventListener(
"click",
() => {
console.log("Child clicked");
}
);

Output when button is clicked:
Parent clicked (capturing)
Child clicked
✔️ The event is captured by the parent first,
✔️ then it reaches the child (target phase).

Key Points (Easy to Remember)

Capturing phase happens before bubbling:

Direction: Top → Down
Disabled by default
Enabled using:
addEventListener(event, handler, true)

====================================== Event Delegation in JavaScript======================================

Event Delegation: Event delegation is a JavaScript technique where a single event listener is attached to a parent element instead of multiple child elements.
It works by using event bubbling, where events propagate from the target element up to its ancestors.

Key Points:
-Uses event bubbling (events move from child → parent)
-Improves performance by reducing the number of event listeners
-Useful for dynamically added elements
-Commonly uses event.target to identify which child triggered the event
-Cleaner and more maintainable code

Ex.

<div id="container">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div>

<script>
document.getElementById("container").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    console.log("Clicked:", event.target.textContent);
  }
});
</script>

//Event Delegation
document.querySelector('.nav\_\_links').addEventListener('click', function (e) {
e.preventDefault();

//Matching Stategy
if (e.target.classList.contains('nav\_\_link')) {
const sectionId = e.target.getAttribute('href');
if (sectionId === '#') return;
document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}
});

✔ One event listener on the parent
✔ Works for existing and future buttons

Difference between event.target and event.currentTarget?

event.target
-Actual clicked element
-Child element
-Changes based on click

event.currentTarget
-Element with listener
-Parent element
-Always same

==================================== DOM Traversing =================================

DOM Traversing –
DOM Traversing in JavaScript is the process of navigating through the Document Object Model (DOM) tree to access, select, and manipulate parent, child, and sibling elements of a given HTML element.

DOM traversing is the technique of moving through the DOM tree to access related elements such as parents, children, and siblings.

DOM Traversing – Going Downwards (Children)

1. h1.querySelectorAll('.highlight')
   Searches inside h1 only
   Returns all descendant elements with class .highlight
   Output type: NodeList
   Can select deeply nested children

2. h1.childNodes: Returns all child nodes of h1

3. h1.children: Returns only element nodes
   Ignores text and comment nodes
   Most commonly used for DOM traversal

4. h1.firstElementChild: Selects the first child element
   Used to apply styles or manipulate first child
   Example:
   h1.firstElementChild.style.color = 'white';

5. h1.lastElementChild: Selects the last child element
   Example:
   h1.lastElementChild.style.color = 'red';

DOM Traversing – Going Upwards (Parent)

//Going upwards: Parent
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-primary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)';

closest() finds the nearest ancestor (including itself) that matches a given CSS selector.
Finds the nearest parent matching a selector

1. h1.closest('.header')
   Searches upwards in the DOM tree
   Finds the nearest ancestor (or itself) matching .header
   Very useful when working with event delegation

2. h1.closest('h1')
   Checks the element itself first
   Since h1 matches, it returns the same element

DOM Traversing – Going Sideways (Siblings)

1. h1.previousElementSibling : Returns the previous sibling element of h1
   -if no previous element exists it returns null

2. h1.nextElementSibling : Returns the next sibling element of h1
   -if no previous element exists it returns null

//Going sideways: Siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
if (el !== h1) {
el.style.transform = 'scale(0.5)';
}
});

============================= Intersection Observer API ===================

Intersection Observer API (JavaScript): The Intersection Observer API lets you detect when an element enters or leaves the viewport (or a parent container) — without using scroll events.
It’s efficient, modern, and widely used for lazy loading, animations, infinite scroll, etc.

Intersection Observer observes a target element and tells you when it intersects with a root element (usually the viewport).

Observer: Watches one or more elements
Target: Element being observed
Root: Viewport or parent container
Threshold: % of visibility needed to trigger
isIntersecting: true when element is visible

Basic Syntax
const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);

const box = document.querySelector(".box");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
console.log("Element is visible!");
}
});
});

observer.observe(box);
const options = {
root: null, // viewport
rootMargin: "0px",
threshold: 0.5 // 50% visible
};

threshold: 0 // Trigger as soon as element appears
threshold: 1 // Trigger when fully visible
threshold: [0, 0.5, 1]

==============================================================================

1. DOMContentLoaded:
   -Fires when the HTML is completely parsed
   -The DOM tree is built
   -Does NOT wait for images, videos, fonts, or external resources
   -Best event to run DOM-related JavaScript
   -Faster than window.load
   -Triggered on document

Ex. document.addEventListener('DOMContentLoaded', function (e) {
console.log('HTML Parsed & DOM tree built!', e);
});

2. load
   -Fires after the entire page is fully loaded
   -Waits for:bImages, CSS, Fonts, Videos
   -Triggered on window
   -Slower than DOMContentLoaded

window.addEventListener('load', function (e) {
console.log('Page fully loaded', e);
});

3. beforeunload
   Fires just before the user leaves the page
   Triggered when:
   -Closing tab/browser
   -Refreshing page
   -Navigating to another URL
   Allows you to warn the user
   e.preventDefault() is required
   Modern browsers show a default confirmation message (custom text not allowed)

Ex. window.addEventListener('beforeunload', function (e) {
e.preventDefault();
e.returnValue = '';
});

Use DOMContentLoaded for DOM manipulation, load for full page readiness, and beforeunload to warn users before leaving the page.
