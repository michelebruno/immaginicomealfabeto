(self.webpackChunkquestionifotografiche=self.webpackChunkquestionifotografiche||[]).push([[294],{7230:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return P}});var l=t(7334),n=t.n(l),s=t(8029),r=t.n(s),i=t(9983),o=t.n(i),d=t(7294),c=t(2685),u=t(1616),p=t(7734);var m={lastScrollTime:(0,p.zO)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return(0,c.Jj)().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=(0,c.Me)(),a="onwheel",t=a in e;if(!t){var l=e.createElement("div");l.setAttribute(a,"return;"),t="function"==typeof l.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var a=0,t=0,l=0,n=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),l=10*a,n=10*t,"deltaY"in e&&(n=e.deltaY),"deltaX"in e&&(l=e.deltaX),e.shiftKey&&!l&&(l=n,n=0),(l||n)&&e.deltaMode&&(1===e.deltaMode?(l*=40,n*=40):(l*=800,n*=800)),l&&!a&&(a=l<1?-1:1),n&&!t&&(t=n<1?-1:1),{spinX:a,spinY:t,pixelX:l,pixelY:n}},handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:function(){this.enabled&&(this.mouseEntered=!1)},handle:function(e){var a=e,t=this;if(t.enabled){var l=t.params.mousewheel;t.params.cssMode&&a.preventDefault();var n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=(0,u.Z)(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(a.target)&&!l.releaseOnEdges)return!0;a.originalEvent&&(a=a.originalEvent);var s=0,r=t.rtlTranslate?-1:1,i=m.normalize(a);if(l.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(i.pixelX)>Math.abs(i.pixelY)))return!0;s=-i.pixelX*r}else{if(!(Math.abs(i.pixelY)>Math.abs(i.pixelX)))return!0;s=-i.pixelY}else s=Math.abs(i.pixelX)>Math.abs(i.pixelY)?-i.pixelX*r:-i.pixelY;if(0===s)return!0;l.invert&&(s=-s);var o=t.getTranslate()+s*l.sensitivity;if(o>=t.minTranslate()&&(o=t.minTranslate()),o<=t.maxTranslate()&&(o=t.maxTranslate()),(!!t.params.loop||!(o===t.minTranslate()||o===t.maxTranslate()))&&t.params.nested&&a.stopPropagation(),t.params.freeMode){var d={time:(0,p.zO)(),delta:Math.abs(s),direction:Math.sign(s)},c=t.mousewheel.lastEventBeforeSnap,f=c&&d.time<c.time+500&&d.delta<=c.delta&&d.direction===c.direction;if(!f){t.mousewheel.lastEventBeforeSnap=void 0,t.params.loop&&t.loopFix();var v=t.getTranslate()+s*l.sensitivity,g=t.isBeginning,h=t.isEnd;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),t.setTransition(0),t.setTranslate(v),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!g&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeModeSticky){clearTimeout(t.mousewheel.timeout),t.mousewheel.timeout=void 0;var b=t.mousewheel.recentWheelEvents;b.length>=15&&b.shift();var C=b.length?b[b.length-1]:void 0,x=b[0];if(b.push(d),C&&(d.delta>C.delta||d.direction!==C.direction))b.splice(0);else if(b.length>=15&&d.time-x.time<500&&x.delta-d.delta>=1&&d.delta<=6){var y=s>0?.8:.2;t.mousewheel.lastEventBeforeSnap=d,b.splice(0),t.mousewheel.timeout=(0,p.Y3)((function(){t.slideToClosest(t.params.speed,!0,void 0,y)}),0)}t.mousewheel.timeout||(t.mousewheel.timeout=(0,p.Y3)((function(){t.mousewheel.lastEventBeforeSnap=d,b.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(f||t.emit("scroll",a),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),v===t.minTranslate()||v===t.maxTranslate())return!0}}else{var E={time:(0,p.zO)(),delta:Math.abs(s),direction:Math.sign(s),raw:e},w=t.mousewheel.recentWheelEvents;w.length>=2&&w.shift();var z=w.length?w[w.length-1]:void 0;if(w.push(E),z?(E.direction!==z.direction||E.delta>z.delta||E.time>z.time+150)&&t.mousewheel.animateSlider(E):t.mousewheel.animateSlider(E),t.mousewheel.releaseScroll(E))return!0}return a.preventDefault?a.preventDefault():a.returnValue=!1,!1}},animateSlider:function(e){var a=this,t=(0,c.Jj)();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&(0,p.zO)()-a.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&(0,p.zO)()-a.mousewheel.lastScrollTime<60||(e.direction<0?a.isEnd&&!a.params.loop||a.animating||(a.slideNext(),a.emit("scroll",e.raw)):a.isBeginning&&!a.params.loop||a.animating||(a.slidePrev(),a.emit("scroll",e.raw)),a.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)))},releaseScroll:function(e){var a=this,t=a.params.mousewheel;if(e.direction<0){if(a.isEnd&&!a.params.loop&&t.releaseOnEdges)return!0}else if(a.isBeginning&&!a.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=this,a=m.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(a,e.mousewheel.handle),!0;if(!a)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(t=(0,u.Z)(e.params.mousewheel.eventsTarget)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(a,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,a=m.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(a,e.mousewheel.handle),!0;if(!a)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(t=(0,u.Z)(e.params.mousewheel.eventsTarget)),t.off(a,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},f={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){(0,p.cR)(this,{mousewheel:{enabled:!1,lastScrollTime:(0,p.zO)(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:m.enable,disable:m.disable,handle:m.handle,handleMouseEnter:m.handleMouseEnter,handleMouseLeave:m.handleMouseLeave,animateSlider:m.animateSlider,releaseScroll:m.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}};function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var g={handle:function(e){var a=this;if(a.enabled){var t=(0,c.Jj)(),l=(0,c.Me)(),n=a.rtlTranslate,s=e;s.originalEvent&&(s=s.originalEvent);var r=s.keyCode||s.charCode,i=a.params.keyboard.pageUpDown,o=i&&33===r,d=i&&34===r,u=37===r,p=39===r,m=38===r,f=40===r;if(!a.allowSlideNext&&(a.isHorizontal()&&p||a.isVertical()&&f||d))return!1;if(!a.allowSlidePrev&&(a.isHorizontal()&&u||a.isVertical()&&m||o))return!1;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(a.params.keyboard.onlyInViewport&&(o||d||u||p||m||f)){var v=!1;if(a.$el.parents("."+a.params.slideClass).length>0&&0===a.$el.parents("."+a.params.slideActiveClass).length)return;var g=a.$el,h=g[0].clientWidth,b=g[0].clientHeight,C=t.innerWidth,x=t.innerHeight,y=a.$el.offset();n&&(y.left-=a.$el[0].scrollLeft);for(var E=[[y.left,y.top],[y.left+h,y.top],[y.left,y.top+b],[y.left+h,y.top+b]],w=0;w<E.length;w+=1){var z=E[w];if(z[0]>=0&&z[0]<=C&&z[1]>=0&&z[1]<=x){if(0===z[0]&&0===z[1])continue;v=!0}}if(!v)return}a.isHorizontal()?((o||d||u||p)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),((d||p)&&!n||(o||u)&&n)&&a.slideNext(),((o||u)&&!n||(d||p)&&n)&&a.slidePrev()):((o||d||m||f)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),(d||f)&&a.slideNext(),(o||m)&&a.slidePrev()),a.emit("keyPress",r)}}},enable:function(){var e=this,a=(0,c.Me)();e.keyboard.enabled||((0,u.Z)(a).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,a=(0,c.Me)();e.keyboard.enabled&&((0,u.Z)(a).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}},h={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){(0,p.cR)(this,{keyboard:v({enabled:!1},g)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var C={update:function(){var e=this,a=e.rtl,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var l,n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,s=e.pagination.$el,r=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((l=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>n-1-2*e.loopedSlides&&(l-=n-2*e.loopedSlides),l>r-1&&(l-=r),l<0&&"bullets"!==e.params.paginationType&&(l=r+l)):l=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===t.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var i,o,d,c=e.pagination.bullets;if(t.dynamicBullets&&(e.pagination.bulletSize=c.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),s.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=l-e.previousIndex,e.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),i=l-e.pagination.dynamicBulletIndex,d=((o=i+(Math.min(c.length,t.dynamicMainBullets)-1))+i)/2),c.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),s.length>1)c.each((function(e){var a=(0,u.Z)(e),n=a.index();n===l&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=i&&n<=o&&a.addClass(t.bulletActiveClass+"-main"),n===i&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===o&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var m=c.eq(l),f=m.index();if(m.addClass(t.bulletActiveClass),t.dynamicBullets){for(var v=c.eq(i),g=c.eq(o),h=i;h<=o;h+=1)c.eq(h).addClass(t.bulletActiveClass+"-main");if(e.params.loop)if(f>=c.length-t.dynamicMainBullets){for(var b=t.dynamicMainBullets;b>=0;b-=1)c.eq(c.length-b).addClass(t.bulletActiveClass+"-main");c.eq(c.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else v.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),g.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else v.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),g.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var C=Math.min(c.length,t.dynamicMainBullets+4),x=(e.pagination.bulletSize*C-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,y=a?"right":"left";c.css(e.isHorizontal()?y:"top",x+"px")}}if("fraction"===t.type&&(s.find((0,p.Wc)(t.currentClass)).text(t.formatFractionCurrent(l+1)),s.find((0,p.Wc)(t.totalClass)).text(t.formatFractionTotal(r))),"progressbar"===t.type){var E;E=t.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var w=(l+1)/r,z=1,S=1;"horizontal"===E?z=w:S=w,s.find((0,p.Wc)(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+z+") scaleY("+S+")").transition(e.params.speed)}"custom"===t.type&&t.renderCustom?(s.html(t.renderCustom(e,l+1,r)),e.emit("paginationRender",s[0])):e.emit("paginationUpdate",s[0]),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,l=e.pagination.$el,n="";if("bullets"===a.type){var s=e.params.loop?Math.ceil((t-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&s>t&&(s=t);for(var r=0;r<s;r+=1)a.renderBullet?n+=a.renderBullet.call(e,r,a.bulletClass):n+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";l.html(n),e.pagination.bullets=l.find((0,p.Wc)(a.bulletClass))}"fraction"===a.type&&(n=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',l.html(n)),"progressbar"===a.type&&(n=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',l.html(n)),"custom"!==a.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=(0,p.Up)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var a=e.params.pagination;if(a.el){var t=(0,u.Z)(a.el);0!==t.length&&(e.params.uniqueNavElements&&"string"==typeof a.el&&t.length>1&&(t=e.$el.find(a.el)),"bullets"===a.type&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(t.addClass(""+a.modifierClass+a.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",(0,p.Wc)(a.bulletClass),(function(a){a.preventDefault();var t=(0,u.Z)(this).index()*e.params.slidesPerGroup;e.params.loop&&(t+=e.loopedSlides),e.slideTo(t)})),(0,p.l7)(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}},destroy:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),e.pagination.bullets&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",(0,p.Wc)(a.bulletClass))}}},x={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,p.cR)(this,{pagination:b({dynamicBulletIndex:0},C)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var a=e.pagination.$el;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,a){var t=a.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!(0,u.Z)(t).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}};function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var E={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var a=e.scrollbar,t=e.rtlTranslate,l=e.progress,n=a.dragSize,s=a.trackSize,r=a.$dragEl,i=a.$el,o=e.params.scrollbar,d=n,c=(s-n)*l;t?(c=-c)>0?(d=n-c,c=0):-c+n>s&&(d=s+c):c<0?(d=n+c,c=0):c+n>s&&(d=s-c),e.isHorizontal()?(r.transform("translate3d("+c+"px, 0, 0)"),r[0].style.width=d+"px"):(r.transform("translate3d(0px, "+c+"px, 0)"),r[0].style.height=d+"px"),o.hide&&(clearTimeout(e.scrollbar.timeout),i[0].style.opacity=1,e.scrollbar.timeout=setTimeout((function(){i[0].style.opacity=0,i.transition(400)}),1e3))}},setTransition:function(e){var a=this;a.params.scrollbar.el&&a.scrollbar.el&&a.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var a=e.scrollbar,t=a.$dragEl,l=a.$el;t[0].style.width="",t[0].style.height="";var n,s=e.isHorizontal()?l[0].offsetWidth:l[0].offsetHeight,r=e.size/e.virtualSize,i=r*(s/e.size);n="auto"===e.params.scrollbar.dragSize?s*r:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?t[0].style.width=n+"px":t[0].style.height=n+"px",l[0].style.display=r>=1?"none":"",e.params.scrollbar.hide&&(l[0].style.opacity=0),(0,p.l7)(a,{trackSize:s,divider:r,moveDivider:i,dragSize:n}),e.params.watchOverflow&&e.enabled&&a.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var a,t=this,l=t.scrollbar,n=t.rtlTranslate,s=l.$el,r=l.dragSize,i=l.trackSize,o=l.dragStartPos;a=(l.getPointerPosition(e)-s.offset()[t.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(i-r),a=Math.max(Math.min(a,1),0),n&&(a=1-a);var d=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*a;t.updateProgress(d),t.setTranslate(d),t.updateActiveIndex(),t.updateSlidesClasses()},onDragStart:function(e){var a=this,t=a.params.scrollbar,l=a.scrollbar,n=a.$wrapperEl,s=l.$el,r=l.$dragEl;a.scrollbar.isTouched=!0,a.scrollbar.dragStartPos=e.target===r[0]||e.target===r?l.getPointerPosition(e)-e.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),n.transition(100),r.transition(100),l.setDragPosition(e),clearTimeout(a.scrollbar.dragTimeout),s.transition(0),t.hide&&s.css("opacity",1),a.params.cssMode&&a.$wrapperEl.css("scroll-snap-type","none"),a.emit("scrollbarDragStart",e)},onDragMove:function(e){var a=this,t=a.scrollbar,l=a.$wrapperEl,n=t.$el,s=t.$dragEl;a.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),l.transition(0),n.transition(0),s.transition(0),a.emit("scrollbarDragMove",e))},onDragEnd:function(e){var a=this,t=a.params.scrollbar,l=a.scrollbar,n=a.$wrapperEl,s=l.$el;a.scrollbar.isTouched&&(a.scrollbar.isTouched=!1,a.params.cssMode&&(a.$wrapperEl.css("scroll-snap-type",""),n.transition("")),t.hide&&(clearTimeout(a.scrollbar.dragTimeout),a.scrollbar.dragTimeout=(0,p.Y3)((function(){s.css("opacity",0),s.transition(400)}),1e3)),a.emit("scrollbarDragEnd",e),t.snapOnRelease&&a.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var a=(0,c.Me)(),t=e.scrollbar,l=e.touchEventsTouch,n=e.touchEventsDesktop,s=e.params,r=e.support,i=t.$el[0],o=!(!r.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},d=!(!r.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};i&&(r.touch?(i.addEventListener(l.start,e.scrollbar.onDragStart,o),i.addEventListener(l.move,e.scrollbar.onDragMove,o),i.addEventListener(l.end,e.scrollbar.onDragEnd,d)):(i.addEventListener(n.start,e.scrollbar.onDragStart,o),a.addEventListener(n.move,e.scrollbar.onDragMove,o),a.addEventListener(n.end,e.scrollbar.onDragEnd,d)))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var a=(0,c.Me)(),t=e.scrollbar,l=e.touchEventsTouch,n=e.touchEventsDesktop,s=e.params,r=e.support,i=t.$el[0],o=!(!r.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},d=!(!r.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};i&&(r.touch?(i.removeEventListener(l.start,e.scrollbar.onDragStart,o),i.removeEventListener(l.move,e.scrollbar.onDragMove,o),i.removeEventListener(l.end,e.scrollbar.onDragEnd,d)):(i.removeEventListener(n.start,e.scrollbar.onDragStart,o),a.removeEventListener(n.move,e.scrollbar.onDragMove,o),a.removeEventListener(n.end,e.scrollbar.onDragEnd,d)))}},init:function(){var e=this,a=e.scrollbar,t=e.$el;e.params.scrollbar=(0,p.Up)(t,e.params.scrollbar,e.params.createElements,{el:"swiper-scrollbar"});var l=e.params.scrollbar;if(l.el){var n=(0,u.Z)(l.el);e.params.uniqueNavElements&&"string"==typeof l.el&&n.length>1&&1===t.find(l.el).length&&(n=t.find(l.el));var s=n.find("."+e.params.scrollbar.dragClass);0===s.length&&(s=(0,u.Z)('<div class="'+e.params.scrollbar.dragClass+'"></div>'),n.append(s)),(0,p.l7)(a,{$el:n,el:n[0],$dragEl:s,dragEl:s[0]}),l.draggable&&a.enableDraggable(),n&&n[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}},destroy:function(){this.scrollbar.disableDraggable()}},w={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){(0,p.cR)(this,{scrollbar:y({isTouched:!1,timeout:null,dragTimeout:null},E)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,a){e.scrollbar.setTransition(a)},"enable disable":function(e){var a=e.scrollbar.$el;a&&a[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)},destroy:function(e){e.scrollbar.destroy()}}};function z(){return(z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var S={toggleEl:function(e,a){e[a?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=a)},update:function(){var e=this,a=e.params.navigation,t=e.navigation.toggleEl;if(!e.params.loop){var l=e.navigation,n=l.$nextEl,s=l.$prevEl;s&&s.length>0&&(e.isBeginning?t(s,!0):t(s,!1),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](a.lockClass)),n&&n.length>0&&(e.isEnd?t(n,!0):t(n,!1),e.params.watchOverflow&&e.enabled&&n[e.isLocked?"addClass":"removeClass"](a.lockClass))}},onPrevClick:function(e){var a=this;e.preventDefault(),a.isBeginning&&!a.params.loop||a.slidePrev()},onNextClick:function(e){var a=this;e.preventDefault(),a.isEnd&&!a.params.loop||a.slideNext()},init:function(){var e,a,t=this,l=t.params.navigation;(t.params.navigation=(0,p.Up)(t.$el,t.params.navigation,t.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),l.nextEl||l.prevEl)&&(l.nextEl&&(e=(0,u.Z)(l.nextEl),t.params.uniqueNavElements&&"string"==typeof l.nextEl&&e.length>1&&1===t.$el.find(l.nextEl).length&&(e=t.$el.find(l.nextEl))),l.prevEl&&(a=(0,u.Z)(l.prevEl),t.params.uniqueNavElements&&"string"==typeof l.prevEl&&a.length>1&&1===t.$el.find(l.prevEl).length&&(a=t.$el.find(l.prevEl))),e&&e.length>0&&e.on("click",t.navigation.onNextClick),a&&a.length>0&&a.on("click",t.navigation.onPrevClick),(0,p.l7)(t.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(e&&e.addClass(l.lockClass),a&&a.addClass(l.lockClass)))},destroy:function(){var e=this,a=e.navigation,t=a.$nextEl,l=a.$prevEl;t&&t.length&&(t.off("click",e.navigation.onNextClick),t.removeClass(e.params.navigation.disabledClass)),l&&l.length&&(l.off("click",e.navigation.onPrevClick),l.removeClass(e.params.navigation.disabledClass))}},k={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){(0,p.cR)(this,{navigation:z({},S)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var a=e.navigation,t=a.$nextEl,l=a.$prevEl;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),l&&l[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,a){var t=e.navigation,l=t.$nextEl,n=t.$prevEl,s=a.target;if(e.params.navigation.hideOnClick&&!(0,u.Z)(s).is(n)&&!(0,u.Z)(s).is(l)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===s||e.pagination.el.contains(s)))return;var r;l?r=l.hasClass(e.params.navigation.hiddenClass):n&&(r=n.hasClass(e.params.navigation.hiddenClass)),!0===r?e.emit("navigationShow"):e.emit("navigationHide"),l&&l.toggleClass(e.params.navigation.hiddenClass),n&&n.toggleClass(e.params.navigation.hiddenClass)}}}};function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var M={loadInSlide:function(e,a){void 0===a&&(a=!0);var t=this,l=t.params.lazy;if(void 0!==e&&0!==t.slides.length){var n=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children("."+t.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):t.slides.eq(e),s=n.find("."+l.elementClass+":not(."+l.loadedClass+"):not(."+l.loadingClass+")");!n.hasClass(l.elementClass)||n.hasClass(l.loadedClass)||n.hasClass(l.loadingClass)||s.push(n[0]),0!==s.length&&s.each((function(e){var s=(0,u.Z)(e);s.addClass(l.loadingClass);var r=s.attr("data-background"),i=s.attr("data-src"),o=s.attr("data-srcset"),d=s.attr("data-sizes"),c=s.parent("picture");t.loadImage(s[0],i||r,o,d,!1,(function(){if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(r?(s.css("background-image",'url("'+r+'")'),s.removeAttr("data-background")):(o&&(s.attr("srcset",o),s.removeAttr("data-srcset")),d&&(s.attr("sizes",d),s.removeAttr("data-sizes")),c.length&&c.children("source").each((function(e){var a=(0,u.Z)(e);a.attr("data-srcset")&&(a.attr("srcset",a.attr("data-srcset")),a.removeAttr("data-srcset"))})),i&&(s.attr("src",i),s.removeAttr("data-src"))),s.addClass(l.loadedClass).removeClass(l.loadingClass),n.find("."+l.preloaderClass).remove(),t.params.loop&&a){var e=n.attr("data-swiper-slide-index");if(n.hasClass(t.params.slideDuplicateClass)){var p=t.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+t.params.slideDuplicateClass+")");t.lazy.loadInSlide(p.index(),!1)}else{var m=t.$wrapperEl.children("."+t.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');t.lazy.loadInSlide(m.index(),!1)}}t.emit("lazyImageReady",n[0],s[0]),t.params.autoHeight&&t.updateAutoHeight()}})),t.emit("lazyImageLoad",n[0],s[0])}))}},load:function(){var e=this,a=e.$wrapperEl,t=e.params,l=e.slides,n=e.activeIndex,s=e.virtual&&t.virtual.enabled,r=t.lazy,i=t.slidesPerView;function o(e){if(s){if(a.children("."+t.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(l[e])return!0;return!1}function d(e){return s?(0,u.Z)(e).attr("data-swiper-slide-index"):(0,u.Z)(e).index()}if("auto"===i&&(i=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)a.children("."+t.slideVisibleClass).each((function(a){var t=s?(0,u.Z)(a).attr("data-swiper-slide-index"):(0,u.Z)(a).index();e.lazy.loadInSlide(t)}));else if(i>1)for(var c=n;c<n+i;c+=1)o(c)&&e.lazy.loadInSlide(c);else e.lazy.loadInSlide(n);if(r.loadPrevNext)if(i>1||r.loadPrevNextAmount&&r.loadPrevNextAmount>1){for(var p=r.loadPrevNextAmount,m=i,f=Math.min(n+m+Math.max(p,m),l.length),v=Math.max(n-Math.max(m,p),0),g=n+i;g<f;g+=1)o(g)&&e.lazy.loadInSlide(g);for(var h=v;h<n;h+=1)o(h)&&e.lazy.loadInSlide(h)}else{var b=a.children("."+t.slideNextClass);b.length>0&&e.lazy.loadInSlide(d(b));var C=a.children("."+t.slidePrevClass);C.length>0&&e.lazy.loadInSlide(d(C))}},checkInViewOnLoad:function(){var e=(0,c.Jj)(),a=this;if(a&&!a.destroyed){var t=a.params.lazy.scrollingElement?(0,u.Z)(a.params.lazy.scrollingElement):(0,u.Z)(e),l=t[0]===e,n=l?e.innerWidth:t[0].offsetWidth,s=l?e.innerHeight:t[0].offsetHeight,r=a.$el.offset(),i=!1;a.rtlTranslate&&(r.left-=a.$el[0].scrollLeft);for(var o=[[r.left,r.top],[r.left+a.width,r.top],[r.left,r.top+a.height],[r.left+a.width,r.top+a.height]],d=0;d<o.length;d+=1){var p=o[d];if(p[0]>=0&&p[0]<=n&&p[1]>=0&&p[1]<=s){if(0===p[0]&&0===p[1])continue;i=!0}}var m=!("touchstart"!==a.touchEvents.start||!a.support.passiveListener||!a.params.passiveListeners)&&{passive:!0,capture:!1};i?(a.lazy.load(),t.off("scroll",a.lazy.checkInViewOnLoad,m)):a.lazy.scrollHandlerAttached||(a.lazy.scrollHandlerAttached=!0,t.on("scroll",a.lazy.checkInViewOnLoad,m))}}},$={name:"lazy",params:{lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){(0,p.cR)(this,{lazy:T({initialImageLoaded:!1},M)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&(e.params.lazy.checkInView?e.lazy.checkInViewOnLoad():e.lazy.load())},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},"scrollbarDragMove resize _freeModeNoMomentumRelease":function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){var a=e.params,t=a.lazy,l=a.cssMode,n=a.watchSlidesVisibility,s=a.watchSlidesProgress,r=a.touchReleaseOnEdges,i=a.resistanceRatio;t.enabled&&(l||(n||s)&&(r||0===i))&&e.lazy.load()}}},A=t(2682),I=t(1587),D=t(7619),O=t(6802),L=t(8231),N=t(6179);function P(e){var a=e.data.images.nodes,t=e.pageContext,l=(0,d.useRef)(),s=(0,d.useRef)(),i=(0,d.useState)(!1),c=i[0],u=i[1],p=t.descrizione,m=t.titolo,f=t.lettera,v=t.filenames,g=[];return(0,d.useMemo)((function(){return o()(a)}),[]).forEach((function(e){var a=t.immagini.find((function(a){a.lettera;var t=a.autore;return e.relativePath===(null==f?void 0:f.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}))+" "+r()(n()(t))+".jpg"}));a&&(a.childImageSharp=null==e?void 0:e.childImageSharp,a&&g.push(a))})),v.length>g.length?console.log(v.length-a.length+" missing in letter "+f+":",t.filenames.filter((function(e){return-1===a.findIndex((function(a){var t=a.relativePath;return e===t}))}))):26!==v.length&&console.log("Images number is not 26.","Found: "+v.length),d.createElement(L.Z,{hideFooter:!0,containerFluid:!0},d.createElement(N.Z,{description:p,title:"Lettera"}),d.createElement("div",{className:"row no-gutters"},d.createElement("div",{className:"col-12 col-lg-9"},d.createElement("section",{id:"scroller",ref:s,style:{height:"75vh","--slides":g.length}},d.createElement(I.t,{lazy:{loadPrevNext:!0,loadPrevNextAmount:1},keyboard:!0,ref:l,mousewheel:!0,className:"h-100",pagination:!0},g.map((function(e,a){var t=e.descrizione;return d.createElement(D.o,{className:"container-fluid",key:e.id},d.createElement("div",{className:"row align-content-start align-items-lg-center h-100 bg-white flex-row-reverse pb-5"},d.createElement("div",{className:"col-12 col-lg-8 author-cursor-container photograph-image-container d-flex pe-lg-0"},d.createElement("img",{src:(0,O.e)(e),srcSet:(0,O.f)(e),alt:p,className:"lettera-module--immagine--2EFkX"})),d.createElement("div",{className:"col-12 col-lg-4 py-3 position-relative"},d.createElement("div",{className:"row  gx-1 justify-content-between h6 heading-style-regular"},d.createElement("div",{className:"col-auto"},e.autore),d.createElement("div",{className:"col-auto"},a+1+" / "+g.length)),d.createElement("p",{className:"lettera-module--didascalia--3YtWn text-dark-50"},"NO DIDASCALIA"!==t&&t))))}))))),d.createElement("div",{id:"letter-title",className:"col-12 col-lg-3 align-self-center text-center"},d.createElement("h1",null,m))),d.createElement("div",{className:"row"},d.createElement("div",{className:"col text-center position-absolute py-3 py-lg-5",style:{bottom:0}},d.createElement("button",{className:"btn btn-text btn-lg text-uppercase",onClick:function(){return u(!c)}},"Info"))),d.createElement("section",{id:"info-container",className:"container-fluid "+(c?"active":"")+"  d-flex flex-column justify-content-between",style:{overflowY:"scroll"}},d.createElement("div",{className:"row"},d.createElement("div",{className:"col-10 py-5"},d.createElement("p",{className:"display-4"},p))),d.createElement("div",{className:"row "},d.createElement("div",{className:"col-12 text-center py-5"},d.createElement("button",{className:"btn btn-text btn-lg",onClick:function(){return u(!1)}},"CLOSE")))))}A.Z.use([f,h,x,w,k,$])},2663:function(e){e.exports=function(e,a,t,l){var n=-1,s=null==e?0:e.length;for(l&&s&&(t=e[++n]);++n<s;)t=a(t,e[n],n,e);return t}},4286:function(e){e.exports=function(e){return e.split("")}},9029:function(e){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},8674:function(e){e.exports=function(e){return function(a){return null==e?void 0:e[a]}}},4259:function(e){e.exports=function(e,a,t){var l=-1,n=e.length;a<0&&(a=-a>n?0:n+a),(t=t>n?n:t)<0&&(t+=n),n=a>t?0:t-a>>>0,a>>>=0;for(var s=Array(n);++l<n;)s[l]=e[l+a];return s}},180:function(e,a,t){var l=t(4259);e.exports=function(e,a,t){var n=e.length;return t=void 0===t?n:t,!a&&t>=n?e:l(e,a,t)}},8805:function(e,a,t){var l=t(180),n=t(2689),s=t(3140),r=t(9833);e.exports=function(e){return function(a){a=r(a);var t=n(a)?s(a):void 0,i=t?t[0]:a.charAt(0),o=t?l(t,1).join(""):a.slice(1);return i[e]()+o}}},5393:function(e,a,t){var l=t(2663),n=t(3816),s=t(8748),r=RegExp("['’]","g");e.exports=function(e){return function(a){return l(s(n(a).replace(r,"")),e,"")}}},9389:function(e,a,t){var l=t(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=l},2689:function(e){var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},3157:function(e){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},3140:function(e,a,t){var l=t(4286),n=t(2689),s=t(676);e.exports=function(e){return n(e)?s(e):l(e)}},676:function(e){var a="[\\ud800-\\udfff]",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",l="\\ud83c[\\udffb-\\udfff]",n="[^\\ud800-\\udfff]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",r="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+t+"|"+l+")"+"?",o="[\\ufe0e\\ufe0f]?",d=o+i+("(?:\\u200d(?:"+[n,s,r].join("|")+")"+o+i+")*"),c="(?:"+[n+t+"?",t,s,r,a].join("|")+")",u=RegExp(l+"(?="+l+")|"+c+d,"g");e.exports=function(e){return e.match(u)||[]}},2757:function(e){var a="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",o="["+t+"]",d="[^\\ud800-\\udfff"+n+r+a+t+l+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+l+"]",m="(?:"+o+"|"+d+")",f="(?:"+p+"|"+d+")",v="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",C=b+h+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,u].join("|")+")"+b+h+")*"),x="(?:"+[i,c,u].join("|")+")"+C,y=RegExp([p+"?"+o+"+"+v+"(?="+[s,p,"$"].join("|")+")",f+"+"+g+"(?="+[s,p+m,"$"].join("|")+")",p+"?"+m+"+"+v,p+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,a,t){var l=t(9389),n=t(9833),s=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(s,l).replace(r,"")}},8029:function(e,a,t){var l=t(5393),n=t(1700),s=l((function(e,a,t){return e+(t?" ":"")+n(a)}));e.exports=s},1700:function(e,a,t){var l=t(8805)("toUpperCase");e.exports=l},8748:function(e,a,t){var l=t(9029),n=t(3157),s=t(9833),r=t(2757);e.exports=function(e,a,t){return e=s(e),void 0===(a=t?void 0:a)?n(e)?r(e):l(e):e.match(a)||[]}}}]);
//# sourceMappingURL=component---src-components-lettera-js-e1bf41a91b788467651c.js.map