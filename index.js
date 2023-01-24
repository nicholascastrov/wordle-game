let squares = document.querySelectorAll(".square");

let next1 = -1; 
let next2 = 0;
let next3 = 0;
let next4 = 0;
let next5 = 0;
let next6 = 0;

let word1 = "ARRAY";
let word2 = "VALUE";
let word3 = "INPUT";
let word4 = "PIXEL";
let word5 = "STYLE";
let word6 = "ASYNC";

let emptyArray = [[], [], [], [], [], []];

document.addEventListener("keydown", function (e) {

    if (e.key === "Backspace"){
        squares[next1].innerHTML = "";
        squares[next1].style.background = "none";
        next1--;
    } 

    else {

        next1++;

        if (next1 >= 0 && next1 <= 4){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[0].push(squares[next1].innerHTML);
            
            let winWord = word1.split("");
    
            if (winWord[next1] === squares[next1].innerHTML){

                squares[next1].style.background = "green";

                if (next1 <= 4 && emptyArray[0].join("") === word1){
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }

        }
        
        if (next1 >= 5 && next1 <= 9){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[1].push(squares[next1].innerHTML);
            
            let winWord2 = word2.split("");
    
            if (winWord2[next2] === squares[next1].innerHTML){
                squares[next1].style.background = "green";

                if (next2 <= 4 && emptyArray[1].join("") === word2){ 
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }


            next2++;

        }

        if (next1 >= 10 && next1 <= 14){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[2].push(squares[next1].innerHTML);
            
            let winWord3 = word3.split("");
    
            if (winWord3[next3] === squares[next1].innerHTML){
                squares[next1].style.background = "green";

                if (next3 <= 4 && emptyArray[2].join("") === word3){ 
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }


            next3++;

        }

        if (next1 >= 15 && next1 <= 19){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[3].push(squares[next1].innerHTML);
            
            let winWord4 = word4.split("");
    
            if (winWord4[next4] === squares[next1].innerHTML){
                squares[next1].style.background = "green";

                if (next4 <= 4 && emptyArray[3].join("") === word4){ 
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }


            next4++;

        }

        if (next1 >= 20 && next1 <= 24){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[4].push(squares[next1].innerHTML);
            
            let winWord5 = word5.split("");
    
            if (winWord5[next5] === squares[next1].innerHTML){
                squares[next1].style.background = "green";

                if (next5 <= 4 && emptyArray[4].join("") === word5){ 
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }


            next5++;

        }

        if (next1 >= 25 && next1 <= 29){

            squares[next1].innerHTML = e.key.toUpperCase();

            emptyArray[5].push(squares[next1].innerHTML);
            
            let winWord6 = word6.split("");
    
            if (winWord6[next6] === squares[next1].innerHTML){
                squares[next1].style.background = "green";

                if (next6 <= 4 && emptyArray[5].join("") === word6){ 
                    alert("yoyo")
                }

            } else {
                squares[next1].style.background = "red";
            }


            next6++;

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
