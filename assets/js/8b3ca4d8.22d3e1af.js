"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7513],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7803:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return p}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={id:"data-management-overview",title:"Overview"},s=void 0,c={unversionedId:"features/data-management/data-management-overview",id:"features/data-management/data-management-overview",title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/data-management/overview.md",sourceDirName:"features/data-management",slug:"/features/data-management/data-management-overview",permalink:"/talawa-docs/docs/features/data-management/data-management-overview",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/data-management/overview.md",tags:[],version:"current",frontMatter:{id:"data-management-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Follow Tag Support",permalink:"/talawa-docs/docs/features/notifications/follow-tag-support"},next:{title:"Data Compression",permalink:"/talawa-docs/docs/features/data-management/data-management-compression"}},d={},u=[{value:"Overall Guidance",id:"overall-guidance",level:2}],m={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section is a work in progress."))),(0,o.kt)("h2",{id:"overall-guidance"},"Overall Guidance"),(0,o.kt)("p",null,"These relate to how data is managed by the app. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each organisation should create a new database."),(0,o.kt)("li",{parentName:"ol"},"The ability should exist from the admin portal to specify",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The duration that objects and data are retained in the database"),(0,o.kt)("li",{parentName:"ol"},"The type of data or objects to be retained/ purged based on the age criteria"),(0,o.kt)("li",{parentName:"ol"},"Limit the size and duration of audio/ video files uploaded to the newsfeed"))),(0,o.kt)("li",{parentName:"ol"},"There should be a preset encoding algorithm for audio and video")))}p.isMDXComponent=!0}}]);