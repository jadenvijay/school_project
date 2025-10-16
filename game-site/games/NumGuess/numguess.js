const target= Math.floor(Math.random() * 100) + 1;

    function checkGuess(){
      const guessNum = Number(document.querySelector('.guess-input').value)
      console.log(target)

      if (guessNum<target) {
        document.querySelector('.num-hint').innerHTML="Guess higher"
      } else if (guessNum>target) {
        document.querySelector('.num-hint').innerHTML="Guess lower"
      } else if (guessNum === target){
        document.querySelector('.num-hint').innerHTML="🥳You got it"
      } else {
        document.querySelector('.num-hint').innerHTML="Enter a number"
      }
    }
   