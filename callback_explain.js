console.log("start");

function getuserlogin(email, password, callback) {
  setTimeout(() => {
    callback({ emailvalue: email, passwordvalue: password }); //passing user data in callback i.e is for bookmovie
  }, 1000);
}

function bookMovie(email, callback) {
  setTimeout(() => {
    callback(["kathi", "teddy", "robo"]); //passing movies in callback i.e is for snacks
  }, 1000);
}

function popcorn(movie, callback) {
  setTimeout(() => {
    callback(["popcorn", "pepsi"]); //passing snacks in just for printing
  }, 1000);
}

const user = getuserlogin("thwaj@gmail.com", 123456789, (userdata) => {
  console.log(userdata);
  bookMovie(userdata.emailvalue, (movies) => {
    console.log(movies, "movies are available");
    popcorn(movies, (snacks) => {
      console.log(snacks, " snacks are avilable");
    });
  });
});

console.log("end");

//function is object in js and thus object can be passed into other function.

//callback hell is error prone hard to read and hard to maintain code

/*In userlogin*/
//user login receives name ,email and other remaining code(from line 22-26) as object/function as argument
//the login details are used 
//received functions is excecuted using callback() passing required details( email and password)i.e bookmovie.

/* in bookmovie */
// bookmovie receives email and remaining functions(popcorn) as  as argument
// callback i.e popcorn called by passing movies and remainig functions


/* in popcorn */
//popcorn recives movies from bookmovie as argument & function console.log
//callback i.e is console.log is called by passing snacks
