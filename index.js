import{S as C,i as f,a as E}from"./assets/vendor-D5mnuR-h.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const v=document.querySelector(".gallery-form");document.querySelector("#appGallery");const r=document.querySelector("#gallery-list"),w=n=>{const s=document.createElement("li");s.classList.add("gallery-item"),s.dataset.source=n.largeImageURL;const a=document.createElement("a");a.classList.add("gallery-link"),a.style.color="black";const i=document.createElement("img");i.src=n.webformatURL,i.alt=n.tags,i.width=360,i.height=200;const e=document.createElement("div");e.classList.add("content");const t=document.createElement("div");t.classList.add("info");const o=document.createElement("h5");o.classList.add("key"),o.textContent="Likes:",t.appendChild(o);const m=document.createElement("p");m.classList.add("value"),m.textContent=n.likes,t.appendChild(m);const l=document.createElement("div");l.classList.add("info");const p=document.createElement("h5");p.classList.add("key"),p.textContent="Views:",l.appendChild(p);const u=document.createElement("p");u.classList.add("value"),u.textContent=n.views,l.appendChild(u);const c=document.createElement("div");c.classList.add("info");const h=document.createElement("h5");h.classList.add("key"),h.textContent="Comments:",c.appendChild(h);const y=document.createElement("p");y.classList.add("value"),y.textContent=n.comments,c.appendChild(y);const d=document.createElement("div");d.classList.add("info");const g=document.createElement("h5");g.classList.add("key"),g.textContent="Downloads:",d.appendChild(g);const L=document.createElement("p");L.classList.add("value"),L.textContent=n.downloads,d.appendChild(L),e.appendChild(t),e.appendChild(l),e.appendChild(c),e.appendChild(d),a.appendChild(i),s.appendChild(e),s.appendChild(a),r.appendChild(s)};let x=new C(".gallery a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",async n=>{n.preventDefault(),r.innerHTML="";const s=n.target.elements.search.value;if(s==="")return f.warning({position:"topRight",message:"Please enter a search query!"}),!1;{const a=document.createElement("li");a.classList.add("gallery-item");const i=document.createElement("span");i.classList.add("loader"),a.appendChild(i),a.style.textAlign="center",a.style.border="none",r.appendChild(a),E.get("https://pixabay.com/api/",{params:{key:"49404317-b3e2234da46703b9b16558004",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>{const t=e.data.hits;r.innerHTML="",t.length===0?f.error({position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please, try again!"}):(t.forEach(o=>{w(o)}),x.refresh())}).catch(e=>{f.error({position:"topRight",color:"red",message:e.message}),r.innerHTML="",console.error("Pixabay error: ",e)}),n.target.reset()}});
//# sourceMappingURL=index.js.map
