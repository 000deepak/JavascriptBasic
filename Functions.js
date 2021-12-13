//welcome to line comparison problem

let x1co = 1;
var x2co = 2;

function distance(x1co, y1co, x2co, y2co) {
  let x1co = 3;
  var x2co = 4;

  var d = Math.sqrt((x2co - x1co) ** 2 + (y2co - y1co) ** 2);
  return d;
}

console.log(d);

//TempConversion
function getTemp(input,temp){
    let convertedTemp=0;
    switch(input){
        case 'a':{
            console.log("Converting to Fahrenheit");
            convertedTemp=(temp*(9/5)) +32;
            console.log(temp+" deg C = "+convertedTemp+" deg F");
            break;
        }
        case 'b':{
            console.log("Converting to Celcius");
            convertedTemp=((temp-32)*(5/9));
            console.log(temp+" deg F = "+convertedTemp+" deg C");
            break;
        }
    }
}
getTemp('a',Math.floor(Math.random()*100));
getTemp('b',Math.floor((Math.random()*181)+32));



//Take a number from user and check if the number is a Prime then show
//that its palindrome is also prime

function checkPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num+" is NOT a Prime Number");
            return false;
        }
    }
    if (num>1){
        console.log(num+" is a Prime Number");
        return true;
    }
}

