========================== DOM ============================

👉 Allows us to make JavaScript interact with the browser;

👉 We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events;

👉 DOM tree is generated from an HTML document, which we can then interact with;

👉 DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree

.querySelector() / .addEventListener() / .createElement() /
.innerHTML / .textContent / .children / etc ...

=============================== DOM STructure ===============================================

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
