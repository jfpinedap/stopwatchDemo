//global variables go here:
var started = false;
var time = 0;
var interval;

//execute functions here:
setUp();

//function definitions go here:

function startTimer() {
  if (started === false) {
    interval = setInterval(function() {
      time++;
      document.getElementById("elapsedTime").innerHTML = time / 100;
    }, 10);
    started = true;
  }
}

function setUp() {
  document.addEventListener("keydown", function(event) {
    if (event.key == "s" || event.key == "S") {
      document.getElementById("start").click();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key == "r" || event.key == "R") {
      document.getElementById("reset").click();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key == "t" || event.key == "T") {
      document.getElementById("record").click();
    }
  });

  document.getElementById("start").addEventListener("click", function() {
    if (started === true) {
      clearInterval(interval);
      started = false;
    } else {
      startTimer();
    }
  });

  document.getElementById("reset").addEventListener("click", function() {
    location.reload();
  });

  document.getElementById("record").addEventListener("click", function() {
    if (time > 0 && started === true) {
      p = document.createElement("p");
      document.body.appendChild(p);
      p.innerHTML = time / 100;
    }
  });
}
