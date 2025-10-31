async function fetchData(user) {
  const response = await fetch(`/api/player?${user}`);

  const result = await response.json();
  // Error checking for player not found
  if (result.error == "Player not found") {
    alert("That user does not exist.");
  } else {
    const cleanedData = result.skills.map((data) => ({
      name: data.name,
      level: data.level,
    }));

    const container = document.getElementById("mainContainer");

    await cleanedData.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.textContent = `${skill.name} ${skill.level}`;
      skillDiv.classList.add("skill");
      container.appendChild(skillDiv);
    });
  }
}

document.getElementById("userName").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const user = document.getElementById("userName").value;
    try {
      fetchData(user);
    } catch (e) {
      ("That user does not exist.");
    }
  }
});
