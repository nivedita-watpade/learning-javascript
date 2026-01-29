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

getContryData('australia');

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

console.log('Test Start');
setTimeout(() => console.log('Execute after 0 sec'), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test End');
