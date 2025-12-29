👉 Object-oriented programming (OOP) is a programming paradigm [Style of code — “how” we write and organize code] based on the concept of objects

👉 We use objects to model (describe) real-world [E.g. user or todo list item] or abstract features [E.g. HTML component or data structure]

👉 Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;

👉 In OOP, objects are self-contained pieces/blocks of code;

👉 Objects are building blocks of applications, and interact with one another;

👉 Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;

👉 OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid “spaghetti code”).

======================================================================================================

1. Abstraction: Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don’t really matter to our implementation.

-Hides unnecessary details
-Shows only what is important
-Helps focus on what an object does, not how it does it

2. Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).

-Data can be made private (hidden)
-Only necessary methods are exposed publicly

3. Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

-Child class gets properties & methods of parent class
-Helps reuse code
-Creates hierarchical relationships

4. Polymorphism: A child class can overwrite a method it inherited from a parent class [it’s more complex than that, but enough for our purposes].

-Same method name → different behavior in different classes
-Child class can override parent class methods
