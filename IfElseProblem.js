//Read 5 random 3 digit no and shows max and min
let max=Math.floor(Math.random() * 100);
let min=max
for(a=1;a<=5;a++){
    let a=Math.floor(Math.random() * 1000);
    if(a>max){
        max=a;
    }
    if(a<min){
        min=a;
    }
}
console.log("Max: "+max);
console.log("Min: "+min);


//Leap Year Checker
function yearCheck(year){
    if(year>999 && year<10000){
        if(year%4 ==0 && year%100 != 0){
            console.log(year+" is a leap year.");
        }else if (year%4 ==0 && year % 100 == 0 && year%400 ==0){
            console.log(year+" is a leap year.");
        }else{
            console.log(year+" is NOT a leap year.");
        }
    }else{
        console.log(year+" is NOT a year");
    }
}
yearCheck("2020");
yearCheck("2021");
yearCheck("20200");

