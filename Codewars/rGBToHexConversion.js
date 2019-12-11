// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// my answer
function rgb(r, g, b) {
  function format(a) {
    a = Math.min(a, 255);
    a = Math.max(a, 0);
    return a
      .toString(16)
      .replace(/^([0-9a-z])$/g, "0$1")
      .toUpperCase();
  }
  return format(r) + format(g) + format(b);
}
