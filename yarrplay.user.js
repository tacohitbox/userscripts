// ==UserScript==
// @name         YarrPlay
// @version      1.0
// @description  Play/download movies right on the IMDb page of each show/movie.
// @author       tacohitbox
// @match        https://www.imdb.com/title/tt*
// @icon         https://www.google.com/s2/favicons?domain=imdb.com
// @grant        none
// ==/UserScript==

if (getType() == "s") {return;}
console.log(getType());
document.querySelectorAll(".dDhYrh *").forEach(function(el) {el.remove();})

var i = document.createElement("iframe");
if (getType() == "movie") {
  var idm = `tt${window.location.href.split("/tt")[1].split("/")[0]}`;
  i.src = `https://vidsrc.me/embed/${idm}`;
  i.style = "width:100%;height:100%;display:block;border:0;";
  i.setAttribute("allowfullscreen", "");
  document.querySelector(".dDhYrh").append(i);
} else if (getType() == "tv") {
  var idp = `tt${document.querySelector(".ipc-link").href.split("/tt")[1].split("/")[0]}`;
  var s = document.querySelectorAll(".eHqAZ")[0].innerHTML.split("S")[1];
  var e = document.querySelectorAll(".eHqAZ")[1].innerHTML.split("E")[1];
  i.src = `https://vidsrc.me/embed/${idp}/${s}-${e}`;
  i.style = "width:100%;height:325px;display:block;border:0;margin-top:10px;";
  i.setAttribute("allowfullscreen", "");
  document.querySelector(".iuGjVe").append(i);
}

function getType() {
  if (document.querySelector(".episode-guide-text") == null && document.querySelector(".klVacg") == null) {return "movie";} else if (document.querySelector(".gCtawA") == null) {return "s";} else {return "tv";}
}
