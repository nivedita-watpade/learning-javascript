'use strict';

const bookings = [];

const createBookings = function (
  flightNum,
  passengersNum = 2,
  price = 3000 * passengersNum
) {
  // ES5
  //   passengersNum = passengersNum || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
};

createBookings('LH298');
createBookings('LH298', 2, 2010);
createBookings('LH2510', undefined, 6000);
