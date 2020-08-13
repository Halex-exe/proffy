const subjects = [
    "Art",
    "Biology",
    "Science",
    "Physical Education",
    "Physics",
    "Geography",
    "History",
    "Math",
    "Portuguese",
    "Chemistry",

]

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",

]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}