// Retrieve Score and Name from Local Storage
var setScore = function(){
    var playerData = JSON.parse(localStorage.getItem("playerData")) || [];
    
    //set Score to playerScore
    playerScore=(playerData.score);
    console.log(playerScore);

    //set Name to Name on List
    playerName=(playerData.name);
    console.log(playerName);
    
    //create and append div with playerName
    var listNameEl = document.createElement("div");
    listNameEl.className = "list-item";
    listNameEl.innerHTML = playerName.toUpperCase();
    listName.append(listNameEl);

     //create and append div with playerName
    var listScoreEl = document.createElement("div");
    listScoreEl.className = "list-item";
    listScoreEl.innerHTML = playerScore;
    console.log(listScoreEl);
    listScore.append(listScoreEl);

};
// Prompts to allow user to see high scores

setScore();