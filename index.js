let wordBank = [
    "array", 
    "const", 
    "spans", 
    "links", 
    "label", 
    "input", 
    "value", 
    "style", 
    "fonts", 
    "pixel",
    "async",
];


// Row 1: Letters

let l1R1 = document.getElementsByClassName("row1-block-1")[0];
let letter1Row1 = l1R1.innerHTML = "";

let l2R1 = document.getElementsByClassName("row1-block-2")[0];
let letter2Row1= l2R1.innerHTML = "";

let l3R1 = document.getElementsByClassName("row1-block-3")[0];
let letter3Row1= l3R1.innerHTML = "";

let l4R1 = document.getElementsByClassName("row1-block-4")[0];
let letter4Row1= l4R1.innerHTML = "";

let l5R1 = document.getElementsByClassName("row1-block-5")[0];
let letter5Row1= l5R1.innerHTML = "";

let allLettersRow1 = letter1Row1 + letter2Row1 + letter3Row1 + letter4Row1 + letter5Row1;


// Row 2: Letters

let l1R2 = document.getElementsByClassName("row2-block-1")[0];
let letter1Row2 = l1R2.innerHTML = "C";

let l2R2 = document.getElementsByClassName("row2-block-2")[0];
let letter2Row2= l2R2.innerHTML = "R";

let l3R2 = document.getElementsByClassName("row2-block-3")[0];
let letter3Row2= l3R2.innerHTML = "A";

let l4R2 = document.getElementsByClassName("row2-block-4")[0];
let letter4Row2= l4R2.innerHTML = "Z";

let l5R2 = document.getElementsByClassName("row2-block-5")[0];
let letter5Row2= l5R2.innerHTML = "Y";

let allLettersRow2 = letter1Row2 + letter2Row2 + letter3Row2 + letter4Row2 + letter5Row2;

// Row 3: Letters

let l1R3 = document.getElementsByClassName("row3-block-1")[0];
let letter1Row3 = l1R3.innerHTML = "C";

let l2R3 = document.getElementsByClassName("row3-block-2")[0];
let letter2Row3= l2R3.innerHTML = "R";

let l3R3 = document.getElementsByClassName("row3-block-3")[0];
let letter3Row3= l3R3.innerHTML = "A";

let l4R3 = document.getElementsByClassName("row3-block-4")[0];
let letter4Row3= l4R3.innerHTML = "Z";

let l5R3 = document.getElementsByClassName("row3-block-5")[0];
let letter5Row3= l5R3.innerHTML = "Y";

let allLettersRow3 = letter1Row3 + letter2Row3 + letter3Row3 + letter4Row3 + letter5Row3;


// Row 4: Letters

let l1R4 = document.getElementsByClassName("row4-block-1")[0];
let letter1Row4 = l1R4.innerHTML = "C";

let l2R4 = document.getElementsByClassName("row4-block-2")[0];
let letter2Row4= l2R4.innerHTML = "R";

let l3R4 = document.getElementsByClassName("row4-block-3")[0];
let letter3Row4= l3R4.innerHTML = "A";

let l4R4 = document.getElementsByClassName("row4-block-4")[0];
let letter4Row4= l4R4.innerHTML = "Z";

let l5R4 = document.getElementsByClassName("row4-block-5")[0];
let letter5Row4= l5R4.innerHTML = "Y";

let allLettersRow4 = letter1Row4 + letter2Row4 + letter3Row4 + letter4Row4 + letter5Row4;

// Row 5: Letters

let l1R5 = document.getElementsByClassName("row5-block-1")[0];
let letter1Row5 = l1R5.innerHTML = "C";

let l2R5 = document.getElementsByClassName("row5-block-2")[0];
let letter2Row5= l2R5.innerHTML = "R";

let l3R5 = document.getElementsByClassName("row5-block-3")[0];
let letter3Row5= l3R5.innerHTML = "A";

let l4R5 = document.getElementsByClassName("row5-block-4")[0];
let letter4Row5= l4R5.innerHTML = "Z";

let l5R5 = document.getElementsByClassName("row5-block-5")[0];
let letter5Row5= l5R5.innerHTML = "Y";

let allLettersRow5 = letter1Row5 + letter2Row5 + letter3Row5 + letter4Row5 + letter5Row5;


// Row 6: Letters

let l1R6 = document.getElementsByClassName("row6-block-1")[0];
let letter1Row6 = l1R6.innerHTML = "C";

let l2R6 = document.getElementsByClassName("row6-block-2")[0];
let letter2Row6= l2R6.innerHTML = "R";

let l3R6 = document.getElementsByClassName("row6-block-3")[0];
let letter3Row6= l3R6.innerHTML = "A";

let l4R6 = document.getElementsByClassName("row6-block-4")[0];
let letter4Row6= l4R6.innerHTML = "Z";

let l5R6 = document.getElementsByClassName("row6-block-5")[0];
let letter5Row6= l5R6.innerHTML = "Y";

let allLettersRow6 = letter1Row6 + letter2Row6 + letter3Row6 + letter4Row6 + letter5Row6;



// Types inside grid-blocks //

let show = document.querySelectorAll(".row1-block-1")
let next = 0;
document.addEventListener("keydown", function (e) {

    if (next < show.length){

        show[next].innerHTML = e.key.toUpperCase();

        next++;
    }

});

