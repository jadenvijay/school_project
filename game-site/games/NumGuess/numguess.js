const target= Math.floor(Math.random() * 100) + 1;
console.log(target)

    function checkGuess(){
      const guessNum = Number(document.querySelector('.guess-input').value)
      if (guessNum<target) {
        document.querySelector('.num-hint').innerHTML="Guess higher"
      } else if (guessNum>target) {
        document.querySelector('.num-hint').innerHTML="Guess lower"
      } else {
        document.querySelector('.num-hint').innerHTML="🥳You got it"
      }
    }