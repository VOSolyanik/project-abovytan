/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const s={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),backdrop:document.querySelector("[data-menu-backdrop]"),menu:document.querySelector("[data-menu]")};s.openMenuBtn.addEventListener("click",r),s.closeMenuBtn.addEventListener("click",c),s.backdrop.addEventListener("click",c),s.menu.querySelectorAll("a, button").forEach(o=>{o.setAttribute("tabindex","-1")}),s.menu.addEventListener("click",o=>{o.target.nodeName==="A"&&c()});function r(){s.menu.classList.add("is-open"),s.menu.setAttribute("aria-hidden",!1),s.menu.querySelectorAll("a, button").forEach(o=>{o.setAttribute("tabindex","0")})}function c(){s.menu.classList.remove("is-open"),s.menu.setAttribute("aria-hidden",!0),s.menu.querySelectorAll("a, button").forEach(o=>{o.setAttribute("tabindex","-1")})}})();window.matchMedia("(min-width: 1152px)").matches&&document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".lessons-list-item"),c=document.querySelectorAll(".about-us-list-item"),o=document.querySelectorAll(".brand-underline"),e=document.querySelector(".proposal-content-wrapper"),t=[...r,...c],a=window.innerHeight;t.forEach(i=>{i.style.visibility="hidden"});const u=new IntersectionObserver(function(i){i.forEach(l=>{if(l.isIntersecting){const n=l.target;n.style.visibility="visible",n.classList.contains("lessons-list-item")&&(n===r[0]?n.classList.add("animate__backInLeft"):n===r[1]?n.classList.add("animate__backInDown"):n===r[2]&&n.classList.add("animate__backInRight")),n.classList.contains("about-us-list-item")&&n.classList.add("animate__slideInLeft"),u.unobserve(n)}})},{threshold:1});t.forEach(i=>{u.observe(i)});const m=(i,l)=>{let n=0;return function(){const d=new Date().getTime();d-n>=l&&(n=d,i.apply(this,arguments))}},f=()=>{if(o.forEach(i=>{i.getBoundingClientRect().top<a*.5&&i.classList.add("js-animate")}),e){const i=e.getBoundingClientRect();i.top>=0&&i.bottom<=a&&e.classList.add("js-animate")}};document.addEventListener("scroll",m(f,100))});
//# sourceMappingURL=index.js.map
