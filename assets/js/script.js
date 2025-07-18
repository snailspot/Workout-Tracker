document.addEventListener('DOMContentLoaded', function(){
    getDate();

    document.getElementById("version").innerHTML = "<em>Workout Tracker V0.01</em>"
});

function getDate(){
        // Declaring variable for date display, getting date from system
        const fullDate = new Date();
        // Formats date string into separate date and time strings
        const date = formatHeaderDate(fullDate);
        // Updates date/time <p> elements in navigation bar by ID
        document.getElementById("date").innerHTML = date;
}

function formatHeaderDate(fullDate){
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth()+1;
    const day = fullDate.getDate();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = weekday[fullDate.getDay()] + " " + formatDateStr(day).concat("/",formatDateStr(month),"/", year.toString());

    return date;
}

function formatDateStr(date){
    return date < 10 ? "0" + date.toString() : date.toString();
}

function toggleExerciseDisplay(exerciseList, condition=true, display="inline"){
    if(condition && exerciseList.length >= 1){
        exerciseList.forEach(exercise => {exercise.style.opacity = "100%"; exercise.parentElement.style.display = display;});
    }else{
        exerciseList.forEach(exercise => {exercise.style.opacity = "0"; setTimeout(() =>{exercise.parentElement.style.display = "none"}, 200); });
    }
}

function getNthParent(element, n){
    let parent = element;
    for (let i = 0; i < n; i ++){
        if (parent.parentElement){
            parent = parent.parentElement;
        } else {
            console.log("Parent not found at " + n + " position");
            return null;
        }
    }
    return parent;
}