var count = 0;

function inr() {
  document.getElementById("count").innerHTML = count;
  document.getElementById("inc").style.disable = false;
  count++;
}
function dec() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerHTML = count;
    document.getElementById("inc").disabled = false;
  }
}

function res() {
   count = 0;
  document.getElementById("count").innerHTML = count;
}