const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// Part 1: Temperature Analysis
// Task 1: Create a new array containing temperatures greater than or equal to 25 degrees Celsius.

const temperaturesGreaterOrEqual25 = temperatures.filter((temp) => temp >= 25);
console.log(temperaturesGreaterOrEqual25);

// Task 2: Create a new array containing temperatures less than 20 degrees Celsius.

const temperaturesLessThan20 = temperatures.filter((temp) => temp < 20);
console.log(temperaturesLessThan20);

// Part 2: Temperature Transformation
// Task 3: Convert the entire list of temperatures to Fahrenheit.

const temperaturesInFahrenheit = temperatures.map(
  (temp) => (temp * 9) / 5 + 32
);
console.log(temperaturesInFahrenheit);

// Task 4: Create a new array that labels each temperature.

const temperatureLabels = temperatures.map((temp) => {
  if (temp >= 25) {
    return "Warm";
  } else if (temp >= 20 && temp < 25) {
    return "Mild";
  } else {
    return "Cool";
  }
});
console.log(temperatureLabels);

// Task 5: Calculate and return the highest temperature of the month.

const highestTemperature = Math.max(...temperatures);
console.log(highestTemperature);

// Task 6: Calculate and return the lowest temperature of the month.

const lowestTemperature = Math.min(...temperatures);
console.log(lowestTemperature);
