(this["webpackJsonpservers-infrastructure-tree"]=this["webpackJsonpservers-infrastructure-tree"]||[]).push([[0],Array(19).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n(11),a=n.n(o),i=n(4),s=n(7),l=n.n(s),d=n(10),u=n(2),h=n(3),j=n(6),m=n(5),b=function(){function e(t){var n;Object(u.a)(this,e),this.name=void 0,this.desc=void 0,this.el=void 0,this.id=void 0,this.selfSearchStringCache="",this.nestedSearchStringCache="",this.el=t,this.name=t.getAttribute("name")||"",this.desc=(null===(n=t.querySelector(":scope > desc"))||void 0===n?void 0:n.innerHTML)||"",this.id=(this instanceof e?this.constructor:void 0).name+":"+this.name+"@"+ ++e.sequence}return Object(h.a)(e,[{key:"getSelfTextToSearch",value:function(){return this.name+" "+this.desc}},{key:"getElementsTextBySelector",value:function(e){var t=[];return this.el.querySelectorAll(e).forEach((function(e){t.push(((null===e||void 0===e?void 0:e.textContent)||"").trim())})),t}},{key:"toSelfSearchString",value:function(){return""!==this.selfSearchStringCache||(this.selfSearchStringCache=this.name+" "+this.desc+" "+this.getSelfTextToSearch(),this.selfSearchStringCache=this.selfSearchStringCache.toLowerCase().split(" ").filter((function(e,t,n){return t===n.indexOf(e)})).join(" ").replace(/\s+/g," ").trimEnd()),this.selfSearchStringCache}},{key:"toNestedSearchString",value:function(){return""!==this.nestedSearchStringCache||(this.nestedSearchStringCache=this.getNestedTextToSearch(),this.nestedSearchStringCache=this.nestedSearchStringCache.toLowerCase().split(" ").filter((function(e,t,n){return t===n.indexOf(e)})).join(" ").replace(/\s+/g," ").trimEnd()),this.nestedSearchStringCache}},{key:"toSearchString",value:function(){return this.toSelfSearchString()+" "+this.toNestedSearchString()}},{key:"toString",value:function(){return this.id}}]),e}();b.sequence=0;var v,p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).type=void 0,c.globalAddr=[],c.localAddr=[],c.port=void 0,c.type=e.getAttribute("type")||"service",c.port=parseInt(e.getAttribute("port")||"0",10),c.globalAddr=c.getElementsTextBySelector(":scope > global-addr"),c.localAddr=c.getElementsTextBySelector(":scope > local-addr"),c}return Object(h.a)(n,[{key:"getSelfTextToSearch",value:function(){return this.type+" "+this.localAddr.join(",")+" "+this.globalAddr.join(",")+" "+this.port}},{key:"getNestedTextToSearch",value:function(){return""}}]),n}(b),f=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var c,r,o,a,i;return Object(u.a)(this,n),(i=t.call(this,e)).ip=[],i.globalAddr=[],i.localAddr=[],i.services=void 0,i.cpu=void 0,i.ram=void 0,i.disk=void 0,i.os=void 0,i.ip=i.getElementsTextBySelector(":scope > ip"),i.globalAddr=i.getElementsTextBySelector(":scope > global-addr"),i.localAddr=i.getElementsTextBySelector(":scope > local-addr"),i.services=[],i.cpu=(null===(c=e.querySelector(":scope > cpu"))||void 0===c?void 0:c.textContent)||"",i.ram=(null===(r=e.querySelector(":scope > ram"))||void 0===r?void 0:r.textContent)||"",i.disk=(null===(o=e.querySelector(":scope > disk"))||void 0===o?void 0:o.textContent)||"",i.os=(null===(a=e.querySelector(":scope > os"))||void 0===a?void 0:a.textContent)||"",e.querySelectorAll(":scope > service").forEach((function(e){i.services.push(new p(e))})),i}return Object(h.a)(n,[{key:"getSelfTextToSearch",value:function(){return this.ip.join(",")+" "+this.localAddr.join(",")+" "+this.globalAddr.join(",")}},{key:"getNestedTextToSearch",value:function(){return this.services.map((function(e){return e.toSearchString()})).join(" ")}}]),n}(b),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var c,r,o,a,i;return Object(u.a)(this,n),(i=t.call(this,e)).ip=[],i.globalAddr=[],i.localAddr=[],i.cpu=void 0,i.ram=void 0,i.disk=void 0,i.os=void 0,i.vms=[],i.services=[],i.ip=i.getElementsTextBySelector(":scope > ip"),i.globalAddr=i.getElementsTextBySelector(":scope > global-addr"),i.localAddr=i.getElementsTextBySelector(":scope > local-addr"),i.cpu=(null===(c=e.querySelector(":scope > cpu"))||void 0===c?void 0:c.textContent)||"",i.ram=(null===(r=e.querySelector(":scope > ram"))||void 0===r?void 0:r.textContent)||"",i.disk=(null===(o=e.querySelector(":scope > disk"))||void 0===o?void 0:o.textContent)||"",i.os=(null===(a=e.querySelector(":scope > os"))||void 0===a?void 0:a.textContent)||"",e.querySelectorAll(":scope > vm").forEach((function(e){i.vms.push(new f(e))})),e.querySelectorAll(":scope > service").forEach((function(e){i.services.push(new p(e))})),i}return Object(h.a)(n,[{key:"getSelfTextToSearch",value:function(){return this.ip.join(",")+" "+this.localAddr.join(",")+" "+this.globalAddr.join(",")+" "+this.cpu+" "+this.os}},{key:"getNestedTextToSearch",value:function(){return this.vms.map((function(e){return e.toSearchString()})).join(" ")+" "+this.services.map((function(e){return e.toSearchString()})).join(" ")}}]),n}(b),O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).servers=void 0,c.servers=[],e.querySelectorAll(":scope > srv").forEach((function(e){c.servers.push(new x(e))})),c}return Object(h.a)(n,[{key:"getNestedTextToSearch",value:function(){return this.servers.map((function(e){return e.toSearchString()})).join(" ")}}]),n}(b),g=function(){function e(){Object(u.a)(this,e),this.data=void 0,this.dataCenters=[]}return Object(h.a)(e,[{key:"loadByUrl",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,r,o,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{cache:"no-cache"});case 2:return e.next=4,e.sent.text();case 4:return c=e.sent,this.data=(new DOMParser).parseFromString(c,"application/xml"),(r=t.split("/")).pop(),o=r.join("/"),a=[],this.data.querySelectorAll("include[src]").forEach((function(e){a.push(new Promise(function(){var t=Object(d.a)(l.a.mark((function t(n){var c,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o+"/"+e.getAttribute("src"),t.next=3,fetch(c,{cache:"no-cache"});case 3:return t.next=5,t.sent.text();case 5:r=t.sent,a=(new DOMParser).parseFromString(r,"application/xml"),e.parentElement&&a.firstElementChild&&e.parentElement.replaceChild(a.firstElementChild,e),n();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})),e.next=13,Promise.all(a);case 13:return i=[],this.data.querySelectorAll("infra > dc").forEach((function(e){i.push(new O(e))})),(n=this.dataCenters).splice.apply(n,[0,this.dataCenters.length].concat(i)),e.abrupt("return",this);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();n(19),n(20),n(21),n(22),n(23);function S(e){return Object(c.jsxs)("div",{className:"connector connector_"+e.type,children:[Object(c.jsx)("div",{className:"connector__v-line"}),Object(c.jsxs)("div",{className:"connector__connection",children:[Object(c.jsx)("div",{className:"connector__point"}),Object(c.jsx)("div",{className:"connector__h-line",children:Object(c.jsx)("div",{className:"connector__caption",children:e.caption||_(e.ip||[])})}),e.globalAddr&&e.globalAddr.length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"connector__wan-point"}),Object(c.jsx)("div",{className:"connector__wan-line",children:Object(c.jsx)("div",{className:"connector__wan-caption",children:_(e.globalAddr||[])})})]}):null,e.localAddr&&e.localAddr.length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"connector__lan-point"}),Object(c.jsx)("div",{className:"connector__lan-line",children:Object(c.jsx)("div",{className:"connector__lan-caption",children:_(e.localAddr||[])})})]}):null]})]})}function _(e){return e.map((function(e,t){return Object(c.jsx)("div",{children:e},t.toString())}))}!function(e){e.LAN="lan",e.WAN="wan",e.VM="vm",e.ROOT_SERVICE="root-service",e.SERVICE="service"}(v||(v={}));n(24);var y=n.p+"static/media/icons.f9e07b6a.svg",A=n.p+"static/media/elasticsearch.81e26c95.svg",N=n.p+"static/media/apache.ec3db90d.svg",C=n.p+"static/media/mssql.cfe2c656.svg",E=n.p+"static/media/db2.3d472d1d.svg",k=n.p+"static/media/ruby.320ed468.svg",w=(n(25),["server","vm","data-center","service","arrow","info","cancel","php","php-fpm","nginx","redis","mysql","cassandra","rabbitmq","sphinxsearch","elasticsearch","clickhouse","docker","nodejs","kafka","cron","crontab","storage","postgresql","mariadb","oracle","mongodb","apache","mssql","db2","jenkins","consul","kibana","zabbix","ansible","graylog","vault","java","python","ruby","perl"]),T={elasticsearch:A,apache:N,mssql:C,db2:E,ruby:k};function q(e){var t=e.name.toLowerCase(),n=e.className||"";return w.includes(t)||(t="service"),"string"===typeof T[t]?Object(c.jsx)("img",{src:T[t],alt:"",className:"icon "+n}):Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"icon "+n,children:Object(c.jsx)("use",{href:"".concat(y,"#").concat(t)})})}n(26);function L(e){return Object(c.jsx)("div",{className:"arrow-button",hidden:!!e.hidden,children:Object(c.jsx)(q,{name:"arrow",className:(e.isOpen?"icon_rot270":"icon_rot90")+" icon_sm arrow-button__icon"})})}function M(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),o=n[0],a=n[1],s=["node-label"];o&&s.push("node-label_show-info"),e.isEmpty&&s.push("node-label_empty");return Object(c.jsxs)("div",{className:s.join(" "),style:{"--lines":e.maxLines||0},children:[Object(c.jsx)("div",{className:"node-label__info",children:e.children}),Object(c.jsxs)("div",{className:"node-label__buttons-group",children:[Object(c.jsxs)("div",{className:"node-label__button",onClick:function(){e.setOpenState&&e.setOpenState(!e.isOpen)},children:[Object(c.jsx)(q,{name:e.icon}),Object(c.jsx)(L,{isOpen:e.isOpen||!1,hidden:e.isEmpty}),Object(c.jsx)("div",{className:"node-label__name",children:e.name})]}),Object(c.jsx)("div",{className:"node-label__info-button",onClick:function(){return a(!o)},children:Object(c.jsx)(q,{name:"info"})})]}),Object(c.jsx)("div",{className:"node-label__v-line"})]})}n(27);function B(e){return Object(c.jsx)("div",{"data-search":e.searchText.toLowerCase(),className:"infra-tree-node "+e.className,children:e.children})}function R(e){var t,n,r=e.isRoot?v.ROOT_SERVICE:v.SERVICE,o=Math.max((null===(t=e.model.globalAddr)||void 0===t?void 0:t.length)||0,(null===(n=e.model.localAddr)||void 0===n?void 0:n.length)||0);return Object(c.jsxs)(B,{className:"service",searchText:e.model.toSelfSearchString(),children:[Object(c.jsx)(S,{type:r,caption:e.model.port>0?":"+e.model.port:"",globalAddr:e.model.globalAddr,localAddr:e.model.localAddr}),Object(c.jsx)("div",{className:"service__body",children:Object(c.jsx)(M,{icon:e.model.type,name:e.model.name||e.model.type,isEmpty:!0,maxLines:o,children:e.model.desc})})]})}n(28);function V(e){return Object(c.jsx)("div",{className:"properties-group",children:e.children})}function I(e){return Object(c.jsxs)("div",{className:"property",children:[Object(c.jsxs)("span",{className:"property__caption",children:[e.caption,":"]}),Object(c.jsx)("span",{className:"property__value",children:e.value})]})}function U(e){var t,n,o,a=Object(r.useState)(!0),s=Object(i.a)(a,2),l=s[0],d=s[1],u=e.model.services.map((function(e){return Object(c.jsx)(R,{model:e},e.toString())})),h=0===u.length,j=Math.max((null===(t=e.model.ip)||void 0===t?void 0:t.length)||0,(null===(n=e.model.globalAddr)||void 0===n?void 0:n.length)||0,(null===(o=e.model.localAddr)||void 0===o?void 0:o.length)||0);return Object(c.jsxs)(B,{className:"vm",searchText:e.model.toSelfSearchString(),children:[Object(c.jsx)(S,{type:v.VM,ip:e.model.ip,globalAddr:e.model.globalAddr,localAddr:e.model.localAddr}),Object(c.jsxs)("div",{className:"vm__body",children:[Object(c.jsxs)(M,{icon:"vm",name:e.model.name,isEmpty:h,isOpen:l,setOpenState:d,maxLines:j,children:[Object(c.jsxs)(V,{children:[Object(c.jsx)(I,{caption:"CPU",value:e.model.cpu}),Object(c.jsx)(I,{caption:"RAM",value:e.model.ram}),Object(c.jsx)(I,{caption:"Disk",value:e.model.disk}),Object(c.jsx)(I,{caption:"OS",value:e.model.os})]}),e.model.desc]}),Object(c.jsx)("div",{className:"vm__content",hidden:!l,children:u})]})]})}function F(e){var t,n,o,a=Object(r.useState)(!0),s=Object(i.a)(a,2),l=s[0],d=s[1],u=e.model.vms.map((function(e){return Object(c.jsx)(U,{model:e},e.toString())})),h=e.model.services.map((function(e){return Object(c.jsx)(R,{isRoot:!0,model:e},e.toString())})),j=0===h.length&&0===u.length,m=Math.max((null===(t=e.model.ip)||void 0===t?void 0:t.length)||0,(null===(n=e.model.globalAddr)||void 0===n?void 0:n.length)||0,(null===(o=e.model.localAddr)||void 0===o?void 0:o.length)||0);return Object(c.jsxs)(B,{className:"server",searchText:e.model.toSelfSearchString(),children:[Object(c.jsx)(S,{type:v.LAN,ip:e.model.ip,globalAddr:e.model.globalAddr,localAddr:e.model.localAddr}),Object(c.jsxs)("div",{className:"server__body",children:[Object(c.jsxs)(M,{icon:"server",name:e.model.name,isEmpty:j,isOpen:l,setOpenState:d,maxLines:m,children:[Object(c.jsxs)(V,{children:[Object(c.jsx)(I,{caption:"CPU",value:e.model.cpu}),Object(c.jsx)(I,{caption:"RAM",value:e.model.ram}),Object(c.jsx)(I,{caption:"Disk",value:e.model.disk}),Object(c.jsx)(I,{caption:"OS",value:e.model.os})]}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.model.desc}})]}),Object(c.jsxs)("div",{className:"server__content",hidden:!l,children:[h,u]})]})]})}function P(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),o=n[0],a=n[1],s=0,l=e.model.servers.map((function(e){return s+=e.vms.length,Object(c.jsx)(F,{model:e},e.toString())})),d=0===l.length;return Object(c.jsxs)(B,{className:"data-center",searchText:e.model.toSelfSearchString(),children:[Object(c.jsx)(S,{type:v.WAN}),Object(c.jsx)("div",{className:"data-center__wan-label",children:"WAN"}),Object(c.jsxs)("div",{className:"data-center__body",children:[Object(c.jsxs)(M,{icon:"data-center",name:e.model.name,isEmpty:d,isOpen:o,setOpenState:a,children:[Object(c.jsxs)(V,{children:[Object(c.jsx)(I,{caption:"Servers",value:l.length}),Object(c.jsx)(I,{caption:"VMs",value:s})]}),Object(c.jsx)("div",{children:e.model.desc})]}),Object(c.jsxs)("div",{className:"data-center__content",hidden:!o,children:[Object(c.jsx)("div",{className:"data-center__lan-label",children:"LAN"}),l]})]})]})}n(29);function H(){var e,t=(window.innerHeight||document.documentElement.clientHeight)>>2,n=-Number.MAX_VALUE,c=null;(document.querySelectorAll(".node-label_matched").forEach((function(e){var r=e.getBoundingClientRect(),o=r.y+r.height-t;o<0&&n<o&&(c=e,n=o)})),c)&&(null===(e=c.querySelector(".node-label__buttons-group"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center"}))}function D(){var e,t=window.innerHeight||document.documentElement.clientHeight,n=(t>>1)+(t>>2),c=Number.MAX_VALUE,r=null;(document.querySelectorAll(".node-label_matched").forEach((function(e){var t=e.getBoundingClientRect().y-n;t>0&&c>t&&(r=e,c=t)})),r)&&(null===(e=r.querySelector(".node-label__buttons-group"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center"}))}function W(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){(new g).loadByUrl("data/data.xml").then((function(e){o(e.dataCenters)}))}),[]);var a=n.map((function(e){return Object(c.jsx)(P,{model:e},e.toString())}));return Object(c.jsxs)("div",{className:["infra-tree"].join(" "),children:[Object(c.jsxs)("div",{className:"infra-tree__search-stat",hidden:!0,children:["Matched nodes: ",Object(c.jsx)("span",{children:"0"}),Object(c.jsx)("button",{onClick:function(){return H()},children:"\u2b61 Prev"}),Object(c.jsx)("button",{onClick:function(){return D()},children:"\u2b63 Next"})]}),Object(c.jsx)("div",{className:"infra-tree__data-centers",children:a})]})}n(30);var X=n(12),J=(n(31),["data-center","server","vm","service"]);function z(){var e;return Object(c.jsxs)("div",{className:"filter-bar",children:[Object(c.jsx)("label",{className:"filter-bar__caption",htmlFor:"search-input",children:"Search: "}),Object(c.jsx)("input",{ref:function(t){return e=t},className:"filter-bar__search",id:"search-input",type:"text",autoFocus:!0,autoComplete:"off",onKeyUp:function(t){return function(e,t){var n=e;if("Escape"===n.code)return t.value="",void G("");if("ArrowUp"===n.code)return void H();if("ArrowDown"===n.code)return void D();G(t.value)}(t,e)},placeholder:"Name, ip, port etc..."}),Object(c.jsx)("div",{className:"filter-bar__button filter-bar__button_cancel",onClick:function(){return G(e.value="")},children:Object(c.jsx)(q,{name:"cancel"})}),Object(c.jsx)("label",{className:"filter-bar__caption",children:"Collapse to: "}),Object(c.jsx)("div",{className:"filter-bar__button filter-bar__button_dc",onClick:function(){return K("data-center")},children:Object(c.jsx)(q,{name:"data-center"})}),Object(c.jsx)("div",{className:"filter-bar__button filter-bar__button_srv",onClick:function(){return K("server")},children:Object(c.jsx)(q,{name:"server"})}),Object(c.jsx)("div",{className:"filter-bar__button filter-bar__button_vm",onClick:function(){return K("vm")},children:Object(c.jsx)(q,{name:"vm"})}),Object(c.jsx)("div",{className:"filter-bar__button filter-bar__button_service",onClick:function(){return K("service")},children:Object(c.jsx)(q,{name:"service"})})]})}function K(e){document.querySelectorAll(".".concat(e)).forEach((function(t){var n=t.querySelector(":scope > .".concat(e,"__body > .").concat(e,"__content"));n&&(n.hidden=!0)}));for(var t=J.indexOf(e)-1;t>=0;t--){var n=J[t];document.querySelectorAll(".".concat(n,"__content")).forEach((function(e){e.hidden=!1}))}}function G(e){if(e=e.replace(/["'[\]]/g,"").toLowerCase(),document.querySelectorAll(".node-label_matched").forEach((function(e){e.classList.remove("node-label_matched")})),""!==e){var t,n=0,c=null;if(document.querySelectorAll('.infra-tree-node[data-search*="'.concat(e,'"]')).forEach((function(e){var t=e.querySelector(":scope .node-label");t&&(t.classList.add("node-label_matched"),c||(c=t),n++);var r,o=Object(X.a)(J);try{for(o.s();!(r=o.n()).done;){var a=r.value,i=e.closest(".".concat(a,"__content"));i&&(i.hidden=!1)}}catch(s){o.e(s)}finally{o.f()}})),c)null===(t=c.querySelector(".node-label__buttons-group"))||void 0===t||t.scrollIntoView({block:"center",behavior:"smooth"});Q(n)}else Q()}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=document.querySelector(".infra-tree__search-stat");if(t){t.hidden=e<0;var n=t.querySelector("span");n&&(n.textContent=String(e))}}function Y(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{}),Object(c.jsx)(W,{})]})}a.a.render(Object(c.jsx)(r.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root"))}]),[[32,1,2]]]);
//# sourceMappingURL=main.e37bcf62.chunk.js.map