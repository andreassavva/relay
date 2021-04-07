(window.webpackJsonp=window.webpackJsonp||[]).push([[11,47,69,128],{323:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},330:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(22),r=n(331);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},331:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(323)),o={},c={unversionedId:"api-reference/types/CacheConfig",id:"version-v11.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",slug:"/api-reference/types/CacheConfig",permalink:"/docs/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/CacheConfig.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587},l=[],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-cacheconfig"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"CacheConfig")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object with the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"force"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"poll"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",Object(i.b)("inlineCode",{parentName:"li"},"setTimeout"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"liveConfigId"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"transactionId"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}b.isMDXComponent=!0},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(323)),o=n(330),c={},l={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v11.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587},p=[],b={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-selectorstoreupdater"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A function with signature ",Object(i.b)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),Object(i.b)("li",{parentName:"ul"},"This interface allows you to ",Object(i.b)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",Object(i.b)("em",{parentName:"li"},"create entirely new records"),", or ",Object(i.b)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",Object(i.b)("a",{href:Object(o.a)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}s.isMDXComponent=!0},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(323)),o={},c={unversionedId:"api-reference/types/UploadableMap",id:"version-v11.0.0/api-reference/types/UploadableMap",isDocsHomePage:!1,title:"UploadableMap",description:"Type UploadableMap",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/UploadableMap.md",slug:"/api-reference/types/UploadableMap",permalink:"/docs/api-reference/types/UploadableMap",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/UploadableMap.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587},l=[],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-uploadablemap"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"UploadableMap")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object whose values are ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/File"}),Object(i.b)("inlineCode",{parentName:"a"},"File"))," or ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"}),Object(i.b)("inlineCode",{parentName:"a"},"Blob")),".")))}b.isMDXComponent=!0},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(323)),o=n(62),c=n(63),l=n(68),p={},b={unversionedId:"api-reference/types/MutationConfig",id:"version-v11.0.0/api-reference/types/MutationConfig",isDocsHomePage:!1,title:"MutationConfig",description:"Type MutationConfig",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/MutationConfig.md",slug:"/api-reference/types/MutationConfig",permalink:"/docs/api-reference/types/MutationConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/MutationConfig.md",version:"v11.0.0",lastUpdatedBy:"Joe Savona",lastUpdatedAt:1617823587},s=[],u={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"type-mutationconfigtmutationconfig-mutationparameters"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"MutationConfig<TMutationConfig: MutationParameters>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object with the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheConfig"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#type-cacheconfig"}),Object(i.b)("inlineCode",{parentName:"a"},"CacheConfig"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mutation"),": ",Object(i.b)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A mutation specified using a GraphQL literal"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onError"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"(Error) => void"),". An optional callback executed if the mutation results in an error."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onCompleted"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"($ElementType<TMutationConfig, 'response'>) => void"),". An optional callback that is executed when the mutation completes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onUnsubscribe"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the mutation the mutation is unsubscribed, which occurs when the returned ",Object(i.b)("inlineCode",{parentName:"li"},"Disposable")," is disposed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optimisticResponse"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," An object whose type matches the raw response type of the mutation. Make sure you decorate your mutation with ",Object(i.b)("inlineCode",{parentName:"li"},"@raw_response_type")," if you are using this field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optimisticUpdater"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#type-selectorstoreupdater"}),Object(i.b)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when ",Object(i.b)("inlineCode",{parentName:"li"},"commitMutation")," is called, after the ",Object(i.b)("inlineCode",{parentName:"li"},"optimisticResponse")," has been normalized into the store."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updater"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#type-selectorstoreupdater"}),Object(i.b)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when a payload is received, after the payload has been written into the store."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"uploadables"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#type-uploadablemap"}),Object(i.b)("inlineCode",{parentName:"a"},"UploadableMap")),". An optional uploadable map."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": ",Object(i.b)("inlineCode",{parentName:"li"},"$ElementType<TMutationConfig, 'variables'>"),". The variables to pass to the mutation.")))),Object(i.b)(o.default,{mdxType:"CacheConfig"}),Object(i.b)(c.default,{mdxType:"SelectorStoreUpdater"}),Object(i.b)(l.default,{mdxType:"UploadableMap"}),Object(i.b)("h4",{id:"type-mutationparameters"},"Type ",Object(i.b)("inlineCode",{parentName:"h4"},"MutationParameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An object with the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"response"),": An object"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": An object"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rawResponse"),": An optional object")))))}d.isMDXComponent=!0}}]);