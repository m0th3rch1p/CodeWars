/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
    let arr = []
    arr.push(Math.floor(seconds / 3600));
    arr.push(Math.floor((seconds / 60) % 60));
    arr.push(seconds % 60);
 for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).length === 1) {
        arr[i] = "0"+String(arr[i]);
    }
 }
    return arr.join(":");
  }

  // Improvement
  function secondsToHumanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
  
    let formattedHours = ("0" + hours).slice(-2);
    let formattedMinutes = ("0" + minutes).slice(-2);
    let formattedSeconds = ("0" + remainingSeconds).slice(-2);
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }