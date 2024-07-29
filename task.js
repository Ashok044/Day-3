//  1. Compare Two JSON Objects for Equality Regardless of Order

function areObjectsEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // Check if the number of keys is the same
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Check if all keys and values are the same
  for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

console.log(areObjectsEqual(obj1, obj2)); // true


//2. Display All Country Flags from the REST Countries API

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.flags.png); // or use .svg for SVG flags
    });
  })
  .catch(error => console.error('Error fetching countries:', error));


//3. Print Country Names, Regions, Sub-regions, and Populations

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('------------------------');
    });
  })
  .catch(error => console.error('Error fetching countries:', error));

