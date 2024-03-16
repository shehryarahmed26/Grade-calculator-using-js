// let username;
// let engmarks;
// let urdumarks;
// let mathmarks;
// let totalmarks = (engmarks + urdumarks + mathmarks) / 3;
// username = prompt('Enter Your Name')
// engmarks = Number(prompt('Enter Your English Marks')) 
// urdumarks = Number(prompt('Enter Your Urdu Marks'))
// mathmarks = Number(prompt('Enter Your Math Marks'))
// parseInt(fullmarks);
// if (totalmarks >= 40 ) {
//     alert('Your Grade is A+')
// }
// else {
//     console.log('You did a mistake');
// }

// ******************************************************************** //

// Get the marks of subjects from the user
// let engmarks = parseFloat(prompt("Enter your english Marks:"));
// let mathmarks = parseFloat(prompt("Enter your Math Marks:"));
// let computermarks = parseFloat(prompt("Enter your Computer Marks:"));

// // Calculate the average
// let average = (engmarks + mathmarks + computermarks) / 3;
// let grade;

// // Determine the letter grade
// if (average >= 90) {
//     grade = "A";
// } else if (average >= 80) {
//     grade = "B";
// } else if (average >= 70) {
//     grade = "C";
// } else if (average >= 60) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// // Display the average grade
// alert("Your average grade is: " + grade);

/////////////////////////////////////////////////////////////////////////////

// welcome user alert 

alert('Weldome to my Grade Calculator application')

// asking the user name 

let user = prompt('Enter Your Name: ')


// Get subjets marks from the user 
let marks1 = Number(prompt('Enter You English Marks'));
let marks2 = Number(prompt('Enter You Computer Marks'));
let marks3 = Number(prompt('Enter You Math Marks'));

// calculate the average marks 

let average = (marks1 + marks2 + marks3) / 3;
let grade;

// determine the condition 

if (average >= 90) {
    grade = 'A+'
}
else if (average >= 70) {
    grade = 'A'
}
else if (average >= 60) {
    grade = 'B'
}
else if (average >= 50) {
    grade = 'C'
}
else if (average >= 40) {
    grade = 'E'
}
else {
    grade = 'Fail'
}

// Display the average grade 
alert(user + ' Your Grade is: ' + grade)



