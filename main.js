const companies = [{
      name: "Company One",
      category: "Finance",
      start: 1981,
      end: 2004
   },
   {
      name: "Company Two",
      category: "Retail",
      start: 1992,
      end: 2008
   },
   {
      name: "Company Three",
      category: "Auto",
      start: 1999,
      end: 2007
   },
   {
      name: "Company Four",
      category: "Retail",
      start: 1989,
      end: 2010
   },
   {
      name: "Company Five",
      category: "Technology",
      start: 2009,
      end: 2014
   },
   {
      name: "Company Six",
      category: "Finance",
      start: 1987,
      end: 2010
   },
   {
      name: "Company Seven",
      category: "Auto",
      start: 1986,
      end: 1996
   },
   {
      name: "Company Eight",
      category: "Technology",
      start: 2011,
      end: 2016
   },
   {
      name: "Company Nine",
      category: "Retail",
      start: 1981,
      end: 1989
   },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
// standard for loop
for (let i = 0; i < companies.length; i++) {
   console.log(companies[i]);
}

// forEach method
companies.forEach(function (company) {
   console.log(company);
});

// ES6 syntax
companies.forEach(company => console.log(company));
*/

// filter

// standard logic, set empty arrays, use for loop, push to arrays
/*
let canMarry = [];
let cantMarry = [];
for (let i = 0; i < ages.length; i++) {
   if (ages[i] >= 18) {
      canMarry.push(ages[i])
   } else {
      cantMarry.push(ages[i])
   }
}

console.log(canMarry);
console.log(cantMarry);

// filter method
const canMarry2 = ages.filter(function (age) {
   if (age >= 18) {
      return true;
   }
});

console.log(canMarry2);

const cantMarry2 = ages.filter(function (age) {
   if (age <= 18) {
      return true;
   }
});

console.log(cantMarry2);

// ES6 syntax
const canMarry3 = ages.filter(age => age >= 18);

console.log(canMarry3);

const cantMarry3 = ages.filter(age => age <= 18);

console.log(cantMarry3);
*/
/*
// filter retail companies
const retailCompanies = companies.filter(function (company) {
   if (company.category === 'Retail') {
      return true;
   }
});

console.log(retailCompanies);

// ES6 syntax
const autoCompanies = companies.filter(company => company.category === 'Auto');

console.log(autoCompanies);

// filter companies started in the 80's
const companyFounded = companies.filter(function (company) {
   if (company.start >= 1980 && company.start <= 1989) {
      return true;
   }
});

console.log(companyFounded);

// ES6 syntax
const companyStarted = companies.filter(company =>
   (company.start >= 1980 && company.start <= 1989));

console.log(companyStarted);

// get companies that lasted 10+ years
const tenYearsPlus = companies.filter(company => ((company.end - company.start) > 9));

console.log(tenYearsPlus);
*/

// map

// create array of company names 
/*
const companyNames = companies.map(function (company) {
   return company.name;
})

// miscellaneous array
const miscMap = companies.map(function (company) {
   return `${company.name} RIP [${company.start} - ${company.end}]`;
})

// ES6 syntax
const miscMap1 = companies.map(company => `${company.name} we did ${company.category}, we lost it all in ${company.end}`);

console.log(companyNames, miscMap, miscMap1);
// loop through the ages array and square each number
const agesSquared = ages.map(age => Math.sqrt(age));
// get age in approximate horse years
const horseYears = ages.map(age => Math.round(age / 3));

// method chaining
const numFun = ages
   .map(age => age * 10)
   .map(age => Math.floor(Math.sqrt(age)));


console.log(agesSquared, horseYears, numFun);
*/

// sort

// sort by start year
// const companyEnd = companies.sort(function (comp1, comp2) {
//    if (comp1.end > comp2.end) {
//       return 1
//    } else {
//       return -1
//    }
// });
// console.log(companyEnd);

// ES6 syntax
// sort by end year
/*
const companyEnd1 = companies.sort((a, b) => (a.end > b.end ? 1 : -1));

console.log(companyEnd1);

// sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
*/

// reduce

// using a for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
   ageSum += ages[i];
}
console.log(ageSum);

// using reduce method
const ageSum1 = ages.reduce(function (total, age) {
   return total + age;
}, 0);

// ES6 syntax
const ageSum2 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum1, ageSum2);

// Get total years for all companies

const totalYears = companies.reduce(function (total, company) {
   return total + (company.end - company.start);
}, 0);

// ES6 syntax
const totalYears1 = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears, totalYears1);