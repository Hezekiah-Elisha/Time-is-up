const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const newTime = "1 Jan 2023";

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countDown() {
  const newTimeDate = new Date(newTime);
  const currentDate = new Date();

  const totalSeconds = (newTimeDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  // hoursElement.innerHTML = hours;
  // minsElement.innerHTML = mins;
  // secondsElement.innerHTML = seconds;
  // msecondsElement.innerHTML = msec;

  hoursElement.innerHTML = formatTime(hours);
  minsElement.innerHTML = formatTime(mins);
  secondsElement.innerHTML = formatTime(seconds);
}

countDown();

setInterval(countDown, 1000);
