//Print 2^n for given value of n
function giveExponential(n){
    let value=1;
    for (var i = 0; i <= n; i++) {
        console.log("2^" + i + " = " + value);
        value = value*2;
    }    
}
giveExponential(3);
giveExponential(8);
giveExponential(6);

