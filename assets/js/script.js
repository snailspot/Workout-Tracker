document.addEventListener('DOMContentLoaded', function(){
    getDate();

    document.getElementById("version").innerHTML = "<em>Workout Tracker V0.01</em>"
});

function getDate(){
        // Declaring variable for date display, getting date from system
        const fullDate = new Date();
        // Formats date string into separate date and time strings
        const date = formatDate(fullDate);
        // Updates date/time <p> elements in navigation bar by ID
        document.getElementById("date").innerHTML = date;
}

function formatDate(fullDate){
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth()+1;
    const day = fullDate.getDate();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = weekday[fullDate.getDay()] + " " + day.toString().concat("/",month.toString(),"/", year.toString());

    return date;
}