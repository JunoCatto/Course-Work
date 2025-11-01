// Import Lucide from the ESM CDN build
import {
  createIcons,
  icons,
} from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";

// Render any existing <i data-lucide="..."> elements
createIcons({ icons });

// Dynamically add another icon
document.body.insertAdjacentHTML("beforeend", '<i data-lucide="swords"></i>');

// Render the new one as well
createIcons({ icons });
