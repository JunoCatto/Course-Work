     function showAlert(element) {
          alert("aaaah!")
          document.getElementById("column2").style.backgroundColor = "rgba(74, 47, 226, 1)"; // Change background color to red
          element.style.backgroundColor = "#ff0000"; // Change button color to red
          element.innerHTML = "Scared button!"
        }

        function changeColor(element) {
            document.getElementById("myNav").style.backgroundColor = "lightblue"; // Change button color to light blue
            document.getElementById("navText").innerHTML = "<h2>Light Blue now!</h2>"
            element.innerHTML = "Changed color!";
        }

const cat = document.getElementById("cat");
const scaredButton = document.getElementById("scaredButton");

scaredButton.addEventListener("hover", function() {
  cat.src = "https://pbs.twimg.com/media/G2rH_t8WEAAW8iC?format=jpg&name=large";
});