(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();$(document).ready(function(){$(".hamburger").click(function(){$(this).toggleClass("open")})});new Swiper(".swiperAbout",{slidesPerView:1,spaceBetween:30,autoplay:{delay:5e3},breakpoints:{768:{autoplay:{enabled:!0}}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".swiperUse",{slidesPerView:1,spaceBetween:30,breakpoints:{540:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3.7}},scrollbar:{el:".swiper-scrollbar",dragSize:554}});