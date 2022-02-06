// ==UserScript==
// @name         Latest Tweets by Default
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-switches you to Latest Tweets
// @author       tacohitbox
// @match        https://twitter.com/home
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
  if (document.querySelector("div[data-testid=primaryColumn] h2[role=heading] span").innerHTML !== "Latest Tweets") {
    if (document.querySelector("div[aria-label='Top Tweets on'")) {
      document.querySelector("div[aria-label='Top Tweets on'").click()
      document.querySelector("div[role=menu] .r-6416eg").click()
      document.querySelectorAll("div[data-testid='ScrollSnap-SwipeableList'] .r-qvutc0").forEach(function(f) {
        if (f.innerHTML == "Latest Tweets") f.parentElement.click();
      });
    } else {
      document.querySelectorAll("div[data-testid='ScrollSnap-SwipeableList'] .r-qvutc0").forEach(function(f) {
        if (f.innerHTML == "Latest Tweets") f.parentElement.click();
      });
    }
  }
}, false);
