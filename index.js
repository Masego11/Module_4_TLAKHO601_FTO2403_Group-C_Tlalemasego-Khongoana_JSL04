// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
let userPreference= ''; // Preference not set
console.log((userPreference) ? userPreference : "Regular");

// #### Challenge 2: Stock Checka
let cansLeft = 10; // Number of cans
console.log((cansLeft >=5) ? "We're stocked up" : "Time to stock up.");


// #### Challenge 3: Workout Intensity
let heartRate = 90; //Current heart rate in bpm
console.log((heartRate < 100 ) ? 'Boost needed' : 'Energy levels are high');


// #### Challenge 4: Temperature Suitability
let currentTemp = -2; // Current temperature in °C
console.log((currentTemp <= 5) ? "Chilled to perfection!" : "Needs a cooler!");


// #### Challenge 5: Late Night Coding Session
let currentHour = 6;
let hourlyPeriod = currentHour >= 7 && currentHour <= 24; //current hour is between 7am and midnight. 
console.log((hourlyPeriod === true) ? "Unleash the beast" : "Better stick to water");