function goToSecondPage() {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
}

function goToThirdPage() {
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "block";
}

function goToFourthPage() {
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "block";
}

function goToFifthPage() {
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "block";
}

function goToSixthPage() {
  document.getElementById("fifth-page").style.display = "none";
  document.getElementById("sixth-page").style.display = "block";
}

function goToSeventhPage() {
  document.getElementById("sixth-page").style.display = "none";
  document.getElementById("seventh-page").style.display = "block";
}

function goToBlowPage() {
  document.getElementById("seventh-page").style.display = "none";
  document.getElementById("blow-page").style.display = "block";
  startCountdown();
}

function goToDiePage() {
  document.getElementById("seventh-page").style.display = "none";
  document.getElementById("die-page").style.display = "block";
}

function goToFinalPage() {
  // Hide all other pages
  document.getElementById("first-page").style.display = "none";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display   
 = "none";
  document.getElementById("fifth-page").style.display = "none";
  document.getElementById("sixth-page").style.display = "none";
  document.getElementById("seventh-page").style.display = "none";
  document.getElementById("blow-page").style.display = "none";
  document.getElementById("die-page").style.display = "none";
  document.getElementById("final-page").style.display = "block";
}

function startCountdown() {
  let timeLeft = 10;
  const timerElement = document.getElementById("timer");

  const countdownInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Blowing up your device in: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      timerElement.parentNode.style.display = "none";
      document.body.style.backgroundImage = "url('blow.gif')";
      document.body.style.backgroundSize = "cover";
    }
  }, 1000);
}