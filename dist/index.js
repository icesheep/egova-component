!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-simple-component-boilerplate"]=t(require("react")):e["react-simple-component-boilerplate"]=t(e.React)}(window,function(e){return function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}},function(e,t,a){var l=a(7),n=a(8),r=a(9);e.exports=function(e,t){return l(e)||n(e,t)||r()}},function(t,a){t.exports=e},function(e,t,a){"use strict";var l=a(1),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2)),u=l(a(3));a(12);var i=function(e){var t=(0,u.useState)(e.currentPage||1),a=(0,r.default)(t,2),l=a[0],n=a[1],i=(0,u.useState)(e.currentPage||""),c=(0,r.default)(i,2),o=c[0],d=c[1],f=(0,u.useState)(e.totalPage||1),s=(0,r.default)(f,2),m=s[0],v=s[1],h=(0,u.useState)(e.totalRecord||0),p=(0,r.default)(h,2),g=p[0],b=p[1];function E(t){t>=1&&t<=m&&e.onChange&&e.onChange(t)}function y(){l-1>=1&&E(l-1)}function N(){l+1<=m&&E(l+1)}function x(){E(Math.max(1,l-5))}function w(){E(Math.min(m,l+5))}function P(e){13===e.keyCode&&E(e.target.value)}function S(e){d(e.target.value)}return(0,u.useEffect)(function(){n(e.currentPage),d(e.currentPage),v(e.totalPage||0),b(e.totalRecord)},[e.currentPage,e.numPerPage,e.totalPage,e.totalRecord]),u.default.createElement("div",{className:"eg-pagination"},u.default.createElement("nav",{"aria-label":"Page navigation"},u.default.createElement("ul",{className:"pagination"},function(){var e=[];if(0===m)return u.default.createElement("li",{className:"auto",title:"暂无数据!"},"暂无数据!");if(m<=9)for(var t=1;t<=m;t++)e.push(u.default.createElement("li",{className:l===t?"active":"",onClick:E.bind(this,t)},t));else{var a=u.default.createElement("li",{onClick:x,title:"向前5页"},"•••"),n=u.default.createElement("li",{onClick:w,title:"向后5页"},"•••"),r=u.default.createElement("li",{onClick:E.bind(this,m),title:m},m),i=u.default.createElement("li",{onClick:E.bind(this,1),title:1},"1"),c=Math.max(1,l-2),d=Math.min(l+2,m);l-1<=2&&(d=5),m-l<=2&&(c=m-4);for(var f=c;f<=d;f++){var s=l===f;e.push(u.default.createElement("li",{onClick:E.bind(this,f),title:f,className:s?"active":""},f))}l-1>=4&&e.unshift(a),m-l>=4&&e.push(n),1!==c&&e.unshift(i),d!==m&&e.push(r)}return e.unshift(u.default.createElement("li",{className:"auto",title:"上一页",onClick:y},"上一页")),e.push(u.default.createElement("li",{className:"auto",title:"下一页",onClick:N},"下一页")),e.push(u.default.createElement("li",{className:"auto",title:"跳至"},"跳至",u.default.createElement("input",{onKeyUp:P,onChange:S,value:o}),"页")),g>0&&e.push(u.default.createElement("li",{className:"auto",title:g},"共",g,"条")),e}())))};t.default=i},function(e,t,a){"use strict";var l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(6)),r=l(a(11)),u=l(a(4)),i=l(a(14)),c=(n.default,r.default,u.default,i.default,{Tab:n.default,Table:r.default,Pagination:u.default,Modal:i.default,Test:function(){console.log("object,22222222222!!!!!!!!!!")}});t.default=c},function(e,t,a){"use strict";var l=a(1),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2)),u=l(a(3));a(10);var i=function(e){var t=(0,u.useState)(e.tabIndex),a=(0,r.default)(t,2),l=a[0],n=a[1],i=(0,u.useState)(e.children),c=(0,r.default)(i,2),o=c[0],d=c[1];return(0,u.useEffect)(function(){n(e.tabIndex),d(e.children)},[e.children,e.tabIndex]),u.default.createElement("div",{className:"eg-tab"},u.default.createElement("div",{className:"wp-tab"},o.length>0&&o.map(function(t){return u.default.createElement("div",{className:"wp-tab-nav ".concat(t.key===l?"active":""),onClick:function(){e.onChange(t)}},t.props.name)})),u.default.createElement("div",{className:"wp-tab-content"},o.filter(function(e){return e.key===l})))};t.default=i},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var a=[],l=!0,n=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(l=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(n)throw r}}return a}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,a){},function(e,t,a){"use strict";var l=a(1),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2)),u=l(a(3)),i=n(a(4));a(13);var c=function(e){var t=(0,u.useState)(e.columns),a=(0,r.default)(t,2),l=a[0],n=a[1],c=(0,u.useState)(e.data),o=(0,r.default)(c,2),d=o[0],f=o[1],s=(0,u.useState)(e.height),m=(0,r.default)(s,1)[0],v=(0,u.useState)(e.pagination),h=(0,r.default)(v,2),p=h[0],g=h[1],b=(0,u.useState)(""),E=(0,r.default)(b,2),y=E[0],N=E[1],x=(0,u.useState)(!1),w=(0,r.default)(x,2),P=w[0],S=w[1];return(0,u.useEffect)(function(){n(e.columns),S(function(e){for(var t=0;t<e.length;t++)if(e[t].children)return!0;return!1}(e.columns||[])),f(e.data),g(e.pagination)},[e.pagination,e.data,e.columns]),u.default.createElement("div",{className:"eg-table"},u.default.createElement("div",{className:"table"},u.default.createElement("div",{className:"thead"},u.default.createElement("div",{className:"tr rec-head"},l&&l.length>0&&l.map(function(e){return e.children?u.default.createElement("div",{className:"th-child",style:{flex:e.width||1}},u.default.createElement("div",{className:"th-child1",style:{flex:e.width||1}},e.name),u.default.createElement("div",{className:"th-child1",style:{flex:e.width||1}},e.children.map(function(e){return u.default.createElement("div",{className:"th-child2",style:{flex:e.width||1}},e.name)}))):u.default.createElement("div",{className:"th",style:{flex:e.width||1,height:P?"0.8rem":"0.4rem",lineHeight:P?"0.8rem":"0.4rem"}},e.name)}))),u.default.createElement("div",{className:"tbody",style:{height:m}},d&&d.length>0&&d.map(function(t,a){return u.default.createElement("div",{className:"tr rec-row",style:{cursor:e.rowSelelect?"pointer":"auto",backgroundColor:y==t?"#3b75bd":null},onClick:function(){e.rowSelelect&&(e.rowSelelect(t),N(t))}},l.map(function(e){return e.children?u.default.createElement("div",{style:{flex:e.width||1,display:"flex"}},e.children.map(function(e){return u.default.createElement("div",{className:"td",title:!e.hideTitle&&t[e.id],style:{flex:e.width||1}},e.formatter?e.formatter(t[e.id],t,a):t[e.id])})):u.default.createElement("div",{className:"td",title:!e.hideTitle&&t[e.id],style:{flex:e.width||1}},e.formatter?e.formatter(t[e.id],t,a):t[e.id])}))}))),p?u.default.createElement(i.default,p):null)};t.default=c},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";var l=a(1),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2)),u=l(a(3));a(15);var i=function(e){var t=(0,u.useState)(e.visible),a=(0,r.default)(t,2),l=a[0],n=a[1],i=(0,u.useState)(e.title),c=(0,r.default)(i,1)[0],o=(0,u.useState)(e.width||"8rem"),d=(0,r.default)(o,1)[0],f=(0,u.useState)(e.height||"6rem"),s=(0,r.default)(f,1)[0];return(0,u.useEffect)(function(){n(e.visible)},[e.visible]),u.default.createElement("div",null,l?u.default.createElement("div",{className:"eg-modal"},u.default.createElement("div",{className:"eg-mask"}),u.default.createElement("div",{className:"eg-document"},u.default.createElement("div",{className:"eg-page"},u.default.createElement("div",{className:"close-btn",onClick:e.onClose},"×"),u.default.createElement("div",{className:"modal-title"},c),u.default.createElement("div",{className:"modal-content",style:{width:d,height:s}},e.children)))):null)};i.info=function(e){return u.default.createElement("div",null,u.default.createElement("div",{className:"eg-modal"},u.default.createElement("div",{className:"eg-mask"}),u.default.createElement("div",{className:"eg-document"},u.default.createElement("div",{className:"eg-page"},u.default.createElement("div",{className:"close-btn",onClick:e.onClose},"×"),u.default.createElement("div",{className:"modal-title"},e.title),u.default.createElement("div",{className:"modal-content",style:{width:e.width||"8rem",height:e.height||"6rem"}},e.children)))))};var c=i;t.default=c},function(e,t,a){}]).default});