var searchbar=function(){"use strict";window.addEventListener("load",function(){new searchbar});return function(e=".searchbar",r={}){const n=document.querySelector(e);return Object.keys(r).forEach(e=>{n.addEventListener(e,r[e])}),document.querySelector(".searchbar .button").addEventListener("click",()=>{console.log("searchbar:","you clicked my button")}),document.querySelector(".searchbar input").addEventListener("change",()=>{console.log("searchbar:","you changed my input")}),this}}();
