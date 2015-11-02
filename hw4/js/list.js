/**************************************************************************************
                            Function Definitions
**************************************************************************************/
function showMsg(element) {
    var msgElement = (element.parentNode.parentNode.getElementsByClassName("message"))[0];
    msgElement.style.visibility="visible";
}

function deleteHabit(element) {
    var child = element.parentNode.parentNode;
    var parent = child.parentNode;
    child.classList.add("anim-slide-out-right-240-5");

    prefixedEvent(child, "AnimationEnd", function() {
        parent.removeChild(child);
    });
}

function createHabitNameListElement(currentHabit){
    var habitNameListElement = document.createElement("LI");
    var habitNameDiv = document.createElement("DIV");
    var habitNameText = document.createTextNode(currentHabit.title);
    habitNameDiv.setAttribute("class", "habit-name");
    habitNameDiv.appendChild(habitNameText);
    habitNameListElement.appendChild(habitNameDiv);
    return habitNameListElement;
}

function createHabitIconListElement(currentHabit){
    var habitIconListElement = document.createElement("LI");
    var habitIconImage = document.createElement("IMG");
    habitIconImage.setAttribute("class", "habit-icon");
    habitIconImage.setAttribute("src", currentHabit.icon);
    habitIconImage.setAttribute("alt", "Habit Icon");
    habitIconListElement.appendChild(habitIconImage);
    return habitIconListElement;
}

/*
 * Function that generates the html for the title of the habit and 
 * the icon for the habit
*/
function createHabitInfoElement(currentHabit){
    var habitInfo = document.createElement("UL");
    habitInfo.setAttribute("class", "habit-info");
    var habitNameListElement = createHabitNameListElement(currentHabit);
    var habitIconListElement = createHabitIconListElement(currentHabit);
    habitInfo.appendChild(habitNameListElement);
    habitInfo.appendChild(habitIconListElement);
    return habitInfo;
}

function createMessageTotalSpan(currentHabit){
    var messageTotalSpan = document.createElement("SPAN");
    messageTotalSpan.setAttribute("class", "message-total");
    var currentStreakStrong = document.createElement("STRONG");
    var currentStreakText = document.createTextNode(currentHabit.currentStreak);
    currentStreakStrong.appendChild(currentStreakText);
    var messageTotalText = document.createTextNode(" days in a row! Best Record: ");
    var bestStreakStrong = document.createElement("STRONG");
    var bestStreakText = document.createTextNode(currentHabit.bestStreak);
    bestStreakStrong.appendChild(bestStreakText);
    var breakElement = document.createElement("BR");
        
        
    var NS="http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS,"svg");
    svg.setAttribute("width", 150);
    svg.setAttribute("height", 25);
    var topLine = document.createElementNS(NS, "LINE");
    topLine.setAttribute("x1", 0);
    topLine.setAttribute("y1", 0);
    topLine.setAttribute("x2", 60);
    topLine.setAttribute("y2", 0);
    topLine.setAttribute('stroke', "red");
    topLine.setAttribute('stroke-width', 25);
    var bottomLine = document.createElementNS(NS, "LINE");
    bottomLine.setAttribute("x1", 60);
    bottomLine.setAttribute("y1", 0);
    bottomLine.setAttribute("x2", 150);
    bottomLine.setAttribute("y2", 0);
    bottomLine.setAttribute('stroke', "red");
    bottomLine.setAttribute('stroke-width', 25)
    svg.appendChild(topLine);
    svg.appendChild(bottomLine);
                    
    messageTotalSpan.appendChild(currentStreakStrong);
    messageTotalSpan.appendChild(messageTotalText);
    messageTotalSpan.appendChild(bestStreakStrong);
    messageTotalSpan.appendChild(breakElement);
    messageTotalSpan.appendChild(svg);
    return messageTotalSpan;
}

function createMessageTodaySpan(currentHabit){
    var messageTodaySpan = document.createElement("SPAN");
    messageTodaySpan.setAttribute("class", "message-today");
    var tempTextNode = document.createTextNode("Completed ");
    var timesCompletedStrong = document.createElement("STRONG");
    var timesCompletedText = document.createTextNode(currentHabit.completedToday + "/" + currentHabit.dayFrequency);
    timesCompletedStrong.appendChild(timesCompletedText);
    var tempTextNode2 = document.createTextNode(" for today!");
    messageTodaySpan.appendChild(tempTextNode);
    messageTodaySpan.appendChild(timesCompletedStrong);
    messageTodaySpan.appendChild(tempTextNode2);
    return messageTodaySpan;
}

