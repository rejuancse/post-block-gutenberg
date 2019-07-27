!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t){e.exports=wp.element},function(e,t,n){"use strict";function r(e,t){return function(n){var r=e(n),a=n.displayName,l=void 0===a?n.name||"Component":a;return r.displayName="".concat(Object(o.upperFirst)(Object(o.camelCase)(t)),"(").concat(l,")"),r}}var o=n(4);n.n(o);t.a=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.a=r},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}t.a=o},function(e,t){e.exports=lodash},function(e,t,n){"use strict";function r(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?Object(a.a)(e):t}t.a=r;var o=n(18),a=n(8)},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.a=r},function(e,t,n){"use strict";function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(o.a)(e,t)}t.a=r;var o=n(19)},function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.a=r},function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}t.a=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(11)},function(e,t,n){"use strict";var r=n(12),o=wp.i18n.__;(0,wp.blocks.registerBlockType)("postblock/gutenberg-post-block",{title:o("Gutenberg Post Block"),icon:"shield",category:"common",attributes:{numbers:{type:"number",default:6},fontSize:{type:"number",default:16},columns:{type:"string",default:"3"},lineheight:{type:"number",default:24},orderby:{type:"string",default:"asc"},fontWeight:{type:"number",default:400},blogStyle:{type:"string",default:"style1"},colorpalette:{type:"string",default:"#333"},bgColorpalette:{type:"string",default:"#fff"},selectedCategory:{type:"string",default:"all"},padding:{type:"string",default:"20px 20px"}},edit:r.a,save:function(e){return null}})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(13),i=(n.n(c),n(14)),u=(n.n(i),n(15)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=wp.i18n.__,f=wp,m=f.apiFetch,b=wp.data.withSelect,h=wp.components.Spinner,d=wp.components.PanelBody,y=wp.editor.InspectorControls,v=wp.element,g=v.Component,w=v.Fragment,O=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getFeaturedImages=function(e){e&&e.forEach(function(e){e._links["wp:featuredmedia"]&&m({method:"POST",url:e._links["wp:featuredmedia"][0].href,headers:{"Content-Type":"application/json"}}).then(function(t){n.setState(Object.assign({},n.state,r({},e.id,t.source_url)))}).catch(function(e){console.log("error : ",e)})})},n.customFunction=function(){var e=[];return wp.apiFetch({path:"/wp/v2/categories"}).then(function(t){return e.push({label:"Select a Post",value:0}),$.each(t,function(t,n){e.push({label:n.name,value:n.id})}),e}),e},n.state={categories:[]},n}return l(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props.posts;this.getFeaturedImages(e);var t=[];wp.apiFetch({path:"/wp/v2/categories"}).then(function(e){return t.push({label:"Select All Category",value:"all"}),$.each(e,function(e,n){t.push({label:n.name,value:n.id})}),t}),this.setState({categories:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.posts;n!=e.posts&&this.getFeaturedImages(n)}},{key:"render",value:function(){var e=this,t=this.props.posts,n=this.props,r=n.attributes,o=r.columns,a=r.numbers,l=r.orderby,s=r.fontSize,f=r.blogStyle,m=r.fontWeight,b=r.lineheight,v=r.colorpalette,g=r.selectedCategory,O=r.bgColorpalette,j=r.padding,E=n.setAttributes,S=Object(u.a)({blogStyle:f})(function(e){var t=e.blogStyle;e.setState;return wp.element.createElement(c.SelectControl,{label:"Select Style",value:t,options:[{label:"Style One",value:"style1"},{label:"Style Two",value:"style2"}],onChange:function(e){E({blogStyle:e})}})}),C=Object(u.a)({column:o})(function(e){var t=e.column;e.setState;return wp.element.createElement(c.SelectControl,{label:"Select Column",value:t,options:[{label:"One Column",value:"1"},{label:"Two Column",value:"2"},{label:"Three Column",value:"3"},{label:"Four Column",value:"4"}],onChange:function(e){E({columns:e})}})}),_=Object(u.a)({postorder:l})(function(e){var t=e.postorder;e.setState;return wp.element.createElement(c.SelectControl,{label:"Post Order",value:t,options:[{label:"ASC",value:"asc"},{label:"DESC",value:"desc"}],onChange:function(e){E({orderby:e})}})}),T=Object(u.a)({numbers:a})(function(e){var t=e.numbers;e.setState;return wp.element.createElement(c.RangeControl,{label:"Number Of Post",value:t,onChange:function(e){E({numbers:e})},min:1,max:40})}),k=Object(u.a)({color:v})(function(e){var t=e.color,n=(e.setState,[{name:"Gray",color:"#ccc"},{name:"White",color:"#fff"},{name:"Black",color:"#000"}]);return wp.element.createElement(c.ColorPalette,{label:"Title Color",colors:n,value:t,onChange:function(e){E({colorpalette:e})}})}),P=Object(u.a)({bgcolor:O})(function(e){var t=e.bgcolor,n=(e.setState,[{name:"Gray",color:"#ccc"},{name:"White",color:"#fff"},{name:"Gray2",color:"#cdcdcd"}]);return wp.element.createElement(c.ColorPalette,{label:"Background Color",colors:n,value:t,onChange:function(e){E({bgColorpalette:e})}})}),x=Object(u.a)({fontSize:s})(function(e){var t=e.fontSize;e.setState;return wp.element.createElement(c.RangeControl,{label:"Font Size",value:t,onChange:function(e){E({fontSize:e})},min:1,max:20})}),I=Object(u.a)({fontWeight:m})(function(e){var t=e.fontWeight;e.setState;return wp.element.createElement(c.SelectControl,{label:"Line Height",value:t,options:[{label:"100",value:"100"},{label:"400",value:"400"},{label:"500",value:"500"},{label:"600",value:"600"},{label:"700",value:"700"},{label:"800",value:"800"}],onChange:function(e){E({fontWeight:e})}})}),N=Object(u.a)({lineheight:b})(function(e){var t=e.lineheight;e.setState;return wp.element.createElement(c.RangeControl,{label:"Line Height",value:t,onChange:function(e){E({lineheight:e})},min:1,max:40})}),F=Object(u.a)({padding:j})(function(e){var t=e.padding;e.setState;return wp.element.createElement(c.TextControl,{label:"Padding",value:t,onChange:function(e){E({padding:e})}})}),W=0,z="";return wp.element.createElement(w,null,wp.element.createElement(y,{key:"inspector"},wp.element.createElement(d,{title:p("Blog Post Style"),initialOpen:!1},wp.element.createElement(S,null),wp.element.createElement(C,null),wp.element.createElement(c.SelectControl,{value:g,options:this.state.categories,onChange:function(e){return E({selectedCategory:e})}}),wp.element.createElement(_,null),wp.element.createElement(T,null)),wp.element.createElement(d,{title:p("CSS Style"),initialOpen:!1},wp.element.createElement(x,null),wp.element.createElement(I,null),wp.element.createElement(N,null),wp.element.createElement(k,null),wp.element.createElement(P,null),wp.element.createElement(F,null))),t&&wp.element.createElement("div",{className:"postblock-wrapper"},wp.element.createElement("div",{className:"row"},t.map(function(t){var n={fontSize:s,fontWeight:m,color:v},r={background:O},a={padding:j};return"style1"==f?wp.element.createElement("div",{className:"col-md-"+o+" style1"},wp.element.createElement("div",{className:"post-content-wrapper",style:r},e.state[t.id]?wp.element.createElement("img",{src:e.state[t.id],alt:"Featured Image",width:"600",height:"500"}):wp.element.createElement(h,null),wp.element.createElement("div",{className:"content",style:a},t.date_gmt&&wp.element.createElement("time",{dateTime:Object(i.format)("c",t.date_gmt),className:"post-date"},Object(i.dateI18n)("d M, Y",t.date_gmt)),wp.element.createElement("h2",{style:n},t.title.rendered)))):(z=0==W?wp.element.createElement("div",{className:"col-md-6 full-content style2-wrap"},wp.element.createElement("div",{className:"post-content-wrapper"},e.state[t.id]?wp.element.createElement("img",{src:e.state[t.id],alt:"Image",width:"50%"}):wp.element.createElement(h,null),wp.element.createElement("h2",{style:n},t.title.rendered),wp.element.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}}))):wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"post-content-wrapper right"},e.state[t.id]?wp.element.createElement("img",{src:e.state[t.id],alt:"Image",width:"50%"}):wp.element.createElement(h,null),t.date_gmt&&wp.element.createElement("time",{dateTime:Object(i.format)("d M, Y",t.date_gmt),className:"post-date"},Object(i.dateI18n)("d M, Y",t.date_gmt)),wp.element.createElement("h2",{className:"post-title"},t.title.rendered),console.log("Jihad"))),W++,z)}))),!t&&wp.element.createElement(h,null))}}]),t}(g);t.a=b(function(e,t){var n=t.attributes,r=n.numbers,o=n.orderby,a=n.selectedCategory,l=e("core"),c=l.getEntityRecords;return"all"==a?{posts:c("postType","post",{per_page:r,order:o,status:"publish"})}:{posts:c("postType","post",{per_page:r,order:o,categories:[a],status:"publish"})}})(O)},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.date},function(e,t,n){"use strict";var r=n(4),o=(n.n(r),n(1),n(16),n(17),n(23),n(25),n(26),n(27));n.d(t,"a",function(){return o.a})},function(e,t,n){"use strict";var r=n(0);n.n(r),n(1)},function(e,t,n){"use strict";var r=n(2),o=n(3),a=n(5),l=n(6),c=n(7),i=n(0),u=(n.n(i),n(20)),s=n.n(u),p=n(1);Object(p.a)(function(e){return e.prototype instanceof i.Component?function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!s()(e,this.props)||!s()(t,this.state)}}]),t}(e):function(t){function n(){return Object(r.a)(this,n),Object(a.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e){return!s()(e,this.props)}},{key:"render",value:function(){return Object(i.createElement)(e,this.props)}}]),n}(i.Component)},"pure")},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}t.a=o},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.a=r},function(e,t,n){"use strict";function r(e,t){if(e&&t){if(e.constructor===Object&&t.constructor===Object)return o(e,t);if(l(e)&&l(t))return a(e,t)}return e===t}var o=n(21),a=n(22),l=Array.isArray;e.exports=r,e.exports.isShallowEqualObjects=o,e.exports.isShallowEqualArrays=a},function(e,t,n){"use strict";function r(e,t){var n,r,a,l;if(e===t)return!0;if(n=o(e),r=o(t),n.length!==r.length)return!1;for(a=0;a<n.length;){if(l=n[a],e[l]!==t[l])return!1;a++}return!0}var o=Object.keys;e.exports=r},function(e,t,n){"use strict";function r(e,t){var n;if(e===t)return!0;if(e.length!==t.length)return!1;for(n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}e.exports=r},function(e,t,n){"use strict";var r=(n(9),n(2),n(3),n(5),n(6),n(7),n(8),n(0)),o=(n.n(r),n(4)),a=(n.n(o),n(1),n(24));new a.a},function(e,t,n){"use strict";var r=n(2),o=n(3),a=n(4),l=(n.n(a),function(){function e(){Object(r.a)(this,e),this.listeners={},this.handleEvent=this.handleEvent.bind(this)}return Object(o.a)(e,[{key:"add",value:function(e,t){this.listeners[e]||(window.addEventListener(e,this.handleEvent),this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"remove",value:function(e,t){this.listeners[e]=Object(a.without)(this.listeners[e],t),this.listeners[e].length||(window.removeEventListener(e,this.handleEvent),delete this.listeners[e])}},{key:"handleEvent",value:function(e){Object(a.forEach)(this.listeners[e.type],function(t){t.handleEvent(e)})}}]),e}());t.a=l},function(e,t,n){"use strict";var r=n(9),o=n(2),a=n(3),l=n(5),c=n(6),i=n(7),u=n(0),s=(n.n(u),n(1));Object(s.a)(function(e){var t=0;return function(n){function s(){var e;return Object(o.a)(this,s),e=Object(l.a)(this,Object(c.a)(s).apply(this,arguments)),e.instanceId=t++,e}return Object(i.a)(s,n),Object(a.a)(s,[{key:"render",value:function(){return Object(u.createElement)(e,Object(r.a)({},this.props,{instanceId:this.instanceId}))}}]),s}(u.Component)},"withInstanceId")},function(e,t,n){"use strict";var r=n(9),o=n(2),a=n(3),l=n(5),c=n(6),i=n(7),u=n(8),s=n(0),p=(n.n(s),n(4)),f=(n.n(p),n(1));Object(f.a)(function(e){return function(t){function n(){var e;return Object(o.a)(this,n),e=Object(l.a)(this,Object(c.a)(n).apply(this,arguments)),e.timeouts=[],e.setTimeout=e.setTimeout.bind(Object(u.a)(Object(u.a)(e))),e.clearTimeout=e.clearTimeout.bind(Object(u.a)(Object(u.a)(e))),e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentWillUnmount",value:function(){this.timeouts.forEach(clearTimeout)}},{key:"setTimeout",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n=this,r=setTimeout(function(){e(),n.clearTimeout(r)},t);return this.timeouts.push(r),r})},{key:"clearTimeout",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){clearTimeout(e),this.timeouts=Object(p.without)(this.timeouts,e)})},{key:"render",value:function(){return Object(s.createElement)(e,Object(r.a)({},this.props,{setTimeout:this.setTimeout,clearTimeout:this.clearTimeout}))}}]),n}(s.Component)},"withSafeTimeout")},function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(f.a)(function(t){return function(n){function r(){var t;return Object(a.a)(this,r),t=Object(c.a)(this,Object(i.a)(r).apply(this,arguments)),t.setState=t.setState.bind(Object(s.a)(Object(s.a)(t))),t.state=e,t}return Object(u.a)(r,n),Object(l.a)(r,[{key:"render",value:function(){return Object(p.createElement)(t,Object(o.a)({},this.props,this.state,{setState:this.setState}))}}]),r}(p.Component)},"withState")}t.a=r;var o=n(9),a=n(2),l=n(3),c=n(5),i=n(6),u=n(7),s=n(8),p=n(0),f=(n.n(p),n(1))}]);