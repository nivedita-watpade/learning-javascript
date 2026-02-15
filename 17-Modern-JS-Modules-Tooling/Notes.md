🔹 What are ES6 Modules?
-ES6 modules allow us to split JavaScript code into separate files.
-Exactly one module per file.
-Helps with code organization, reuse, and maintainability.

🔹 Import & Export
-Used to share code between modules.
-Must be written at the top-level (not inside functions or blocks).
Ex.
// Import
import { rand } from './math.js';

// Export
export { scores };

✔ Enables dependency management
❌ Not available in normal scripts

🔹 ES6 Module vs Normal Script
Feature ES6 Module Script

Top-level variables
Scoped to module - ES6 Module
Global - script

Default mode
Strict mode - ES6 Module
Sloppy mode - Script

Top-level this
undefined - ES6 Module
window -script

Import / Export
✅ Yes - ES6 Module
❌ No - script

HTML linking

<script type="module"> - ES6 Module
 <script> - script


File loading 
Asynchronous - ES6 Module
Synchronous - script


Babel — Definition
✅ What is Babel?

Babel is a JavaScript compiler (transpiler) that converts modern JavaScript (ES6+) into backward-compatible JavaScript so it can run in older browsers.


🔹 Why Babel is Needed?
-Not all browsers support latest JavaScript features
-Babel ensures cross-browser compatibility

==========================================================

-ES modules are file-based and scope-safe
-Imports are hoisted
-Modules execute in strict mode
-Variables are private unless exported
-Named exports → multiple values
-Default export → single main value
-Imports are live bindings, not copies
-Modules expose a public API


1. What is a Module?
A module is just a JavaScript file.
Each module has its own scope (top-level scope is the module itself).
Variables declared in a module are private by default.
Modules help organize code into small, reusable, maintainable pieces.


2. Importing a Module Without Importing Values
You can import a module only for execution, without importing any value.
import './shoppingcart.js';
This is useful when the module runs some setup code.


3. Module Execution Order
Imported modules are executed first
Then the importing module runs
This happens because:
-import statements are hoisted
Console output confirms:
-Exporting module logs first
-Importing module logs later


4. Using Modules in HTML
To use ES modules in the browser:
<script type="module" src="script.js"></script>

Without type="module", you’ll get:
-Cannot use import statement outside a module

5. Strict Mode
   All ES modules run in strict mode by default
   No need to write:
   'use strict';

6. Module Scope (Very Important)
   Top-level variables in a module:
   ❌ NOT global
   ✅ Scoped to that module only
   Example:
   const shippingCost = 10;
   const cart = [];
   These cannot be accessed from another module unless exported.

7. Named Exports
   Used when exporting multiple values
   Add export keyword before variables/functions

export const addToCart = function(product, quantity) {
cart.push({ product, quantity });
};

Import using same names inside {}
import { addToCart } from './shoppingcart.js';

8.  Exporting Multiple Values at Once
    const totalPrice = 237;
    const totalQuantity = 23;
    export { totalPrice, totalQuantity };

    Import:
    import { totalPrice, totalQuantity } from './shoppingcart.js';

9.  Renaming Exports (Alias)
    Rename while importing:
    import { totalPrice as price } from './shoppingcart.js';

    Rename while exporting:
    export { totalQuantity as tq };

10. Importing Everything (\* as)
    Imports all named exports into an object
    import \* as ShoppingCart from './shoppingcart.js';

    Acts like a namespace
    ShoppingCart.addToCart('bread', 5);
    ShoppingCart.totalPrice;
    Feels similar to a class public API

11. Default Exports
    Used when exporting only one thing per module
    Syntax:
    export default function(product, quantity) {
    cart.push({ product, quantity });
    }

    Import without {} and name it anything:
    import add from './shoppingcart.js';

12. Named vs Default Exports (Best Practice)
    ✅ Use Named Exports when exporting multiple values
    ✅ Use Default Export when exporting one main thing
    ❌ Avoid mixing Named and Default Exports in the same module (reduces clarity)

13. Live Connection Between Imports & Exports (VERY IMPORTANT)
    Imports are NOT copies
    They are a live connection to the exported value

    Example:
    export const cart = [];

    If another module mutates cart:
    addToCart('bread', 5);

    Imported cart reflects changes:
    console.log(cart); // updated array
    📌 Reason:
    Both modules point to the same memory reference

============================ Top Level await ======================================

What is Top-Level await?
Top-level await lets you use the await keyword outside of an async function, directly at the top level of a module.
👉 Before this feature, await was only allowed inside async functions.

Before Top-Level await:
You had to wrap everything in an async function:

async function loadData() {
const res = await fetch('https://api.example.com/data');
const data = await res.json();
console.log(data);
}

loadData();

With Top-Level await
Now you can write:
const res = await fetch('https://api.example.com/data');
const data = await res.json();

console.log(data);

1️⃣ It blocks module execution:
If a module uses top-level await, any module importing it will pause until the await is resolved.

============================== CommonJS ================================

✅ What is CommonJS?
CommonJS is a module system used in Node.js to organize code into separate files (modules).

It allows us to:
Export code from one file
Import that code into another file

In CommonJS, we use:
require() → to import
module.exports → to export
Ex.
function add(a, b) {
return a + b;
}

module.exports = add;

const add = require('./math');

console.log(add(5, 3)); // 8

===================================== NPM (Node Package Manager) =============================

NPM (Node Package Manager) is a tool used to:
-Install libraries/packages
-Manage project dependencies
-Share reusable code
It comes automatically when you install Node.js.

===============================Functional Programming Principles =====================================

Functional Programming Principles – Notes
🔹 What is Functional Programming?
-A declarative programming paradigm
-Focuses on writing software by combining pure functions
-Avoids side effects and data mutation

🔹 Key Concepts
1️⃣ Side Effects
Modification (mutation) of data outside the function
Examples:
-Mutating external variables
-Logging to console
-Writing to DOM
Functional programming tries to avoid side effects

2️⃣ Pure Function
-A function without side effects
-Does not depend on external variables
-Given the same inputs, always returns the same output

3️⃣ Immutability
State (data) is never modified directly
Instead:
-Create a copy
-Modify the copy
Return the new updated version

🔹 Functional Programming Techniques
-Avoid data mutations
-Use built-in methods that don’t create side effects
Perform transformations using:
.map()
.filter()
.reduce()
Try to avoid side effects in functions (though not always possible)

🔹 Declarative Syntax
-Use array and object destructuring
-Use the spread operator (...)
-Use the ternary (conditional) operator
-Use template literals
