// ==UserScript==
// @name         VidSrc Improver
// @version      1.0
// @description  Makes VidSrc more useable in Firefox.
// @author       tacohitbox
// @match        *://*.vidsrc.me/*
// @match        *://vidsrc.me/*
// @match        *://vidsrc.xyz/*
// @grant        none
// ==/UserScript==

document.querySelectorAll(".source > #name").forEach(function(ele) {
  if (ele.innerHTML == "VidSrc PRO") {ele.parentElement.remove();}
  if (ele.innerHTML == "VidSrc Fembed") {ele.parentElement.click();}
});
