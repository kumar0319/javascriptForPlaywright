let day= 'nothing';

switch (new Date().getDay()) {
    
    case 10:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 4:
        day = "Friday";
        break;
                
    default:
        console.log("Not in the range ")
        break;


}

console.log(day)