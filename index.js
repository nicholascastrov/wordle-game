// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.load = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let squares = document.querySelectorAll(".square");

let next1 = -1;
let next2 = -1;
let next3 = -1;
let next4 = -1;
let next5 = -1;
let next6 = -1;

let word1 = "ARRAY";
let word2 = "VALUE";
let word3 = "INPUT";
let word4 = "PIXEL";
let word5 = "STYLE";
let word6 = "ASYNC";


let emptyArray = [[], [], [], [], [], []];
// console.log(emptyArray);
document.addEventListener("keydown", function (e) {

  if (e.key === "Backspace") {
    squares[next1].innerHTML = "";
    squares[next1].style.background = "none";
    next1--;
    emptyArray[0].pop();
    // console.log(emptyArray);
  } else {
    next1++;

    if (next1 >= 0 && next1 <= 4) {
      squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
    //   console.log(emptyArray);
      emptyArray[0].push(squares[next1].innerHTML); // Pushing separate letters into array
    //   console.log(emptyArray[0].length);
      let winWord = word1.split(""); // Splitting word that is going to be checked against array

      if (winWord[next1] === squares[next1].innerHTML) {
        // Checking letter by letter if they match
        // console.log(winWord[next1], "first");

        if (next1 <= 4 && emptyArray[0].join("") === word1) {
          //After all letters are checked, join array and check with winning word

          for (let i = 0; i <= next1; i++) {
            squares[i].style.background = "green";
          }
          alert("You won!");
        }
      } else if (winWord[next1] !== squares[next1].innerHTML) {
        // console.log(winWord[next1]);
        // console.log(next1);
        if (next1 >= 4) {
          for (let i = 0; i <= next1; i++) {
            squares[i].style.background = "red";
          }
          alert("Try again!");
        } 
    }
    }
    if (next1 === 4) {
      for (let i = 0; i < word1.length; i++) {
        if (word1[i] === squares[i].innerHTML) {
          squares[i].style.background = "green";
        } else if (word1.includes(squares[i].innerHTML)) {
            squares[i].style.background = "yellow";
        } else if (!(word1[i] === squares[i].innerHTML)){
            squares[i].style.background = "red";
        } 
      }
    }
    

    // second word
    if (next1 >= 5 && next1 <= 9) {
      next2++;
      squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
        // console.log(emptyArray);
      emptyArray[1].push(squares[next1].innerHTML); // Pushing separate letters into array
      //   console.log(next1);
      let winWord = word2.split(""); // Splitting word that is going to be checked against array
      //   console.log(emptyArray[1].length);

      if (winWord[next2] === squares[next1].innerHTML) {
        // Checking letter by letter if they match
        // console.log(next2);
        if (next1 <= 9 && emptyArray[1].join("") === word2) {
          //After all letters are checked, join array and check with winning word

          for (let i = 5; i <= 9; i++) {
            // console.log(next1[i]);
            squares[i].style.background = "green";
          }
          alert("You won!");
        }
      } else if (winWord[next2] !== squares[next2].innerHTML) {
        // console.log(winWord[next2], "hey");
        // console.log(squares[next1].innerHTML, "hey2");
        // console.log(winWord[1]);
        // console.log(next1);
        // console.log(next2);
        if (next1 >= 9) {
          for (let i = 5; i <= 9; i++) {
            squares[i].style.background = "red";
            // console.log(squares[i]);
          }
          alert("Try again!");
        }
      }
    }
    if (next1 === 9) {
      let j = 0;
      //   console.log(next1, "imhere");
      //   console.log(next2);
      // we need to track 5-9 on our squares rather than 0-4
      for (let i = 5; i < 10; i++) {
        // console.log("hey");
        // console.log(word2[next2]);
        // we need word2 to be 0-4
        // squres to be 5-9
        // cant use i cause it goes to 5,next2 is 4
        // console.log(word2[j]);
        if (word2[j] === squares[i].innerHTML) {
          squares[i].style.background = "green";
          //   console.log(j);
        } else if (word2.includes(squares[i].innerHTML)){
            squares[i].style.background = "yellow";
        } else {
          squares[i].style.background = "red";
        }
        j++;
      }
    }
    // third word
    if (next1 >= 10 && next1 <= 14) {
      next3++;
      squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
    //   console.log(emptyArray);
      emptyArray[2].push(squares[next1].innerHTML); // Pushing separate letters into array
    //   console.log(next1);
      let winWord = word3.split(""); // Splitting word that is going to be checked against array
    //   console.log(emptyArray[1].length);

      if (winWord[next3] === squares[next1].innerHTML) {
        // Checking letter by letter if they match
        // console.log(next2);
        if (next1 <= 14 && emptyArray[2].join("") === word3) {
          //After all letters are checked, join array and check with winning word

          for (let i = 10; i <= 14; i++) {
            // console.log(next1[i]);
            squares[i].style.background = "green";
          }
          alert("You won!");
        }
      } else if (winWord[next3] !== squares[next3].innerHTML) {
        // console.log(winWord[next2], "hey");
        // console.log(squares[next1].innerHTML, "hey2");
        // console.log(winWord[1]);
        // console.log(next1);
        // console.log(next2);
        if (next1 >= 14) {
          for (let i = 10; i <= 14; i++) {
            squares[i].style.background = "red";
            // console.log(squares[i]);
          }
          alert("Try again!");
        }
      }
    }
    if (next1 === 14) {
      console.log(next1);
      let j = 0;
    //   console.log(next1, "imhere");
    //   console.log(next2);
      // we need to track 5-9 on our squares rather than 0-4
      for (let i = 10; i < 15; i++) {
        // console.log("hey");
        // console.log(j);
        // we need word2 to be 0-4
        // squres to be 5-9
        // cant use i cause it goes to 5,next2 is 4
        // console.log(word3[j]);
        // console.log(squares[i].innerHTML);

        if (word3[j] === squares[i].innerHTML) {
          squares[i].style.background = "green";

        //   console.log(j);
        } else if (word3.includes(squares[i].innerHTML)){
            squares[i].style.background = "yellow";
        } else {
          squares[i].style.background = "red";
        }
        j++;
      }
    }
    // fourth word
    if (next1 >= 15 && next1 <= 19) {
      next4++;
      squares[next1].innerHTML = e.key.toUpperCase();

      emptyArray[3].push(squares[next1].innerHTML);

      let winWord4 = word4.split("");

      if (winWord4[next4] === squares[next1].innerHTML) {
        if (next4 <= 19 && emptyArray[3].join("") === word4) {
          for (let i = 15; i <= 19; i++) {
            // console.log(next1[i]);
            squares[i].style.background = "green";
          }
          alert("You Won");
        }
      } else if (winWord4[next4] !== squares[next4].innerHTML) {
        // console.log(squares[next1].innerHTML, "hey2");
        // console.log(next1);
        // console.log(next2);
        if (next1 >= 19) {
          for (let i = 15; i <= 19; i++) {
            squares[i].style.background = "red";
            // console.log(squares[i]);
          }
          alert("Try again!");
        }
      }
    }
    if (next1 === 19) {
    //   console.log(next1);
      let j = 0;
    //   console.log(next1, "imhere");
    //   console.log(next2);
      // we need to track 5-9 on our squares rather than 0-4
      for (let i = 15; i < 20; i++) {
        // console.log("hey");
        // console.log(j);
        // we need word2 to be 0-4
        // squres to be 5-9
        // cant use i cause it goes to 5,next2 is 4
        // console.log(word3[j]);
        // console.log(squares[i].innerHTML);

        if (word4[j] === squares[i].innerHTML) {
          squares[i].style.background = "green";

        //   console.log(j);
        } else if (word4.includes(squares[i].innerHTML)){
            squares[i].style.background = "yellow";
        } else {
          squares[i].style.background = "red";
        }
        j++;
      }
    }

    // fifth word
    if (next1 >= 20 && next1 <= 24) {
      next5++;
      squares[next1].innerHTML = e.key.toUpperCase();

      emptyArray[4].push(squares[next1].innerHTML);

      let winWord5 = word5.split("");

      if (winWord5[next5] === squares[next1].innerHTML) {
        if (next5 <= 24 && emptyArray[4].join("") === word5) {
          for (let i = 20; i <= 24; i++) {
            // console.log(next1[i]);
            squares[i].style.background = "green";
          }
          alert("You won!");
        }
      } else if (winWord5[next5] !== squares[next5].innerHTML) {
        // console.log(squares[next1].innerHTML, "hey2");
        // console.log(next1);
        // console.log(next2);
        if (next1 >= 24) {
          for (let i = 20; i <= 24; i++) {
            squares[i].style.background = "red";
            // console.log(squares[i]);
          }
          alert("Try again");
        }
      }
    }
    if (next1 === 24) {
    //   console.log(next1);
      let j = 0;
    //   console.log(next1, "imhere");
    //   console.log(next2);
      // we need to track 5-9 on our squares rather than 0-4
      for (let i = 20; i < 25; i++) {
        // console.log("hey");
        // console.log(j);
        // we need word2 to be 0-4
        // squres to be 5-9
        // cant use i cause it goes to 5,next2 is 4
        // console.log(word3[j]);
        // console.log(squares[i].innerHTML);

        if (word5[j] === squares[i].innerHTML) {
          squares[i].style.background = "green";

        //   console.log(j);
        } else if (word5.includes(squares[i].innerHTML)){
            squares[i].style.background = "yellow";
        } else {
          squares[i].style.background = "red";
        }
        j++;
      }
    }

    // last word
    if (next1 >= 25 && next1 <= 29) {
      next6++;
      squares[next1].innerHTML = e.key.toUpperCase();

      emptyArray[5].push(squares[next1].innerHTML);

      let winWord6 = word6.split("");

      if (winWord6[next6] === squares[next1].innerHTML) {
        if (next5 <= 24 && emptyArray[5].join("") === word6) {
          for (let i = 25; i <= 29; i++) {
            // console.log(next1[i]);
            squares[i].style.background = "green";
          }
          alert("You won!");
        }
      } else if (winWord6[next6] !== squares[next6].innerHTML) {
        // console.log(squares[next1].innerHTML, "hey2");
        // console.log(next1);
        // console.log(next2);
        if (next1 >= 29) {
          for (let i = 25; i <= 29; i++) {
            squares[i].style.background = "red";
            // console.log(squares[i]);
          }
          alert("Try again tommorow!");
        }
      }
    }
    if (next1 === 29) {
      console.log(next1);
      let j = 0;
    //   console.log(next1, "imhere");
    //   console.log(next2);
      // we need to track 5-9 on our squares rather than 0-4
      for (let i = 25; i < 30; i++) {
        // console.log("hey");
        // console.log(j);
        // we need word2 to be 0-4
        // squres to be 5-9
        // cant use i cause it goes to 5,next2 is 4
        // console.log(word3[j]);
        // console.log(squares[i].innerHTML);

        if (word6[j] === squares[i].innerHTML) {
          squares[i].style.background = "green";

        } else if (word6.includes(squares[i].innerHTML)){
            squares[i].style.background = "yellow";
        } else {
          squares[i].style.background = "red";
        }
        j++;
      }
    }
  }
});





