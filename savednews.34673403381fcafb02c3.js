!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"j",(function(){return f})),n.d(t,"c",(function(){return _}));var r={baseUrl:"".concat("https://nomoreparties.co/news/v2/everything?q="),headers:{authorizationNews:"fca1dff7933b432f82d0c7164dfc70f8"},URL:"".concat("http://localhost:3000")},o=JSON.stringify(r),i=JSON.parse(o),a=864e5,c=100,s="ru",u="https://via.placeholder.com/300",d={statusCardUnLoggedIn:0,statusCardLoggedIn:1,statusCardSaved:2},l=0,h=0,f={firstWord:0,secondWord:1,thirdWord:2},_=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){return fetch("".concat(i.options.URL,"/articles"),{method:"GET",credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))},(r="getArticles")in(n=this)?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.options=t}var t,n,o;return t=e,(n=[{key:"signup",value:function(e,t,n){return fetch("".concat(this.options.URL,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",withCredentials:!0,body:JSON.stringify({name:n,email:e,password:t})}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))}},{key:"signin",value:function(e,t){return fetch("".concat(this.options.URL,"/signin"),{method:"POST",credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))}},{key:"getUserById",value:function(){return fetch("".concat(this.options.URL,"/users/me"),{method:"GET",credentials:"include",withCredentials:!0,headers:{authorization:document.cookie,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status))})).catch((function(e){throw e}))}},{key:"createArticle",value:function(e){return fetch("".concat(this.options.URL,"/articles"),{method:"POST",credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image})}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))}},{key:"deleteArticleById",value:function(e){return fetch("".concat(this.options.URL,"/articles/").concat(e),{method:"DELETE",credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))}},{key:"signout",value:function(){return fetch("".concat(this.options.URL,"/signout"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",withCredentials:!0}).then((function(e){return e.ok?e.json():e.json().then(Promise.reject.bind(Promise))})).catch((function(e){throw e}))}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));var i=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_addListenerLogout",(function(e){e.addEventListener("click",i._removeListenerLogout)})),o(this,"_removeListenerLogout",(function(e){if(e.target.classList.contains("menu__button")){e.preventDefault();var t=e.currentTarget;i.mainApi.signout().then((function(){t.removeEventListener("click",i._addListenerLogout),location.reload()})).catch((function(e){console.log(e)}))}})),this.arrayMenusHeaderHide=t,this.menuAuthItem=n,this.mainApi=r}var t,n,i;return t=e,(n=[{key:"render",value:function(){var e=this;this.mainApi.getUserById().then((function(t){if(void 0!==t){var n=t.name;e.menuAuthItem.classList.add("menu__item_logoff");var r=e.arrayMenusHeaderHide.length-1;e.arrayMenusHeaderHide.forEach((function(t,o){t.classList.remove("menu__item_logoff"),o===r&&(t.querySelector(".menu__button").textContent=n,e._addListenerLogout(t))}))}})).catch((function(e){console.log(e)}))}},{key:"renderSecondPage",value:function(){var e=this;this.mainApi.getUserById().then((function(t){if(void 0===t)return location="./";e._addListenerLogout(e.menuAuthItem),e.menuAuthItem.textContent=t.name})).catch((function(e){return console.log(e),location="./"}))}}])&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t,n,o,i,a,c,s,u){var d=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"addListenersMobMenu",(function(){d.mobMenuButton.addEventListener("click",d.mobMenuOpen)})),r(this,"mobMenuOpen",(function(e){e.preventDefault(),d._swapHeaderTheme()})),r(this,"_swapHeaderTheme",(function(){d.mobMenuButton.classList.toggle("header__menu-mob-icon_exit"),d.nav.classList.toggle("header__section_mob"),d.menuSection.classList.toggle("header__nav_mob"),d.menu.classList.toggle("menu_mob"),d.overflow.classList.toggle("overflow_mob"),d.bodyOverflow.classList.toggle("body-theme_overflowHidden"),d.arrayMenuItem.forEach((function(e){e.classList.toggle("menu__item_mob")})),d.headerLogo.classList.toggle("header__logo_mob")})),this.mobMenuButton=t,this.nav=n,this.menuSection=o,this.menu=i,this.arrayMenuItem=a,this.overflow=c,this.bodyOverflow=s,this.headerLogo=u}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function e(t,n,i,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_addCard",(function(e){return c.renderPosition.insertAdjacentHTML("beforeEnd",c.newsCard.getTemplate(e,c.statusLogin,c.keyword))})),o(this,"addListeners",(function(){c.renderPosition.addEventListener("click",c.newsCard.saveHandler),c.renderPosition.addEventListener("click",c.newsCard.removeCard)})),o(this,"initCardList",(function(e){c._clearListCard(),c.items=[],c.items.push(e),c.mainApi.getUserById().then((function(e){void 0!==e?(c.statusLogin=r.g.statusCardLoggedIn,c._showMoreArticles()):(c.statusLogin=r.g.statusCardUnLoggedIn,c._showMoreArticles())})).catch((function(e){console.log(e),c._showMoreArticles()}))})),o(this,"initCardListKeyword",(function(e){c.keyword="",c.keyword=e})),o(this,"_showMoreArticles",(function(){var e=0,t=3;if(c.items[r.a].length!==r.f)for(c.buttonMore.classList.remove("results__button_disabled"),t+=e;e<t&&e<c.items[r.a].length;e++)c._addCard(c.items[r.a][e]),c.items[r.a].shift();else c.buttonMore.classList.add("results__button_disabled")})),o(this,"buttonRender",(function(e){e.preventDefault(),c._showMoreArticles()})),o(this,"_clearListCard",(function(){for(;c.renderPosition.firstChild;)c.renderPosition.removeChild(c.renderPosition.firstChild)})),o(this,"getAllArticles",(function(){c.mainApi.getArticles().then((function(e){c.statusLogin=r.g.statusCardSaved,console.log(e),e.forEach((function(e){console.log(e),c._addCard(e)}))})).catch((function(e){console.log(e)}))})),this.newsCard=t,this.renderPosition=n,this.buttonMore=i,this.mainApi=a,this.items=[],this.statusLogin=r.g.statusCardUnLoggedIn,this.keyword=""}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function o(e){var t=new Date(e),n=t.getMonth();return"".concat(t.getDate()," ").concat(function(e,t){for(var n=0;n<=t;n++)if(n===t)return e[n]}(r.c,n),", ").concat(t.getFullYear())}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"saveHandler",(function(e){if(e.target.classList.contains("card__state")){var t=e.target.closest(".card__state"),r=e.target.closest(".card"),o={keyword:n.searchKeyword,title:r.querySelector(".card__title").textContent,text:r.querySelector(".card__text").textContent,date:r.querySelector(".card__date").textContent,source:r.querySelector(".card__source").textContent,link:r.querySelector(".card__link").getAttribute("href"),image:r.querySelector(".card__photo").getAttribute("src")};n.mainApi.createArticle(o).then((function(e){void 0!==e&&t.classList.add("card__state_marked")})).catch((function(e){console.log(e)}))}})),a(this,"removeCard",(function(e){if(e.target.classList.contains("card__state-delete")&&confirm("Are you sure you want to delete this article?")){var t=e.target.closest(".card");n.mainApi.deleteArticleById(t.articleId).then((function(e){void 0!==e&&t.remove()})).catch((function(e){console.log(e)}))}})),this.mainApi=t,this.searchKeyword=""}var t,n,c;return t=e,(n=[{key:"getTemplate",value:function(e,t,n){this.searchKeyword="",this.searchKeyword=n;var i=null===e.urlToImage?r.b:e.urlToImage;return t===r.g.statusCardUnLoggedIn?'<div class="card">\n        <div class="card__image">\n          <img src="'.concat(this._sanitizeHTML(i),'" alt="').concat(this._sanitizeHTML(e.title),'" class="card__photo">\n          <div class="card__set">\n            <div class="card__login card__login_disabled"><span class="card__login-text">Войдите, чтобы\n              сохранять статьи</span></div>\n            <div class="card__state"></div>\n          </div>\n        </div>\n        <a href="').concat(this._sanitizeHTML(e.url),'" target="_blank" class="card__link">\n          <span class="card__date">').concat(this._sanitizeHTML(o(e.publishedAt)),'</span>\n          <h3 class="card__title">').concat(this._sanitizeHTML(e.title),'</h3>\n          <p class="card__text">').concat(this._sanitizeHTML(e.description),'</p>\n          <span class="card__source">').concat(this._sanitizeHTML(e.source.name),"</span>\n        </a>\n      </div>"):t===r.g.statusCardLoggedIn?'<div class="card">\n        <div class="card__image">\n          <img src="'.concat(this._sanitizeHTML(i),'" alt="').concat(this._sanitizeHTML(e.title),'" class="card__photo">\n          <div class="card__set">\n            <div class="card__state"></div>\n          </div>\n        </div>\n        <a href="').concat(this._sanitizeHTML(e.url),'" target="_blank" class="card__link">\n          <span class="card__date">').concat(this._sanitizeHTML(o(e.publishedAt)),'</span>\n          <h3 class="card__title">').concat(this._sanitizeHTML(e.title),'</h3>\n          <p class="card__text">').concat(this._sanitizeHTML(e.description),'</p>\n          <span class="card__source">').concat(this._sanitizeHTML(e.source.name),"</span>\n        </a>\n      </div>"):t===r.g.statusCardSaved?'<div class="card" id="'.concat(e._id,'">\n        <div class="card__image">\n          <img src="').concat(this._sanitizeHTML(i),'" alt="').concat(this._sanitizeHTML(e.title),'" class="card__photo">\n          <div class="card__set">\n            <div class="card__name"><span class="card__name-is">').concat(this._sanitizeHTML(e.keyword),'</span></div>\n            <div class="card__login"><span class="card__login-saved">Убрать из сохранённых</span></div>\n            <div class="card__state-delete"></div>\n          </div>\n        </div>\n        <a href="').concat(this._sanitizeHTML(e.url),'" target="_blank" class="card__link">\n          <span class="card__date">').concat(this._sanitizeHTML(o(e.publishedAt)),'</span>\n          <h3 class="card__title">').concat(this._sanitizeHTML(e.title),'</h3>\n          <p class="card__text">').concat(this._sanitizeHTML(e.description),'</p>\n          <span class="card__source">').concat(this._sanitizeHTML(e.source.name),"</span>\n        </a>\n      </div>"):void 0}},{key:"_sanitizeHTML",value:function(e){var t=document.createElement("div");return t.textContent=e,t.innerHTML}}])&&i(t.prototype,n),c&&i(t,c),e}()},function(e,t){var n=document.querySelector(".header"),r=document.querySelector(".header__logo"),o=document.querySelectorAll(".menu__item_logoff"),i=document.querySelector(".menu__item_auth"),a=document.querySelector(".header__menu-mob-icon"),c=document.querySelector(".header__section"),s=document.querySelector(".header__nav"),u=document.querySelector(".menu"),d=document.querySelectorAll(".menu__item"),l=document.querySelector(".overflow"),h=document.querySelector(".body-theme"),f=document.querySelector(".search__form"),_=document.querySelector(".search__button"),m=document.querySelector(".results__card-case"),g=document.querySelector(".results"),p=document.querySelector(".results__loading"),y=document.querySelector(".results__nothing"),v=document.querySelector(".results__button"),b=document.querySelector("#authButton"),w=document.querySelector("#popupLogin"),L=document.querySelector("#submitLogin"),S=document.querySelector("#linkToSignup"),C=document.querySelector("#linkToLogin"),T=document.querySelector("#logIn"),A=document.querySelector(".popup__signup"),M=document.querySelector("#submitSignup"),j=document.querySelector("#signUp"),k=document.querySelector(".popup__success"),P=document.querySelector("#successLinkToLogin"),H=document.querySelector(".articles__title"),q=document.querySelector(".articles__keyword");e.exports={headerTheme:n,headerLogo:r,arrayMenusHeaderHide:o,menuAuthItem:i,mobMenuButton:a,nav:c,menuSection:s,menu:u,arrayMenuItem:d,overflow:l,bodyOverflow:h,searchForm:f,searchButton:_,caseCards:m,caseResults:g,loadingNews:p,notFoundNews:y,showMoreButton:v,authButton:b,popupUserLogin:w,loginButton:L,signupLink:S,loginLink:C,popupLoginForm:T,popupUserSignup:A,signupButton:M,popupSignupForm:j,popupSuccessRegister:k,popupSuccessLink:P,articleTitle:H,articleKeywordsArray:q}},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(8);var r=n(0),o=n(2),i=n(1),a=n(5),c=n(4);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"getUserInfo",(function(){o.mainApi.getUserById().then((function(e){o.articleTitle.textContent="".concat(e.name,", у вас ").concat(o.countArticle," сохранённых статей")}))})),u(this,"getSaveKeyword",(function(){o.mainApi.getArticles().then((function(e){o.getUserInfo(),void 0!==e&&(o.countArticle=e.length,e.forEach((function(e){o.keywordsArray.push(e.keyword)})),o.getUserInfo(),o._getPopularKeyword())}))})),u(this,"_getPopularKeyword",(function(){var e={};o.keywordsArray.forEach((function(t){void 0!==e[t]?++e[t]:e[t]=1}));var t=[];for(var n in e)t.push([n,e[n]]);t.sort((function(e,t){return t[1]-e[1]})),o._setPopularWord(t)})),this.mainApi=t,this.articleTitle=n,this.articleKeywordsArray=r,this.countArticle=0,this.keywordsArray=[]}var t,n,o;return t=e,(n=[{key:"_setPopularWord",value:function(e){var t=e.flat(1/0).filter((function(e){return"string"==typeof e}));""!==this.articleKeywordsArray[r.j.secondWord].textContent?(this.articleKeywordsArray[r.j.firstWord].textContent="".concat(t[r.j.firstWord],","),this.articleKeywordsArray[r.j.secondWord].textContent="".concat(t[r.j.secondWord]),this.articleKeywordsArray[r.j.thirdWord].textContent=" и ".concat(t.length-r.j.thirdWord," другим")):(this.articleKeywordsArray[r.j.firstWord].textContent="".concat(t[r.j.firstWord]),this.articleKeywordsArray[r.j.secondWord].textContent="",this.articleKeywordsArray[r.j.thirdWord].textContent=" и ".concat(t.length-r.j.secondWord," другим"))}}])&&s(t.prototype,n),o&&s(t,o),e}(),l=n(3),h=n(6),f=h.headerLogo,_=h.arrayMenusHeaderHide,m=h.menuAuthItem,g=h.mobMenuButton,p=h.nav,y=h.menuSection,v=h.menu,b=h.arrayMenuItem,w=h.overflow,L=h.bodyOverflow,S=h.caseCards,C=h.loadingNews,T=h.notFoundNews,A=h.showMoreButton,M=h.articleTitle,j=h.articleKeywordsArray,k=new i.a(r.h),P=new o.a(_,m,k,C,T),H=new a.a(k),q=new c.a(H,S,A,k),O=new d(k,M,j),I=new l.a(g,p,y,v,b,w,L,f);P.renderSecondPage(),q.getAllArticles(),q.addListeners(),O.getSaveKeyword(),I.addListenersMobMenu()}]);