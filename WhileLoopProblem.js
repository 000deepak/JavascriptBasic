//Print power series of 2 till 256 or given num
function getPowerSeries(n){
    let prod = 1;
    let count=0;
    while (prod <= 256 && count<=n) {
        console.log("2^"+count+"="+prod);
        prod =prod*2;
        count++;
    }
}
getPowerSeries(4);
getPowerSeries(7);
getPowerSeries(14);

