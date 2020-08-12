const Database = require ('./db')
const createProffy = require ('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "Alexandre Klafke", 
        avatar: "https://avatars0.githubusercontent.com/u/33735642?s=460&u=506a0c9779f66084bf6e61aed77c173fb97b85b9&v=4", 
        whatsapp: "55 51 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><br>Donec metus justo, posuere eget nulla quis, consectetur tempus odio. Donec in risus non purus ullamcorper rutrum.",
    }

    classValue = {
        subject: "Math", 
        cost: "20", 
        //proffy id by database.
    }

    classScheduleValues = [
        //class id by database.
        {
        weekday: 0, 
        time_from: 720, 
        time_to: 1220
        },
        {
            weekday: 1, 
            time_from: 620, 
            time_to: 1000
        }
    ]

     await createProffy (db, {proffyValue, classValue, classScheduleValues})

})