(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdaac176"],{"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("da84"),a=n("d039"),c=n("e8b5"),s=n("861d"),i=n("7b0b"),u=n("07fa"),d=n("8418"),l=n("65f0"),f=n("1dde"),h=n("b622"),m=n("2d00"),p=h("isConcatSpreadable"),b=9007199254740991,w="Maximum allowed index exceeded",j=r.TypeError,v=m>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),O=f("concat"),g=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},y=!v||!O;o({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,o,r,a,c=i(this),s=l(c,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?c:arguments[t],g(a)){if(r=u(a),f+r>b)throw j(w);for(n=0;n<r;n++,f++)n in a&&d(s,f,a[n])}else{if(f>=b)throw j(w);d(s,f++,a)}return s.length=f,s}})},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"container"},a={class:"row justify-content-center"},c=Object(o["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),s={class:"col-8"},i={class:"form-floating mb-3"},u=Object(o["h"])("label",{for:"username"},"Email address",-1),d={class:"form-floating"},l=Object(o["h"])("label",{for:"password"},"Password",-1),f=Object(o["h"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),h=Object(o["h"])("p",{class:"mt-5 mb-3 text-muted"},"© 2021~∞ - 六角學院",-1);function m(e,t,n,m,p,b){return Object(o["B"])(),Object(o["g"])("div",r,[Object(o["h"])("div",a,[c,Object(o["h"])("div",s,[Object(o["h"])("form",{id:"form",class:"form-signin",onSubmit:t[2]||(t[2]=Object(o["X"])((function(){return b.logIn&&b.logIn.apply(b,arguments)}),["prevent"]))},[Object(o["h"])("div",i,[Object(o["W"])(Object(o["h"])("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.user.username=e}),required:"",autofocus:""},null,512),[[o["Q"],p.user.username]]),u]),Object(o["h"])("div",d,[Object(o["W"])(Object(o["h"])("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.password=e}),required:""},null,512),[[o["Q"],p.user.password]]),l]),f],32)])]),h])}n("99af"),n("ac1f"),n("5319");var p={data:function(){return{user:{username:"",password:""}}},methods:{logIn:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/admin/signin");this.$http.post(t,this.user).then((function(t){var n=t.data,o=n.token,r=n.expired;document.cookie="myToken=".concat(o,"; expires=").concat(new Date(r),";"),e.$router.push("/admin/products")})).catch((function(e){alert(e.data.message)})).then((function(){}))},checkIfLoginAlready:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");e&&this.$router.push("/admin/products")}},mounted:function(){this.checkIfLoginAlready()}},b=n("6b0d"),w=n.n(b);const j=w()(p,[["render",m]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-fdaac176.ea7ebbbc.js.map