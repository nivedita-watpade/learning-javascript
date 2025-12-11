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

5. element.before(): Inserts content just after the element, as its next sibling..
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
