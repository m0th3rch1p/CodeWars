/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
    let arr = [r, g, b];
    let hex = [];
    for (let i = 0; i < 3; i++) {
      if (arr[i] < 0) {
        hex.push("00");
      } else if (arr[i] > 255) {
        hex.push("FF");
      } else if (arr[i] < 16) {
        hex.push("0");
        hex.push(arr[i].toString(16));
      } else {
        hex.push(arr[i].toString(16));
      }
    }
    return hex.join("").toLocaleUpperCase();
  }

  // Improved Function
  
  function rgb(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toLocaleUpperCase();
    }