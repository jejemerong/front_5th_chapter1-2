import{c as d,r as l,a as r,g as n,H as h,U as p,b as s,P as w,F as f,L as P}from"./render-CtC43Ji5.js";const c="/front_5th_chapter1-2",U=e=>{const{subscribe:i,notify:o}=d(),a=()=>{const t=c;return window.location.pathname.replace(t,"")||"/"},u=()=>e[a()],g=t=>{{const b=c+t;window.history.pushState(null,null,b)}o()};return window.addEventListener("popstate",()=>o()),{get path(){return a()},push:g,subscribe:i,getTarget:u}};l.set(U({"/":h,"/login":()=>{const{loggedIn:e}=n.getState();if(e)throw new f;return s(P,null)},"/profile":()=>{const{loggedIn:e}=n.getState();if(!e)throw new p;return s(w,null)}}));function m(){l.get().subscribe(r),n.subscribe(r),r()}m();
