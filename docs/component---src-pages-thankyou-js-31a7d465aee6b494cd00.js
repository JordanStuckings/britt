(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{178:function(e,t,a){"use strict";a.r(t);var n=a(180),r=a(0),l=a.n(r),c=a(186),i=a(184);t.default=function(){return l.a.createElement(c.a,null,l.a.createElement(i.a,{title:"Thank You"}),l.a.createElement("p",null," Thank you. Britt Clennett will get in contact with you soon"),l.a.createElement(n.a,{to:"/"},"Return to Home page"))}},180:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=a(59),o=a.n(i);a.d(t,"a",function(){return o.a});a(181);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||l,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},181:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett"}}}}},183:function(e,t,a){"use strict";a.r(t);a(21),a(14),a(13),a(7),a(20);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=a(85);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},184:function(e,t,a){"use strict";var n=a(185),r=a(0),l=a.n(r),c=a(12),i=a.n(c),o=a(190),s=a.n(o),u=a(180);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return l.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans+condensed:300|Raleway&display=swap",rel:"stylesheet"}))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Britt Clennett",description:"See my latest articles, stories and showreels",author:"Jordan"}}}}},186:function(e,t,a){"use strict";var n=a(182),r=a(0),l=a.n(r),c=a(12),i=a.n(c),o=a(180),s=(a(187),function(){var e=function(){return document.querySelector(".toggle-nav").click()};return l.a.createElement("div",{className:"navigation"},l.a.createElement("input",{className:"toggle-nav",type:"checkbox",name:""}),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e,to:"/#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e,to:"/contact"},"Contact"))))}),u=(a(188),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("div",{className:"column"},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"item"},l.a.createElement(o.a,{to:"/"},"Home")),l.a.createElement("li",{className:"item"},l.a.createElement(o.a,{to:"/portfolio"},"Portfolio")),l.a.createElement("li",{className:"item"},l.a.createElement(o.a,{to:"/contact"},"Contact")))),l.a.createElement("div",{className:"column"},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"item"},l.a.createElement("svg",{className:"icon",viewBox:"0 0 120 55",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M118.9,13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7,0,60.7,0,60.7,0s-38,0-47.5,2.5C8.1,3.9,3.9,8.1,2.5,13.3\nC0,22.8,0,42.5,0,42.5s0,19.8,2.5,29.2c1.4,5.2,5.5,9.3,10.7,10.7C22.8,85,60.7,85,60.7,85s38,0,47.5-2.5\nc5.2-1.4,9.3-5.5,10.7-10.7c2.5-9.5,2.5-29.2,2.5-29.2S121.5,22.8,118.9,13.3z",fill:"currentColor"}),l.a.createElement("polygon",{points:"48.6,60.7 80.2,42.5 48.6,24.3",fill:"white"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCKUYXHsxEe2WiE1Ns-AHqpg"},"YouTube")),l.a.createElement("li",{className:"item"},l.a.createElement("svg",{className:"icon",viewBox:"328 355 335 276",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16"},l.a.createElement("path",{d:"M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z",fill:"currentColor"})),l.a.createElement("a",{href:"https://twitter.com/brittclennett"},"Twitter"))))))}),m=(a(189),function(e){var t=e.children;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("div",{style:{"min-height":"80vh"}},t),l.a.createElement(u,null))},data:n})});m.propTypes={children:i.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-thankyou-js-31a7d465aee6b494cd00.js.map