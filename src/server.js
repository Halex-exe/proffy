const proffys = [
    {
    name: "Alexandre Klafke", 
    avatar: "https://avatars0.githubusercontent.com/u/33735642?s=460&u=506a0c9779f66084bf6e61aed77c173fb97b85b9&v=4", 
    whatsapp: "55 51 999999999", 
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><br>Donec metus justo, posuere eget nulla quis, consectetur tempus odio. Donec in risus non purus ullamcorper rutrum.", 
    subject: "Math", 
    cost: "20", 
    weekday: [0], 
    time_from: [700], 
    time_to: [1200]
},
{
    name: "Alexandre Klafke 2", 
    avatar: "https://avatars0.githubusercontent.com/u/33735642?s=460&u=506a0c9779f66084bf6e61aed77c173fb97b85b9&v=4", 
    whatsapp: "55 51 999999999", 
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><br>Donec metus justo, posuere eget nulla quis, consectetur tempus odio. Donec in risus non purus ullamcorper rutrum.", 
    subject: "Math", 
    cost: "30", 
    weekday: [1], 
    time_from: [700], 
    time_to: [1200]
    }
]

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

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy (req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0 //check is an empty array
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')

const server = express()
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)