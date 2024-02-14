// Create hearts dynamically using JavaScript
window.onload = function() {
    var numberOfHearts = 10;
  
    for (var i = 0; i < numberOfHearts; i++) {
      var heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
      heart.style.top = Math.random() * 100 + "%";
      document.body.appendChild(heart);
    }
  
    // Show buttons after 3 seconds
    setTimeout(function() {
      document.getElementById("buttons").style.display = "block";
      document.getElementById("message").style.opacity = 1;
    }, 3000);
  };
  
  // Function to show the message and redirect to the link on affirmative response
  document.getElementById("yes").onclick = function() {
    alert("I love you, turkey");
    window.location.href = "https://www.youtube.com/watch?v=shVw6Gh-2iM";
  };
  
  // Function to show new buttons within the message on negative response
  document.getElementById("no").onclick = function() {
    var confirmResult = confirm("Are you sure?");
    if (confirmResult) {
      window.location.href = "https://www.youtube.com/watch?v=5PlqjVCrH3M";
    } else {
      document.getElementById("message").innerHTML = "Do you want to be my Valentine?";
      document.getElementById("buttons").innerHTML = '<button id="yes">Yes</button><button id="no">No</button>';
  
      // Reassign button functions
      document.getElementById("yes").onclick = function() {
        alert("I love you, turkey");
        window.location.href = "https://www.youtube.com/watch?v=shVw6Gh-2iM";
      };
      document.getElementById("no").onclick = function() {
        document.getElementById("message").style.opacity = 1;
        document.getElementById("buttons").style.display = "block";
      };
    }
  };