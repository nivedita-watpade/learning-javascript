'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

//Old way

// function countryData(country) {
//   //Ajax Call 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}?fullText=true`,
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Country UI
//     displayCountry(data);

//     const neighbours = data.borders;
//     console.log(neighbours);

//     if (!neighbours) return;

//     neighbours.forEach(neighbour => {
//       //Ajax Call 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);
//         displayCountry(data2, 'neighbour');
//       });
//     });
//   });
// }

// countryData('germany');

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

// const getContryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//     });
// };

// getContryData('India');

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

function getJSON(url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
}

const getContryData = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}?fullText=true`,
    `Country not found`,
  )
    .then(data => {
      displayCountry(data[0]);

      //Fetching neighbour's country
      data[0]?.borders?.forEach(border => {
        getJSON(
          `https://restcountries.com/v2/alpha/${border}`,
          `Country not found`,
        ).then(data => displayCountry(data, 'neighbour'));
      });
    })
    .catch(err => {
      renderError(`Something went wrong:${err.message}😞😔☹☹☹`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//btn.addEventListener('click', () => getContryData('India'));

//getContryData('australia');

// const getContryData = function (country) {
//   // fetch(`https://restcountries.com/v2/name/${country}?fullText=true`) //return a pending promise
//   //   .then(response => {
//   //     console.log(response);
//   //     if (!response.ok) {
//   //       throw new Error(`Country not found ${response.status}`);
//   //     }
//   //     return response.json();
//   //   }); // return a promise

//   getJSON(
//     `https://restcountries.com/v2/name/${country}?fullText=true`,
//     `Country not found`,
//   )
//     .then(data => {
//       displayCountry(data[0]);

//       //Fetching neighbour's country
//       data[0].borders.forEach(border => {
//         // fetch(`https://restcountries.com/v2/alpha/${border}`).then(response => {
//         //   if (!response.ok) {
//         //     throw new Error(`Country not found ${response.status}`);
//         //   }
//         //   return response.json();
//         // });
//         getJSON(
//           `https://restcountries.com/v2/alpha/${border}`,
//           `Country not found ${response.status}`,
//         ).then(data => displayCountry(data, 'neighbour'));
//       });
//     })
//     .catch(err => {
//       renderError(`Something went wrong:${err.message}😞😔☹☹☹`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // btn.addEventListener('click', () => getContryData('India'));

// getContryData('jdfdjhfgj');

// ======================Event Loop in practice======================================

// console.log('Test Start');
// setTimeout(() => console.log('Execute after 0 sec'), 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));
// Promise.resolve('Resolve promise 2').then(res => {
//   // for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// ================================ Building a  Promise ======================

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🎉');
  setTimeout(() => {
    if (Math.random() <= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject('You lost your money ☹');
    }
  }, 3000);
});
console.log(lotteryPromise);

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (second) {
  return new Promise(function (resolve, reject) {
    if (!second) reject(new Error('Please enter the time'));

    setTimeout(resolve, second);
  });
};

// wait(2000)
//   .then(() => {
//     console.log('We have waited for 2 second');
//     return wait(1000);
//   })
//   .then(() => console.log('We have waited for 1 second'))
//   .catch(err => console.error(err));

// ===========================================================================

function geoLocationErrorHandler() {
  const pandaneCordinates = {
    coords: { latitude: '20.3633277', longitude: '73.851463' },
  };
  return pandaneCordinates;
}

const getLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      timeout: 2000,
    });
  });
};

getLocation()
  .then(res => console.log(res))
  .catch(() => {
    const coords = geoLocationErrorHandler();
  });

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

function getPosition() {
  getLocation()
    .then(res => console.log(res))
    .catch(() => {
      const coords = geoLocationErrorHandler();
      const lat = coords.coords.latitude;
      const lng = coords.coords.longitude;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
      );
    })

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

btn.addEventListener('click', getPosition);

// ============================================ async/await ============================================

const myPosition = async function (country) {
  const res = await fetch(
    `https://restcountries.com/v2/name/${country}?fullText=true`,
  );
  const data = await res.json();
  console.log(data);
};

function myPosition1(country) {
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(res => {
      return res.json();
    })
    .then(data => console.log(data));
}

const whereAmI1 = async function (lat, lng) {
  try {
    const result = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );
    if (!result.ok) {
      throw new Error(`Coordinates not found ${result.status}`);
    }
    const data = await result.json();

    console.log(data);

    const country = await fetch(
      `https://restcountries.com/v2/name/${data.countryName}?fullText=true`,
    );
    if (!country.ok) {
      throw new Error(`Something went wrong with country ${country.status}`);
    }
    const countryData = await country.json();
    console.log(countryData);
    displayCountry(countryData[0]);
    countriesContainer.style.opacity = 1;
    return `You are in ${data.city}, ${data.countryName}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong:${err.message}😞😔☹☹☹`);
    throw err;
  }
};
// whereAmI1(19.037, 72.873);
// whereAmI1(19.037, 72.873)
//   .then(city => console.log(city))
//   .catch(err => console.log('Something wrong', err));
// // whereAmI1(19.037, 72.873);

// btn.addEventListener('click', whereAmI1);

(async function () {
  try {
    const data = await whereAmI1(19.037, 72.873);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v2/name/${c1}?fullText=true`,
    // );

    // const [data2] = await getJSON(
    //   `https://restcountries.com/v2/name/${c2}?fullText=true`,
    // );

    // const [data3] = await getJSON(
    //   `https://restcountries.com/v2/name/${c3}?fullText=true`,
    // );

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${c2}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${c3}?fullText=true`),
    ]);

    const allCapitals = data.map(d => d[0].capital);
    console.log(allCapitals);
  } catch (err) {
    console.log(err);
  }
};

get3Countries('india', 'USA', 'Sri lanka');
