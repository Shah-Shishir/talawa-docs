"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"api-overview",title:"Overview"},i=void 0,l={unversionedId:"developers/talawa-api/api-overview",id:"developers/talawa-api/api-overview",title:"Overview",description:"### Talawa Api is the backend for the application talawa written in typescript. It is the base of all the functionalities offered to Users and Organizations that sign up at talawa. In upcoming sections you will get to know all the useful functions performed by the Api. Stay tuned!",source:"@site/docs/developers/talawa-api/api-overview.md",sourceDirName:"developers/talawa-api",slug:"/developers/talawa-api/api-overview",permalink:"/docs/developers/talawa-api/api-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"api-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/developers/talawa/talawa-introduction"},next:{title:"User",permalink:"/docs/developers/talawa-api/constraints/user"}},p={},s=[{value:"Technologies used",id:"technologies-used",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"talawa-api-is-the-backend-for-the-application-talawa-written-in-typescript-it-is-the-base-of-all-the-functionalities-offered-to-users-and-organizations-that-sign-up-at-talawa-in-upcoming-sections-you-will-get-to-know-all-the-useful-functions-performed-by-the-api-stay-tuned"},"Talawa Api is the backend for the application talawa written in ",(0,r.kt)("inlineCode",{parentName:"h3"},"typescript"),". It is the base of all the functionalities offered to Users and Organizations that sign up at talawa. In upcoming sections you will get to know all the useful functions performed by the Api. ",(0,r.kt)("em",{parentName:"h3"},"Stay tuned!"))),(0,r.kt)("b",null),(0,r.kt)("h2",{id:"technologies-used"},"Technologies used"),(0,r.kt)("p",null,"Following are the main technologies which are accumulated together to build a reliable api:-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Node.js"),(0,r.kt)("li",{parentName:"ol"},"Typescript"),(0,r.kt)("li",{parentName:"ol"},"GraphQL"),(0,r.kt)("li",{parentName:"ol"},"MongoDB")),(0,r.kt)("p",null,"Some prominent packages used in the project are:-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apollo-server"),(0,r.kt)("li",{parentName:"ol"},"Express.js"),(0,r.kt)("li",{parentName:"ol"},"Typescript"),(0,r.kt)("li",{parentName:"ol"},"Mongoose"),(0,r.kt)("li",{parentName:"ol"},"GraphQL Code Generator"),(0,r.kt)("li",{parentName:"ol"},"Vitest")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is the link to the other packages and libraries\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PalisadoesFoundation/talawa-api/blob/develop/package.json"},"https://github.com/PalisadoesFoundation/talawa-api/blob/develop/package.json"))))}u.isMDXComponent=!0}}]);