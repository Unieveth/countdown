const progressBar = document.getElementsByClassName("progress-bar")[0];
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
  progressBar.style.setProperty("--width", width + 0.1);
}, 305);

document.getElementById("timer").innerHTML = 5 + ":" + 60;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){}

  document.getElementById("timer").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  if (sec = 0) {
    sec = "";
  }
  return sec;
}
