
//  https://github.com/mehedi-hasan-anik/assignment







// kilometre to meter

function kilometerToMeter(number) {
    var result;
    if (number < 0) {
        return  "invalid input";
    } else {
        result = (number * 1000);
        return result;
    }
}
var output = kilometerToMeter(10);
console.log(output);





//budgetcalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "invalid input";
    }
    var totalCost;
    totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}
var output = budgetCalculator(1, 1, 2);
console.log(output);




//hotelCost

function hotelCost(day) {
    var cost;
    var cost1;
    var cost2;
    var cost3;


     if (day < 0) {
        return "invalid input";
    } else if (day <= 10) {
        cost1 = day * 100;
        return cost1;
    } else if (day <= 20) {
        cost1 = (10 * 100);
        var secondPart = day - 10;
        cost2 = secondPart * 80;
        cost = cost1 + cost2;
        return cost;

    } else {
        cost1 = 10 * 100;
        cost2 = 10 * 80;
        var thirdPart = day - 20;
        cost3 = thirdPart * 50;
        cost = cost1 + cost2 + cost3;
        return cost;
    }

}

var output = hotelCost(220);
console.log(output);







// megaFriend

function megaFriend(names){
    if(!Array.isArray(names)){
        return "Invalid Input";                                                    
    }                              
    else if(names.length==0){
        return "Invalid Input";                                                    
    }
    else{
        var largeName = "";                                                       
        for(var i=0; i<names.length; i++){                                           
            if(names[i].length > largeName.length){
                largeName = names[i];                                             
            }
        }
        return largeName;                                                       
    }
}
var names = megaFriend(["00000", "anik", "parves", "rasel"]);
console.log(names);