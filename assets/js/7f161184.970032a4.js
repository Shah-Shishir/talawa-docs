"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5932],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"message-chat",title:"In-App Chat"},l=void 0,s={unversionedId:"features/messaging-and-chat/message-chat",id:"features/messaging-and-chat/message-chat",title:"In-App Chat",description:"This section is a work in progress.",source:"@site/docs/features/messaging-and-chat/chat.md",sourceDirName:"features/messaging-and-chat",slug:"/features/messaging-and-chat/message-chat",permalink:"/docs/features/messaging-and-chat/message-chat",draft:!1,tags:[],version:"current",frontMatter:{id:"message-chat",title:"In-App Chat"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/messaging-and-chat/messaging-and-chat-overview"},next:{title:"In-App Messaging",permalink:"/docs/features/messaging-and-chat/message-messaging"}},i={},p=[{value:"Code: MSG-001",id:"code-msg-001",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:2},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"code-msg-001"},"Code: MSG-001"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authored by",(0,n.kt)("strong",{parentName:"em"}," ",(0,n.kt)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"March 14,2021")," ")),(0,n.kt)("p",null,"This feature aims to ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"enhance in app communication")," ")," by ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"allowing users to chat instantly within the app")," "),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Start a chat:")," Any user should be able to start a direct one-on one chat with another member of the organization or a group chat.")),(0,n.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,n.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"})),(0,n.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,n.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,n.kt)("h3",{id:"user-experience"},"User Experience"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the member listing screen any user should be presented with additional options when they click on a member. ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Options should include ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"chat with the selected member or send a message."))))),(0,n.kt)("li",{parentName:"ol"},"From the users home screen and from the view organization detail page any user should be presented with the option to start a group chat",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"This then presents the list of members in the organization for the user to add members to the chat",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Once the user selects all the members to chat with "),(0,n.kt)("li",{parentName:"ol"},"The user is prompted to enter details of the group such as group name and display picture")))))),(0,n.kt)("h2",{id:"important-details-to-capture"},"Important Details To Capture"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h3",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"NA"),(0,n.kt)("h3",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,n.kt)("p",null,"TBD"))}u.isMDXComponent=!0}}]);