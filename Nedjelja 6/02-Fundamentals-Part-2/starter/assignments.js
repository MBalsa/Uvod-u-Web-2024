function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its 
  capital city is ${capitalCity}`;
}

const descMontenegro = describeCountry("Montenegro", 0.6, "Podgorica");
console.log(descMontenegro);
const descFrance = describeCountry("France", 67.97, "Paris");
console.log(descFrance);
const descAustria = describeCountry("Austria", 9, "Vienna");
console.log(descAustria);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percMontenegro1 = percentageOfWorld1(0.6);
const percIndia1 = percentageOfWorld1(1428);
const percChina1 = percentageOfWorld1(1425);
console.log(percMontenegro1, percIndia1, percChina1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percMontenegro2 = percentageOfWorld2(0.6);
const percIndia2 = percentageOfWorld2(1428);
const percChina2 = percentageOfWorld2(1425);
console.log(percMontenegro2, percIndia2, percChina2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

const populations = [0.6, 1428, 1425, 335];

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}
//ili

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ["Croatia", "Bosnia", "Serbia", "Kosovo", "Albania"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Bosnia")] = "Bosnia and Herzegovina";
console.log(neighbours);

const myCountry = {
  country: "Montenegro",
  capital: "Podgorica",
  language: "Montenegrin",
  population: 0.6,
  neighbours: ["Croatia", "Bosnia", "Serbia", "Kosovo", "Albania"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
and a capital called ${this.capital}.`);
  },
  checkisIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

myCountry.describe();
myCountry.checkisIsland();
console.log(myCountry);

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// const populations = [0.6, 1428, 1425, 335];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

let i = 0;
percentages3 = [];
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log("With WHILE:", percentages3);
