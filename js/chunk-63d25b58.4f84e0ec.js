(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63d25b58"],{"00b4":function(e,t,c){"use strict";c("ac1f");var s=c("23e7"),a=c("da84"),r=c("c65b"),o=c("e330"),n=c("1626"),l=c("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=a.Error,u=o(/./.test);s({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!n(t))return u(this,e);var c=r(t,this,e);if(null!==c&&!l(c))throw new d("RegExp exec method returned something other than an Object or null");return!!c}})},3319:function(e,t,c){"use strict";c.r(t);c("b0c0");var s=c("7a23"),a=Object(s["h"])("h2",null,"填寫資料",-1),r={class:"container"},o={class:"row d-flex flex-row-reverse"},n={class:"col-xl-7 mb-4"},l=Object(s["h"])("h5",{class:"fw-bold text-center pb-4 border-bottom"},"填寫訂購資料",-1),i={class:"row"},d={class:"mb-2 col-sm-6"},u=Object(s["h"])("label",{for:"userName",class:"col-form-label"},"訂購人姓名",-1),b={class:"mb-2 col-sm-6"},h=Object(s["h"])("label",{for:"userEmail",class:"col-form-label"},"信箱",-1),f={class:"mb-2 col-sm-4"},m=Object(s["h"])("label",{for:"userPhone",class:"col-form-label"},"聯絡電話",-1),p={class:"mb-2 col-sm-8"},j=Object(s["h"])("label",{for:"userAddress",class:"col-form-label"},"寄送地址",-1),O={class:"mb-2"},v=Object(s["h"])("label",{for:"userMessage",class:"form-label"},"備註",-1),g={class:"m-3 form-check"},x=Object(s["h"])("label",{class:"form-check-label text-dark",for:"userTerms"}," 我已閱讀並確認網站的訂購條款 ",-1),w=Object(s["j"])(" 送出訂單"),y=Object(s["h"])("i",{class:"bi bi-arrow-right"},null,-1),k=[w,y],S={class:"col-xl-5 mb-4"},M={class:"cartlist border border-dark rounded-3 p-4"},V=Object(s["i"])('<h5 class="fw-bold text-center pb-4 border-bottom">訂單細項</h5><div class="row fs-8 py-2 mx-0 border-bottom"><div class="col-2 text-start ps-2">商品圖片</div><div class="col-10 row"><div class="col-8 text-start ps-5">產品及訂購數量</div><div class="col-4 text-end pe-1">小計</div></div></div>',2),$={class:"col-2 px-md-2 p-0 cart-img"},_=["src","alt"],I={class:"col-10 row d-flex align-items-end justify-content-between"},U={class:"col-8 row px-sm-2 px-0"},T={class:"px-1 text-start cart-litext"},C={class:"px-1 text-start d-flex justify-content-start cart-litext"},L={class:"text-nowrap"},E=Object(s["h"])("span",{class:"mx-lg-4 mx-2"},"×",-1),N={class:"text-nowrap cart_qty d-inline-flex justify-content-center"},q={class:"col-4 text-end"},J={class:"text-end"},P={class:"info border-top"},B={class:"d-flex justify-content-between align-items-center py-3"},A=Object(s["h"])("p",{class:"fw-bold"},"商品總計",-1),F={key:0,class:"d-flex justify-content-between align-items-center pb-3"},R=Object(s["h"])("p",{class:"fw-bold"},"商品折抵",-1),H={class:"text-danger"},Q={class:"d-flex justify-content-between align-items-center pb-3"},W=Object(s["h"])("p",{class:"fw-bold"},"運費",-1),X={class:"d-flex justify-content-between border-top py-3"},z=Object(s["h"])("p",{class:"fw-bold"},"結帳總金額",-1),D={class:"fw-bold fs-5"};function G(e,t,c,w,y,G){var K=Object(s["J"])("OrderStatus"),Y=Object(s["J"])("Field"),Z=Object(s["J"])("ErrorMessage"),ee=Object(s["J"])("Form");return Object(s["B"])(),Object(s["g"])(s["a"],null,[a,Object(s["h"])("div",r,[Object(s["k"])(K,{nowStatus:y.nowStatus},null,8,["nowStatus"]),Object(s["h"])("div",o,[Object(s["h"])("div",n,[Object(s["k"])(ee,{class:"border border-dark rounded-3 p-4"},{default:Object(s["V"])((function(e){var c=e.errors;return[l,Object(s["h"])("div",i,[Object(s["h"])("div",d,[u,Object(s["k"])(Y,{type:"text",placeholder:"姓名",class:Object(s["s"])(["form-control",{"is-invalid":c["姓名"]}]),id:"userName",modelValue:y.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return y.form.user.name=e}),name:"姓名",rules:"required"},null,8,["modelValue","class"]),Object(s["k"])(Z,{name:"姓名",class:"invalid-feedback"})]),Object(s["h"])("div",b,[h,Object(s["k"])(Y,{type:"text",placeholder:"訂購資訊信箱",class:Object(s["s"])(["form-control",{"is-invalid":c["電子信箱"]}]),id:"userEmail",modelValue:y.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.form.user.email=e}),name:"電子信箱",rules:"email|required"},null,8,["modelValue","class"]),Object(s["k"])(Z,{name:"電子信箱",class:"invalid-feedback"})]),Object(s["h"])("div",f,[m,Object(s["k"])(Y,{type:"tel",placeholder:"連絡電話",class:Object(s["s"])(["form-control",{"is-invalid":c["連絡電話"]}]),id:"userPhone",modelValue:y.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return y.form.user.tel=e}),name:"連絡電話",rules:G.isPhone},null,8,["modelValue","rules","class"]),Object(s["k"])(Z,{name:"連絡電話",class:"invalid-feedback"})]),Object(s["h"])("div",p,[j,Object(s["k"])(Y,{type:"text",placeholder:"請輸入寄送地址",class:Object(s["s"])(["form-control",{"is-invalid":c["地址"]}]),id:"userAddress",modelValue:y.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.form.user.address=e}),name:"地址",rules:"required"},null,8,["modelValue","class"]),Object(s["k"])(Z,{name:"地址",class:"invalid-feedback"})]),Object(s["h"])("div",O,[v,Object(s["W"])(Object(s["h"])("textarea",{class:"form-control",id:"userMessage",rows:"3","onUpdate:modelValue":t[4]||(t[4]=function(e){return y.form.message=e})},null,512),[[s["Q"],y.form.message]])]),Object(s["h"])("div",g,[Object(s["k"])(Y,{class:Object(s["s"])(["form-check-input",{"is-invalid":c["check"]}]),type:"checkbox",value:"checked",id:"userTerms",name:"check",rules:G.termsCheck},null,8,["class","rules"]),x,Object(s["k"])(Z,{name:"check",class:"invalid-feedback"})])]),Object(s["h"])("button",{type:"button",class:"btn btn-warning w-100 text-center",onClick:t[5]||(t[5]=function(){return G.onSubmit&&G.onSubmit.apply(G,arguments)})},k)]})),_:1})]),Object(s["h"])("div",S,[Object(s["h"])("div",M,[V,Object(s["h"])("ul",null,[(Object(s["B"])(!0),Object(s["g"])(s["a"],null,Object(s["H"])(y.cart,(function(e){return Object(s["B"])(),Object(s["g"])("li",{class:"row my-4 d-flex align-items-center justify-content-between",key:e.id},[Object(s["h"])("div",$,[Object(s["h"])("img",{class:"w-100 border-0 rounded-2",src:e.product.imageUrl,alt:e.product.title},null,8,_)]),Object(s["h"])("div",I,[Object(s["h"])("div",U,[Object(s["h"])("h6",T,Object(s["M"])(e.product.title),1),Object(s["h"])("div",C,[Object(s["h"])("span",L," NT$ "+Object(s["M"])(e.product.price.toLocaleString("en-US")),1),E,Object(s["h"])("span",null,[Object(s["h"])("div",N,Object(s["M"])(e.qty+e.product.unit),1)])])]),Object(s["h"])("div",q,[Object(s["h"])("span",J,"NT$ "+Object(s["M"])(e.total.toLocaleString("en-US")),1)])])])})),128))]),Object(s["h"])("div",P,[Object(s["h"])("div",B,[A,Object(s["h"])("p",null,"NT$ "+Object(s["M"])(y.total.toLocaleString("en-US")),1)]),y.total-y.final_total>0?(Object(s["B"])(),Object(s["g"])("div",F,[R,Object(s["h"])("p",H," - NT$ "+Object(s["M"])(Math.round(y.total-y.final_total).toLocaleString("en-US")),1)])):Object(s["f"])("",!0),Object(s["h"])("div",Q,[W,Object(s["h"])("p",null,"NT$ "+Object(s["M"])(y.delivery_charge.toLocaleString("en-US")),1)])]),Object(s["h"])("div",X,[z,Object(s["h"])("p",D," NT$ "+Object(s["M"])(Math.round(y.final_total+y.delivery_charge).toLocaleString("en-US")),1)])])])])])],64)}c("99af"),c("ac1f"),c("00b4");var K=c("6be2"),Y=c("8514"),Z={data:function(){return{products:[],cart:[],total:0,final_total:0,isLoadingItem:"",nowStatus:"填寫資料",delivery_charge:0,orderId:"",form:{user:{name:"",email:"",tel:"",address:"",delivery_way:""},message:""}}},inject:["emitter"],components:{OrderStatus:Y["a"]},methods:{getProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/products/all")).then((function(t){e.products=t.data.products}))},getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/cart")).then((function(t){console.log(t),e.cart=t.data.data.carts,e.final_total=Math.round(t.data.data.final_total),e.total=t.data.data.total})).catch((function(){e.emitter.emit("push-message",{type:"error",message:"發生錯誤，請重新整理頁面"})}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s={product_id:e,qty:c};this.isLoadingItem=e,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/cart"),{data:s}).then((function(e){console.log(e),t.isLoadingItem="",K["a"].emit("get-cart")}))},delItem:function(e){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/cart/").concat(e)).then((function(e){console.log("delItem",e),t.getCart()})).catch((function(e){console.log(e)}))},delCarts:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/carts")).then((function(t){console.log("delItems",t),e.getCart()})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},termsCheck:function(e){return!(!e||!e.length)||"請勾選同意網站的條款與條件"},onSubmit:function(){var e=this,t={data:this.form};this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/order"),t).then((function(t){t.data.success&&(console.log("訂單",t.data.orderId),e.orderId=t.data.orderId,e.emitter.emit("push-message",{style:"success",title:"訂單成立",content:"訂單已成立，付款後將立即為您出貨"}),console.log(e.orderId))})).catch((function(e){console.log(e)}))}},mounted:function(){this.getProducts(),this.getCart()}},ee=c("6b0d"),te=c.n(ee);const ce=te()(Z,[["render",G]]);t["default"]=ce},"6be2":function(e,t,c){"use strict";var s=c("1344"),a=Object(s["a"])();t["a"]=a},8514:function(e,t,c){"use strict";var s=c("7a23"),a={class:"p-4 d-flex justify-content-between mx-md-5 px-md-5 my-3 text-secondary"},r={class:"d-flex flex-column align-items-center"},o=Object(s["h"])("p",{class:"text-nowrap mt-2"},"購物清單",-1),n=Object(s["h"])("hr",{class:"w-100"},null,-1),l={class:"d-flex flex-column align-items-center"},i=Object(s["h"])("p",{class:"text-nowrap mt-2"},"填寫資料",-1),d=Object(s["h"])("hr",{class:"w-100"},null,-1),u={class:"d-flex flex-column align-items-center"},b=Object(s["h"])("p",{class:"text-nowrap mt-2"},"確認付款",-1),h=Object(s["h"])("hr",{class:"w-100"},null,-1),f={class:"d-flex flex-column align-items-center"},m=Object(s["h"])("p",{class:"text-nowrap mt-2"},"完成購物",-1);function p(e,t,c,p,j,O){return Object(s["B"])(),Object(s["g"])("div",a,[Object(s["h"])("div",r,[Object(s["h"])("div",{class:Object(s["s"])(["cart-icon text-center fs-5 pt-1 border border-secondary rounded-circle",{"bg-secondary text-light":"購物清單"===c.nowStatus}])}," 1 ",2),o]),n,Object(s["h"])("div",l,[Object(s["h"])("div",{class:Object(s["s"])(["cart-icon text-center fs-5 pt-1 border border-secondary rounded-circle",{"bg-secondary text-light":"填寫資料"===c.nowStatus}])}," 2 ",2),i]),d,Object(s["h"])("div",u,[Object(s["h"])("div",{class:Object(s["s"])(["cart-icon text-center fs-5 pt-1 border border-secondary rounded-circle",{"bg-secondary text-light":"確認付款"===c.nowStatus}])}," 3 ",2),b]),h,Object(s["h"])("div",f,[Object(s["h"])("div",{class:Object(s["s"])(["cart-icon text-center fs-5 pt-1 border border-secondary rounded-circle",{"bg-secondary text-light":"完成購物"===c.nowStatus}])}," 4 ",2),m])])}var j={props:["nowStatus"]},O=c("6b0d"),v=c.n(O);const g=v()(j,[["render",p]]);t["a"]=g},"99af":function(e,t,c){"use strict";var s=c("23e7"),a=c("da84"),r=c("d039"),o=c("e8b5"),n=c("861d"),l=c("7b0b"),i=c("07fa"),d=c("8418"),u=c("65f0"),b=c("1dde"),h=c("b622"),f=c("2d00"),m=h("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",O=a.TypeError,v=f>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=b("concat"),x=function(e){if(!n(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},w=!v||!g;s({target:"Array",proto:!0,forced:w},{concat:function(e){var t,c,s,a,r,o=l(this),n=u(o,0),b=0;for(t=-1,s=arguments.length;t<s;t++)if(r=-1===t?o:arguments[t],x(r)){if(a=i(r),b+a>p)throw O(j);for(c=0;c<a;c++,b++)c in r&&d(n,b,r[c])}else{if(b>=p)throw O(j);d(n,b++,r)}return n.length=b,n}})},b0c0:function(e,t,c){var s=c("83ab"),a=c("5e77").EXISTS,r=c("e330"),o=c("9bf2").f,n=Function.prototype,l=r(n.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=r(i.exec),u="name";s&&!a&&o(n,u,{configurable:!0,get:function(){try{return d(i,l(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-63d25b58.4f84e0ec.js.map