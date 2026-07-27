const ringtone = new Audio("ringtone.wav");
const click = new Audio("click.wav");
const startBtn = document.querySelector(".btn-start"); //get button
const session = document.querySelector(".minutes"); // get minutes
let myInterval;
let state = true; // true = session not started, false = session started
const sessionAmount = Number.parseInt(session.textContent);

const appTimer = () => {
  click.play();
  

  if (state === true) {
    state = false; // deactivates button after first click
    let totalSeconds = sessionAmount * 60; // counts total seconds

    const updateSeconds = () => {
      const minuteDiv = document.querySelector(".minutes");
      const secondDiv = document.querySelector(".seconds");

      totalSeconds = totalSeconds - 1;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = "0" + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`; // crea stringa

      if (minutesLeft === 0 && secondsLeft === 0) {
        ringtone.play();
        clearInterval(myInterval); // stops updating
          state = true;
        
      }
    };
    myInterval = setInterval(updateSeconds, 1000); // updates every second
  } else {
    alert("Session has already started.");
  }

};

startBtn.addEventListener("click", appTimer);
