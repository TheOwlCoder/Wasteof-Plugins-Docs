import { * } from 'https://raw.githubusercontent.com/TheOwlCoder/Wasteof-Plugins-Docs/refs/heads/main/importAPI.js';
if (window.location.href == "https://wasteof.money/settings") {
  addMenuDropdown("plugins", "Sideload Plugin Example", "your-id-here");
  addHeaderNode("your-id-here-content", "Example Title");
  addTextNode("your-id-here-content", "Example Description");
  addTextNode("your-id-here-content", "<b>By</b> You!");
  addTextNode("your-id-here-content", "<b>Version</b> 1.0");
  addButtonNode("your-id-here-content", "Enable", "your-id-hereonoff")

  pluginEnableDisable("your-id-here");
}
