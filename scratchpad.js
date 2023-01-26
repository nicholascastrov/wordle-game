
    if (next1 >= 0 && next1 <= 4) {
        squares[next1].innerHTML = e.key.toUpperCase(); // Writing letter on square
        console.log(emptyArray);
        emptyArray[0].push(squares[next1].innerHTML); // Pushing separate letters into array
        console.log(emptyArray[0].length);
        let winWord = word1.split(""); // Splitting word that is going to be checked against array
  
        if (winWord[next1] === squares[next1].innerHTML) {
          // Checking letter by letter if they match
          console.log(winWord[next1], "first");
  
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
          } else {
            squares[i].style.background = "red";
          }
        }
      }

      if (winWord[next1] !== squares[next1].innerHTML) {
          for (let i = 0; i < squares.length; i++) {
            if (winWord.includes(squares[i])) {
                squares[i].style.background = "yellow";
            } 
          }
        }