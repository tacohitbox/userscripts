// ==UserScript==
// @name         Fix description size on eBay listings.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.ebay.com/itm/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        none
// ==/UserScript==

if (document.getElementById("desc_ifr")) document.getElementById("desc_ifr").style.width = "100%";
