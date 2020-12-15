function leapCalc(){
    var year = prompt("What year do you want to check?");
    alert(isLeap(year));
}

function isLeap(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
            return ""+year+" is a leap year.";    
            } else {
            return ""+year+" is not a leap year.";      
            }
        }else {
        return ""+year+" is a leap year.";     
        }
    }else {
    return ""+year+" is not a leap year.";  
    }
}