/*
 * Function that displays numeric feedback about how many times they have completed a habit
*/
function createHabitMessageElement(currentHabit){
    var messageDiv = document.createElement("DIV");
    messageDiv.setAttribute("class", "message");
    var messageTotalSpan = createMessageTotalSpan(currentHabit);
    var messageTodaySpan = createMessageTodaySpan(currentHabit);
    var breakElement = document.createElement("BR");
    messageDiv.appendChild(messageTotalSpan);
    messageDiv.appendChild(breakElement);
    messageDiv.appendChild(messageTodaySpan);
    return messageDiv;
}

/*
 * Function that generates the buttons at the bottom of each habit
 * that allow for editing, deleting, and marking completion of a habit
*/
function createHabitOpElement(currentHabit){
    var habitOpDiv = document.createElement("DIV");
    habitOpDiv.setAttribute("class", "habit-op");
    
    var doneButton = document.createElement("BUTTON");
    doneButton.setAttribute("class", "op op-done");
    doneButton.setAttribute("type", "button");
    doneButton.setAttribute("title", "done");
    var doneImage = document.createElement("IMG");
    doneImage.setAttribute("src", "../img/done.svg");
    doneImage.setAttribute("alt", "Done");
    doneButton.appendChild(doneImage);
        
    var editButton = document.createElement("BUTTON");
    editButton.setAttribute("class", "op op-edit");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("title", "edit habit");
    var editImage = document.createElement("IMG");
    editImage.setAttribute("src", "../img/edit.svg");
    editImage.setAttribute("alt", "Edit");
    editButton.appendChild(editImage);
        
    var deleteButton = document.createElement("BUTTON");
    deleteButton.setAttribute("class", "op op-del");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("title", "delete habit");
    var deleteImage = document.createElement("IMG");
    deleteImage.setAttribute("src", "../img/delete.svg");
    deleteImage.setAttribute("alt", "Del");
    deleteButton.appendChild(deleteImage);
    
    habitOpDiv.appendChild(doneButton);
    habitOpDiv.appendChild(editButton);
    habitOpDiv.appendChild(deleteButton);
    return habitOpDiv;
}

/*
* Function that generates the contents for a single habit
*/
function createHabitElement(currentHabit){
    var habit = document.createElement("LI");
    var habitInfo = createHabitInfoElement(currentHabit);
    var messageDiv = createHabitMessageElement(currentHabit);
    var habitOpDiv = createHabitOpElement(currentHabit);
    habit.appendChild(habitInfo);
    habit.appendChild(messageDiv);
    habit.appendChild(habitOpDiv);
    document.getElementById("habit-list").appendChild(habit);
}

/*
* Function that generates the list of habits on the page
*/
function listHabits(){
    var habits = [];  //mock data to use until adding habits is implemented
    habits.push({
        title: "Sleep 8 Hours",
        icon: "../img/sleep.jpg",
        weekFrequency: 0,
        dayFrequency: 1,
        otherFrequency: 0,
        currentStreak: 2,
        bestStreak: 5,
        completedToday: 0
    });
    habits.push({
        title: "Eat Healthy",
        icon: "../img/salad.jpg",
        weekFrequency: 0,
        dayFrequency: 1,
        otherFrequency: 0,
        currentStreak: 10,
        bestStreak: 20
    });
    habits.push({
        title: "Exercise 30 minutes",
        icon: "../img/run.jpg",
        weekFrequency: 0,
        dayFrequency: 1,
        otherFrequency: 0,
        currentStreak: 48,
        bestStreak: 60
    });
    for(var i = 0; i<habits.length; i++){
        var currentHabit = habits[i];
        createHabitElement(currentHabit);
    }
}

var pageFadeOut = function(location) {
    document.body.classList.add("anim-slide-out-right");
    prefixedEvent(document.body, "AnimationEnd", function() {
        window.location.href = location;
    });
};

var pfx = ["webkit", "moz", "MS", "o", ""];
function prefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p])
            type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}
/**************************************************************************************
                            Executed On Load of Page
**************************************************************************************/
listHabits();