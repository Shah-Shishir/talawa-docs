"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],l={id:"plugins-billing",title:"Billing"},s=void 0,u={unversionedId:"features/plugins/plugins-billing",id:"features/plugins/plugins-billing",title:"Billing",description:"The billing plugin should live as a standalone application regularly consume appropriate data from the application in order to make appropriate decisions of how the access the organization becomes limited once billing requirements have not been met. The plugin will then instruct the application to limit its functionallity until those billing requirements have been met.",source:"@site/docs/features/plugins/billing.md",sourceDirName:"features/plugins",slug:"/features/plugins/plugins-billing",permalink:"/talawa-docs/docs/features/plugins/plugins-billing",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/plugins/billing.md",tags:[],version:"current",frontMatter:{id:"plugins-billing",title:"Billing"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/talawa-docs/docs/features/plugins/plugins-overview"},next:{title:"Overview",permalink:"/talawa-docs/docs/features/misc/misc-overview"}},c={},p=[{value:"Frontend Requirements",id:"frontend-requirements",level:2},{value:"Backend Requirements",id:"backend-requirements",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The billing plugin should live as a standalone application regularly consume appropriate data from the application in order to make appropriate decisions of how the access the organization becomes limited once billing requirements have not been met. The plugin will then instruct the application to limit its functionallity until those billing requirements have been met."),(0,a.kt)("h2",{id:"frontend-requirements"},"Frontend Requirements"),(0,a.kt)("p",null,"The admin application should provide an interface for viewing billing statistics of the integrated billing system.\nIf the customer has outstanding balances then the user interface of the application should be limited to only alow minimal use of the application."),(0,a.kt)("h2",{id:"backend-requirements"},"Backend Requirements"),(0,a.kt)("p",null,"The API should be able to provide metadata about the organisation that can be used for billing purposes. For example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Total registrations"),(0,a.kt)("li",{parentName:"ol"},"Number of concurrent users")),(0,a.kt)("p",null,"This plugin should also make api calls to the backend of the application\nExamples of what features would be affected would be:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"No new uploads"),(0,a.kt)("li",{parentName:"ol"},"No new events"),(0,a.kt)("li",{parentName:"ol"},"Newsfeed limited to messages from admins not the entire organization"),(0,a.kt)("li",{parentName:"ol"},"No new chats"),(0,a.kt)("li",{parentName:"ol"},"No new groups"),(0,a.kt)("li",{parentName:"ol"},"No additional storage for data objects")))}m.isMDXComponent=!0}}]);