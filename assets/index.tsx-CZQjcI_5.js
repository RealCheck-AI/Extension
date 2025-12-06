import{r as f,j as n,c as v,R as C}from"./client-D7f9BLy3.js";import{M as u,a as E,g as w,e as N,f as T}from"./storage-Cy46boMB.js";import{i as j,M as s,a as S}from"./messages-DnvhnJ-w.js";import{C as A,a as R}from"./Skeleton-CPWXYf3_.js";const M=new Set(["SCRIPT","STYLE","NOSCRIPT","IFRAME","OBJECT","EMBED","NAV","HEADER","FOOTER","ASIDE","MENU","MENUITEM","FORM","INPUT","BUTTON","SELECT","TEXTAREA","LABEL","SVG","CANVAS","VIDEO","AUDIO","SOURCE","TRACK","MAP","AREA"]),z=["nav","navigation","menu","sidebar","footer","header","comment","comments","advertisement","ad","ads","social","share","related","recommended","widget","promo","banner"];function p(e){const t=e.className;if(typeof t!="string")return!1;const r=t.toLowerCase();return z.some(o=>r.includes(o))}function g(e){const t=window.getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&t.opacity!=="0"}function d(e){if(M.has(e.tagName)||p(e)||!g(e))return"";let t="";for(const r of e.childNodes)r.nodeType===Node.TEXT_NODE?t+=r.textContent||"":r.nodeType===Node.ELEMENT_NODE&&(t+=d(r));return t}function O(){const e=document.querySelectorAll("article");if(e.length>0){let o=null,a=0;for(const i of e){const l=d(i);l.length>a&&(a=l.length,o=i)}if(o&&a>100)return d(o)}const t=document.querySelector('main, [role="main"]');if(t){const o=d(t);if(o.length>100)return o}const r=[".article-body",".article-content",".entry-content",".post-content",".story-body",".story-content",".content-body",'[itemprop="articleBody"]',".article__body"];for(const o of r){const a=document.querySelector(o);if(a){const i=d(a);if(i.length>100)return i}}return null}function L(){var r;const e=document.querySelectorAll("p"),t=[];for(const o of e){if(p(o)||p(o.parentElement)||!g(o))continue;const a=(r=o.textContent)==null?void 0:r.trim();a&&a.length>30&&t.push(a)}return t.join(`

`)}function U(e){return e.replace(/\s+/g," ").replace(/\n{3,}/g,`

`).trim()}function B(){console.log("[RealCheck] Extracting page content...");let e=O();if((!e||e.length<100)&&(e=L()),e=U(e),e.length>u){e=e.slice(0,u);const t=e.lastIndexOf(".");t>u*.8&&(e=e.slice(0,t+1))}return console.log(`[RealCheck] Extracted ${e.length} characters`),e}function D(){const e=document.querySelector('meta[property="og:title"]');if(e){const r=e.getAttribute("content");if(r)return r}const t=document.querySelector('meta[name="twitter:title"]');if(t){const r=t.getAttribute("content");if(r)return r}return document.title}function I({result:e,isLoading:t,onClose:r}){const[o,a]=f.useState("https://realcheck.ai"),[i,l]=f.useState(!1);f.useEffect(()=>{E().then(a)},[]);const k=()=>{if(e!=null&&e.url){const b=w(o,e.url);window.open(b,"_blank")}};return i?n.jsx("div",{className:"realcheck-overlay realcheck-overlay-minimized",onClick:()=>l(!1),title:"Click to expand",children:n.jsx("div",{className:"realcheck-minimized-badge",style:{backgroundColor:e?_(e.score):"#3b82f6"},children:e?e.score:"?"})}):n.jsxs("div",{className:"realcheck-overlay",children:[n.jsxs("div",{className:"realcheck-overlay-header",children:[n.jsxs("div",{className:"realcheck-overlay-logo",children:[n.jsx("span",{className:"realcheck-logo-icon",children:"RC"}),n.jsx("span",{className:"realcheck-logo-text",children:"RealCheck AI"})]}),n.jsxs("div",{className:"realcheck-overlay-actions",children:[n.jsx("button",{onClick:()=>l(!0),className:"realcheck-btn-icon",title:"Minimize",children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M5 12h14"})})}),n.jsx("button",{onClick:r,className:"realcheck-btn-icon",title:"Close",children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),n.jsxs("div",{className:"realcheck-overlay-content",children:[t&&n.jsxs("div",{className:"realcheck-loading",children:[n.jsx(A,{}),n.jsx("p",{className:"realcheck-loading-text",children:"Analyzing content..."})]}),!t&&e&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"realcheck-score-section",children:n.jsx(R,{score:e.score,label:e.label})}),n.jsx("p",{className:"realcheck-summary",children:e.summary}),n.jsx("div",{className:"realcheck-overlay-footer",children:n.jsxs("button",{onClick:k,className:"realcheck-btn-primary",children:["View Full Report",n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"})})]})})]})]}),n.jsx("div",{className:"realcheck-disclaimer",children:"⚠️ AI analysis – verify with multiple sources"})]})}function _(e){return e>=80?"#16a34a":e>=60?"#059669":e>=40?"#d97706":e>=20?"#ef4444":"#b91c1c"}function P(){if(document.getElementById("realcheck-overlay-styles"))return;const e=document.createElement("style");e.id="realcheck-overlay-styles",e.textContent=`
    .realcheck-overlay {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 320px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
      font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      z-index: 2147483647;
      overflow: hidden;
      animation: realcheck-slide-in 0.3s ease-out;
    }

    .realcheck-overlay-minimized {
      width: auto;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .realcheck-overlay-minimized:hover {
      transform: scale(1.1);
    }

    .realcheck-minimized-badge {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 14px;
      font-family: 'JetBrains Mono', monospace;
    }

    @keyframes realcheck-slide-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .realcheck-overlay-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: linear-gradient(to right, #0f172a, #1e293b);
      color: white;
    }

    .realcheck-overlay-logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .realcheck-logo-icon {
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 10px;
    }

    .realcheck-logo-text {
      font-weight: 600;
      font-size: 14px;
    }

    .realcheck-overlay-actions {
      display: flex;
      gap: 4px;
    }

    .realcheck-btn-icon {
      width: 28px;
      height: 28px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
    }

    .realcheck-btn-icon:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .realcheck-overlay-content {
      padding: 16px;
    }

    .realcheck-loading {
      text-align: center;
      padding: 16px 0;
    }

    .realcheck-loading-text {
      margin-top: 12px;
      font-size: 12px;
      color: #64748b;
    }

    .realcheck-score-section {
      margin-bottom: 12px;
    }

    .realcheck-summary {
      font-size: 13px;
      color: #475569;
      line-height: 1.5;
      margin: 0 0 16px 0;
    }

    .realcheck-overlay-footer {
      display: flex;
      gap: 8px;
    }

    .realcheck-btn-primary {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 16px;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .realcheck-btn-primary:hover {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    .realcheck-disclaimer {
      padding: 8px 16px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      font-size: 10px;
      color: #94a3b8;
      text-align: center;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .realcheck-overlay {
        background: #1e293b;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
      }

      .realcheck-summary {
        color: #94a3b8;
      }

      .realcheck-disclaimer {
        background: #0f172a;
        border-color: #334155;
        color: #64748b;
      }
    }

    /* Responsive adjustments */
    @media (max-width: 480px) {
      .realcheck-overlay {
        bottom: 10px;
        right: 10px;
        left: 10px;
        width: auto;
      }
    }
  `,document.head.appendChild(e)}let h=null,c=null;function F(){return c&&document.body.contains(c)||(c=document.createElement("div"),c.id="realcheck-overlay-container",c.setAttribute("data-realcheck","true"),document.body.appendChild(c),P()),c}function x(e,t=!1){const r=F();h||(h=v.createRoot(r)),h.render(n.jsx(C.StrictMode,{children:n.jsx(I,{result:e,isLoading:t,onClose:y})}))}function y(){h&&h.render(null)}function V(e,t,r){if(!j(e))return!1;switch(console.log("[RealCheck] Content script received message:",e.type),e.type){case s.EXTRACT_CONTENT:{const o=B(),a=D();r({type:s.CONTENT_RESPONSE,rawContent:o,pageTitle:a});break}case s.SHOW_RESULT:{const{result:o}=e;x(o),r({success:!0});break}case s.HIDE_PANEL:{y(),r({success:!0});break}default:return!1}return!0}async function m(){try{if(!(await N()).autoAnalyze)return;const t=window.location.href;if(!T(t))return;console.log("[RealCheck] Auto-analyzing news page:",t),x(null,!0),S({type:s.ANALYZE_URL,url:t,extractContent:!0})}catch(e){console.error("[RealCheck] Auto-analyze check failed:",e)}}function q(){console.log("[RealCheck] Content script initialized"),chrome.runtime.onMessage.addListener(V),document.readyState==="complete"?setTimeout(m,1e3):window.addEventListener("load",()=>{setTimeout(m,1e3)})}q();
