function ascending() {
  for ( var i = 0; i < 100; i++ ) {
    console.log(i);
  }
}
ascending();
//
function descending() {
  for ( var i = 99; i > 0; i-- ) {
    console.log(i);
  }
}
descending();

function downByThree() {
  for ( var i = 298; i > 1; i-=3 ) {
    console.log(i);
  }
}
downByThree();
// //
function even() {
  for ( var i = 0; i < 99; i++ ) {
    if ( i % 2 === 0 ) {
      console.log(i);
    }
  }
}
even();
// //
function odd() {
  for ( var i = 98; i > 1; i-- ) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
odd();
//
function six() {
  for (var i = 49; i <= 72; i++) {
    console.log(i);
  }
}
six();

function seven() {
  for ( var i = 81; i >= 26; i-- ) {
    console.log(i);
  }

}
seven();
function eight() {
  for ( var i = 1; i <= 91; i++ ) {
    if( i % 3 === 0 ) {
      console.log(i);
    }
  }
}
eight();
