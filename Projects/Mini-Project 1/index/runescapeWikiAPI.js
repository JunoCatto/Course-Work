async function fetchData(user) {
  const skillContainer = document.getElementById("skillContainer");
  const spinner = document.getElementById("spinner");
  // Show spinner and container
  skillContainer.style.display = "grid";
  spinner.style.display = "flex";
  // API call
  const response = await fetch(`/api/player?${user}`);
  const result = await response.json();

  // Hide spinner after data is fetched
  spinner.style.display = "none";

  // Error checking for player not found
  if (result.error == "Player not found") {
    alert("That user does not exist.");
  } else {
    const cleanedData = result.skills.map((data) => ({
      name: data.name,
      level: data.level,
    }));

    // Clears results from container
    skillContainer.innerHTML = "";

    // Creating divs for each skill
    await cleanedData.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.textContent = `${skill.name} ${skill.level}`;
      skillDiv.classList.add("skillsDiv");
      skillContainer.appendChild(skillDiv);
    });
  }
}

// Event listener for user input
document.getElementById("userName").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const user = document.getElementById("userName").value;
    try {
      fetchData(user);
    } catch (error) {
      error.message === "That user does not exist.";
    }
  }
});
