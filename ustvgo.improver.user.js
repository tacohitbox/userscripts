// ==UserScript==
// @name         USTVGO/247 Improver
// @version      1.0.1
// @description  This userscript removes channels that require the VPN and other various improvements.
// @author       tacohitbox
// @match        https://ustvgo.tv/*
// @match        https://ustv247.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ustvgo.tv
// @grant        none
// ==/UserScript==

var style = document.createElement("style");
style.innerHTML = `.above-entry-meta {display:block !important;}`;
document.body.append(style);

if (document.querySelector(".advertisement_above_footer")) {
  document.querySelector(".advertisement_above_footer").remove();
}

function doIblockIt(channel) {
  switch(channel) {
    case "ae ":
    case "ae":
    case "bet ":
    case "bet":
    case "discovery":
    case "espn ":
    case "espn":
    case "fox sports 1 (fs1)":
    case "fox sports 1":
    case "golf channel ":
    case "golf channel":
    case "hbo ":
    case "hbo":
    case "history":
    case "investigation discovery":
    case "national geographic ":
    case "national geographic":
    case "nba tv":
    case "nbc ":
    case "nbc":
    case "nbc 4 new york":
    case "nbc sports ( nbcsn )":
    case "nbc sports":
    case "paramount network":
    case "nfl network ":
    case "showtime ":
    case "turner classic movies (tcm)":
    case "tennis channel":
    case "tnt ":
    case "univision":
    case "usa network ":
    case "vh1 ":
    case "how to install vpn":
    case "contact us":
    case "vpn":
    case "faq":
    case "legal":
    case "tv guide":
      return true;
    default:
      return false;
  }
}

document.querySelectorAll("a").forEach(function(ele) {
  console.log(doIblockIt(ele.innerHTML.toLowerCase()), ele.innerHTML.toLowerCase())
  if (doIblockIt(ele.innerHTML.toLowerCase()) && ele.parentElement.tagName == "DIV") ele.parentElement.remove()
  if (doIblockIt(ele.innerHTML.toLowerCase()) && ele.parentElement.tagName == "LI") ele.parentElement.remove()
  if (doIblockIt(ele.innerHTML.toLowerCase()) && ele.parentElement.tagName == "STRONG" && ele.innerHTML !== "https://ustvgo.tv/vpn/") ele.parentElement.parentElement.remove()
  if (doIblockIt(ele.innerHTML.toLowerCase()) && ele.parentElement.tagName == "H2") ele.parentElement.parentElement.parentElement.parentElement.remove();
  if (ele.innerHTML == "https://ustvgo.tv/vpn/" || ele.innerHTML == "https://ustv247.tv/vpn/") ele.parentElement.remove()
  if (ele.classList.contains("more-link")) ele.remove()
});
