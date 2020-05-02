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



// map
// sort
// reduce