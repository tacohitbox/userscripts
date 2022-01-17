// ==UserScript==
// @name         YarrPlay
// @version      1.1
// @description  Play/download movies right on the IMDb page of each show/movie.
// @author       tacohitbox
// @match        https://www.imdb.com/title/tt*
// @icon         https://www.google.com/s2/favicons?domain=imdb.com
// @grant        none
// ==/UserScript==

console.log(getType());
if (getType() !== "s") {
  document.querySelectorAll(".dDhYrh *").forEach(function(el) {el.remove();})
}


var i = document.createElement("iframe");
if (getType() == "movie") {
  var idm = `tt${window.location.href.split("/tt")[1].split("/")[0]}`;
  i.src = `https://vidsrc.me/embed/${idm}`;
  i.style = "width:100%;height:100%;display:block;border:0;";
  i.setAttribute("allowfullscreen", "");
  if (document.querySelector(".dDhYrh")) {
    document.querySelector(".dDhYrh").append(i);
  } else {
    i.style = "width:100%;height:325px;display:block;border:0;margin-top:10px;";
    document.querySelector(".dYxvce").append(i);
  }
} else if (getType() == "tv") {
  var idp = `tt${document.querySelector(".ipc-link").href.split("/tt")[1].split("/")[0]}`;
  if (document.querySelectorAll(".eHqAZ").length !== 0) {
    var s = document.querySelectorAll(".eHqAZ")[0].innerHTML.split("S")[1];
    var e = document.querySelectorAll(".eHqAZ")[1].innerHTML.split("E")[1];
  } else if (document.querySelectorAll(".gwHgBk").length !== 0) {
    var s = document.querySelectorAll(".gwHgBk")[0].innerHTML.split("S")[1];
    var e = document.querySelectorAll(".gwHgBk")[1].innerHTML.split("E")[1];
  }
  if (typeof s == "string") {
    i.src = `https://vidsrc.me/embed/${idp}/${s}-${e}`;
    i.setAttribute("allowfullscreen", "");
    if (document.querySelector(".dDhYrh")) {
      i.style = "width:100%;height:100%;display:block;border:0;";
      document.querySelector(".dDhYrh").append(i);
    } else if (document.querySelector(".iEHpKn")) {
      i.style = "width:100%;height:325px;display:block;border:0;margin-top:10px;";
      document.querySelector(".iEHpKn").append(i);
    }
  }
}

function getType() {
  if (
    document.querySelector(".jswntl") == null &&
    document.querySelector(".episode-guide-text") == null &&
    document.querySelector(".dYxvce") !== null
  ) {return "movie";}
  else if (document.querySelector(".gCtawA") == null && document.querySelector(".dDhYrh") == null && document.querySelector(".ebbHRh") == null || document.querySelector(".kzEMhq") !== null) {return "s";}
  else {return "tv";}
}
