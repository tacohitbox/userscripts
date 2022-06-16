// ==UserScript==
// @name         Git.Gay mirror settings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Button that disables wikis, issues, projects, and pull requests.
// @author       You
// @match        https://git.gay/*/*/settings
// @icon         https://www.google.com/s2/favicons?sz=64&domain=git.gay
// @grant        none
// ==/UserScript==

let d = document.createElement("BUTTON");
d.classList.add("ui");
d.classList.add("green");
d.classList.add("button");
d.onclick = function() {
  document.querySelector("[name='enable_wiki']").checked = false;
  document.querySelector("[name='enable_issues']").checked = false;
  document.querySelector("[name='enable_pulls']").checked = false;
  document.querySelector("[name='enable_projects']").checked = false;
  document.querySelector("[name='enable_wiki']").parentElement.parentElement.parentElement.submit();
}
d.innerHTML = "Disable All";

document.querySelectorAll(".ui.top.attached.header").forEach(function(e){
  if (e.innerHTML.includes("Advanced Settings")) e.append(d);
});
