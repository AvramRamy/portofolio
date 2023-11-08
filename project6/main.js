let btn = document.getElementById('btn');
let output = document.getElementById('output');
let objects = [
    "Play Football",
    "Read a book",
    "Call Friends",
    "Enroll in a New Course",
    "Study in Eng Fares Bootcamp",
    "Play Video Games",
    "Ride a Bike",
]
btn.addEventListener('click',function(){
    var randomObjects = objects[Math.floor(Math.random()*objects.length)];
    output.innerHTML = randomObjects
})