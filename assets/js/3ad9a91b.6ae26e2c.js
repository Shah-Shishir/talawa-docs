"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3675],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6524:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"functionality",title:"Functionality"},s=void 0,p={unversionedId:"talawa-api/functionality",id:"talawa-api/functionality",title:"Functionality",description:"### Talawa Api offers various functionalities which will ultimately help in endorsing the relationship between the members of an organization.",source:"@site/docs/talawa-api/functionality.md",sourceDirName:"talawa-api",slug:"/talawa-api/functionality",permalink:"/talawa-docs/docs/talawa-api/functionality",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/functionality.md",tags:[],version:"current",frontMatter:{id:"functionality",title:"Functionality"},sidebar:"someSidebar",previous:{title:"Authentication",permalink:"/talawa-docs/docs/talawa-api/authentication"},next:{title:"Expectations",permalink:"/talawa-docs/docs/talawa-api/expectations"}},c={},u=[{value:"<em>The list of functionalities offered by Talawa Api are as follows</em>",id:"the-list-of-functionalities-offered-by-talawa-api-are-as-follows",level:3},{value:"Post",id:"post",level:3},{value:"Comment",id:"comment",level:3},{value:"Task",id:"task",level:3},{value:"Message",id:"message",level:3},{value:"DirectChat",id:"directchat",level:3},{value:"DirectChatMessage",id:"directchatmessage",level:3},{value:"Event",id:"event",level:3},{value:"EventProject",id:"eventproject",level:3},{value:"Group",id:"group",level:3},{value:"GroupChat",id:"groupchat",level:3},{value:"GroupChatMessage",id:"groupchatmessage",level:3},{value:"ImageHash",id:"imagehash",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("b",null),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"talawa-api-offers-various-functionalities-which-will-ultimately-help-in-endorsing-the-relationship-between-the-members-of-an-organization"},"Talawa Api offers various functionalities which will ultimately help in endorsing the relationship between the members of an organization.")),(0,i.kt)("b",null),(0,i.kt)("h3",{id:"the-list-of-functionalities-offered-by-talawa-api-are-as-follows"},(0,i.kt)("em",{parentName:"h3"},"The list of functionalities offered by Talawa Api are as follows")),(0,i.kt)("h3",{id:"post"},"Post"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Post Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"text: string\ntitle: string\ncreatedAt: string\nimageUrl: string\nvideoUrl: string\ncreator: User\norganization: Organization\nlikedBy: [User]\ncomments: [Comment]\n")),(0,i.kt)("h3",{id:"comment"},"Comment"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Comment Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"text : string\ncreatedAt: string\ncreator: User\npost: string\nlikedBy: User\nlikeCount: string\n")),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Task Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title: string\ndescription: string\ncreatedAt: string\ndeadline: string\nevent: Event\ncreator: User\n")),(0,i.kt)("h3",{id:"message"},"Message"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Message Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"text: string\nimageUrl: string\nvideoUrl: string\ncreatedAt: string\ncreator: User\ngroup: Group\n")),(0,i.kt)("h3",{id:"directchat"},"DirectChat"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"DirectChat Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"users: [User]\nmessages: [DirectChatMessage]\ncreator: User\norganization: Organization\n")),(0,i.kt)("h3",{id:"directchatmessage"},"DirectChatMessage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"DirectChatMessage Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"directChatMessageBelongsTo: DirectChat\nsender: User\nreceiver: User\ncreatedAt: string\nmessageContent: string\n")),(0,i.kt)("h3",{id:"event"},"Event"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Event Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title: string\ndescription: string\nattendees: string\nlocation: string\nrecurring: string\nallDay: string\nstartDate: string\nendDate: string\nstartTime: string\nendTime: string\nrecurrence: string\nisPublic: boolean\nisRegisterable: boolean\ncreator: User\nregistrants: [User]\nadmins: [User]\norganization: Organization\ntasks: [Task]\n")),(0,i.kt)("h3",{id:"eventproject"},"EventProject"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Event Project Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title: string\ndescription: string\ncreatedAt: string\nevent: Event\ncreator: User\ntasks: [Task]\n")),(0,i.kt)("h3",{id:"group"},"Group"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Group Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title: string\ndescription: string\ncreatedAt: string\norganization: Organization\nadmins: [User]\n")),(0,i.kt)("h3",{id:"groupchat"},"GroupChat"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"GroupChat Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title: string\nusers: [User]\nmessages: [GroupChatMessage]\ncreator: User\norganization: Organization\n")),(0,i.kt)("h3",{id:"groupchatmessage"},"GroupChatMessage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"GroupChatMessage Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"groupChatMessageBelongsTo: GroupChat\nsender: User\ncreatedAt: string\nmessageContent: string\n")),(0,i.kt)("h3",{id:"imagehash"},"ImageHash"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ImageHash Model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hashValue: string\nfileName: string\nnumberOfUses: string\n")))}m.isMDXComponent=!0}}]);