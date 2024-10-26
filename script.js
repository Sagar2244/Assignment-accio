let count = 0;

function increment() {
  count++;
  updateDisplay();
}
function decrement() {
    if (count > 0) {
      count--;
      document.getElementById("error-message").style.visibility = "hidden";
    } else {
      document.getElementById("error-message").style.visibility = "visible";
    }
    updateDisplay();
  }


function clearCount() {
    count = 0;
    updateDisplay();
    document.getElementById("clear").style.display = "none";
  }

function updateDisplay() {
    document.getElementById("count-display").innerHTML = count;
  
    if (count > 0) {
      document.getElementById("clear").style.display = "inline-block";
    } else {
      document.getElementById("clear").style.display = "none";
    }
  }