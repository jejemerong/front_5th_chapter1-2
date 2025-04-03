var B=Object.defineProperty;var G=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>G(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const W=()=>{const e=new Set;return{subscribe:l=>e.add(l),notify:()=>e.forEach(l=>l())}},J=(e,t)=>{const{subscribe:n,notify:l}=W();let r={...e};const o=u=>{r={...r,...u},l()},a=()=>({...r}),i=Object.fromEntries(Object.entries(t).map(([u,x])=>[u,(...w)=>o(x(a(),...w))]));return{getState:a,setState:o,subscribe:n,actions:i}},V=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:o=>t.setItem(e,JSON.stringify(o)),reset:()=>t.removeItem(e)}),K=e=>e!==!1&&e!==null&&e!==void 0;function s(e,t,...n){return{type:e,props:t,children:n.flat(1/0).filter(K)}}let O=null;const m=new Map,A=new Set;function j(e,t,n){A.add(t),m.has(e)||m.set(e,{});const l=m.get(e);l[t]=n}function Y(e,t){if(m.has(e)){const n=m.get(e);delete n[t]}}function z(e){O=e,A.forEach(t=>{e.removeEventListener(t,D),e.addEventListener(t,D)})}function D(e){let t=e.target,n=e.type;for(;t&&t!==O;)m.has(t)&&m.get(t)[n]&&m.get(t)[n](e),t=t.parentElement}const E=e=>e!=null&&typeof e!="boolean";function k(e){if(!E(e))return"";if(typeof e=="number"||typeof e=="string")return String(e);if(typeof e.type=="function"){const{type:t,props:n,children:l}=e,r=t({...n,children:l});return k(r)}return{...e,children:e.children?e.children.filter(E).map(k):[]}}function f(e){if(!E(e))return document.createTextNode("");if(typeof e=="number"||typeof e=="string")return document.createTextNode(String(e));if(Array.isArray(e)){const o=document.createDocumentFragment();return e.forEach(a=>{const i=f(a);o.appendChild(i)}),o}if(typeof e.type=="function")throw new Error("컴포넌트 정규화가 필요합니다 :-)");const{type:t,props:n,children:l}=e,r=document.createElement(t);return n&&Q(r,n),l.forEach(o=>{r.appendChild(f(o))}),r}function Q(e,t){for(const[n,l]of Object.entries(t))if(n==="className")e.setAttribute("class",l);else if(typeof l=="function"&&n.startsWith("on")){const r=n.slice(2).toLowerCase();j(e,r,l)}else e.setAttribute(n,l)}function R(e,t,n){for(const[l]of Object.entries(n))if(l.startsWith("on")&&!(l in t)){const r=l.slice(2).toLowerCase();Y(e,r)}for(const[l,r]of Object.entries(t))if(l==="className")e.setAttribute("class",r);else if(l.startsWith("on")){const o=l.slice(2).toLowerCase();j(e,o,r)}else e.setAttribute(l,r)}function F(e,t,n,l=0){if(!n&&t){e.appendChild(f(t));return}if(!t&&n){e.removeChild(e.childNodes[l]);return}if(typeof t=="string"&&typeof n=="string"){t!==n&&e.replaceChild(f(t),e.childNodes[l]);return}if(t.type!==n.type){e.replaceChild(f(t),e.childNodes[l]);return}R(e.childNodes[l],t.props||{},n.props||{});const r=t.children||[],o=n.children||[],a=Math.max(r.length,o.length);for(let i=0;i<a;i++)F(e.childNodes[l],r[i],o[i],i)}let I=null;function X(e,t){const n=t.firstChild,l=k(e);if(n)F(t,l,I);else{const r=f(l);t.appendChild(r)}I=l,z(t)}const b=V("user"),Z=1e3,p=Z*60,_=p*60,c=J({currentUser:b.get(),loggedIn:!!b.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*p,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*p,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*p,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*p,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*_,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return b.reset(),{...e,currentUser:null,loggedIn:!1}}}),ee=1e3,U=ee*60,L=U*60,te=L*24,se=e=>{const t=Date.now()-e;return t<U?"방금 전":t<L?`${Math.floor(t/U)}분 전`:t<te?`${Math.floor(t/L)}시간 전`:new Date(e).toLocaleString()},ne=({id:e,author:t,time:n,content:l,likeUsers:r,activationLike:o=!1})=>{const{loggedIn:a,posts:i,currentUser:u}=c.getState();function x(){if(!a){alert("로그인 후 이용해주세요");return}const w=i.map(d=>{const H=d.likeUsers.includes(u.username);return d.id===e?H?{...d,likeUsers:d.likeUsers.filter(T=>T!==u.username)}:{...d,likeUsers:[...d.likeUsers,u.username]}:d});c.setState({posts:w})}return s("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},s("div",{className:"flex items-center mb-2"},s("div",null,s("div",{className:"font-bold"},t),s("div",{className:"text-gray-500 text-sm"},se(n)))),s("p",null,l),s("div",{className:"mt-2 flex justify-between text-gray-500"},s("span",{className:`like-button cursor-pointer${o?" text-blue-500":""}`,onClick:x},"좋아요 ",r.length),s("span",null,"댓글"),s("span",null,"공유")))},re=()=>{const{posts:e,currentUser:t}=c.getState();function n(l){l.preventDefault();const r=document.getElementById("post-content").value,o=t.username;c.setState({posts:[...e,{id:e.length+1,author:o,time:new Date,content:r,likeUsers:[]}]})}return s("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},s("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),s("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onclick:n},"게시"))},M=()=>s("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},s("h1",{className:"text-2xl font-bold"},"항해플러스")),$=()=>s("footer",{className:"bg-gray-200 p-4 text-center"},s("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),g={value:null,get(){return this.value},set(e){this.value=e}},S=e=>g.get().path===e?"text-blue-600 font-bold":"text-gray-600";function v({onClick:e,children:t,...n}){return s("a",{onClick:r=>{r.preventDefault(),e==null||e(),g.get().push(r.target.href.replace(window.location.origin,""))},...n},t)}const q=()=>{const{loggedIn:e}=c.getState(),{logout:t}=c.actions;return s("nav",{className:"bg-white shadow-md p-2 sticky top-14"},s("ul",{className:"flex justify-around"},s("li",null,s(v,{href:"/",className:S("/")},"홈")),!e&&s("li",null,s(v,{href:"/login",className:S("/login")},"로그인")),e&&s("li",null,s(v,{href:"/profile",className:S("/profile")},"프로필")),e&&s("li",null,s("a",{href:"#",id:"logout",className:"text-gray-600",onClick:n=>{n.preventDefault(),t()}},"로그아웃"))))},ce=()=>{const{posts:e,loggedIn:t,currentUser:n}=c.getState();return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(M,null),s(q,null),s("main",{className:"p-4"},n?s(re,null):null,s("div",{id:"posts-container",className:"space-y-4"},[...e].sort((l,r)=>r.time-l.time).map(l=>{const r=t?l.likeUsers.includes(n.username):!1;return s(ne,{...l,activationLike:r})}))),s($,null)))};function le(e){const t={username:e,email:"",bio:""};c.setState({currentUser:t,loggedIn:!0}),b.set(t)}const ue=()=>s("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},s("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),s("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const n=document.getElementById("username").value;le(n)}},s("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),s("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),s("div",{className:"mt-4 text-center"},s("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),s("hr",{className:"my-6"}),s("div",{className:"text-center"},s("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),oe=()=>s("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},s("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},s("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),s("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),s("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),s("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),s("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ae(e){const t={...c.getState().currentUser,...e};c.setState({currentUser:t}),b.set(t),alert("프로필이 업데이트되었습니다.")}const me=()=>{const{loggedIn:e,currentUser:t}=c.getState(),{username:n="",email:l="",bio:r=""}=t??{};return s("div",{className:"bg-gray-100 min-h-screen flex justify-center"},s("div",{className:"max-w-md w-full"},s(M,null),s(q,{loggedIn:e}),s("main",{className:"p-4"},s("div",{className:"bg-white p-8 rounded-lg shadow-md"},s("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),s("form",{id:"profile-form",onSubmit:a=>{a.preventDefault();const i=new FormData(a.target),u=Object.fromEntries(i);ae(u)}},s("div",{className:"mb-4"},s("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),s("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:n,required:!0})),s("div",{className:"mb-4"},s("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),s("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:l,required:!0})),s("div",{className:"mb-6"},s("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),s("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},r)),s("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),s($,null)))},h=class h extends Error{constructor(){super(h.MESSAGE)}};N(h,"MESSAGE","ForbiddenError");let P=h;const y=class y extends Error{constructor(){super(y.MESSAGE)}};N(y,"MESSAGE","UnauthorizedError");let C=y;function de(){const e=g.get().getTarget()??oe,t=document.querySelector("#root");try{X(s(e,null),t)}catch(n){if(n instanceof P){g.get().push("/");return}if(n instanceof C){g.get().push("/login");return}console.error(n)}}export{P as F,ce as H,ue as L,me as P,C as U,de as a,s as b,W as c,c as g,g as r};
