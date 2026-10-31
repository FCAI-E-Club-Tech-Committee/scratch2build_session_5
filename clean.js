const students = [
    { name: "Ahmed", score: 85 },
    { name: "Sara", score: 42 },
    { name: "Omar", score: 67 },
    { name: "Mariam", score: 30 },
    { name: "Ali", score: 50 }
];

// Updated students.forEach to students.filter
const passedStudents = students.filter(student => {
    return student.score >= 50;
});

// Updated students.forEach to students.map
const studentNames = students.map(student => {
    return student.name;
});

console.log("Passed students:", passedStudents);
console.log("Student names:", studentNames);

function calculateAverage() {
    // totalScore variable should be declared outside the for loop
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }

    console.log("Average score:", totalScore / students.length);
}

calculateAverage();

function findHighestScore(students) {
    let highest = 0;
    
    for (let i = 0; i < students.length; i++) {
        if (students[i].score > highest) {
            highest = students[i].score;
        }
        
    }
    // highest variable should be returned after the for loop finishes
    return highest;
}

console.log("Highest score:", findHighestScore(students));

const $ = id => document.getElementById(id);
 
$("avg").textContent = calculateAverage();
$("high").textContent = findHighestScore(students);
$("passCount").textContent = passedStudents.length + " of " + students.length;
 
$("rows").innerHTML = students.map(student => {
    const passed = student.score >= 50;
    return `
        <tr>
            <td>${student.name}</td>
            <td class="num">${student.score}</td>
            <td><span class="pill ${passed ? "ok" : "no"}">${passed ? "Passed" : "Failed"}</span></td>
        </tr>`;
}).join("");
 
$("passed").innerHTML = passedStudents
    .map(student => `<li>${student.name} (${student.score})</li>`)
    .join("");
 
$("names").innerHTML = studentNames
    .map(name => `<li>${name}</li>`)
    .join("");