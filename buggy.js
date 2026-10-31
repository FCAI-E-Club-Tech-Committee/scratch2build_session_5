const students = [
{ name: "Ahmed", score: 85 },
{ name: "Sara", score: 42 },
{ name: "Omar", score: 67 },
{ name: "Mariam", score: 30 },
{ name: "Ali", score: 50 }
];

// ==================================================
// TASK 1: Array Methods
// ==================================================

// Get students who passed
const passedStudents = students.filter(student => {
return student.score >= 50;
});

// Get students names
const studentNames = students.map(student => {
return student.name;
});

console.log("Passed students:", passedStudents);
console.log("Student names:", studentNames);

// ==================================================
// TASK 2: Syntax Errors
// ==================================================

const calculateDiscount = (price, discount) => {
const finalPrice = price - (price * discount / 100);

return finalPrice;

};

console.log("Final price:", calculateDiscount(200, 20));

// ==================================================
// TASK 3: Loops and Variable Scope
// ==================================================

function calculateAverage() {
let totalScore = 0;

for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
}

console.log("Average score:", totalScore / students.length);

}

calculateAverage();

// ==================================================
// TASK 4: Loops and Functions
// ==================================================

function findHighestScore(students) {
let highest = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].score > highest) {
        highest = students[i].score;
    }
}

return highest;

}

console.log("Highest score:", findHighestScore(students));
