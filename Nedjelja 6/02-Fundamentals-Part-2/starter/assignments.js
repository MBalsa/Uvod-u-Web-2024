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
