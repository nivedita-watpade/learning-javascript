Geolocation API (JavaScript)
What is Geolocation API?

The Geolocation API allows a web application to get the user’s current geographic location (latitude & longitude) using the browser.

Syntax: navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

Ex. navigator.geolocation.getCurrentPosition(
function (position) {
const { latitude, longitude } = position.coords;
console.log(latitude, longitude);
},
() => alert('Could not get your position!')
);

**\* Construtor method is called immedaitely when new objet is created from this calss**
