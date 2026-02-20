📌 Model–View–Controller (MVC) Architecture
MVC is a design pattern used to separate an application into three main components:
-Model
-View
-Controller
This separation improves maintainability, scalability, and clean code structure.

🔵 1. Model
Responsibility:
-Handles Business Logic
-Manages State
-Communicates with HTTP Library / APIs
Manages data and rules of the application

Key Points:
Interacts with the Web / backend
Does NOT directly interact with the user
Stores and updates application data
👉 Example: Fetching data from an API, storing user data, managing application state.

🟢 2. Controller
Responsibility:
-Handles Application Logic
-Acts as a bridge between Model and View

Key Points:
-Model and View do NOT know about each other
-Controller connects them
-Receives input from View
-Updates Model
-Sends updated data back to View
👉 It coordinates everything.

🟡 3. View
Responsibility:
-Handles Presentation Logic
-Displays data to the user

Key Points:
Shows UI (HTML/CSS/UI Components)
Sends user actions to Controller
Does NOT contain business logic
👉 Example: Buttons, forms, UI layouts.

🔄 Flow of MVC
Step-by-step flow:
1.User interacts with View
2.View sends request to Controller
3.Controller updates or requests data from Model
4.Model processes data (business logic / API calls)
5.Controller receives updated data
6.View updates and displays new data to User

===================================================================

🔹 1. Config File in MVC
✅ What is a Config File?
A config file stores application settings and environment-related values that should not be hardcoded inside controllers or models.

It helps in:
Centralizing configuration
Easy environment change (dev / staging / production)
Keeping sensitive data secure

✅ What Usually Goes Inside config?
Examples:
Database connection details
API base URLs
Port numbers
Secret keys
Environment variables
App constants

🔹 2. Helpers File in MVC
✅ What is a Helper?
A helper file contains reusable utility functions that are not directly part of business logic.

Helpers:
Reduce duplicate code
Keep controllers clean
Improve reusability

✅ What Usually Goes Inside helpers?
Examples:
Date formatting
Password hashing
Token generation
Response formatting
Validation utilities
