(function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var u=a[o];0!==i[u]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"077b":function(t,e,a){"use strict";var n=a("f777"),i=a.n(n);i.a},"14c0":function(t,e,a){},"21bb":function(t,e,a){"use strict";var n=a("2dad"),i=a.n(n);i.a},"29e7":function(t,e,a){},"2dad":function(t,e,a){},"4d12":function(t,e,a){},"4dc3":function(t,e,a){},5051:function(t,e,a){"use strict";var n=a("14c0"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("96cf");var n=a("1da1"),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("router-view")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation"},[a("nav",{staticClass:"navbar",class:{"navbar--active":t.isNavOpen},attrs:{tabindex:"0"}},[a("svg",{staticClass:"navbar__icon"},[a("symbol",{attrs:{id:"icon-menu",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"}})]),a("use",{attrs:{"xlink:href":"#icon-menu"}})]),a("ul",{staticClass:"navbar__list"},[t.user?t._e():a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/login"}},[t._v("Login")])],1),t.user?t._e():a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/signup"}},[t._v("Signup")])],1),t.user?t._e():a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/"}},[t._v("Home")])],1),t.user?a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/new-quiz"}},[t._v("New Quiz")])],1):t._e(),t.user?a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/profile"}},[t._v("Profile")])],1):t._e(),t.user?a("li",[a("router-link",{staticClass:"navbar__item",attrs:{to:"/"}},[t._v("Quizzes")])],1):t._e(),t.user?a("li",[a("button",{staticClass:"navbar__item",on:{click:t.logout}},[t._v("Logout")])]):t._e()])])])},u=[],l=a("bc3a"),c=a.n(l),d={name:"Navigation",data:function(){return{isNavOpen:!1}},methods:{logout:function(){c.a.post("/api/users/logout",{},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){localStorage.removeItem("token"),location.reload()})).catch((function(t){console.log(t)}))}},computed:{user:function(){return this.$store.state.user}}},p=d,m=(a("a4e1"),a("2877")),v=Object(m["a"])(p,o,u,!1,null,null,null),f=v.exports,h={name:"App",components:{Navigation:f},data:function(){return{}}},_=h,g=(a("5c0b"),Object(m["a"])(_,s,r,!1,null,null,null)),b=g.exports,z=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("div",{staticClass:"home"},[a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title u-f40"},[t._v("Wellcome Back "+t._s(t.user.name)+"!")])]),t._m(0)]):a("Wellcome")},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home-main"},[a("div",{staticClass:"home-main__card"},[a("h2",[t._v("quiz 1")])]),a("div",{staticClass:"home-main__card"},[a("h2",[t._v("quiz 2")])]),a("div",{staticClass:"home-main__card"},[a("h2",[t._v("quiz 3")])]),a("div",{staticClass:"home-main__card"},[a("h2",[t._v("quiz 4")])]),a("div",{staticClass:"home-main__card"},[a("h2",[t._v("quiz 5")])])])}],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wellcome"},[a("header",{staticClass:"wellcome-header"},[a("h1",{staticClass:"wellcome-header__title"},[a("span",{staticClass:"wellcome-header__title--main"},[t._v("Quizit")]),a("span",{staticClass:"wellcome-header__title--sub"},[t._v("The Ultimate Quiz App")])])]),a("main",{staticClass:"wellcome-main"},[a("div",{staticClass:"wellcome-card wellcome-card--blue",attrs:{tabindex:"1"}},[t._v("card1")]),a("div",{staticClass:"wellcome-card wellcome-card--green",attrs:{tabindex:"1"}},[t._v("card2")]),a("div",{staticClass:"wellcome-card wellcome-card--pink",attrs:{tabindex:"1"}},[t._v("card3")])])])}],x={name:"wellcome",data:function(){return{}}},y=x,P=(a("5051"),Object(m["a"])(y,q,C,!1,null,null,null)),S=P.exports,Q={name:"Home",components:{Wellcome:S},data:function(){return{Myquizzes:null,dialog:!1,quizId:null}},methods:{goToQuizPage:function(t){this.$router.push({name:"quizPage",params:{id:t}})},goToAssignedQuiz:function(t){this.$router.push({name:"takeQuiz",params:{id:t}})}},computed:{storeQuizzes:function(){return this.$store.state.quizzes},user:function(){return this.$store.state.user}}},$=Q,N=(a("21bb"),Object(m["a"])($,w,k,!1,null,null,null)),E=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[t._m(0),a("main",[a("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__text",attrs:{placeholder:" ",id:"login-form-email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"login-form-email"}},[t._v("Email")])]),a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__text",attrs:{placeholder:" ",id:"login-form-password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"login-form-password"}},[t._v("Password")])]),a("button",{staticClass:"form__btn"},[t._v("Login")]),t.feedback?a("p",{staticClass:"form__feedback"},[t._v(t._s(t.feedback))]):t._e()])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title"},[t._v("Login")])])}],A={name:"Login",data:function(){return{email:null,password:null,feedback:null}},created:function(){if(this.user)return this.$router.push({name:"Home"})},methods:{login:function(){var t=this;if(!this.email||!this.password)return this.feedback="Please Fill Out All Fields.";this.feedback=null,c.a.post("/api/users/login",{email:this.email,password:this.password}).then((function(e){localStorage.setItem("token",e.data.token),t.feedback="Loging in!",location.reload()})).catch((function(e){t.feedback=e.response.data.error}))}},computed:{user:function(){return this.$store.state.user}}},j=A,I=Object(m["a"])(j,D,O,!1,null,null,null),R=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup"},[t._m(0),a("main",[a("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form__text",attrs:{placeholder:" ",id:"signup-form-name",type:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"signup-form-name"}},[t._v("Name")])]),a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__text",attrs:{placeholder:" ",id:"signup-form-email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"signup-form-email"}},[t._v("Email")])]),a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__text",attrs:{placeholder:" ",id:"signup-form-password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"signup-form-password"}},[t._v("Password")])]),a("div",{staticClass:"form__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordV,expression:"passwordV"}],staticClass:"form__text",attrs:{placeholder:" ",id:"signup-form-password2",type:"password"},domProps:{value:t.passwordV},on:{input:function(e){e.target.composing||(t.passwordV=e.target.value)}}}),a("label",{attrs:{for:"signup-form-password2"}},[t._v("Password")])]),a("button",{staticClass:"form__btn"},[t._v("Sign Up")]),t.feedback?a("p",{staticClass:"form__feedback"},[t._v(t._s(t.feedback))]):t._e()])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title"},[t._v("Signup")])])}],T=(a("b0c0"),{name:"Signup",data:function(){return{name:null,email:null,password:null,passwordV:null,feedback:null}},methods:{signup:function(){var t=this;return this.name&&this.email&&this.password&&this.passwordV?this.password!=this.passwordV?this.feedback="Password Fields Don't Match":(this.feedback=null,void c.a.post("/api/users/signup",{name:this.name,email:this.email,password:this.password}).then((function(e){t.feedback="User created!",localStorage.setItem("token",e.data.token),location.reload()})).catch((function(e){t.feedback=e.response.data}))):this.feedback="Please Fill Out All Fields."}},created:function(){if(this.user)return this.$router.push({name:"Home"})},computed:{user:function(){return this.$store.state.user}}}),L=T,F=Object(m["a"])(L,M,B,!1,null,null,null),U=F.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"profile container"},[a("h1",[t._v("Profile")]),a("h3",{staticClass:"h3"},[t._v("Name:")]),t.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"profile__input",domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}):a("p",{staticClass:"subtitle-1"},[t._v(t._s(t.name))]),a("h3",{staticClass:"h3"},[t._v("Email:")]),t.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"profile__input",domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}):a("p",{staticClass:"subtitle-1"},[t._v(t._s(t.email))]),t.edit?a("h3",{staticClass:"h3"},[t._v("New Password:")]):t._e(),t.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"profile__input",domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):t._e(),t.edit?a("v-btn",{staticClass:"profile__btn",attrs:{elevation:"2",color:"red accent-4",width:"100"},on:{click:function(e){t.edit=!1}}},[t._v("Cancel")]):a("v-btn",{staticClass:"profile__btn",attrs:{elevation:"2",color:"green accent-3",width:"100"},on:{click:function(e){t.edit=!0}}},[t._v("Edit")]),t.edit?a("v-btn",{staticClass:"profile__btn",attrs:{elevation:"2",color:"blue",width:"100"},on:{click:t.updateUser}},[t._v("Save")]):t._e()],1)},V=[],W={name:"Profile",data:function(){return{edit:!1,name:null,email:null,password:null}},methods:{updateUser:function(){var t={};this.name&&(t.name=this.name),this.email&&(t.email=this.email),this.password&&(t.password=this.password),console.log(t),c.a.patch("/api/users/me",t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){location.reload()})).catch((function(t){console.log(t)}))}},created:function(){var t=this;if(!this.user)return this.$router.push({name:"Home"});var e=setInterval((function(){t.user&&(t.name=t.user.name,t.email=t.user.email,clearInterval(e))}),100)},computed:{user:function(){return this.$store.state.user}}},J=W,Y=(a("6346"),Object(m["a"])(J,H,V,!1,null,null,null)),K=Y.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quiz-maker"},[t._m(0),a("form",{staticClass:"quiz-main quiz-maker-main",on:{submit:function(t){t.preventDefault()}}},[a("ul",t._l(t.questions,(function(e,n){return a("li",{key:n},["multi"==e.type?a("div",{staticClass:"quiz__question quiz__muli-choice"},[a("input",{staticClass:"quiz-maker-main__question-title",attrs:{type:"text"},domProps:{value:e.title}}),a("ul",{staticClass:"quiz-main__list u-indent"},t._l(e.options,(function(t,e){return a("li",{key:e},[a("input",{staticClass:"quiz-maker-main__question-option",class:{"quiz-maker-main__question-option--correct":t.correct,"quiz-maker-main__question-option--incorrect":!t.correct},attrs:{type:"text"},domProps:{value:t.title}}),a("button",{staticClass:"quiz-maker-main__is-correct-btn",on:{click:function(e){t.correct=!t.correct}}},[t.correct?a("svg",{staticClass:"quiz-maker-main__icon quiz-maker-main__icon--correct icon icon-checkmark"},[a("symbol",{attrs:{id:"icon-checkmark",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M27 4l-15 15-7-7-5 5 12 12 20-20z"}})]),a("use",{attrs:{"xlink:href":"#icon-checkmark"}})]):a("svg",{staticClass:"quiz-maker-main__icon icon quiz-maker-main__icon--incorrect icon-cross"},[a("symbol",{attrs:{id:"icon-cross",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"}})]),a("use",{attrs:{"xlink:href":"#icon-cross"}})])])])})),0)]):"text"==e.type?a("div",{staticClass:"quiz__question quiz__text-question"},[a("h3",{staticClass:"u-margin-bottom u-f20 u-no-bold"},[t._v(t._s(e.title))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"question.answer"}],attrs:{type:"text",placeholder:"Leave Blank For Manual Checking."},domProps:{value:e.answer},on:{input:function(a){a.target.composing||t.$set(e,"answer",a.target.value)}}})]):"video"==e.type?a("div",{staticClass:"quiz__video"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.getVideoId(e.url),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):"paragraph"==e.type?a("div",{staticClass:"quiz__paragraph"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"question.text"}],staticClass:"quiz-maker-main__textarea",attrs:{cols:"30",rows:"10"},domProps:{value:e.text},on:{input:function(a){a.target.composing||t.$set(e,"text",a.target.value)}}})]):t._e()])})),0)]),a("div",{staticClass:"quiz-maker__nq-container",attrs:{tabindex:"0"}},[a("span",[t._v("+")]),a("button",{staticClass:"quiz-maker__nq-btn",on:{click:t.addNewTextQuestion}},[t._v("Text")]),a("button",{staticClass:"quiz-maker__nq-btn",on:{click:t.addNewMuliChoiceQuestion}},[t._v("Muli Choice")]),a("button",{staticClass:"quiz-maker__nq-btn",on:{click:function(e){t.ytPopup=!0}}},[t._v("Video")]),a("button",{staticClass:"quiz-maker__nq-btn",on:{click:t.addNewParagraph}},[t._v("Paragraph")])]),t.ytPopup?a("div",{staticClass:"ytpopup__content"},[a("svg",{staticClass:"icon-cross",on:{click:function(e){t.ytPopup=!1}}},[a("symbol",{attrs:{id:"icon-cross",viewBox:"0 0 32 32"}},[a("path",{attrs:{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"}})]),a("use",{attrs:{"xlink:href":"#icon-cross"}})]),a("h3",[t._v("Youtube Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ytLink,expression:"ytLink"}],attrs:{placeholder:"Link",type:"text"},domProps:{value:t.ytLink},on:{input:function(e){e.target.composing||(t.ytLink=e.target.value)}}}),a("button",{on:{click:t.addVideo}},[t._v("Add")])]):t._e(),t.ytPopup?a("div",{staticClass:"ytpopup__overlay"}):t._e()])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title u-f40"},[t._v("THE QUIZ MAKER!")])])}],X=(a("4de4"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),{name:"newQuiz",data:function(){return{ytPopup:!1,ytLink:null,questions:[],quizName:"New Quiz"}},created:function(){if(!this.user)return this.$router.push({name:"Home"})},methods:{deleteQuestion:function(t){var e=0;this.questions=this.questions.filter((function(){return e==t?(e+=1,!1):(e+=1,!0)}))},getVideoId:function(t){var e=new URLSearchParams(t).entries().next().value[1];return e},addNewParagraph:function(){this.questions.push({type:"paragraph",text:"Write Your Paragraph Here..."})},addVideo:function(){this.questions.push({title:"Video Question",type:"video",url:this.ytLink}),this.ytLink=null,this.ytPopup=!1},addNewMuliChoiceQuestion:function(){var t={title:"Muli Choice Question",type:"multi",options:[{title:"Option 1",correct:!0},{title:"Option 2",correct:!1},{title:"Option 3",correct:!1},{title:"Option 4",correct:!1}]};this.questions.push(t)},addNewTextQuestion:function(){this.questions.push({title:"Text Question",type:"text",answer:""})},saveQuiz:function(){var t=this;c.a.post("/api/quiz",{name:this.quizName,questions:this.questions},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.$store.commit("addQuiz",e.data),t.$router.push({name:"Home"})})).catch((function(t){alert("An error has happend :(. Message:".concat(t))}))}},computed:{user:function(){return this.$store.state.user}}}),tt=X,et=(a("e23b"),Object(m["a"])(tt,Z,G,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quiz?a("v-app",{staticClass:"edit-quiz"},[a("h1",[t._v("Quiz Editor")]),a("h2",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quiz.name,expression:"quiz.name"}],staticClass:"edit-quiz__quiz-name",attrs:{type:"text"},domProps:{value:t.quiz.name},on:{input:function(e){e.target.composing||t.$set(t.quiz,"name",e.target.value)}}})]),a("ul",t._l(t.quiz.questions,(function(e,n){return a("li",{key:n,staticClass:"edit-quiz__question"},[a("h3",[a("v-icon",{on:{click:function(e){return t.deleteQuestion(n)}}},[t._v("mdi-trash-can")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"question.title"}],staticClass:"edit-quiz__title-input",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(a){a.target.composing||t.$set(e,"title",a.target.value)}}})],1),a("ol",t._l(e.options,(function(e,n){return a("li",{key:n},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"option.title"}],staticClass:"edit-quiz__input",class:{"edit-quiz__input--green":e.correct,"edit-quiz__input--red":!e.correct},attrs:{type:"text"},domProps:{value:e.title},on:{input:function(a){a.target.composing||t.$set(e,"title",a.target.value)}}}),e.correct?a("v-icon",{staticClass:"edit-quiz__correct-btn",attrs:{color:"green"},on:{click:function(t){e.correct=!1}}},[t._v("mdi-checkbox-marked-circle")]):a("v-icon",{staticClass:"edit-quiz__correct-btn",attrs:{color:"red"},on:{click:function(t){e.correct=!0}}},[t._v("mdi-checkbox-marked-circle")])],1)})),0)])})),0),a("v-btn",{staticClass:"edit-quiz__btn",attrs:{color:"blue"},on:{click:t.addNewQuestion}},[t._v("New Question")]),t.quiz.questions.length>0?a("v-btn",{staticClass:"edit-quiz__btn",attrs:{color:"green"},on:{click:t.saveQuiz}},[t._v("Save")]):t._e()],1):a("h1",[t._v("loading")])},it=[],st={name:"editQuiz",data:function(){return{quiz:!1}},created:function(){var t=this;if(!this.user)return this.$router.push({name:"Home"});var e=setInterval((function(){t.storeQuizzes&&(t.quiz=t.storeQuizzes,t.quiz=t.quiz.filter((function(e){return e._id==t.$route.params.id})),t.quiz=t.quiz[0],clearInterval(e))}),100)},methods:{deleteQuestion:function(t){var e=0;this.quiz.questions=this.quiz.questions.filter((function(){return e==t?(e+=1,!1):(e+=1,!0)}))},addNewQuestion:function(){var t={title:"Question ".concat(this.quiz.questions.length+1),options:[{title:"Option 1",correct:!0},{title:"Option 2",correct:!1},{title:"Option 3",correct:!1},{title:"Option 4",correct:!1}]};this.quiz.questions.push(t)},saveQuiz:function(){var t=this;c.a.patch("/api/quiz/".concat(this.$route.params.id),{name:this.quiz.name,questions:this.quiz.questions},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$router.push({name:"Home"}),location.reload()})).catch((function(t){console.log(t)}))}},computed:{storeQuizzes:function(){return this.$store.state.quizzes},user:function(){return this.$store.state.user}}},rt=st,ot=(a("c000"),Object(m["a"])(rt,nt,it,!1,null,null,null)),ut=ot.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Notfound"},[a("header",{staticClass:"header header-404"},[a("h1",{staticClass:"header__title"},[t._v("404")]),a("h2",{staticClass:"header__sub"},[t._v("No Page With This Url Was Found")])])])}],dt={name:"NotFound",data:function(){return{}}},pt=dt,mt=(a("077b"),Object(m["a"])(pt,lt,ct,!1,null,null,null)),vt=mt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quiz?a("v-app",{staticClass:"take-quiz",class:{".u-loading":t.loading}},[a("h1",{staticClass:"take-quiz__quiz-name"},[t._v(t._s(t.quiz.name))]),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.turnInQuiz(e)}}},[a("ul",t._l(t.quiz.questions,(function(e,n){return a("li",{key:n,staticClass:"take-quiz__question"},[a("h3",[t._v(t._s(e.title))]),t._l(e.options,(function(n,i){return a("v-radio-group",{key:i,model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"question.selected"}},[a("v-radio",{staticClass:"u-no-margin",attrs:{label:n.title,value:n.title}})],1)}))],2)})),0),a("input",{staticClass:"take-quiz__btn",attrs:{type:"submit"}})]),t.score?a("h4",{staticClass:"take-quiz__score"},[t._v(t._s(t.score))]):t._e(),t.feedback?a("p",{staticClass:"u-error-message"},[t._v(t._s(t.feedback))]):t._e()]):a("h1",[t._v("loading")])},ht=[],_t=(a("a623"),a("4160"),a("159b"),{name:"takeQuiz",data:function(){return{quiz:null,currentName:null,feedback:null,finished:!1,score:null,loading:!1}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadQuiz();case 2:t.validiteUser();case 3:case"end":return e.stop()}}),e)})))()},methods:{validiteUser:function(){var t=this,e=!1;if(this.user._id==this.quiz.owner)return e=!0;this.quiz.students.forEach((function(a){a.id==t.user._id&&(e=!0)})),e||this.$router.push({name:"Home"})},turnInQuiz:function(){var t=this;this.finished=!0;var e=this.checkQuiz();if(this.score="".concat(e,"/100"),this.user._id!=this.quiz.owner){var a=this.generateResultsObject(e);c.a.post("/api/quiz/".concat(this.$route.params.id,"/answer"),a,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t)})).catch((function(e){t.feedback=e.response.data}))}},generateResultsObject:function(t){var e={name:this.user.name,email:this.user.email,score:t,answers:[]};return this.quiz.questions.forEach((function(t){e.answers.push({title:t.title,answer:t.selected})})),e},checkQuiz:function(){var t=0;this.quiz.questions.forEach((function(e){var a=e.options.filter((function(t){return t.correct}));a.every((function(t){return t.title==e.selected}))&&t++}));var e=t*(100/this.quiz.questions.length);return Math.round(e)},loadQuiz:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/quiz/".concat(t.$route.params.id)).then((function(e){t.quiz=e.data})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})))()},getCorrectAnswer:function(t){var e=t.options.filter((function(t){return t.correct}));return e[0].title}},computed:{user:function(){return this.$store.state.user}}}),gt=_t,bt=(a("fee8"),Object(m["a"])(gt,ft,ht,!1,null,null,null)),zt=bt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quiz?a("v-app",{staticClass:"quiz-page"},[a("h1",{staticClass:"quiz-page__title"},[t._v(t._s(t.quiz.name))]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.students,"item-key":"name"},scopedSlots:t._u([{key:"item.viewResultsButtons",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"u-pointer",on:{click:function(e){return t.viewResults(n)}}},[t._v("mdi-eye")])]}}],null,!0)}),a("v-row",{attrs:{"no-gutters":"",align:"center"}},[a("v-btn",{staticClass:"flex-grow-1",attrs:{color:"blue lighten-1"},on:{click:function(e){t.formDialog=!0}}},[t._v("Add New Student")]),a("v-btn",{staticClass:"flex-grow-1",attrs:{color:"yellow lighten-1"},on:{click:t.sendToEdit}},[t._v("Edit Quiz")]),a("v-btn",{staticClass:"flex-grow-1",attrs:{color:"green lighten-1"},on:{click:t.sendToTest}},[t._v("Test Quiz")]),a("v-btn",{staticClass:"flex-grow-1",attrs:{color:"red lighten-1"},on:{click:function(e){t.deleteDataPopup=!0,t.deleteDataPopupName="quiz"}}},[t._v("Delete Quiz")])],1),t.feedback?a("p",[t._v(t._s(t.feedback))]):t._e(),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add New Student")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email",required:""},model:{value:t.newStudentEmail,callback:function(e){t.newStudentEmail=e},expression:"newStudentEmail"}})],1)],1),t.popupFeedback?a("p",{staticClass:"u-error-message"},[t._v(t._s(t.popupFeedback))]):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.formDialog=!1,t.popupFeedback=null}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addNewStudent}},[t._v("Add")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.deleteDataPopup,callback:function(e){t.deleteDataPopup=e},expression:"deleteDataPopup"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this "+t._s(t.deleteDataPopupName)+"?")]),a("v-card-text",[t._v("By deleting the "+t._s(t.deleteDataPopupName)+" you or your student won't be able to access this quiz, and all recored of it will be removed for ever(a long time!).")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.deleteDataPopup=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.deleteData}},[t._v("Delete")])],1)],1)],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.studentResultsPopup,callback:function(e){t.studentResultsPopup=e},expression:"studentResultsPopup"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.studentResultsPopup=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Settings")])],1),t.selectedStudentData?a("div",{staticClass:"quiz-page__student-results"},[a("h1",{staticClass:"u-ma-b"},[t._v("Student: "),a("span",{staticClass:"u-bold"},[t._v(t._s(t.selectedStudentData.name))])]),t.selectedStudentData.answers?a("div",{staticClass:"quiz-page__student-results-data"},[a("h2",{staticClass:"u-ma-b"},[t._v("Score: "),a("span",{staticClass:"u-bold"},[t._v(t._s(t.selectedStudentData.score))])]),a("h2",{staticClass:"u-ma-b"},[t._v("Answers:")]),a("ul",t._l(t.selectedStudentData.answers,(function(e,n){return a("li",{key:n,staticClass:"u-ma-b"},[a("h3",[t._v("Question: "+t._s(e.title))]),a("h3",{staticClass:"u-indent"},[t._v('Student Answer: "'+t._s(e.answer)+'"')]),a("h3",{staticClass:"u-indent"},[t._v("Correct: "+t._s(t.isAnswerCorrect(e.answer,n)))]),t.getCorrectAnswer(n).length<2?a("h3",{staticClass:"u-indent"},[t._v('Correct Answer: "'+t._s(t.getCorrectAnswer(n)[0].title)+'"')]):a("h3",{staticClass:"u-indent"},[a("span",[t._v("Correct Answers")]),a("ul",t._l(t.getCorrectAnswer(n),(function(e,n){return a("li",{key:n},[t._v('"'+t._s(e.title)+'"')])})),0)])])})),0)]):a("h2",{staticClass:"u-ma-b"},[t._v("Student didnt take the quiz")]),a("v-btn",{attrs:{color:"red"},on:{click:function(e){t.deleteDataPopup=!0,t.deleteDataPopupName="student"}}},[t._v("Delete User")])],1):a("h1",[t._v("No User Selected")])],1)],1)],1):a("h1",[t._v("loading..")])},kt=[],qt=(a("99af"),{name:"quizPage",data:function(){return{selectedStudentData:null,quiz:!1,formDialog:!1,deleteDataPopup:!1,deleteDataPopupName:null,studentResultsPopup:!1,newStudentEmail:null,popupFeedback:null,students:[],feedback:null,headers:[{text:"Student",align:"start",sortable:!1,value:"name"},{text:"Email",value:"email"},{text:"Score",value:"score"},{text:"View",value:"viewResultsButtons"}]}},methods:{setStudentsScore:function(){var t=this;this.quiz.answers.forEach((function(e){t.students.forEach((function(t){t.email===e.email&&(t.score=e.score)}))}))},sendToEdit:function(){this.$router.push({name:"editQuiz",params:{id:this.quiz._id}})},sendToTest:function(){this.$router.push({name:"takeQuiz",params:{id:this.quiz._id}})},deleteData:function(){"quiz"==this.deleteDataPopupName?this.deleteQuiz():"student"==this.deleteDataPopupName&&this.unassignStudent()},viewResults:function(t){var e=this.quiz.answers.filter((function(e){return e.email===t.email}));if(this.studentResultsPopup=!0,e.length<=0)return this.selectedStudentData=t;this.selectedStudentData=e[0]},getCorrectAnswer:function(t){var e=this.quiz.questions[t].options.filter((function(t){return t.correct}));return e},isAnswerCorrect:function(t,e){var a=this.quiz.questions[e].options.filter((function(t){return t.correct})),n=!1;return a.forEach((function(e){e.title==t&&(n=!0)})),n},unassignStudent:function(){var t=this,e=this.students.filter((function(e){return e.email==t.selectedStudentData.email}))[0].id;c.a.delete("/api/quiz/".concat(this.$route.params.id,"/students?sid=").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.students=t.students.filter((function(t){return t.id!=e.data._id})),t.feedback=null,t.deleteDataPopup=!1,t.studentResultsPopup=!1})).catch((function(e){console.error(e.response.data),t.feedback=e.response.data,t.deleteDataPopup=!1,t.studentResultsPopup=!1}))},deleteQuiz:function(){var t=this;c.a.delete("/api/quiz/".concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.$store.commit("removeQuiz",e.data._id),t.$router.push({name:"Home"})})).catch((function(e){t.feedback=e.response.data,t.deleteDataPopup=!1}))},addNewStudent:function(){var t=this;if(!this.newStudentEmail)return this.popupFeedback="Please Enter An Email";this.feedback=null,c.a.post("/api/quiz/".concat(encodeURIComponent(this.$route.params.id),"/students"),{email:this.newStudentEmail},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.students.push(e.data),t.newStudentEmail=null,t.popupFeedback=null,t.formDialog=!1})).catch((function(e){t.popupFeedback=e.response.data.error,t.newStudentEmail=null}))}},computed:{storeQuizzes:function(){return this.$store.state.quizzes}}}),Ct=qt,xt=(a("88e5"),Object(m["a"])(Ct,wt,kt,!1,null,null,null)),yt=xt.exports;i["a"].use(z["a"]);var Pt=[{path:"/",name:"Home",component:E},{path:"/login",name:"Login",component:R},{path:"/signup",name:"Signup",component:U},{path:"/profile",name:"Profile",component:K},{path:"/new-quiz",name:"newQuiz",component:at},{path:"/quiz/:id/view",name:"quizPage",component:yt},{path:"/quiz/:id/edit",name:"editQuiz",component:ut},{path:"/quiz/:id/take",name:"takeQuiz",component:zt},{path:"/*",name:"NotFound",component:vt}],St=new z["a"]({mode:"history",base:"/",routes:Pt}),Qt=St,$t=a("2f62");i["a"].use($t["a"]);var Nt=new $t["a"].Store({state:{user:null,quizzes:null},mutations:{loadUserData:function(t,e){return t.user=e},loadQuizzes:function(t,e){return t.quizzes=e},removeQuiz:function(t,e){t.quizzes=t.quizzes.filter((function(t){return t._id!=e}))},addQuiz:function(t,e){t.quizzes.push(e)}},actions:{}});i["a"].config.productionTip=!1;var Et=function(){new i["a"]({router:Qt,store:Nt,render:function(t){return t(b)}}).$mount("#app")};if(localStorage.getItem("token")){var Dt=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/users/me",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return e=t.sent,Nt.commit("loadUserData",e.data),t.next=7,c.a.get("/api/quiz",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 7:a=t.sent,Nt.commit("loadQuizzes",a.data),Et(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),Et();case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();Dt()}else Et()},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},6346:function(t,e,a){"use strict";var n=a("4dc3"),i=a.n(n);i.a},"6b9c":function(t,e,a){},"88e5":function(t,e,a){"use strict";var n=a("29e7"),i=a.n(n);i.a},"9c0c":function(t,e,a){},a4e1:function(t,e,a){"use strict";var n=a("4d12"),i=a.n(n);i.a},af4b:function(t,e,a){},c000:function(t,e,a){"use strict";var n=a("af4b"),i=a.n(n);i.a},e23b:function(t,e,a){"use strict";var n=a("6b9c"),i=a.n(n);i.a},ee26:function(t,e,a){},f777:function(t,e,a){},fee8:function(t,e,a){"use strict";var n=a("ee26"),i=a.n(n);i.a}});
//# sourceMappingURL=app.eae6487c.js.map