// let wordBank = [
//      "array", 
//      "const", 
//      "spans", 
//      "links", 
//      "label", 
//      "input", 
//      "value", 
//      "style", 
//      "fonts", 
//      "pixel",
//      "async",
// ];

// // Types inside grid-blocks //

// let row1 = document.querySelectorAll(".row1-block-1");
// let row2 = document.querySelectorAll(".row2-block-1");
// let row3 = document.querySelectorAll(".row3-block-1");
// let row4 = document.querySelectorAll(".row4-block-1");
// let row5 = document.querySelectorAll(".row5-block-1");
// let row6 = document.querySelectorAll(".row6-block-1");


// let next1 = 0;
// let next2 = 0;
// let next3 = 0;
// let next4 = 0;
// let next5 = 0;
// let next6 = 0;


// document.addEventListener("keydown", function (e) {

//     if(e.key === "Backspace"){
//         row1[next1].innerHTML = " ";
//         next1--;
//     }

//     if (next1 < row1.length){

//         row1[next1].innerHTML = e.key.toUpperCase();

//         next1++;


//     } else if (next1 > next2){

//         row2[next2].innerHTML = e.key.toUpperCase();

//         next2++;


//     } else if (next2 > next3){

//         row3[next3].innerHTML = e.key.toUpperCase();

