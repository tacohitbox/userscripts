// ==UserScript==
// @name         Disable Desktop Video Previews
// @version      1.0
// @description  Disables those video previews when you hover over a video for longer than 2 seconds on YouTube's site.
// @author       tacohitbox
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

var s = document.createElement("style");
s.innerHTML = `ytd-thumbnail[now-playing] ytd-thumbnail-overlay-time-status-renderer.ytd-thumbnail, ytd-thumbnail[is-preview-loading] ytd-thumbnail-overlay-time-status-renderer.ytd-thumbnail, ytd-thumbnail[is-preview-loading] ytd-thumbnail-overlay-toggle-button-renderer.ytd-thumbnail, ytd-thumbnail[is-preview-loading] ytd-thumbnail-overlay-endorsement-renderer.ytd-thumbnail, ytd-thumbnail[is-preview-loading] ytd-thumbnail-overlay-button-renderer.ytd-thumbnail, ytd-thumbnail[is-preview-loading] ytd-thumbnail-overlay-hover-text-renderer.ytd-thumbnail {display: inherit !important;} .ytd-rich-item-renderer #hover-overlays {display: none !important;} ytd-moving-thumbnail-renderer {display: none !important;}`;
document.body.append(s);

setInterval(function() {
  if (document.getElementById("video-preview-container")) document.getElementById("video-preview-container").remove()
  if (document.getElementById("inline-player")) document.getElementById("inline-player").remove()
	if (document.getElementById("inline-preview-player")) document.getElementById("inline-preview-player").remove()
	document.querySelectorAll(".ytp-inline-preview-ui").forEach(function(e) {e.remove()})
}, 1000)
