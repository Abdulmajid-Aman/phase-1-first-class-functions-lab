// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(drivers) {
    let newArray = drivers.slice(0,2)
    return newArray
}

function returnLastTwoDrivers(drivers) {
    let newArray = drivers.slice(-2)
    return newArray
}


function selectDifferentDrivers(drivers , fn) {
    return fn(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


