(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),l=n(0),o=n.n(l),u=n(182);n(186);function c(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function i(e){return function t(n){return 0===arguments.length||c(n)?t:e.apply(this,arguments)}}function s(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var f=Object.prototype.toString,p=function(){return"[object Arguments]"===f.call(arguments)?function(e){return"[object Arguments]"===f.call(e)}:function(e){return s("callee",e)}}(),m=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};var y=i(function(e){return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():m(e)?[]:function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)?"":function(e){return"[object Object]"===Object.prototype.toString.call(e)}(e)?{}:p(e)?function(){return arguments}():void 0});function d(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return c(n)?t:i(function(t){return e(n,t)});default:return c(n)&&c(r)?t:c(n)?i(function(t){return e(t,r)}):c(r)?i(function(t){return e(n,t)}):e(n,r)}}}function v(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function h(e,t,n){for(var r=0,a=n.length;r<a;){if(e(t,n[r]))return!0;r+=1}return!1}var g="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},b=!{toString:null}.propertyIsEnumerable("toString"),C=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],E=function(){return arguments.propertyIsEnumerable("length")}(),k=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},w="function"!=typeof Object.keys||E?i(function(e){if(Object(e)!==e)return[];var t,n,r=[],a=E&&p(e);for(t in e)!s(t,e)||a&&"length"===t||(r[r.length]=t);if(b)for(n=C.length-1;n>=0;)s(t=C[n],e)&&!k(r,t)&&(r[r.length]=t),n-=1;return r}):i(function(e){return Object(e)!==e?[]:Object.keys(e)}),O=i(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function j(e,t,n,r){var a=v(e);function l(e,t){return A(e,t,n.slice(),r.slice())}return!h(function(e,t){return!h(l,t,e)},v(t),a)}function A(e,t,n,r){if(g(e,t))return!0;var a=O(e);if(a!==O(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(a){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===function(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!g(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!g(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var l=n.length-1;l>=0;){if(n[l]===e)return r[l]===t;l-=1}switch(a){case"Map":return e.size===t.size&&j(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&j(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=w(e);if(o.length!==w(t).length)return!1;var u=n.concat([e]),c=r.concat([t]);for(l=o.length-1;l>=0;){var i=o[l];if(!s(i,t)||!A(t[i],e[i],u,c))return!1;l-=1}return!0}var S,D=d(function(e,t){return A(e,t,[],[])}),_=i(function(e){return null!=e&&D(e,y(e))}),P=n(230),x=n.n(P),H=(n(80),n(81),n(231),function(e,t){return e.length===t.length&&e.sort().every(function(e,n){return e===t.sort()[n]})}),I=function(e,t){return 0!==t.filter(function(t){return e.includes(t)}).length},M=n(188),N=n(155),q=n(168),L=M.b.div.withConfig({displayName:"header__Spread",componentId:"sc-14n7s3v-0"})(["display:inline-flex;width:","%;margin-left:","%;justify-content:space-between;"],function(e){return 20*e.levels},function(e){return 100-20*e.levels}),R=function(e){var t=e.onClickHandler,n=e.pageData,r=e.activeLevel;return l.createElement(N.y,null,l.createElement(N.z,{onClick:t(null)},l.createElement(N.Q,{small:!0},null!=n.sidebarGroup?Object(q.a)(n.sidebarGroup):null),l.createElement(N.R,{small:!0},n.title)),l.createElement(N.A,null,l.createElement(N.B,null,"Levels"),l.createElement(N.D,null,function(e){for(var t=e.onClickHandler,n=e.pageData,r=e.activeLevel,a=[],o=1;o<=n.levels;o++)null!=r&&o===r?a.push(l.createElement(N.C,{onClick:t(o),key:"button-"+o,active:!0},o)):a.push(l.createElement(N.C,{onClick:t(o),key:"button-"+o},o));return 5>n.levels?l.createElement(L,{levels:n.levels},a):a}({onClickHandler:t,pageData:n,activeLevel:r}))))},T=((S={default:3})[N.a]=2,S[N.c]=1,S),z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isHidden:!0},t.toggleView=function(e){null!=e&&e.preventDefault(),t.setState({isHidden:!t.state.isHidden})},t.generateExamples=function(e){var t=e.examples.map(function(e,t){return l.createElement("li",{key:t+"-"+Math.random()},e)});return l.createElement("ul",null,t)},t}return a()(t,e),t.prototype.render=function(){var e=this.props.content,t=this.state.isHidden;return l.createElement("li",null,l.createElement(N.u,{onClick:this.toggleView},e.criteria),t?null:this.generateExamples(e))},t}(l.Component),F=function(e){function t(t){var n;(n=e.call(this,t)||this).handleClick=function(e){return function(t){t.preventDefault(),n.setState({level:e})}},n.createTopic=function(e){var t=n.props.genericData,r=n.state,a=r.level,o=r.isGeneric,u=t.topics.filter(function(t){return t.name===e.name}),c=null==u||_(u)?e.title:u.map(function(e){return e.title})[0],i=e.content.filter(function(e){return e.level===a}).map(function(e){return null!=e.criteria?e.criteria.map(function(e,t){return l.createElement("li",{key:t+"-"+Math.random()},e)}):null}),s=e.content.filter(function(e){return e.level===a}).map(function(e){return null!=e.exampleCriteria?e.exampleCriteria.map(function(e,t){return l.createElement(z,{content:e,key:t+"-"+Math.random()})}):null}),f=null==u||_(u)?null:u.map(function(e){return e.content.filter(function(e){return e.level===a}).map(function(e){return e.criteria.map(function(e,t){return l.createElement("li",{key:t+"-"+Math.random()},e)})})});if(null!=f&&!_(f)||null!=s&&!_(s)||null!=i&&!_(i))return l.createElement(N.x,{key:e.name},l.createElement(N.g,null,l.createElement(N.f,null,c)),l.createElement(N.e,null,null==i||_(i)?null:i,null==s||_(s)?null:s,o||_(f)||null==f?null:f))};var r=t.genericData.topics.map(function(e){return e.title}),a=t.pageData.topics.map(function(e){return e.title}),o=t.genericData.topics.map(function(e){return e.name}),u=t.pageData.topics.map(function(e){return e.name}),c=H(o,u),i=H(r,a),s=c&&i,f=I(o,u)&&!i;return n.state={level:null,isGeneric:s,inheritsGeneric:f},n}a()(t,e);var n=t.prototype;return n.renderPageHeader=function(){var e=this.props.pageData,t=this.state.level;return l.createElement(R,{onClickHandler:this.handleClick,pageData:e,activeLevel:t})},n.renderEmptyState=function(){var e=this.props,t=e.pageData,n=e.html;return!0===t.homepage&&""!==n?l.createElement(N.d,null,l.createElement(N.F,{dangerouslySetInnerHTML:{__html:n}})):l.createElement(N.h,null,l.createElement(N.d,null,l.createElement(N.Q,null,"To view a framework, please select a level above.")))},n.renderFramework=function(){var e=this,t=this.props.pageData.topics.map(function(t){return e.createTopic(t)});return l.createElement(x.a,{breakpointCols:T,columnClassName:"framework-columns",className:"framework-view"},t)},n.render=function(){var e=this.state.level;return l.createElement(N.H,null,this.renderPageHeader(),null!=e?this.renderFramework():this.renderEmptyState())},t}(l.Component),G=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.html;return l.createElement(N.H,null,l.createElement(N.Q,{small:!0},null!=t.sidebarGroup?Object(q.a)(t.sidebarGroup):null),l.createElement(N.R,{small:!0},t.title),l.createElement(N.d,null,l.createElement(N.F,{dangerouslySetInnerHTML:{__html:n}})))},t}(l.Component);n(169);n.d(t,"default",function(){return B}),n.d(t,"pageQuery",function(){return Q});var U=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.pageData,n=e.genericData,r=e.allMarkdownRemark,a=t.frontmatter,l=t.html,c=n.frontmatter;return o.a.createElement(u.a,{data:{allMarkdownRemark:r}},!0===a.yaml?o.a.createElement(F,{pageData:a,genericData:c,html:l}):o.a.createElement(G,{data:a,html:l}))},t}(o.a.Component);function B(e){var t=e.data;return o.a.createElement(U,{data:t})}var Q="844772649"},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=u(n(0)),o=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCount)}},{key:"componentWillReceiveProps",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCount)}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;parseInt(t)>0&&(t={default:t});var n=1/0,r=t.default||2;for(var a in t){var l=parseInt(a);l>0&&e<=l&&l<n&&(n=l,r=t[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=this.props.children||[],r=0;r<n.length;r++){var a=r%e;t[a]||(t[a]=[]),t[a].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnClassName,a=this.itemsInColumns(),o=100/a.length+"%";return a.map(function(e,a){return l.default.createElement("div",r({key:a,className:n,style:{width:o}},t),e)})}},{key:"render",value:function(){var e=this.props,t=(e.breakpointCols,e.columnClassName,e.column,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["breakpointCols","columnClassName","column"]));return l.default.createElement("div",t,this.renderColumns())}}]),t}();c.propTypes={breakpointCols:o.default.object,columnClassName:o.default.string},c.defaultProps={breakpointCols:{},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t.default=c},231:function(e,t,n){"use strict";var r=n(12),a=n(28),l=n(26),o=n(19),u=[].sort,c=[1,2,3];r(r.P+r.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n(232)(u)),"Array",{sort:function(e){return void 0===e?u.call(l(this)):u.call(l(this),a(e))}})},232:function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-views-framework-view-js-e817f4ff7c6b7d3ecd06.js.map