(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{rO69:function(e,t,i){"use strict";i.r(t);var s=i("a3WO");var a=i("BsWD");function n(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i("x0AG"),i("R5XZ");var r={metaInfo:function(){return{title:this.$page.project.title}},data:function(){return{loading:!1,activeDeviceType:null,deviceTypes:[],images:{Dektop:[],Tablet:[],Smartphone:[]},currentImage:null}},computed:{activeDeviceTypeClass:function(){return this.activeDeviceType?"".concat(this.activeDeviceType.toLowerCase(),"-view"):""},currentImageUrl:function(){return this.currentImage?this.currentImage.file.url:null},currentImageName:function(){return this.currentImage?this.currentImage.title:null},isPrevImage:function(){var e=this,t=this.images[this.activeDeviceType].findIndex((function(t){return t==e.currentImage})),i=this.images[this.activeDeviceType][t-1];return void 0!==i&&i},isNextImage:function(){var e=this,t=this.images[this.activeDeviceType].findIndex((function(t){return t==e.currentImage})),i=this.images[this.activeDeviceType][t+1];return"undefined"!==i&&i}},created:function(){this.setInitData()},mounted:function(){var e=this;window.addEventListener("keyup",(function(t){"ArrowRight"===t.key&&e.clickNextImage(),"ArrowLeft"===t.key&&e.clickPrevImage()}))},methods:{setInitData:function(){this.images.Desktop=n(this.$page.project.desktopMockups),this.images.Tablet=n(this.$page.project.tabletMockups),this.images.Smartphone=n(this.$page.project.smartphoneMockups),this.images.Desktop.length&&this.deviceTypes.push("Desktop"),this.images.Tablet.length&&this.deviceTypes.push("Tablet"),this.images.Smartphone.length&&this.deviceTypes.push("Smartphone"),this.activeDeviceType=this.getInitDeviceType(),this.preloadImage(this.getInitImage())},getInitDeviceType:function(){return this.images.Desktop.length?"Desktop":this.images.Tablet.length?"Tablet":this.images.Smartphone.length?"Smartphone":void 0},getInitImage:function(){return this.images[this.activeDeviceType][0]},resetCurrentImage:function(){this.activeDeviceType&&this.$set(this,"currentImage",this.images[this.activeDeviceType][0])},preloadImage:function(e){var t,i=this,s=new Image;s.onload=function(){i.$set(i,"currentImage",e),i.loading=!1,clearTimeout(t)},s.src=e.file.url,t=setTimeout((function(){i.loading=!0}),50)},getPrevImage:function(){var e=this,t=this.images[this.activeDeviceType].findIndex((function(t){return t==e.currentImage}));return this.images[this.activeDeviceType][t-1]},getNextImage:function(){var e=this,t=this.images[this.activeDeviceType].findIndex((function(t){return t==e.currentImage}));return this.images[this.activeDeviceType][t+1]},clickTypeButton:function(e){this.activeDeviceType=e,this.resetCurrentImage()},clickPrevImage:function(){this.isPrevImage&&this.preloadImage(this.getPrevImage())},clickNextImage:function(){this.isNextImage&&this.preloadImage(this.getNextImage())}}},c=i("KHd+"),l=null,o=Object(c.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("layout",[i("header",{staticClass:"header"},[i("div",{staticClass:"header-text"},[i("p",{staticClass:"title"},[e._v(e._s(e.$page.project.title))]),i("p",{staticClass:"subtitle"},[e._v("Version "+e._s(e.$page.project.version))])]),e.deviceTypes.length>1?i("nav",{staticClass:"nav"},e._l(e.deviceTypes,(function(t,s){return i("span",{key:"deviceType_"+s,class:[t+" button",e.activeDeviceType==t?"":"hollow"],on:{click:function(i){return e.clickTypeButton(t)}}},[e._v("\n        "+e._s(t)+"\n      ")])})),0):e._e()]),i("div",{staticClass:"bg"},[i("div",{staticClass:"window-wrapper"},[i("div",{class:"window "+e.activeDeviceTypeClass},[i("div",{staticClass:"window-header"},[i("div",{staticClass:"bullets"},[i("div",{staticClass:"red-bullet"}),i("div",{staticClass:"yellow-bullet"}),i("div",{staticClass:"green-bullet"})]),i("p",{staticClass:"browser-url"},[e.currentImageName?i("span",[e._v(e._s(e.currentImageName))]):e._e()]),i("div",{staticClass:"navigate-icons"},[i("svg",{staticClass:"navigate-icon",class:{disabled:!e.isPrevImage},attrs:{viewBox:"0 0 20 20",fill:"currentColor"},on:{click:e.clickPrevImage}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"}})]),i("svg",{staticClass:"navigate-icon",class:{disabled:!e.isNextImage},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:e.clickNextImage}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule":"evenodd"}})])])]),i("div",{staticClass:"wrapper-enlarge-view"},[i("div",{staticClass:"enlarge-view"},[i("div",{staticClass:"wrapper-svg"},[i("svg",{attrs:{width:"128",height:"129",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{fill:"none","fill-rule":"evenodd",opacity:".6"}},[i("g",{attrs:{fill:"#262626","fill-rule":"nonzero"}},[i("path",{attrs:{d:"m86.901.026-2.7.9 9.1 9.3-30.1 1 .9 2.8 30.1-1-9.1 9.4.9 2.8 13.6-14-12.7-11.2zm-35.8 11.1-30.1 1 9.1-9.4-.9-2.7-13.6 14 12.8 11.1 2.7-.9-9.1-9.2 30.1-1-1-2.9zM84.401 128.026c-6.1 0-11.1-.1-11.6-.1h-1.1l-.2-1.1s-.5-1.4-4.2-6.4c-2.2-2.9-4.5-5.6-10.5-11.1-3.3-3-8.1-7.4-11.6-10.5-1.8-1.6-3.3-2.9-3.9-3.5-2.2-2.1-8.2-7.5-4.4-12.4 3.7-4.3 16.5 2.1 23 5.8-1.3-10.3-5.7-45.9-6.4-50.9-1-7.6 2.6-9.7 4.9-10.2 3.7-.9 6.2 2.3 7 4.1l.1.4 5.1 31.6c.3-.6.6-1.1 1-1.6 1.2-1.7 3-2.6 5.1-2.9 4-.5 6.6 2.6 8.1 5.2.4-.7 1-1.3 1.7-1.8 1.3-.8 2.8-1.1 4.5-.7 3.1.8 4.9 3.3 5.9 5.5 1.1-1.4 2.8-2.6 5.5-3 1.6-.2 3 .2 4.2 1.1 2.5 2 2.9 5.8 3 6.2l2.8 21.7c.8 6.1-2 13.5-4.4 20-1.9 5-3.6 9.7-3.3 12.5l.2 1.4-1.4.2c-4.6.4-12.5.5-19.1.5zm-10.6-2.9c3.9.1 20 .3 28-.4.1-3.3 1.7-7.6 3.5-12.4 2.3-6.2 4.9-13.3 4.3-18.7l-2.8-21.7c-.1-.9-.6-3.3-1.9-4.3-.6-.5-1.3-.6-2.1-.5-4.2.5-4.5 3.9-4.6 4.3l-2.8.2c0-.1-1.1-6.1-5.1-7.1-.9-.2-1.6-.1-2.2.3-1.2.8-1.7 2.7-1.8 3.4l-2.7.3c0-.1-2.3-7-6.6-6.5-1.4.2-2.4.8-3.2 1.8-2.5 3.3-1.6 9.7-1.4 11l.1.4-2.8.5-.1-.4-6.8-42.4c-.4-.9-1.8-3.1-3.8-2.7-2.3.5-3.2 2.9-2.7 7.1.7 5.9 6.7 53.7 6.7 53.7l.4 2.9-2.5-1.5c-9.1-5.5-20-9.9-21.8-7.8-1 1.3-1.5 3.5 4.1 8.6.7.6 2.1 1.9 3.9 3.5 3.5 3.1 8.4 7.5 11.6 10.5 6.1 5.7 8.5 8.5 10.8 11.5 2.5 3.4 3.7 5.3 4.3 6.4z"}})])])])]),i("p",{staticClass:"first-text"},[e._v("Enlarge your browser window")]),i("p",{staticClass:"second-text"},[e._v("\n              To display the graphics correctly, your browser window must have\n              a minimum with of 1250 pixels.\n            ")])])]),i("div",{staticClass:"wrapper-no-support"},[i("div",{staticClass:"no-support"},[i("p",{staticClass:"primary-p"},[e._v("No mobile support")]),i("p",{staticClass:"secundary-p"},[e._v("\n              To see the mockups, open this link with your computer\n            ")])])]),i("div",{staticClass:"wrapper-content"},[i("div",{staticClass:"content",class:{loading:e.loading}},[e.currentImageUrl&&!e.loading?i("img",{attrs:{src:e.currentImageUrl,alt:""}}):e._e(),e.loading?i("div",{staticClass:"psoload"},[i("div",{staticClass:"straight"}),i("div",{staticClass:"curve"}),i("div",{staticClass:"center"}),i("div",{staticClass:"inner"})]):e._e()])])])])])])}),[],!1,null,null,null);"function"==typeof l&&l(o);t.default=o.exports},x0AG:function(e,t,i){"use strict";var s=i("I+eb"),a=i("tycR").findIndex,n=i("RNIs"),r=!0;"findIndex"in[]&&Array(1).findIndex((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("findIndex")}}]);