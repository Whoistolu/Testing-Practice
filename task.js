//using the filter(), map(), sort() and reduce() method

const ages = [12, 16, 17, 19, 85, 42, 22, 44, 55, 66, 77, 09, 10, 15];

// const newAge = ages.filter((age) => {
//   if (age <= 21) {
//     return true;
//   }
// })
// console.log(newAge);

const newAge = ages.filter(age => age >40);

console.log(newAge);

const companies = [
  {name: 'company one', category: 'finance', start: 2020, end: 2021},
  {name: 'company two', category: 'auto', start: 1999, end: 2002},
  {name: 'company three', category: 'retail', start: 2002, end: 2006},
  {name: 'company four', category: 'retail', start: 2005, end: 2011},
];

const retailCompanies = companies.filter(company => company.category === 'retail');
const newStart = companies.filter(company => company.start > 1999 && company.start < 2021);

console.log(retailCompanies);
console.log(newStart);