/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {

    var firstTeamName = document.querySelector('.form-control:nth-of-type(1)');
    var firstTeamScore = document.querySelector('.form-control:nth-of-type(2)');
    var secondTeamName = document.querySelector('.form-control:nth-of-type(3)');
    var secondTeamScore = document.querySelector('.form-control:nth-of-type(4)');
    var btn = document.querySelector('.btn-primary');

    var tableToadd = document.querySelector('.table-bordered tbody');
    
    console.log(tableToadd);

    btn.addEventListener('click', function () {
        if (checkNames(firstTeamName.value, secondTeamName.value)) {
            alert('Obie drużyny mają taką samą nazwę!!!');
            event.preventDefault();
        } 
        if(checkScores(firstTeamScore.value, secondTeamScore.value)){
            alert('Proszę podać poprawne wyniki!');
            event.preventDefault();
        } 
        
        var newTr = document.createElement('tr');
        var newTdFirstTeam = document.createElement('td');
        newTdFirstTeam.innerHTML = firstTeamName.value;
        var newTdSecondTeam = document.createElement('td');
        newTdSecondTeam.innerHTML = secondTeamName.value;
        var newTdScore = document.createElement('td');;
        newTdScore.innerHTML = (firstTeamScore.value + '-' + secondTeamScore.value);
        newTr.appendChild(newTdFirstTeam);
        newTr.appendChild(newTdSecondTeam);
        newTr.appendChild(newTdScore);
        
        console.log(tableToadd.appendChild(newTr).value);
        
        event.preventDefault();

    });
    
    function checkScores(score1, score2){
        if(score1 < 0 || score2 < 0){
            return true;
        } else {
            return false;
        }
    }

    function checkNames(name1, name2) {
        if (name1 == name2) {
            return true;
        } else {
            return false;
        }

    }


});
