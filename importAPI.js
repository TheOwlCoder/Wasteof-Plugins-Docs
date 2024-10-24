const pink = "#ec4899";
const purple = "#8b5cf6";
const violet = "#8b5cf6";
const green = "#22c55e";
const blue = "#3b82f6";
// yes, default blue and theme-blue are different colors
const red = "#ef4444";
const orange = "#f97316";
function createSettingModule(id) {
  const settingsElement = document.createElement("div");
  const footer = document.getElementById("footer");
  settingsElement.classList.add("bg-gray-100");
  settingsElement.classList.add("dark:bg-gray-800");
  settingsElement.classList.add("p-4");
  settingsElement.classList.add("rounded-xl");
  settingsElement.classList.add("my-2");
  settingsElement.id = id;
  document.getElementsByTagName("main")[0].insertBefore(settingsElement, footer);
}
function addHeaderNode(id, content) {
  const settingsElement = document.getElementById(id);
  const header = document.createElement("h2");
  header.classList.add("font-bold");
  header.classList.add("text-2xl");
  header.classList.add("mb-2");
  header.innerHTML = content;
  settingsElement.appendChild(header);
}
function addTextNode(id, content) {
  const settingsElement = document.getElementById(id);
  const header = document.createElement("p");
  header.innerHTML = content;
  settingsElement.appendChild(header);
}
function addButtonNode(id, content, colorOrID, color) {
  const settingsElement = document.getElementById(id);
  const button = document.createElement("button");
  button.classList.add("bg-primary-500", "text-white", "block", "mt-2", "text-center", "font-bold", "p-2", "h-10", "rounded-lg", "cursor-pointer")
  button.innerHTML = content;
  if (colorOrID) {
    if (colorOrID.startsWith("#" || "rgb(" || "rgba(")) {
      button.style.background = colorOrID;
    } else {
      button.id = colorOrID
    }
  }
  if (color) {
    button.style.background = color;
  }

  settingsElement.appendChild(button);
}
function addMenuDropdown(oldid, title, newid) {
  const settingsElement = document.getElementById(oldid);
  const menu = document.createElement("div");
  menu.classList.add("select-none");
  menu.classList.add("my-2");
  menu.id = newid;

  menu.innerHTML = `<div id="${newid}-top" class="menuDropdown bg-white dark:bg-gray-700 p-4 mb-2 rounded-xl flex cursor-pointer hover:bg-white transition-colors bg-gray-50">
  <span class="inline-block font-semibold w-full">${title}</span>
  <span class="inline-block secondary-text"
    ><span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path></svg></span
  ></span>
</div>
<div class="bg-white dark:bg-gray-700 p-4 rounded-xl" id="${newid}-menu">
  <div id="${newid}-content" class="menuDropdownMenu">
    <span class="block">
    </span>
  </div>
</div>
`;
  function createDialog(title, id) {
  const anewDialog = document.createElement("div");
  anewDialog.id = id;
  anewDialog.innerHTML = `<div class="vfm vfm--inset vfm--fixed" style="z-index: 1000;" data-v-02823e40="" value="true"><div class="vfm__overlay vfm--overlay vfm--absolute vfm--inset" style="" data-v-02823e40=""></div> <div aria-expanded="true" role="dialog" aria-modal="true" tabindex="-1" class="vfm__container vfm--absolute vfm--inset vfm--outline-none flex justify-center items-center" style="" data-v-02823e40=""><div class="vfm__content relative flex flex-col max-h-full mx-4 rounded w-full h-full md:w-1/2 md:h-1/2" data-v-02823e40="" style="touch-action: none; position: relative; top: 23px; left: -159px; margin: unset;"><span id="modal-header" class="mr-8 w-full bg-primary-500 dark:bg-gray-800 text-white p-2 rounded-t-xl dark:border-t-2 dark:border-l-2 dark:border-r-2 border-gray-700 font-semibold cursor-move">${title}</span><div
  class="flex-grow overflow-y-auto bg-white dark:bg-gray-900 dark:border-b-2 dark:border-l-2 dark:border-r-2 border-gray-700 p-2 flex flex-col rounded-b" id="${id}-content"></div><button onclick="document.getElementById('${id}').remove();" class="absolute top-0 right-0 mt-2 mr-2 text-white"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
</svg></span></button> </div>`
  document.body.appendChild(anewDialog)
}
  function pluginEnableDisable(plugin, warning) {
    if (localStorage.getItem(plugin) == "enabled") {
      document.getElementById(plugin + "onoff").style.background = "#ef4444";
      document.getElementById(plugin + "onoff").innerText = "Disable";
    } else {
      document.getElementById(plugin + "onoff").style.background = "#22c55e";
      document.getElementById(plugin + "onoff").innerText = "Enable";
    }
    document.getElementById(plugin + "onoff").addEventListener("click", () => {
      let enabled = localStorage.getItem(plugin);
      if (enabled != "enabled") {

        if (warning == "usesUserToken") {
          createDialog("Warning", plugin + "UUTWarnDialog");
          addHeaderNode(plugin + "UUTWarnDialog-content", "This plugin uses your user token")
          addTextNode(plugin + "UUTWarnDialog-content", "This plugin uses your user token, presumeably to make API calls on your behalf.<br>Are you sure you want to enable this plugin?")
          addButtonNode(plugin + "UUTWarnDialog-content", "Enable", plugin + "UUTWarnButton", green);
          addTextNode(plugin + "UUTWarnDialog-content", "This plugin is sideloaded and contains unreviewed code. Make sure you know what you're doing.")
          addTextNode(plugin + "UUTWarnDialog-content", "This plugin has been reviewed and officially added to Wasteof Plugins.")

          
          document.getElementById(plugin + "UUTWarnButton").addEventListener("click", () => {
            document.getElementById(plugin + "onoff").style.background = "#ef4444";
            document.getElementById(plugin + "onoff").innerText = "Disable";
            localStorage.setItem(plugin, "enabled");
            document.getElementById(plugin + "UUTWarnDialog").remove();
          }) 

        } else {
          document.getElementById(plugin + "onoff").style.background = "#ef4444";
          document.getElementById(plugin + "onoff").innerText = "Disable";
          localStorage.setItem(plugin, "enabled");
        }
      } else {
        document.getElementById(plugin + "onoff").style.background = "#22c55e";
        document.getElementById(plugin + "onoff").innerText = "Enable ";
        localStorage.setItem(plugin, "disabled");
      }
    });
  }
