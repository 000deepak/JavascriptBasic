//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let numArray=new Array();
for (var i=1;i<=10;i++){
    let random=(Math.floor(Math.random() * 900)+100);
    numArray.push(random);
}
console.log("Selected Array= ");
console.log(numArray);
let firstLargest=numArray[0];
let secondLargest=numArray[0];
let firstSmallest=numArray[0];
let secondSmallest=numArray[0];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = numArray[i];
    }else if (numArray[i] > firstLargest && numArray[i] != firstLargest) {
        secondLargest = numArray[i];
    }
    if (numArray[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numArray[i];
    } else if (numArray[i] < secondSmallest && numArray[i] != firstSmallest) {
        secondSmallest = numArray[i];
    }
}
console.log("Second Largest Element: "+secondLargest);
console.log("Second Smallest Element: "+secondSmallest);

//Extend the above program to sort the array
numArray.sort();
console.log("Array is now sorted.");
console.log("Second Largest Element: "+numArray[8]);
console.log("Second Smallest Element: "+numArray[1]);


