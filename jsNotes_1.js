
//-------------------------------Decalre/RE-Assign
//var can be re-assigned and re-declared 
var greeter = "hey hi";            
var greeter = "say Hello instead"; //re-declared
greeter = "say Hello instead";     //re-assigned

//let can be re-assigned but "NOT" re-declared
let greeter = "hey hi";            
let greeter = "say Hello instead"; //re-declared error
greeter = "say Hello instead"; //re-assigned

//const "CANNOT" be re-assigned and re-decalred

const greeter = "hey hi";            
const greeter = "say Hello instead"; //re-declared error
greeter = "say Hello instead";//reassigned error

//const MUST be initialized at time of declaration but not necessory for var & let.

//const object cannot be reassigned but "PROPERTIES" can be updated.

const greeting = {
	message: "say Hi",
}

greeting = {          // error:  Assignment to constant variable.
	words: "Hello",
} 

greeting.message = "say Hello instead";   //NO error

//-------------------------------------------------------------------------------

//-------------------------------------HOISTING

//var is hoisted and intialized as undefined.
//let ,const are  hoisted but are "NOT" intialized.(access error)


console.log(a)//undefined
var a = 8;

console.log(b)// Cannot access 'b' before initialization
let b =9;

var a = null;
console.log(a == null); //true
console.log(a == undefined);//true

var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();//undefined
//var is hoisted but undefined

var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	let employeeId = '122345';
})();//undefined
//ReferenceError: Cannot access 'employeeId' 

let employeeId = '1234abe';
(function(){
	console.log(employeeId);
    employeeId = '122345';
})();//1234abe
//scope chained

(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());//undefined
//var is hoisted but undefined


//-----------------------------------//case1

var employeeId = 'start';
function foo(){
	employeeId = 'finish';
	return;
}
foo();//function gets called so reassigning is done

console.log(employeeId);//finish
//just reassigned
//Scope chaining
//if function not called then re-assigning is not done

//-----------------------------------//case2

var employeeId = 'start';//123abc
function foo(){
	employeeId = 'finish';//bcd123
	return;
}
//if function not called then re-assigning is not done
console.log(employeeId);//start

//---------------------------------- //case 3

var employeeId = 'start';
if(true) {
	employeeId = 'finish';
}

console.log(employeeId);//finish
//since if is a block it is only reassigned ,scope chained.

//-----------------------------------//case 4

var employeeId = 'start';
function foo() {
	employeeId = 'finish';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);//start
//changing variabel name to other  output //finish
//changing let to var output//finish

//------------------------------------//case 5
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());//undefined
//var is hoisted but undefined

//----------------------------------------------------------------------

(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());
/* o/p:-
function
function
 */

var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
Answer
//delete operator is used to delete a property from an object. 
//Here x is not an object, it's a local variable. delete operator doesn't affect local variables.

(function() {
	var objA = Object.create({
		foo: 'foo'
	});

	var objB = objA;
	objB.foo = 'bar';
    console.log(objA.foo);//bar
    console.log(objB.foo);//bar

	delete objA.foo;

	console.log(objA.foo);//foo
	console.log(objB.foo);//foo
}());

(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);//undefined
	console.log(objB.foo);//undefined

var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);
//1, "truexyz", 2, 1 

/* 
Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Boolean -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation 
*/

var foo = function() {
	// Some code
	//function foo is defined at run-time and is called a function expression
  }
  function bar () {
	// Some code
	//function bar is defined at parse time and is called a function statement
  }
  Answer
 // Run-Time function declaration
	foo(); // Call foo function here, It will give an error
	var foo = function() {
	  console.log("Hi I am inside Foo");
	};
  // Parse-Time function declaration
  bar(); // Call bar function here, It will not give an Error
  function bar() {
	console.log("Hi I am inside Foo");
  }
  
  bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called");
}

foo();//undefined
var foo = function foo() {
	return 12;
}//
//In JavaScript var-declared variables and functions are hoisted.


// typeof and instanceof
//typeof is an operator that returns a string with the type of whatever you pass.
//The typeof operator checks if a value belongs to one of the seven basic types: 
//number, string, boolean, object, function, undefined or Symbol.
//typeof(null) will return object.
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof new Array());  // object
console.log(typeof null);         // object 
console.log(typeof new RegExp()); // object
console.log(typeof new Date());   // object

//instanceof is much more intelligent: it works on the level of prototypes.
//it tests to see if the right operand appears anywhere in the prototype chain of the left. 
//instanceof doesn’t work with primitive types.
//checks the current object and returns true if the object is of the specified type.

//merge two JavaScript Object dynamically.
var person = {
	name : 'John',
	age  : 24
}
var location = {
	addressLine1 : 'Some Location x',
	addressLine2 : 'Some Location y',
	city : 'NewYork',
} 
merge(person , location); 
 
/*  person = name , age , addressLine1 , addressLine2 , city */

(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);//[]
	console.log(array2);//[ <100 empty items> ]
	console.log(array3);//[ [ '1', 2, '3', 4, 5.6 ] ]
	console.log(array3.length);//1
}());


(function () {
	var array = new Array('a', 'b', 'c', 'd', 'e');
	array[10] = 'f';
	delete array[10];
	console.log(array.length);
  }());//11


  (function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	//[ 'bar', 'john', 'ritz' ]
	    console.log(list.slice(1,3));//[ 'bar', 'john' ]
	    console.log(list.slice());//[ 'foo', 'bar', 'john', 'ritz' ]
	    console.log(list.slice(2,2));// []
	    console.log(list);	//   [ 'foo', 'bar', 'john', 'ritz' ]	
			
})();

function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA());//ReferenceError: this is not defined

var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId);//undefined

var employeeId = 'aq123';

function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId);//bq1uy
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId);//1BJKSJ
console.log(new Employee().employeeId);//bq1uy

function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb);//5


(function(){
	function sayHello(){
		var name = "Hi John";
		return 
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();//undefined error