(self.webpackChunkatiq_israk=self.webpackChunkatiq_israk||[]).push([[989],{6837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(3222),a=n(4911);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(a.COMMENT_COUNT_SCRIPT_ID)?b():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),a.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,i=s(e,["shortname","config","children","className"]),u=o?" ".concat(o):"";return r.default.createElement("span",l({},i,{className:"".concat(a.COMMENT_COUNT_CLASS).concat(u),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&d(t.prototype,n),o&&d(t,o),c}(r.default.Component);t.CommentCount=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},9888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(4911);function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,o,i=p(a);function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,l(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(t.prototype,n),o&&f(t,o),a}(r.default.Component);t.CommentEmbed=h,h.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},h.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},1629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(3222),a=n(4911);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(a.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),a.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(a.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),a.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:a.THREAD_ID}))}}])&&d(t.prototype,n),o&&d(t,o),c}(r.default.Component);t.DiscussionEmbed=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},7122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(3222),a=n(4911);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),a.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(a.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(a.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:a.RECOMMENDATIONS_ID}))}}])&&d(t.prototype,n),o&&d(t,o),c}(r.default.Component);t.Recommendations=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},4911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},7202:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(6837),o=n(9888),i=n(1629),a=n(7122);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,a.Recommendations},3222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),u&&e.apply(o,i)}},t.isReactElement=u,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===i(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!u(t[c]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},2617:function(e){var t={siteTitle:"Atiq Israk - Creative Web Designer",siteDescription:"Atiq Israk - Creative frontEnd web developer who loves javascript and modern web technologies.",siteTitleAlt:"Atiq Israk",siteShortName:"Atiq Israk",siteUrl:"https://atiqisrak.github.io"},n={siteLogo:"src/static/ailogo.svg",siteBanner:t.siteUrl+"/images/social-banner.png",twitter:"@anuraghazru"},r=Object.assign({},t,n,{googleAnalyticsID:"UA-237300065-1",themeColor:"#f06529",backgroundColor:"#f06529"});e.exports=r},450:function(e,t,n){"use strict";n.d(t,{p:function(){return f}});var r=n(7294),o=n(1562),i=n(3494),a=n(7606),u=n(9086),c=n(3628),l=n.n(c),s=i.default.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"sc-ja3jw0-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],(function(e){return e.theme.dark?e.theme.accentColor:e.theme.primaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.secondaryColor})),f=function(e){var t=e.date,n=e.readtime;return r.createElement("span",{style:{fontSize:13,color:"gray"}},r.createElement("span",{"aria-label":"publish date "+t},r.createElement(a.G,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",r.createElement("span",{"aria-label":n+" minutes read"},r.createElement(a.G,{color:"gray",icon:"clock"}),"  ",n,"min read"))};t.Z=function(e){var t=e.date,n=e.readtime,i=e.title,a=e.excerpt,c=e.slug,d=e.tags;return r.createElement(o.ZP,{to:c,"aria-label":i+" - read time "+n+" minutes"},r.createElement(s,null,r.createElement(f,{date:t,readtime:n}),r.createElement("h2",null,i),r.createElement("p",null,a),r.createElement("div",{style:{marginTop:20}},d.map((function(e){return r.createElement(u.CY,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+l()(e)+"/"},e)})))))}},1510:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1562),i=n(9086),a=n(8114),u=n(1597),c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l=function(){var e=(0,u.useStaticQuery)("3435786681"),t=e.allMarkdownRemark.edges[c(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[c(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}},s=function(e){var t=e.children,n=e.sharerSection,u=l(),c=u.randomSlug,s=u.randomTitle;return r.createElement(a.Z,{content:t,aside:r.createElement(r.Fragment,null,r.createElement("section",null,r.createElement("h4",null,"Random post"),r.createElement(o.ZP,{style:{fontSize:"16px"},to:c},s),r.createElement("br",null),r.createElement("br",null)),r.createElement("section",null,r.createElement("h4",null,"Tags"),r.createElement(i.ZP,null),r.createElement("br",null)),n&&n)})}},7408:function(e,t,n){"use strict";var r=n(7294),o=n(7606);t.Z=function(e){var t=e.baseSlugUrl,n=e.title,i="https://facebook.com/sharer/sharer.php?u="+t,a='http://twitter.com/share?text="'+n+'" - &url='+t,u="http://www.reddit.com/submit?url="+t+"&title="+n;return r.createElement("div",{className:"blog__social-share"},r.createElement("a",{"aria-label":"share on facebook",rel:"noopener norefferer",target:"__blank",href:i},r.createElement(o.G,{style:{fontSize:24},icon:["fab","facebook"]})),r.createElement("a",{"aria-label":"share on twitter",rel:"noopener norefferer",target:"__blank",href:a},r.createElement(o.G,{style:{fontSize:24},icon:["fab","twitter"]})),r.createElement("a",{"aria-label":"share on reddit",rel:"noopener norefferer",target:"__blank",href:u},r.createElement(o.G,{style:{fontSize:24},icon:["fab","reddit"]})))}},9086:function(e,t,n){"use strict";n.d(t,{CY:function(){return c}});var r=n(7294),o=n(3494),i=n(1597),a=n(3628),u=n.n(a),c=(0,o.default)(i.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"sc-1ppylt7-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?"#d9e0ff":"#f06529"}));t.ZP=function(){var e=(0,i.useStaticQuery)("550521386");return r.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map((function(e){return r.createElement(c,{key:e.fieldValue,to:"/blog/tags/"+u()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)})))}},8114:function(e,t,n){"use strict";var r=n(7294),o=n(3494).default.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-ujewmm-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.Z=function(e){var t=e.content,n=e.aside;return r.createElement(o,null,r.createElement("section",{className:"layout__content"},t&&t),r.createElement("section",{className:"layout__aside"},r.createElement("aside",{className:"sticky__aside"},n&&n)))}},3628:function(e){e.exports=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},4982:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(740),i=n(8159),a=n(1510),u=n(7408),c=n(7606),l=n(450),s=n(7202),f=n(2617);t.default=function(e){var t=e.data,n=e.pageContext,d=t.markdownRemark.frontmatter,p=d.title,m=d.date,y=t.markdownRemark,h=y.timeToRead,b=y.html,g=y.excerpt,w=y.id,v=f.siteUrl+n.slug,E={identifier:w,title:p,url:v},_="https://github.com/atiqisrak/atiqisrak.github.io/tree/develop/content"+n.slug+"/index.md";return r.createElement(i.Z,null,r.createElement(o.Z,{isBlogPost:!0,title:p,description:g,slug:n.slug}),r.createElement(a.Z,{sharerSection:r.createElement("div",null,r.createElement("h4",null,"Share on"),r.createElement(u.Z,{baseSlugUrl:v,title:p}),r.createElement("hr",{style:{margin:"25px 0"}}),r.createElement("a",{style:{fontSize:"16px"},"aria-label":"Edit post on github",rel:"noopener norefferer",target:"__blank",href:_},r.createElement(c.G,{style:{fontSize:18},icon:"edit"})," Edit post on GitHub"))},r.createElement(l.p,{date:m,readtime:h}),r.createElement("h1",null,p),r.createElement("article",{className:"markdown-content",dangerouslySetInnerHTML:{__html:b}}),r.createElement(s.qw,{shortname:f.disqusShortName,config:E})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0c5b9fc5287423a5e293.js.map