//         next3++;

//     } else if (next3 > next4){

//         row4[next4].innerHTML = e.key.toUpperCase();

//         next4++;

//     } else if (next4 > next5){

//         row5[next5].innerHTML = e.key.toUpperCase();

//         next5++;

//     } else if (next5 > next6){

//         row6[next6].innerHTML = e.key.toUpperCase();

//         next6++;
//     } 
// });


// Row 1: Letters

// let l1R1 = document.getElementsByClassName("row1-block-1")[0];
// let letter1Row1 = l1R1.innerHTML = "";

// let l2R1 = document.getElementsByClassName("row1-block-2")[0];
// let letter2Row1= l2R1.innerHTML = "";

// let l3R1 = document.getElementsByClassName("row1-block-3")[0];
// let letter3Row1= l3R1.innerHTML = "";

// let l4R1 = document.getElementsByClassName("row1-block-4")[0];
// let letter4Row1= l4R1.innerHTML = "";

// let l5R1 = document.getElementsByClassName("row1-block-5")[0];
// let letter5Row1= l5R1.innerHTML = "";

// let allLettersRow1 = letter1Row1 + letter2Row1 + letter3Row1 + letter4Row1 + letter5Row1;


// Row 2: Letters

// let l1R2 = document.getElementsByClassName("row2-block-1")[0];
// let letter1Row2 = l1R2.innerHTML = "";

