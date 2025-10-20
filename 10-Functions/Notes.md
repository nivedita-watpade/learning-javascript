================= Default Parameter ===========================

In JavaScript, a default parameter allows you to assign a default value to a function parameter in case no value (or undefined) is passed when the function is called.
Syntax:
function functionName(parameter = defaultValue) {
// function body
}

1. Expression in Default Parameter : You can use expressions or even previous parameters inside a default parameter.

function calculateArea(length = 5, width = length _ 2) {
return length _ width;
}
