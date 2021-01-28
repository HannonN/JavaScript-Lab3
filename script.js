"use strict";

// #1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
// #2
const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

console.log(addSubmission(submissions, "Nathan", 95, "2020-1-26"));
console.log(submissions);

// #3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

// #4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  } else {
    return "No Match...";
  }
};

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

// #5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 2, 85);
console.log(submissions);

// }const findLaptopByPrice = (array, price) => {
//     return array.find((item) => {
//       return item.price === price;
//     });
//   };

// #6
const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};

console.log(findSubmissionByName(submissions, `Jack`));

// #7
// const calcProduct = (numbers) => {
//   let product = 1;
//   numbers.forEach((item) => {
//     product *= item;
//   });
//   return product;
// };

// let anotherArrayOfNumbers = [2, 3, 4];
// console.log(calcProduct(anotherArrayOfNumbers));

const findLowestScore = (array) => {
  let score = 100;
  array.forEach((submission) => {
    if (submission.score < score) {
      score = submission.score;
    }
  });
  return score;
};

console.log(findLowestScore(submissions));

// #9
// const filterTouchscreensV2 = (anArrayOfLaptops, trueOrFalse) => {
//     return anArrayOfLaptops.filter((item) => {
//       return item.touchscreen === trueOrFalse;
//     });
//   };
//   console.log(filterTouchscreensV2(objects, false));

//   console.log(filterEven(gregsNumbers));

const filterPassing = (array) => {
  return array.filter((score) => {
    return score === array.passed;
  });
};
console.log(filterPassing(submissions, true));