// let l2R2 = document.getElementsByClassName("row2-block-2")[0];
// let letter2Row2= l2R2.innerHTML = "";

// let l3R2 = document.getElementsByClassName("row2-block-3")[0];
// let letter3Row2= l3R2.innerHTML = "";

// let l4R2 = document.getElementsByClassName("row2-block-4")[0];
// let letter4Row2= l4R2.innerHTML = "";

// let l5R2 = document.getElementsByClassName("row2-block-5")[0];
// let letter5Row2= l5R2.innerHTML = "";

// let allLettersRow2 = letter1Row2 + letter2Row2 + letter3Row2 + letter4Row2 + letter5Row2;

// // Row 3: Letters

// let l1R3 = document.getElementsByClassName("row3-block-1")[0];
// let letter1Row3 = l1R3.innerHTML = "";

// let l2R3 = document.getElementsByClassName("row3-block-2")[0];
// let letter2Row3= l2R3.innerHTML = "";

// let l3R3 = document.getElementsByClassName("row3-block-3")[0];
// let letter3Row3= l3R3.innerHTML = "";

// let l4R3 = document.getElementsByClassName("row3-block-4")[0];
// let letter4Row3= l4R3.innerHTML = "";

// let l5R3 = document.getElementsByClassName("row3-block-5")[0];
// let letter5Row3= l5R3.innerHTML = "";

// let allLettersRow3 = letter1Row3 + letter2Row3 + letter3Row3 + letter4Row3 + letter5Row3;


// // Row 4: Letters

// let l1R4 = document.getElementsByClassName("row4-block-1")[0];
// let letter1Row4 = l1R4.innerHTML = "";

// let l2R4 = document.getElementsByClassName("row4-block-2")[0];
// let letter2Row4= l2R4.innerHTML = "";

// let l3R4 = document.getElementsByClassName("row4-block-3")[0];
// let letter3Row4= l3R4.innerHTML = "";

// let l4R4 = document.getElementsByClassName("row4-block-4")[0];
// let letter4Row4= l4R4.innerHTML = "";

// let l5R4 = document.getElementsByClassName("row4-block-5")[0];
// let letter5Row4= l5R4.innerHTML = "";

// let allLettersRow4 = letter1Row4 + letter2Row4 + letter3Row4 + letter4Row4 + letter5Row4;

// // Row 5: Letters

// let l1R5 = document.getElementsByClassName("row5-block-1")[0];
// let letter1Row5 = l1R5.innerHTML = "";

// let l2R5 = document.getElementsByClassName("row5-block-2")[0];
// let letter2Row5= l2R5.innerHTML = "";

// let l3R5 = document.getElementsByClassName("row5-block-3")[0];
// let letter3Row5= l3R5.innerHTML = "";

// let l4R5 = document.getElementsByClassName("row5-block-4")[0];
// let letter4Row5= l4R5.innerHTML = "";

// let l5R5 = document.getElementsByClassName("row5-block-5")[0];
// let letter5Row5= l5R5.innerHTML = "";

// let allLettersRow5 = letter1Row5 + letter2Row5 + letter3Row5 + letter4Row5 + letter5Row5;


// // Row 6: Letters

// let l1R6 = document.getElementsByClassName("row6-block-1")[0];
// let letter1Row6 = l1R6.innerHTML = "";

// let l2R6 = document.getElementsByClassName("row6-block-2")[0];
// let letter2Row6= l2R6.innerHTML = "";

// let l3R6 = document.getElementsByClassName("row6-block-3")[0];
// let letter3Row6= l3R6.innerHTML = "";

// let l4R6 = document.getElementsByClassName("row6-block-4")[0];
// let letter4Row6= l4R6.innerHTML = "";

// let l5R6 = document.getElementsByClassName("row6-block-5")[0];
// let letter5Row6= l5R6.innerHTML = "";

// let allLettersRow6 = letter1Row6 + letter2Row6 + letter3Row6 + letter4Row6 + letter5Row6;
