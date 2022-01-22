// ==UserScript==
// @name         Napalm FTP "Error Showing Ads" Bypass
// @version      1.0
// @description  Shows FTP links even if you have an adblocker.
// @author       tacohitbox
// @match        https://www.searchftps.net/*
// @icon         https://www.searchftps.net/favicon.ico
// @grant        none
// ==/UserScript==

if (document.getElementById("content1")) {
  setTimeout(function() {
    var a = document.querySelector("body").innerHTML.split(`if ($('iframe[width="336"][height="280"]').length !== 0) {`)[1].split(`}`)[0];

    var b1 = a.split(`ct1_t = `)[1].split(`'`)[1].split(`'`)[0];
    var d1 = decodeURIComponent(escape(decode(b1)));

    var b2 = a.split(`ct3_t = `)[1].split(`'`)[1].split(`'`)[0];
    var d2 = decodeURIComponent(escape(decode(b2)));

    document.getElementById("content1").innerHTML = d1;
    document.getElementById("content3").innerHTML = d2;
    document.getElementById("content1_a").href = d1;
    document.getElementById("copy-ftp-url").setAttribute("data-clipboard-text", d1);
    document.getElementById("copy-ftp-url-unencoded").setAttribute("data-clipboard-text", d2);
  }, 5)
}
