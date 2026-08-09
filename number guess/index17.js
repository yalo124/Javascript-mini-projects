const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;

while (running) {

        guess = Number(window.prompt("Enter a number between 1 and 100"));

        if(isNaN(guess)) {
             window.alert("Please enter a real number");
        } else if (guess < minNum || guess > maxNum) {
               window.alert("Please enter a number");
        } else {
            attempts++;
            if (guess < answer) {
                  window.alert("TOO LOW");
            } else if (guess > answer) {
                   window.alert("TOO HIGH");
            } else {
                 window.alert(`CORRECT! THE NUMBER IS ${answer}. Number of attempts: ${attempts}`);
                 running = false;
            }
        }
    }


