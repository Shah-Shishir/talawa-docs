"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3142],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"data-management-compression",title:"Data Compression"},i=void 0,s={unversionedId:"features/data-management/data-management-compression",id:"features/data-management/data-management-compression",title:"Data Compression",description:"This section is a work in progress.",source:"@site/docs/features/data-management/data-compression.md",sourceDirName:"features/data-management",slug:"/features/data-management/data-management-compression",permalink:"/docs/features/data-management/data-management-compression",draft:!1,tags:[],version:"current",frontMatter:{id:"data-management-compression",title:"Data Compression"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/data-management/data-management-overview"},next:{title:"Data Retention",permalink:"/docs/features/data-management/data-management-retention"}},l={},p=[{value:"Code: DAT-002",id:"code-dat-002",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"code-dat-002"},"Code: DAT-002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authored by",(0,n.kt)("strong",{parentName:"em"}," ",(0,n.kt)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"March 31,2021")," ")),(0,n.kt)("p",null,"This feature aims to ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"enforce a data compression strategy")," ")," by ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"}," detailing how and when data is compressed for storage in the database ")," "),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"There is currently no data compression strategy for data stored in the database")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"A data compression policy is required for each type of artefact that is stored in the database in order to greater optimize the retrieval of data from the database.")))),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Specify and enforce data compression for data being stored in teh database:")," This should improve interaction with the app as it reduces the time to store and retrieve data from the database. ")),(0,n.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,n.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Allowing an administrator to select the type of encoding algorithm to be used to compress and store app data:")," for example z standard, gzip ")),(0,n.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,n.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Administrator wants to:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Specify size of media files that can be uploaded to the newsfeed")," "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Specify the length of audio or video tracks that can be uploaded to the newsfeed"))))),(0,n.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,n.kt)("h3",{id:"user-experience"},"User Experience"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Some preset encoding algorithm should be implemented for audio and video posts uploaded to the newsfeed."),(0,n.kt)("li",{parentName:"ol"},"This algorithm should compress the data being stored before it is sent to the database and decompress it whenever it is retrieved.   "),(0,n.kt)("li",{parentName:"ol"},"When a user tries to upload media files to an event's newsfeed that is larger/longer than the size/length limit specified by the administrator they should be presented with an error notifying them of the size limit"),(0,n.kt)("li",{parentName:"ol"},"When audio or video is being displayed there should be an automatic adjustment of frame rate to enable minimum buffering of the media")),(0,n.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h3",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature"),(0,n.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,n.kt)("p",null,"TBD"))}m.isMDXComponent=!0}}]);