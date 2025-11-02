import { iconMap } from "./icons.js";
import {
  createIcons,
  icons,
} from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

// Global variables
let currentUser = "";
const skillContainer = document.getElementById("skillContainer");
const playerLevel = document.getElementById("playerLevel");
const playerExp = document.getElementById("playerExp");
const playerRank = document.getElementById("playerRank");

// API fetch
async function fetchData(user) {
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
    return null;
  } else {
    const cleanedData = result.skills.map((data) => ({
      name: data.name,
      level: data.level,
      experience: data.xp,
      rank: data.rank,
    }));

    document.getElementById("playerContainer").style.display = "block";
    document.getElementById("tabContainer").style.display = "flex";

    const playerData = cleanedData.find((skill) => skill.name === "Overall");
    playerLevel.textContent = `Overall Level ${playerData.level}`;
    playerExp.textContent = `Total Experience ${playerData.experience}`;
    playerRank.textContent = `Rank ${playerData.rank}`;

    skillContainer.innerHTML = "";

    cleanedData.forEach((skill) => {
      if (skill.name === "Overall") return;

      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skillsDiv");

      const iconName = iconMap[skill.name];
      skillDiv.innerHTML =
        `<div class="skillTop">
            <span class="skillIcon"><i data-lucide=${iconName}></i></span>
            <span class="skillName">${skill.name}</span>
          </div>` + `<div>Level ${skill.level}<br>${skill.experience} XP</div>`;
      skillContainer.appendChild(skillDiv);
    });
    createIcons({ icons });
  }
}

function swapTab(tabName) {
  const minigameContainer = document.getElementById("minigameContainer");

  switch (tabName) {
    case "Skills":
      skillContainer.style.display = "grid";
      minigameContainer.style.display = "none";
      break;

    case "Minigames":
      skillContainer.style.display = "none";
      minigameContainer.style.display = "grid";
      minigameContainer.innerHTML = "<h2>Minigames coming soon!</h2>";
      break;
  }
}

// Event listener for user input
document.querySelectorAll("#tabSelector .nav-link").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelectorAll("#tabSelector .nav-link").forEach((tab) => {
      tab.classList.remove("active");
    });
    event.target.classList.add("active");
    const tabName = event.target.textContent.trim();
    swapTab(tabName);
  });
});

document
  .getElementById("userName")
  .addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      currentUser = event.target.value.trim();
      try {
        await fetchData(currentUser);
        swapTab("Skills");
      } catch (error) {
        error.message === "That user does not exist.";
      }
    }
  });
