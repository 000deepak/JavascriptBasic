/* class person {
  #aadhar;
  constructor(name, mobile,aadhar) {
    this.name = name;
    this.mobile = mobile;
    this.#aadhar=aadhar;
  }
  static getname() {
    return console.log(`this is ${this.name}`);
  }
  getaadhar() {
    return this.#aadhar;
  }
}
const deepak = new person("deepak", 656563,2000);
deepak["d"]=1;
console.log(deepak.getaadhar())
console.log(person.getname())





/*let a = sum(1, 2, 3, 4, 5);
 function sum(...args) {
  for (let x of args) {
    console.log(x);
  }
}

let deep = new Map();
deep.set("name",deepak)

console.log(Object.is(true,true));

let ab = [1,2,3,4,5,NaN];
console.log(ab.includes(3,2))

console.log(Object.keys(deepak))
console.log(Object.values(deepak))
console.log(Object.entries(deepak))

console.log("Mern".padEnd(6,"a"))


let arr = [1,[2],[[2],[3],4]]
console.log(arr.flat(2));
// console.log(arr.flatMap((value)=>{
//   return (value%2===0)});

let arr1 = [
  ["one",1]
];

let arrObj = Object.fromEntries(arr1)
console.log(arrObj)


let theNumber ;
let number = theNumber ?? 5;
console.log(number); 

const user = {
  name: "Aryclenio Barros",
  age: 22,
  alive: true,
  address: {
    street: "Hyrule street",
    number:null,
  },
};

// Without optional chaining
const number1 =  user.address.number
console.log(number1)

// With optional chaining
//const number = user.address?.number; 

let maxN= 9007199254740991n;

console.log(maxN+10n);


 */

/* function mobileInsurance(name, address, mobile_imeiNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("details saved");
      resolve("imei");
    });
  }, 1000);
}

function mobileCheck(mobile_imeiNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mobile is unique and verified");
      resolve("Mobile insured");
    }, 1000);
  });
}

mobileInsurance("deepak", "sangli", 2000)
  .then((mobile_imeiNo) => mobileCheck(mobile_imeiNo))
  .then((string) => console.log(string));

async function mobileInsurace1() {
  const user = await mobileInsurance("deepak", "sangli", 2000);
  const verify = await mobileCheck(mobile_imeiNo);
  const message = await console.log(string);
}

mobileInsurace1(); */

const p1 = function mobileInsurance(name, address, mobile_imeiNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("details saved");
      resolve("imei");
    });
  }, 1000);
};

const p2 = function mobileCheck(mobile_imeiNo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mobile is unique and verified");
      resolve("Mobile insured");
    }, 1000);
  });
};
/* 
p1("deepak", "sangli", 2000)
  .then((mobile_imeiNo) => p2(mobile_imeiNo))
  .then((string) => console.log(string)); */
/* 
 Promise.allSettled([p1,p2])
 .then((reult)=>{console.log("success")})
 .catch((e)=>{console.log("error")}) */

async function iterate(){
   const arr = [p1,p2];
   for (let i of arr){
     console.log(i)
   }
 } 
 

 /* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected'); //The second promise has rejected
      resolve(10);
  }, 2 * 1000);
});     

 const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected'); //The second promise has rejected
      reject(20);
  }, 2 * 1000);
});                                                
Promise.allSettled([p1, p2])
  .then((result) => {
      console.log(result);  //0: {status: "fulfilled", value: 10}
  });    */
 