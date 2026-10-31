const students = [
    { name: "Ahmed", score: 85 },
    { name: "Sara", score: 42 },
    { name: "Omar", score: 67 },
    { name: "Mariam", score: 30 },
    { name: "Ali", score: 50 }
];

// ==================================================
// BUG BLOCK 1: Array Methods
// Objective: Get the students who passed and print their names.
// ==================================================

const passedStudents = students.filter(student => student.score >= 50);
const studentNames = students.map(student => student.name);

console.log("Passed students:", passedStudents);
console.log("Student names:", studentNames);


// ==================================================
// BUG BLOCK 2: Syntax Errors
// Objective: Calculate the final price after a discount.
// ==================================================

const calculateDiscount = (price, discount) => {
    const finalPrice = price - (price * discount / 100);
    return finalPrice;
};

console.log("Final price:", calculateDiscount(200, 20));


// ==================================================
// BUG BLOCK 3: Loops and Variable Scope
// Objective: Calculate the average score of all students.
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
// BUG BLOCK 4: Loops and Functions
// Objective: Find and return the highest student score.
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

console.log("Highest score:", findHighestScore(students));students));
