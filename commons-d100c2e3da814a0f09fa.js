(self.webpackChunkquestionifotografiche=self.webpackChunkquestionifotografiche||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(!i(e[u],o[u]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],o.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],o[l[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.r(t),n.d(t,{Helmet:function(){return he}});var r,a,i,o,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",w="href",O="http-equiv",C="innerHTML",A="itemprop",S="name",k="property",x="rel",j="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",_="encodeSpecialCharacters",I="onChangeClientState",D="titleTemplate",R=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),H=[b.NOSCRIPT,b.SCRIPT,b.STYLE],F="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,b.TITLE),n=J(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},Z=function(e){return J(e,I)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(b.BODY,r),ue(b.HTML,a),ce(f,d);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,i),metaTags:le(b.META,o),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(b.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==o.join(",")&&n.setAttribute(F,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,a=fe(n,r),[p.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,a,r),link:de(b.LINK,i,r),meta:de(b.META,o,r),noscript:de(b.NOSCRIPT,c,r),script:de(b.SCRIPT,u,r),style:de(b.STYLE,l,r),title:de(b.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:Q([w,N],e),bodyAttributes:V(y,e),defer:J(e,M),encode:J(e,_),htmlAttributes:V(g,e),linkTags:$(b.LINK,[x,w],e),metaTags:$(b.META,[S,E,O,k,A],e),noscriptTags:$(b.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:$(b.SCRIPT,[j,C],e),styleTags:$(b.STYLE,[T],e),title:G(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return B(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case b.TITLE:return U({},a,((t={})[r.type]=o,t.titleAttributes=U({},i),t));case b.BODY:return U({},a,{bodyAttributes:U({},i)});case b.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind,t.default=he},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},9438:function(e,t,n){"use strict";var r=n(8580);t.__esModule=!0,t.Helmet=void 0;var a=r(n(3246)),i=r(n(7294)),o=n(5414),c=n(3396);t.Helmet=function(e){var t=e.children,n=(0,a.default)(e,["children"]),r=(0,c.useI18next)(),u=r.languages,l=r.language,s=r.originalPath,f=r.defaultLanguage,d=r.siteUrl,p=void 0===d?"":d,m=function(e){var t=p+(e===f?"":"/"+e)+s;return t.endsWith("/")?t:t+"/"};return i.default.createElement(o.Helmet,n,i.default.createElement("html",{lang:l}),i.default.createElement("link",{rel:"canonical",href:m(l)}),u.map((function(e){return i.default.createElement("link",{rel:"alternate",key:e,href:m(e),hrefLang:e})})),i.default.createElement("link",{rel:"alternate",href:m(f),hrefLang:"x-default"}),t)}},439:function(e,t,n){"use strict";var r=n(1022),a=n(8580);t.__esModule=!0,t.Link=void 0;var i=a(n(4362)),o=a(n(3246)),c=r(n(7294)),u=n(9604),l=n(5444),s=n(8742);t.Link=function(e){var t=e.language,n=e.to,r=e.onClick,a=(0,o.default)(e,["language","to","onClick"]),f=(0,c.useContext)(u.I18nextContext),d=t||f.language,p=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(d)+n;return c.default.createElement(l.Link,(0,i.default)({},a,{to:p,hrefLang:d,onClick:function(e){t&&localStorage.setItem(s.LANGUAGE_KEY,t),r&&r(e)}}))}},6535:function(e,t,n){"use strict";t.__esModule=!0;var r=n(3999);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(9604);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var i=n(3396);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var o=n(439);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var c=n(9438);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},3396:function(e,t,n){"use strict";var r=n(8580);t.__esModule=!0,t.useI18next=void 0;var a=r(n(4362)),i=n(3999),o=n(7294),c=n(5444),u=n(9604),l=n(8742);t.useI18next=function(e,t){var n=(0,i.useTranslation)(e,t),r=n.i18n,s=n.t,f=n.ready,d=(0,o.useContext)(u.I18nextContext),p=d.routed,m=d.defaultLanguage,h=d.generateDefaultLanguagePage,y=function(e){return h||e!==m?"/"+e:""};return(0,a.default)({},d,{i18n:r,t:s,ready:f,navigate:function(e,t){var n=y(d.language),r=p?""+n+e:""+e;return(0,c.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+y(e)+(t||function(e){if(!p)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(l.LANGUAGE_KEY,e),(0,c.navigate)(r,n)}})}},5093:function(e,t,n){e.exports=n(6535)},8231:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(2265),a=n(7294),i=n(5444),o=n(5414),c=n(6802),u=n(5093);function l(e){var t=(0,u.useI18next)(),n=t.languages,r=t.originalPath,i=t.language,o=(0,u.useTranslation)().t;e.siteTitle;return a.createElement("header",{className:"container-fluid position-sticky sticky-top bg-white"},a.createElement("nav",{className:"navbar navbar-expand px-0 ",id:"site-nav"},a.createElement("div",{className:"container-fluid px-0 text-uppercase"},a.createElement("div",{className:"collapse navbar-collapse justify-content-between"},a.createElement("div",{className:"navbar-nav px-0"},a.createElement("span",{className:"nav-item"},a.createElement(u.Link,{activeClassName:"text-decoration-line-through",className:"nav-link",to:"/"},"Home")),a.createElement("span",{className:"nav-item"},a.createElement(u.Link,{activeClassName:"text-decoration-line-through",className:"nav-link",to:"/alfabeto"},o("26 foto")))),a.createElement("div",{className:"navbar-nav px-0"},a.createElement("span",{className:"nav-item"},a.createElement(u.Link,{activeClassName:"text-decoration-line-through",className:"nav-link",to:"/credits"},o("Crediti"))),a.createElement("span",{className:"nav-item"},a.createElement("span",{className:"nav-link"},n.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement(u.Link,{key:e,language:e,className:i!==e&&"text-black-50",to:r},e),!t&&"/")})))))))))}l.defaultProps={siteTitle:""};var s=l,f=["children","hideFooter"],d=["polidesign"];var p=function(e){var t,n=e.children,u=e.hideFooter,l=(0,r.Z)(e,f),p=(0,a.useState)(),m=p[0],h=p[1];(0,a.useEffect)((function(){return h(!0)}),[]);var y=(0,i.useStaticQuery)("2789605984"),g=y.polidesign,v=(0,r.Z)(y,d),b=[];return l.containerFluid&&b.push("container-fluid"),l.container&&b.push("container"),a.createElement(a.Fragment,null,a.createElement(o.Helmet,null,a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"})),a.createElement(s,{siteTitle:(null===(t=v.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("div",{className:m?"rendered":void 0},a.createElement("main",{className:b.length&&b.join(" ")},n),!u&&a.createElement(a.Fragment,null,a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12 border border-dark border-start-0 border-end-0 py-2 my-3"}))),a.createElement("footer",{style:{marginTop:"2rem"},className:"container small"},a.createElement("div",{className:"row row-cols-1 row-cols-md-2 gy-3 row-cols-xl-4"},a.createElement("div",null,a.createElement(c.G,{className:"w-75",alt:"Logo del Politecnico di Milano - Scuola del Design",image:(0,c.d)(g)})),a.createElement("div",null,a.createElement("h6",{className:"heading-style-regular"},"© 2021"),a.createElement("p",null,"Corso di Laurea Magistrale",a.createElement("br",null),"Design della Comunicazione",a.createElement("br",null),"Cultura dell’Immagine Digitale")),a.createElement("div",null,a.createElement("h6",{className:"heading-style-regular"},"Social"),a.createElement("ul",{className:"list-unstyled"},a.createElement("li",null,a.createElement("a",{href:"instagram.com"},"@questionifotografiche")),a.createElement("li",null,a.createElement("a",{href:"instagram.com"},"@DDC")))),a.createElement("div",null,a.createElement("h6",{className:"heading-style-regular"},"Copyright"),a.createElement("p",null,"Immagini soggette alle tutele di legge in materia di protezione del diritto d’autore e di diritti connessi al suo esercizio."))),{}.ENABLE_GATSBY_REFRESH_ENDPOINT&&a.createElement("button",{type:"button",onClick:function(){fetch("/__refresh",{method:"POST"})}},"Refresh")))))}},6179:function(e,t,n){"use strict";var r=n(7294),a=n(5414),i=n(5444);function o(e){var t,n,o=e.description,c=e.lang,u=e.meta,l=e.title,s=(0,i.useStaticQuery)("63159454").site,f=o||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(a.Helmet,{htmlAttributes:{lang:c},title:l,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:l},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:f}].concat(u)})}o.defaultProps={lang:"it",meta:[],description:""},t.Z=o},2265:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},1022:function(e,t,n){var r=n(5576).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=o?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(i,c,u):i[c]=e[c]}return i.default=e,n&&n.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=commons-d100c2e3da814a0f09fa.js.map