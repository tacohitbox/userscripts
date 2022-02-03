// ==UserScript==
// @name         JustPaste.it No New Tab + Remove Redirect
// @version      1.0
// @description  Removes annoyances from JustPaste.it
// @author       tacohitbox
// @match        https://justpaste.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=justpaste.it
// @grant        none
// ==/UserScript==

document.querySelectorAll("a").forEach(function(ele) {
    ele.target = "";
    if (ele.href.includes("/redirect/")) {ele.href = decodeURIComponent(ele.href.split("/redirect/")[1].split("/").slice(1).join("/"));}
});
