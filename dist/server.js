(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};require("react");const n=require("react-dom/server");var t=e.n(n);const r=require("express");var i=e.n(r);const c=require("react-router-dom"),s=require("react/jsx-runtime"),o=function(){return(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(c.Link,{to:"/red",children:"Red"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c.Link,{to:"/blue",children:"Blue"})})]})},a=function(){return(0,s.jsx)("div",{className:"Red",children:"Red"})},l=function(){return(0,s.jsx)(a,{})},u=function(){return(0,s.jsx)("div",{className:"Blue",children:"Blue"})},d=function(){return(0,s.jsx)(u,{})},h=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{}),(0,s.jsx)("hr",{}),(0,s.jsx)(c.Route,{path:"/red",component:l}),(0,s.jsx)(c.Route,{path:"/blue",component:d})]})},f=require("path");var p=e.n(f);const j=require("fs");var m=e.n(j),x=JSON.parse(m().readFileSync(p().resolve("./build/asset-manifest.json"),"utf8")),v=Object.keys(x.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(x.files[e],'"><\/script>')})).join(""),b=i()(),y=i().static(p().resolve("./build"),{index:!1});b.use(y),b.use((function(e,n,r){var i=(0,s.jsx)(c.StaticRouter,{location:e.url,context:{},children:(0,s.jsx)(h,{})}),o=t().renderToString(i);n.send(function(e){return'<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(x.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,'\n      </div>\n      <script src="').concat(x.files["runtime~main.js"],'"><\/script>\n      ').concat(v,'\n      <script src="').concat(x.files["main.js"],'"><\/script>\n    </body>\n  </html>\n  ')}(o))})),b.listen(5e3,(function(){console.log("localhost 5000")}))})();