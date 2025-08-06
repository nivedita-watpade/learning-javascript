DOM & DOM Manipulation:

How to select an element
We can select element using lass and ID
-To select class elemt use dot(.)
-To select id element use hash(#)
const againBtn = document.querySelector('.btn.again');
againBtn.textContent = 'Repeat';
// console.log(againBtn);

DOM: Document Object Model
Structured represntation of HTML documents. Allows javascript to access HTML elements and styles to manipulate(change text, html attribute, css style ) them.

DOM automatically created as soon as HTML document loads.

DOM structure consist of tree structure of HTML elements. Elements have child and siblings.
Document object is the entry point of DOM. Using this document object we can access and manipulate the DOM

Everything present in the HTML page it becomes part of the DOM even comment

DOM is not the part of Javascript langauge. DOM and DOM methods are the part of browser/web API's. We can access this api's with javascript

Example of browser API's : Geolocation, timer, speech synthesis, bluetooth

Selecting and Manipulating Elements:

To change the text content:
const betweenTxt = document.querySelector('.between');
betweenTxt.textContent = 'Between 1 and 30';

const inputNumber = document.querySelector('.guess');
inputNumber.value = 69;

To change the input value:
For inputs value we used .value
const inputNumber = document.querySelector('.guess');
inputNumber.value = 69;
