/* destructuring: a way to assigning things from an object to a variable */

/* destructuring assignment: objects */
var example = { x: 3.0, y: 9.8, z: 11.2 };
const { x: a, y: b, z: c } = example; 
// get the field of x and copy it into value a
// and so on

const tempObj = {
    today: 55,
    tomorrow: 60
};

function getTomorrowTemp(tempObj) {
    "use strict";
    const { tomorrow: tomorrowTemp } = tempObj;
    return tomorrowTemp;
}

console.log(getTomorrowTemp(tempObj)); // output: 60

/* destructuring assignment: nested objects */
const localForecast = {
    today: {
        minTemp: 70,
        maxTemp: 84
    }, 
    tomorrow: {
        minTemp: 72,
        maxTemp: 80
    }
};

function getMaxTempTomorrow(forecast) {
    "use strict";
    const { tomorrow: {maxTemp : tomorrowMax} } = forecast;
    return tomorrowMax;
}

console.log(getMaxTempTomorrow(localForecast)); // output: 80

/* destructuring assignment to assign variables from arrays */
const array = [1, 2, 3, 4, 5];
const [a, b] = array;
console.log(a, b); // output: 1, 2
const [c, d, , e] = array;
console.log(c, d, e); // output: 1, 2, 4

let f = 9, g = 6;
(() => {
    "use strict";
    [f, g] = [g, f]
})();
console.log(f); // output: 6
console.log(g); // output: 9

/* destructuring assignment with rest operator */
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
};
console.log(removeFirstTwo(array)); // output: [3, 4, 5]
console.log(array); // output: [1, 2, 3, 4, 5]

/* use destructuring assignment to pass an object as a function's parameter */
const average = (function() {
    return function todaysAverage({ today: { minTemp, maxTemp } }) {
        return minTemp + (maxTemp - minTemp) / 2;
    }
})();
console.log(localForecast);
console.log(average(localForecast));
