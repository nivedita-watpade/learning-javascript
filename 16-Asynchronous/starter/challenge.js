///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain and log errors to the console

5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function displayCountry(data, classname = '') {
  const html = `<article class="country ${classname}">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${populationFormatter(data.population, data.alpha2Code)} people</p>
            <p class="country__row"><span>🗣️</span>${getLangauges(data.languages)}</p>
            <p class="country__row"><span>💰</span>${getCurrencies(data.currencies)}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function getLangauges(langArr) {
  return langArr.map(lang => lang.name).join(', ');
}

function getCurrencies(currArr) {
  return currArr.map(currency => currency.name).join(', ');
}

function populationFormatter(population, alpha2Code) {
  const formattedPop = new Intl.NumberFormat(`en-${alpha2Code}`).format(
    population,
  );
  return formattedPop;
}

function getJSON(url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
}

function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something went wrong ${response.status}`);
      }
      return response.json();
    })

    .then(data => {
      console.log(`You are in a ${data.city}, ${data.countryName} `);
      return getJSON(
        `https://restcountries.com/v2/name/${data.countryName}?fullText=true`,
        `Country not found`,
      ).then(data => {
        displayCountry(data[0]);
        countriesContainer.style.opacity = 1;
      });
    })

    .catch(err => {
      console.log(`Something went wrong:${err.message}😞😔☹☹☹`);
    });
}

//whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

//Promisifying setTimeout
const wait = function (second) {
  return new Promise(function (resolve, reject) {
    if (!second) reject(new Error('Please enter the time'));

    setTimeout(resolve, second);
  });
};

let img;
function createImage(imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image is not loading'));
    });
  });
}

// createImage('img/img-1.jpg')
//   .then(res => {
//     img = res;
//     return wait(2000);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(res => {
//     img = res;
//     return wait(2000);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(res => {
//     img = res;
//     return wait(2000);
//   })
//   .then(() => {
//     img.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const img = (document.createElement('img').src = 'img/img-1.jpg');
// console.log(img);

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// async function loadNPause() {
//   try {
//     const res1 = await createImage('img/img-1.jpg');
//     img = res1;
//     await wait(2000);
//     img.style.display = 'none';

//     const res2 = await createImage('img/img-2.jpg');
//     img = res2;
//     await wait(2000);
//     img.style.display = 'none';

//     const res3 = await createImage('img/img-3.jpg');
//     img = res3;
//     await wait(2000);
//     // img.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadNPause();

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async img => {
      return await createImage(img);
    });

    const data = await Promise.all(imgs);
    data.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
