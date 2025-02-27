function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;let e=class{#t;#e;#i=0;#s=0;#o=0;#r=0;#n;#a=!1;#l;#h;#c;constructor(t,e,{touchActions:i,stopScrollDirection:s="both"}={}){this.#t=t,this.#e=i,this.#n=e,this.#l=s,this.#h=this.#d.bind(this),this.#c=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#c),this.#t.addEventListener("pointermove",this.#c),this.#t.addEventListener("pointerup",this.#c),this.#t.addEventListener("pointercancel",this.#c),window.addEventListener("touchmove",this.#h,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#c),this.#t.removeEventListener("pointermove",this.#c),this.#t.removeEventListener("pointerup",this.#c),this.#t.removeEventListener("pointercancel",this.#c),window.removeEventListener("touchmove",this.#h),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#a=!0}#_(){this.#a=!1}#d(t){this.#a&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#s=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#n){const e=t.pageX-this.#i,i=t.pageY-this.#s,s=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#l&&s&&this.#p(),"vertical"===this.#l&&o&&this.#p(),"both"===this.#l&&this.#p(),this.#n(t,{startX:this.#i,startY:this.#s,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#r})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#r=+this.#r+t.pageY-this.#s,this.#t.releasePointerCapture(t.pointerId),this.#_()),"pointercancel"===t.type&&(this.#n(t,{startX:this.#i,startY:this.#s,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#r}),this.#t.releasePointerCapture(t.pointerId),this.#_())}};const i={type:"custom:big-slider-card",attribute:"brightness",tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};var s={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",on:"On",off:"Off"},o={common:s},r={version:"Versiunea",invalid_configuration:"Configurație invalidă",show_warning:"Show Warning",no_entity_set:"Entitatea nu e setată",no_entity:"Entitatea nu e disponibilă",on:"Pornit",off:"Oprit"},n={common:r};const a={en:Object.freeze({__proto__:null,common:s,default:o}),ro:Object.freeze({__proto__:null,common:r,default:n})};function l(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce(((t,e)=>t[e]),a[s])}catch(e){o=t.split(".").reduce(((t,e)=>t[e]),a.en)}return void 0===o&&(o=t.split(".").reduce(((t,e)=>t[e]),a.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function c(t){return function(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):h(t,e)}({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var d,u;null===(d=window.HTMLSlotElement)||void 0===d||d.prototype.assignedElements;const p=window,_=p.trustedTypes,v=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,g="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,f="?"+m,y=`<${f}>`,b=document,$=()=>b.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,E="[ \t\n\f\r]",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,P=/>/g,C=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,k=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),R=new WeakMap,L=b.createTreeWalker(b,129,null,!1);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==v?v.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===S?"!--"===l[1]?n=x:void 0!==l[1]?n=P:void 0!==l[2]?(U.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=C):void 0!==l[3]&&(n=C):n===C?">"===l[0]?(n=null!=o?o:S,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?C:'"'===l[3]?k:T):n===k||n===T?n=C:n===x||n===P?n=S:(n=C,o=void 0);const d=n===C&&t[e+1].startsWith("/>")?" ":"";r+=n===S?i+y:h>=0?(s.push(a),i.slice(0,h)+g+i.slice(h)+m+d):i+m+(-2===h?(s.push(void 0),e):d)}return[N(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,h]=V(t,e);if(this.el=I.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(g)||e.startsWith(m)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+g).split(m),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?Y:"@"===e[1]?q:B})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),L.nextNode(),a.push({type:2,index:++o});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===f)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)a.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var o,r,n,a;if(e===M)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new D(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new G(r,this,t)),this._$AV.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=L.nextNode(),n++)}return L.currentNode=b,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),A(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&A(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(N(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new I(t)),e}T(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.k($()),this.k($()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=j(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=j(this,s[i+n],e,n),a===M&&(a=this._$AH[n]),r||(r=!A(a)||a!==this._$AH[n]),a===O?t=O:t!==O&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const X=_?_.emptyScript:"";class Y extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class q extends B{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:O)===M)return;const s=this._$AH,o=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==O&&(s===O||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const K=p.litHtmlPolyfillSupport;null==K||K(I,D),(null!==(u=p.litHtmlVersions)&&void 0!==u?u:p.litHtmlVersions=[]).push("2.8.0");const J=window,Z=J.ShadowRoot&&(void 0===J.ShadyCSS||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),Q=new WeakMap;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Q.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const et=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new tt(i,t,F)},it=Z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new tt("string"==typeof t?t:t+"",void 0,F))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var st;const ot=window,rt=ot.trustedTypes,nt=rt?rt.emptyScript:"",at=ot.reactiveElementPolyfillSupport,lt={toAttribute(t,e){switch(e){case Boolean:t=t?nt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ht=(t,e)=>e!==t&&(e==e||t==t),ct={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:ht},dt="finalized";class ut extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ct}static finalize(){if(this.hasOwnProperty(dt))return!1;this[dt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(it(t))}else void 0!==t&&e.push(it(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Z?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=J.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ct){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:lt).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:lt;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pt,_t;ut[dt]=!0,ut.elementProperties=new Map,ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},null==at||at({ReactiveElement:ut}),(null!==(st=ot.reactiveElementVersions)&&void 0!==st?st:ot.reactiveElementVersions=[]).push("1.6.3");class vt extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new D(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}vt.finalized=!0,vt._$litElement$=!0,null===(pt=globalThis.litElementHydrateSupport)||void 0===pt||pt.call(globalThis,{LitElement:vt});const gt=globalThis.litElementPolyfillSupport;null==gt||gt({LitElement:vt}),(null!==(_t=globalThis.litElementVersions)&&void 0!==_t?_t:globalThis.litElementVersions=[]).push("3.3.3");class mt extends vt{constructor(){super(...arguments),this._config=i,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t,e){const i=e.filter((t=>"light"===t.split(".")[0])).sort();return{type:"custom:big-slider-card",entity:i[Math.floor(Math.random()*i.length)]}}static getConfigElement(){return document.createElement("big-slider-card-editor")}setConfig(t){if(!t)throw new Error(l("common.invalid_configuration"));if(!t.entity)throw new Error(l("common.no_entity_set"));if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this._config=Object.assign(Object.assign({},i),t),this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var e,i,s,o,r,n;this._entity&&(this._hass=t,this._state=t.states[this._entity],this._status=null===(e=this._state)||void 0===e?void 0:e.state,this._name=null!==(n=null!==(r=null!==(i=this._config.name)&&void 0!==i?i:null===(o=null===(s=this._state)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)&&void 0!==r?r:this._entity.split(".")[1])&&void 0!==n?n:"")}_log(t){console.log(`%c  BIG-SLIDER-CARD ${this._name} %c ${t} `,"color: orange; font-weight: bold; background: black","")}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new e(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout((()=>this.setAttribute("pressed","")),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,s=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>s&&(this.currentValue=s,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");e&&(e.innerText=Math.round(this.currentValue)+"%")}_updateColors(){var t,e,i,s,o;let r="var(--bsc-color)",n="0%",a=!1;if(this._state)if("on"==this._status){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],l=null!==(s=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==s?s:255;a=!0,o&&(r=`rgb(${o.join(",")})`),l&&(n=`${Math.ceil(100*l/255)}%`)}else r="var(--bsc-off-color)";const h=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");a||h&&(h.innerText=l("common.off")),this.style.setProperty("--bsc-entity-color",r),this.style.setProperty("--bsc-brightness",n),a?this._config.background_color_on?this._setStyleProperty("--bsc-background",this._config.background_color_on):this.style.removeProperty("--bsc-background"):this._config.background_color?this._setStyleProperty("--bsc-background",this._config.background_color):this.style.removeProperty("--bsc-background"),a?this._config.icon_color?this.style.setProperty("--bsc-icon-color",this._config.icon_color):this.style.removeProperty("--bsc-icon-color"):this._config.icon_color_off?this.style.setProperty("--bsc-icon-color",this._config.icon_color_off):this.style.removeProperty("--bsc-icon-color"),a?this._config.text_color_on?this._setStyleProperty("--bsc-primary-text-color",this._config.text_color_on):this.style.removeProperty("--bsc-primary-text-color"):this._config.text_color?this._setStyleProperty("--bsc-primary-text-color",this._config.text_color):this.style.removeProperty("--bsc-primary-text-color"),a?this._config.secondary_text_color_on?this._setStyleProperty("--bsc-secondary-text-color",this._config.secondary_text_color_on):this.style.removeProperty("--bsc-secondary-text-color"):this._config.secondary_text_color?this._setStyleProperty("--bsc-secondary-text-color",this._config.secondary_text_color):this.style.removeProperty("--bsc-secondary-text-color")}_getValue(){var t,e,i,s,o;if(!this._shouldUpdate)return;if(!this._state)return;const r=null===(t=this._config)||void 0===t?void 0:t.attribute;let n=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)n=null!==(e=this._config.min)&&void 0!==e?e:0;else switch(r){case"brightness":n=Math.round(100*(null!==(i=this._state.attributes.brightness)&&void 0!==i?i:255)/255);break;case"red":case"green":case"blue":const t=null!==(s=this._state.attributes.rgb_color)&&void 0!==s?s:[255,255,255];"red"===r&&(n=t[0]),"green"===r&&(n=t[1]),"blue"===r&&(n=t[2]),n=Math.ceil(100*n/255);break;case"hue":case"saturation":const e=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===r&&(n=e[0]),"saturation"===r&&(n=e[1])}this.currentValue=n,this._updateSlider()}_setValue(){var t,e;if(!this._state)return;let i,s=this.currentValue,o=this._config.attribute,r=!0;switch(o){case"brightness":s=Math.ceil(s/100*255),s||(r=!1);break;case"red":case"green":case"blue":i=null!==(t=this._state.attributes.rgb_color)&&void 0!==t?t:[255,255,255],"red"===o&&(i[0]=s),"green"===o&&(i[1]=s),"blue"===o&&(i[2]=s),s=i,o="rgb_color";break;case"hue":case"saturation":i=null!==(e=this._state.attributes.hs_color)&&void 0!==e?e:[100,100],"hue"===o&&(i[0]=s),"saturation"===o&&(i[1]=s),s=i,o="hs_color"}const n={entity_id:this._state.entity_id};r?(n[o]=s,this._config.transition&&(n.transition=this._config.transition),this._hass.callService("light","turn_on",n)):this._hass.callService("light","turn_off",n)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout((()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()}),t?this._config.settle_time:0)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,e,i,s,o;if(!this._entity||!(this._entity in(null!==(e=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{})))return this._showError(`${l("common.no_entity")}: ${this._entity}`);const r=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,n=null!==(s=this._config.show_percentage&&!0)&&void 0!==s&&s,a=null!==(o=this._config.bold_text&&!0)&&void 0!==o&&o;return this._setStyleProperty("--bsc-slider-color",this._config.color),this._setStyleProperty("--bsc-border-color",this._config.border_color),this._setStyleProperty("--bsc-border-radius",this._config.border_radius),this._setStyleProperty("--bsc-border-style",this._config.border_style),this._setStyleProperty("--bsc-border-width",this._config.border_width),this._setStyleProperty("--bsc-height",this._config.height,(t=>`${t}px`)),this._setStyleProperty("--bsc-slider-opacity",this._config.slider_opacity),this._setStyleProperty("--bsc-icon-padding",this._config.icon_padding,(t=>`${t}px`)),this._setStyleProperty("--bsc-text-font-weight",this._config.text_font_weight),H`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${r?"colorize":""}"></div>
        <ha-state-icon
        id="icon"
              .icon=${this._config.icon}
              .state=${this._state}
              .hass=${this._hass}
              .stateObj=${this._state}
              data-domain=${this._entity.split(".")[0]}
              data-state=${(t=>null!=t?t:O)
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._status)}
            ></ha-state-icon>
        <div id="content">
          <p id="label" class="${a?"bold":""}">
            <span id="name">${this._name}</span>
            <span id="percentage" class="${n?"":"hide"}"></span>
          </p>
        </div>
      </ha-card>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return H`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),H`
      ${e}
    `}static get styles(){return et`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 60px);
        --bsc-opacity: 1;
        --bsc-slider-opacity: 0.3;
        --bsc-icon-padding: 24px;
        --bsc-text-font-weight: 400;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        transform: scale(0.99);
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
      }

      .hide {
        display: none
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        opacity: var(--bsc-slider-opacity);
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        transition: background-color 1s ease, filter 1s ease;
      }

      #slider.animate {
        transition: right 1s ease, background-color 1s ease, filter 1s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: var(--bsc-icon-padding);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 calc(2 * var(--bsc-icon-padding) + 24px);
        box-sizing: border-box;
      }

      #label {
        display: flex;
        flex-direction: column;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color);
        font-weight: var(--bsc-text-font-weight);
      }

      #percentage {
        color: var(--bsc-secondary-text-color);
      }

      #name, #percentage {
        transition: color 0.3s;
      }
    `}}var ft,yt;t([c()],mt.prototype,"_config",void 0),t([c()],mt.prototype,"_entity",void 0),t([c()],mt.prototype,"_state",void 0),t([c()],mt.prototype,"_status",void 0),t([c()],mt.prototype,"_name",void 0),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(yt||(yt={}));const bt=[{name:"entity",selector:{entity:{domain:"light"}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"colorize",selector:{boolean:{}}},{name:"show_percentage",selector:{boolean:{}}},{name:"bold_text",selector:{boolean:{}}},{name:"tap_action",selector:{"ui-action":{}}},{name:"hold_action",selector:{"ui-action":{}}}];var $t;console.info(`%c  BIG-SLIDER-CARD \n%c  ${l("common.version")} 1.1.5    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("big-slider-card",mt),customElements.define("big-slider-card-editor",class extends vt{setConfig(t){this._config=t}render(){return H`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${bt}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(t){!function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});o.detail=i,t.dispatchEvent(o)}(this,"config-changed",{config:t.detail.value})}}),window.customCards=null!==($t=window.customCards)&&void 0!==$t?$t:[],window.customCards.push({type:"big-slider-card",name:"Big Slider Card",description:"Big slider card for light entities."});
