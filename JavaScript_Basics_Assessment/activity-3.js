const students = ["Peter", "Paul", "Mary"]

for (i=0; i<3; i++) {
    let name = prompt("Enter a student's name")
    students.push(name)
}

for (i=0; i<students.length; i++) {
    console.log (students[i])
}
