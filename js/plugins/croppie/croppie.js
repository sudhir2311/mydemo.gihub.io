!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.commonJsStrict={})}(this,function(e){function t(e){if(e in U)return e
    for(var t=e[0].toUpperCase()+e.slice(1),n=q.length;n--;)if(e=q[n]+t,e in U)return e}function n(e,t){e=e||{}
    for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?(e[i]=e[i]||{},n(e[i],t[i])):e[i]=t[i]
    return e}function i(e,t,n){var i
    return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},s=n&&!i
    clearTimeout(i),i=setTimeout(a,t),s&&e.apply(o,r)}}function o(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents")
    t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function r(e,t,n){if("string"==typeof t){var i=t
    t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function a(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function s(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function l(e,t){for(var n in t)e.setAttribute(n,t[n])}function u(e){return parseInt(e,10)}function c(e,t,n){var i=t||new Image
    return i.style.opacity=0,new Promise(function(t){function o(){setTimeout(function(){t(i)},1)}return i.src===e?void o():(i.exifdata=null,i.removeAttribute("crossOrigin"),e.match(/^https?:\/\/|^\/\//)&&i.setAttribute("crossOrigin","anonymous"),i.onload=function(){n?EXIF.getData(i,function(){o()}):o()},void(i.src=e))})}function h(e){var t=e.naturalWidth,n=e.naturalHeight
    if(e.exifdata&&e.exifdata.Orientation>=5){var i=t
    t=n,n=i}return{width:t,height:n}}function p(e){return e.exifdata.Orientation}function d(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d")
    switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1)
    break
    case 3:r.translate(i,o),r.rotate(180*Math.PI/180)
    break
    case 4:r.translate(0,o),r.scale(1,-1)
    break
    case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1)
    break
    case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o)
    break
    case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1)
    break
    case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function m(){var e,t,n,i,o,s,u=this,c="croppie-container",h=u.options.viewport.type?"cr-vp-"+u.options.viewport.type:null
    u.options.useCanvas=u.options.enableOrientation||v.call(u),u.data={},u.elements={},e=u.elements.boundary=document.createElement("div"),n=u.elements.viewport=document.createElement("div"),t=u.elements.img=document.createElement("img"),i=u.elements.overlay=document.createElement("div"),u.options.useCanvas?(u.elements.canvas=document.createElement("canvas"),u.elements.preview=u.elements.canvas):u.elements.preview=u.elements.img,a(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),o=u.options.boundary.width,s=u.options.boundary.height,r(e,{width:o+(isNaN(o)?"":"px"),height:s+(isNaN(s)?"":"px")}),a(n,"cr-viewport"),h&&a(n,h),r(n,{width:u.options.viewport.width+"px",height:u.options.viewport.height+"px"}),n.setAttribute("tabindex",0),a(u.elements.preview,"cr-image"),l(u.elements.preview,{alt:"preview","aria-grabbed":"false"}),a(i,"cr-overlay"),u.element.appendChild(e),e.appendChild(u.elements.preview),e.appendChild(n),e.appendChild(i),a(u.element,c),u.options.customClass&&a(u.element,u.options.customClass),C.call(this),u.options.enableZoom&&w.call(u),u.options.enableResize&&f.call(u)}function v(){return this.options.enableExif&&window.EXIF}function f(){function e(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!m)){var r=p.elements.overlay.getBoundingClientRect()
    if(m=!0,o=e.pageX,s=e.pageY,i=-1!==e.currentTarget.className.indexOf("vertical")?"v":"h",l=r.width,u=r.height,e.touches){var a=e.touches[0]
    o=a.pageX,s=a.pageY}window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[S]="none"}}function t(e){var t=e.pageX,n=e.pageY
    if(e.preventDefault(),e.touches){var a=e.touches[0]
    t=a.pageX,n=a.pageY}var c=t-o,h=n-s,m=p.options.viewport.height+h,f=p.options.viewport.width+c
    "v"===i&&m>=v&&u>=m?(r(d,{height:m+"px"}),p.options.boundary.height+=h,r(p.elements.boundary,{height:p.options.boundary.height+"px"}),p.options.viewport.height+=h,r(p.elements.viewport,{height:p.options.viewport.height+"px"})):"h"===i&&f>=v&&l>=f&&(r(d,{width:f+"px"}),p.options.boundary.width+=c,r(p.elements.boundary,{width:p.options.boundary.width+"px"}),p.options.viewport.width+=c,r(p.elements.viewport,{width:p.options.viewport.width+"px"})),E.call(p),B.call(p),x.call(p),_.call(p),s=n,o=t}function n(){m=!1,window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[S]=""}var i,o,s,l,u,c,h,p=this,d=document.createElement("div"),m=!1,v=50
    a(d,"cr-resizer"),r(d,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(c=document.createElement("div"),a(c,"cr-resizer-vertical"),d.appendChild(c)),this.options.resizeControls.width&&(h=document.createElement("div"),a(h,"cr-resizer-horisontal"),d.appendChild(h)),c&&c.addEventListener("mousedown",e),h&&h.addEventListener("mousedown",e),this.elements.boundary.appendChild(d)}function g(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=F(e,4)
    t.value=Math.max(t.min,Math.min(t.max,n))}}function w(){function e(){y.call(n,{value:parseFloat(o.value),origin:new Q(n.elements.preview),viewportRect:n.elements.viewport.getBoundingClientRect(),transform:$.parse(n.elements.preview)})}function t(t){var i,o
    i=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=n._currentZoom+i*n._currentZoom,t.preventDefault(),g.call(n,o),e.call(n)}var n=this,i=n.elements.zoomerWrap=document.createElement("div"),o=n.elements.zoomer=document.createElement("input")
    a(i,"cr-slider-wrap"),a(o,"cr-slider"),o.type="range",o.step="0.0001",o.value=1,o.style.display=n.options.showZoomer?"":"none",o.setAttribute("aria-label","zoom"),n.element.appendChild(i),i.appendChild(o),n._currentZoom=1,n.elements.zoomer.addEventListener("input",e),n.elements.zoomer.addEventListener("change",e),n.options.mouseWheelZoom&&(n.elements.boundary.addEventListener("mousewheel",t),n.elements.boundary.addEventListener("DOMMouseScroll",t))}function y(e){function t(){var e={}
    e[T]=""+i,e[D]=""+a,r(n.elements.preview,e)}var n=this,i=e?e.transform:$.parse(n.elements.preview),o=e?e.viewportRect:n.elements.viewport.getBoundingClientRect(),a=e?e.origin:new Q(n.elements.preview)
    if(n._currentZoom=e?e.value:n._currentZoom,i.scale=n._currentZoom,n.elements.zoomer.setAttribute("aria-valuenow",n._currentZoom),t(),n.options.enforceBoundary){var s=b.call(n,o),l=s.translate,u=s.origin
    i.x>=l.maxX&&(a.x=u.minX,i.x=l.maxX),i.x<=l.minX&&(a.x=u.maxX,i.x=l.minX),i.y>=l.maxY&&(a.y=u.minY,i.y=l.maxY),i.y<=l.minY&&(a.y=u.maxY,i.y=l.minY)}t(),G.call(n),_.call(n)}function b(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,s=t.elements.preview.getBoundingClientRect(),l=s.width,u=s.height,c=i/2,h=o/2,p=-1*(c/n-r),d=p-(l*(1/n)-i*(1/n)),m=-1*(h/n-a),v=m-(u*(1/n)-o*(1/n)),f=1/n*c,g=l*(1/n)-f,w=1/n*h,y=u*(1/n)-w
    return{translate:{maxX:p,minX:d,maxY:m,minY:v},origin:{maxX:g,minX:f,maxY:y,minY:w}}}function x(){var e=this,t=e._currentZoom,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),o=$.parse(e.elements.preview.style[T]),a=new Q(e.elements.preview),s=i.top-n.top+i.height/2,l=i.left-n.left+i.width/2,u={},c={}
    u.y=s/t,u.x=l/t,c.y=(u.y-a.y)*(1-t),c.x=(u.x-a.x)*(1-t),o.x-=c.x,o.y-=c.y
    var h={}
    h[D]=u.x+"px "+u.y+"px",h[T]=""+o,r(e.elements.preview,h)}function C(){function e(e,t){var n=m.elements.preview.getBoundingClientRect(),i=d.y+t,o=d.x+e
    m.options.enforceBoundary?(p.top>n.top+t&&p.bottom<n.bottom+t&&(d.y=i),p.left>n.left+e&&p.right<n.right+e&&(d.x=o)):(d.y=i,d.x=o)}function t(e){m.elements.preview.setAttribute("aria-grabbed",e),m.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function n(e){function t(e){switch(e){case n:return[1,0]
    case o:return[0,1]
    case r:return[-1,0]
    case a:return[0,-1]}}var n=37,o=38,r=39,a=40
    if(!e.shiftKey||e.keyCode!=o&&e.keyCode!=a){if(m.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault()
    var s=t(e.keyCode)
    d=$.parse(m.elements.preview),document.body.style[S]="none",p=m.elements.viewport.getBoundingClientRect(),i(s)}}else{var l=0
    l=e.keyCode==o?parseFloat(m.elements.zoomer.value,10)+parseFloat(m.elements.zoomer.step,10):parseFloat(m.elements.zoomer.value,10)-parseFloat(m.elements.zoomer.step,10),m.setZoom(l)}}function i(t){var n=t[0],i=t[1],o={}
    e(n,i),o[T]=""+d,r(m.elements.preview,o),E.call(m),document.body.style[S]="",x.call(m),_.call(m),h=0}function a(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!v)){if(v=!0,u=e.pageX,c=e.pageY,e.touches){var n=e.touches[0]
    u=n.pageX,c=n.pageY}t(v),d=$.parse(m.elements.preview),window.addEventListener("mousemove",s),window.addEventListener("touchmove",s),window.addEventListener("mouseup",l),window.addEventListener("touchend",l),document.body.style[S]="none",p=m.elements.viewport.getBoundingClientRect()}}function s(t){t.preventDefault()
    var n=t.pageX,i=t.pageY
    if(t.touches){var a=t.touches[0]
    n=a.pageX,i=a.pageY}var s=n-u,l=i-c,p={}
    if("touchmove"==t.type&&t.touches.length>1){var v=t.touches[0],f=t.touches[1],w=Math.sqrt((v.pageX-f.pageX)*(v.pageX-f.pageX)+(v.pageY-f.pageY)*(v.pageY-f.pageY))
    h||(h=w/m._currentZoom)
    var y=w/h
    return g.call(m,y),void o(m.elements.zoomer)}e(s,l),p[T]=""+d,r(m.elements.preview,p),E.call(m),c=i,u=n}function l(){v=!1,t(v),window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",s),window.removeEventListener("mouseup",l),window.removeEventListener("touchend",l),document.body.style[S]="",x.call(m),_.call(m),h=0}var u,c,h,p,d,m=this,v=!1
    m.elements.overlay.addEventListener("mousedown",a),m.elements.viewport.addEventListener("keydown",n),m.elements.overlay.addEventListener("touchstart",a)}function E(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect()
    r(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function _(){var e,t=this,n=t.get()
    if(R.call(t))if(t.options.update.call(t,n),t.$&&"undefined"==typeof Prototype)t.$(t.element).trigger("update",n)
    else{var e
    window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent"),e.initCustomEvent("update",!0,!0,n)),t.element.dispatchEvent(e)}}function R(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function L(){var e=this,t=1,n={},i=e.elements.preview,o=null,a=new $(0,0,t),s=new Q,l=R.call(e)
    l&&!e.data.bound&&(e.data.bound=!0,n[T]=""+a,n[D]=""+s,n.opacity=1,r(i,n),o=e.elements.preview.getBoundingClientRect(),e._originalImageWidth=o.width,e._originalImageHeight=o.height,e.options.enableZoom?B.call(e,!0):e._currentZoom=t,a.scale=e._currentZoom,n[T]=""+a,r(i,n),e.data.points.length?I.call(e,e.data.points):M.call(e),x.call(e),E.call(e))}function B(e){var t,n,i,r,a=this,s=0,l=1.5,u=a.elements.zoomer,c=parseFloat(u.value),h=a.elements.boundary.getBoundingClientRect(),p=a.elements.preview.getBoundingClientRect(),d=a.elements.viewport.getBoundingClientRect()
    a.options.enforceBoundary&&(i=d.width/(e?p.width:p.width/c),r=d.height/(e?p.height:p.height/c),s=Math.max(i,r)),s>=l&&(l=s+1),u.min=F(s,4),u.max=F(l,4),e&&(n=Math.max(h.width/p.width,h.height/p.height),t=null!==a.data.boundZoom?a.data.boundZoom:n,g.call(a,t)),o(u)}function I(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e
    var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),o=t.elements.boundary.getBoundingClientRect(),a={left:i.left-o.left,top:i.top-o.top},s=i.width/n,l=e[1],u=e[0],c=-1*e[1]+a.top,h=-1*e[0]+a.left,p={}
    p[D]=u+"px "+l+"px",p[T]=""+new $(h,c,s),r(t.elements.preview,p),g.call(t,s),t._currentZoom=s}function M(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),o=n.left-i.left,a=n.top-i.top,s=o-(t.width-n.width)/2,l=a-(t.height-n.height)/2,u=new $(s,l,e._currentZoom)
    r(e.elements.preview,T,""+u)}function Z(e){var t=this,n=t.elements.canvas,i=t.elements.img,o=n.getContext("2d"),r=v.call(t),e=t.options.enableOrientation&&e
    if(o.clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height,r&&!e){var a=p(i)
    d(n,i,u(a||0,10))}else e&&d(n,i,e)}function z(e){var t=this,n=e.points,i=u(n[0]),o=u(n[1]),r=u(n[2]),a=u(n[3]),s=r-i,l=a-o,c=e.circle,h=document.createElement("canvas"),p=h.getContext("2d"),d=s,m=l,v=0,f=0,g=d,w=m,y=e.outputWidth&&e.outputHeight,b=1
    return outputHeightRatio=1,y&&(g=e.outputWidth,w=e.outputHeight,b=g/d,outputHeightRatio=w/m),h.width=g,h.height=w,e.backgroundColor&&(p.fillStyle=e.backgroundColor,p.fillRect(0,0,g,w)),t.options.enforceBoundary?(s=Math.min(s,t._originalImageWidth),l=Math.min(l,t._originalImageHeight)):(0>i&&(v=Math.abs(i),i=0),0>o&&(f=Math.abs(o),o=0),r>t._originalImageWidth&&(s=t._originalImageWidth-i,d=s),a>t._originalImageHeight&&(l=t._originalImageHeight-o,m=l)),(1!==b||1!==outputHeightRatio)&&(v*=b,f*=outputHeightRatio,d*=b,m*=outputHeightRatio),p.drawImage(this.elements.preview,i,o,s,l,v,f,d,m),c&&(p.fillStyle="#fff",p.globalCompositeOperation="destination-in",p.beginPath(),p.arc(d/2,m/2,d/2,0,2*Math.PI,!0),p.closePath(),p.fill()),h}function H(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),o=t[2]-t[0],s=t[3]-t[1]
    return a(n,"croppie-result"),n.appendChild(i),r(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,r(n,{width:o+"px",height:s+"px"}),n}function Y(e){return z.call(this,e).toDataURL(e.format,e.quality)}function W(e){var t=this
    return new Promise(function(n,i){z.call(t,e).toBlob(function(e){n(e)},e.format,e.quality)})}function X(e,t){var n,i=this,o=[],r=null,a=v.call(i)
    if("string"==typeof e)n=e,e={}
    else if(Array.isArray(e))o=e.slice()
    else{if(void 0===e&&i.data.url)return L.call(i),_.call(i),null
    n=e.url,o=e.points||[],r=void 0===e.zoom?null:e.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=r,c(n,i.elements.img,a).then(function(n){if(o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100])
    else{var r,a,s=h(n),l=i.elements.viewport.getBoundingClientRect(),u=l.width/l.height,c=s.width/s.height
    c>u?(a=s.height,r=a*u):(r=s.width,a=r/u)
    var p=(s.width-r)/2,d=(s.height-a)/2,m=p+r,v=d+a
    i.data.points=[p,d,m,v]}i.data.points=o.map(function(e){return parseFloat(e)}),i.options.useCanvas&&Z.call(i,e.orientation||1),L.call(i),_.call(i),t&&t()})}function F(e,t){return parseFloat(e).toFixed(t||0)}function k(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,s=i+e.elements.viewport.offsetWidth+r,l=o+e.elements.viewport.offsetHeight+a,u=e._currentZoom;(u===1/0||isNaN(u))&&(u=1)
    var c=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY
    return i=Math.max(c,i/u),o=Math.max(c,o/u),s=Math.max(c,s/u),l=Math.max(c,l/u),{points:[F(i),F(o),F(s),F(l)],zoom:u}}function j(e){var t,i=this,o=k.call(i),r=n(J,n({},e)),a="string"==typeof e?e:r.type||"base64",s=r.size||"viewport",l=r.format,u=r.quality,c=r.backgroundColor,h="boolean"==typeof r.circle?r.circle:"circle"===i.options.viewport.type,p=i.elements.viewport.getBoundingClientRect(),d=p.width/p.height
    return"viewport"===s?(o.outputWidth=p.width,o.outputHeight=p.height):"object"==typeof s&&(s.width&&s.height?(o.outputWidth=s.width,o.outputHeight=s.height):s.width?(o.outputWidth=s.width,o.outputHeight=s.width/d):s.height&&(o.outputWidth=s.height*d,o.outputHeight=s.height)),V.indexOf(l)>-1&&(o.format="image/"+l,o.quality=u),o.circle=h,o.url=i.data.url,o.backgroundColor=c,t=new Promise(function(e,t){switch(a.toLowerCase()){case"rawcanvas":e(z.call(i,o))
    break
    case"canvas":case"base64":e(Y.call(i,o))
    break
    case"blob":W.call(i,o).then(e)
    break
    default:e(H.call(i,o))}})}function A(){L.call(this)}function O(e){if(!this.options.useCanvas)throw"Croppie: Cannot rotate without enableOrientation"
    var t=this,n=t.elements.canvas,i=document.createElement("canvas"),o=1
    i.width=n.width,i.height=n.height
    var r=i.getContext("2d")
    r.drawImage(n,0,0),(90===e||-270===e)&&(o=6),(-90===e||270===e)&&(o=8),(180===e||-180===e)&&(o=3),d(n,i,o),y.call(t),i=null}function N(){var e=this
    e.element.removeChild(e.elements.boundary),s(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function P(e,t){if(this.element=e,this.options=n(n({},P.defaults),t),"img"===this.element.tagName.toLowerCase()){var i=this.element
    a(i,"cr-original-image"),l(i,{"aria-hidden":"true",alt:""})
    var o=document.createElement("div")
    this.element.parentNode.appendChild(o),o.appendChild(i),this.element=o,this.options.url=this.options.url||i.src}if(m.call(this),this.options.url){var r={url:this.options.url,points:this.options.points}
    delete this.options.url,delete this.options.points,X.call(this,r)}}"function"!=typeof Promise&&!function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
    if("function"!=typeof e)throw new TypeError("not a function")
    this._state=null,this._value=null,this._deferreds=[],l(e,t(o,this),t(r,this))}function i(e){var t=this
    return null===this._state?void this._deferreds.push(e):void c(function(){var n=t._state?e.onFulfilled:e.onRejected
    if(null===n)return void(t._state?e.resolve:e.reject)(t._value)
    var i
    try{i=n(t._value)}catch(o){return void e.reject(o)}e.resolve(i)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.")
    if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then
    if("function"==typeof n)return void l(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(i){r.call(this,i)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e])
    this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function l(e,t,n){var i=!1
    try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(o){if(i)return
    i=!0,n(o)}}var u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}
    n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this
    return new n(function(n,r){i.call(o,new s(e,t,n,r))})},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments)
    return new n(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then
    if("function"==typeof s)return void s.call(a,function(e){i(r,e)},n)}e[r]=a,0===--o&&t(e)}catch(l){n(l)}}if(0===e.length)return t([])
    for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.race=function(e){return new n(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},n._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this),"function"!=typeof window.CustomEvent&&!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0}
    var n=document.createEvent("CustomEvent")
    return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;o>a;a++)r[a]=i.charCodeAt(a)
    e(new Blob([r],{type:t||"image/png"}))}})
    var D,T,S,q=["Webkit","Moz","ms"],U=document.createElement("div").style
    T=t("transform"),D=t("transformOrigin"),S=t("userSelect")
    var K={translate3d:{suffix:", 0px"},translate:{suffix:""}},$=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)}
    $.parse=function(e){return e.style?$.parse(e.style[T]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?$.fromMatrix(e):$.fromString(e)},$.fromMatrix=function(e){var t=e.substring(7).split(",")
    return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new $(u(t[4]),u(t[5]),parseFloat(t[0]))},$.fromString=function(e){var t=e.split(") "),n=t[0].substring(P.globals.translate.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0
    return new $(o,r,i)},$.prototype.toString=function(){var e=K[P.globals.translate].suffix||""
    return P.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"}
    var Q=function(e){if(!e||!e.style[D])return this.x=0,void(this.y=0)
    var t=e.style[D].split(" ")
    this.x=parseFloat(t[0]),this.y=parseFloat(t[1])}
    Q.prototype.toString=function(){return this.x+"px "+this.y+"px"}
    var G=i(E,500),J={type:"canvas",format:"png",quality:1},V=["jpeg","webp","png"]
    if(window.jQuery){var ee=window.jQuery
    ee.fn.croppie=function(e){var t=typeof e
    if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=ee(this).data("croppie")
    return"get"===e?i.get():"result"===e?i.result.apply(i,n):"bind"===e?i.bind.apply(i,n):this.each(function(){var t=ee(this).data("croppie")
    if(t){var i=t[e]
    if(!ee.isFunction(i))throw"Croppie "+e+" method not found"
    i.apply(t,n),"destroy"===e&&ee(this).removeData("croppie")}})}return this.each(function(){var t=new P(this,e)
    t.$=ee,ee(this).data("croppie",t)})}}P.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},P.globals={translate:"translate3d"},n(P.prototype,{bind:function(e,t){return X.call(this,e,t)},get:function(){var e=k.call(this),t=e.points
    return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return j.call(this,e)},refresh:function(){return A.call(this)},setZoom:function(e){g.call(this,e),o(this.elements.zoomer)},rotate:function(e){O.call(this,e)},destroy:function(){return N.call(this)}}),e.Croppie=window.Croppie=P,"object"==typeof module&&module.exports&&(module.exports=P)})
    