(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280c859f"],{"168c":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"container"},l={class:"table mt-4"},i=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",null,"Email"),Object(a["h"])("th",null,"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",null,"編輯")])],-1),r=["textContent"],s={class:"list-unstyled"},o={class:"text-right"},d={class:"form-check form-switch"},b=["id","onUpdate:modelValue","onChange"],O=["for"],h={key:0},u={key:1},j={class:"btn-group"},p=["onClick"],g=["onClick"];function m(t,e,c,m,f,v){var M=Object(a["J"])("Loading"),k=Object(a["J"])("OrderModal"),y=Object(a["J"])("DelModal"),x=Object(a["J"])("Pagination");return Object(a["B"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(M,{active:f.isLoading,"z-index":1060},null,8,["active"]),Object(a["h"])("div",n,[Object(a["h"])("table",l,[i,Object(a["h"])("tbody",null,[(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(f.orders,(function(e,c){return Object(a["B"])(),Object(a["g"])(a["a"],{key:c},[f.orders.length?(Object(a["B"])(),Object(a["g"])("tr",{key:0,class:Object(a["s"])({"text-secondary":!e.is_paid})},[Object(a["h"])("td",null,Object(a["M"])(t.$filters.date(e.create_at)),1),Object(a["h"])("td",null,[e.user?(Object(a["B"])(),Object(a["g"])("span",{key:0,textContent:Object(a["M"])(e.user.email)},null,8,r)):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("ul",s,[(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(e.products,(function(t,e){return Object(a["B"])(),Object(a["g"])("li",{key:e},Object(a["M"])(t.product.title)+" 數量："+Object(a["M"])(t.qty)+" "+Object(a["M"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",o,Object(a["M"])(e.total),1),Object(a["h"])("td",null,[Object(a["h"])("div",d,[Object(a["W"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return v.updatePaid(e)}},null,40,b),[[a["P"],e.is_paid]]),Object(a["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(a["B"])(),Object(a["g"])("span",h,"已付款")):(Object(a["B"])(),Object(a["g"])("span",u,"未付款"))],8,O)])]),Object(a["h"])("td",null,[Object(a["h"])("div",j,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return v.openModal(e)}}," 檢視 ",8,p),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return v.openDelOrderModal(e)}}," 刪除 ",8,g)])])],2)):Object(a["f"])("",!0)],64)})),128))])]),Object(a["k"])(k,{order:f.tempOrder,ref:"orderModal",onUpdatePaid:v.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["k"])(y,{item:f.tempOrder,ref:"delModal",onDelItem:v.delOrder},null,8,["item","onDelItem"]),Object(a["k"])(x,{pages:f.pagination,onEmitPages:v.getOrders},null,8,["pages","onEmitPages"])])],64)}var f=c("5530"),v=(c("99af"),c("6ff1")),M=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),k={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},x=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"訂單細節")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_={class:"modal-body"},B={class:"row"},$={class:"col-md-4"},w=Object(a["h"])("h3",null,"用戶資料",-1),P={class:"table"},C={key:0},L=Object(a["h"])("th",{style:{width:"100px"}},"姓名",-1),S=Object(a["h"])("th",null,"Email",-1),D=Object(a["h"])("th",null,"電話",-1),J=Object(a["h"])("th",null,"地址",-1),E={class:"col-md-8"},U=Object(a["h"])("h3",null,"訂單細節",-1),H={class:"table"},X=Object(a["h"])("th",{style:{width:"100px"}},"訂單編號",-1),I=Object(a["h"])("th",null,"下單時間",-1),V=Object(a["h"])("th",null,"付款時間",-1),q={key:0},N={key:1},W=Object(a["h"])("th",null,"付款狀態",-1),z={key:0,class:"text-success"},F={key:1,class:"text-muted"},T=Object(a["h"])("th",null,"總金額",-1),A=Object(a["h"])("h3",null,"選購商品",-1),G={class:"table"},K=Object(a["h"])("thead",null,[Object(a["h"])("tr")],-1),Q={class:"text-end"},R={class:"d-flex justify-content-end"},Y={class:"form-check"},Z={class:"form-check-label",for:"flexCheckDefault"},tt={key:0},et={key:1},ct={class:"modal-footer"},at=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(t,e,c,n,l,i){return Object(a["B"])(),Object(a["g"])("div",M,[Object(a["h"])("div",k,[Object(a["h"])("div",y,[x,Object(a["h"])("div",_,[Object(a["h"])("div",B,[Object(a["h"])("div",$,[w,Object(a["h"])("table",P,[l.tempOrder.user?(Object(a["B"])(),Object(a["g"])("tbody",C,[Object(a["h"])("tr",null,[L,Object(a["h"])("td",null,Object(a["M"])(l.tempOrder.user.name),1)]),Object(a["h"])("tr",null,[S,Object(a["h"])("td",null,Object(a["M"])(l.tempOrder.user.email),1)]),Object(a["h"])("tr",null,[D,Object(a["h"])("td",null,Object(a["M"])(l.tempOrder.user.tel),1)]),Object(a["h"])("tr",null,[J,Object(a["h"])("td",null,Object(a["M"])(l.tempOrder.user.address),1)])])):Object(a["f"])("",!0)])]),Object(a["h"])("div",E,[U,Object(a["h"])("table",H,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[X,Object(a["h"])("td",null,Object(a["M"])(l.tempOrder.id),1)]),Object(a["h"])("tr",null,[I,Object(a["h"])("td",null,Object(a["M"])(t.$filters.date(l.tempOrder.create_at)),1)]),Object(a["h"])("tr",null,[V,Object(a["h"])("td",null,[l.tempOrder.paid_date?(Object(a["B"])(),Object(a["g"])("span",q,Object(a["M"])(t.$filters.date(l.tempOrder.paid_date)),1)):(Object(a["B"])(),Object(a["g"])("span",N,"時間不正確"))])]),Object(a["h"])("tr",null,[W,Object(a["h"])("td",null,[l.tempOrder.is_paid?(Object(a["B"])(),Object(a["g"])("strong",z,"已付款")):(Object(a["B"])(),Object(a["g"])("span",F,"尚未付款"))])]),Object(a["h"])("tr",null,[T,Object(a["h"])("td",null,Object(a["M"])(t.$filters.currency(l.tempOrder.total)),1)])])]),A,Object(a["h"])("table",G,[K,Object(a["h"])("tbody",null,[(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(l.tempOrder.products,(function(t){return Object(a["B"])(),Object(a["g"])("tr",{key:t.id},[Object(a["h"])("th",null,Object(a["M"])(t.product.title),1),Object(a["h"])("td",null,Object(a["M"])(t.qty)+" / "+Object(a["M"])(t.product.unit),1),Object(a["h"])("td",Q,Object(a["M"])(t.final_total),1)])})),128))])]),Object(a["h"])("div",R,[Object(a["h"])("div",Y,[Object(a["W"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.tempOrder.is_paid=t})},null,512),[[a["P"],l.tempOrder.is_paid]]),Object(a["h"])("label",Z,[l.tempOrder.is_paid?(Object(a["B"])(),Object(a["g"])("span",tt,"已付款")):(Object(a["B"])(),Object(a["g"])("span",et,"未付款"))])])])])])]),Object(a["h"])("div",ct,[at,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(e){return t.$emit("update-paid",l.tempOrder)})}," 修改付款狀態 ")])])])],512)}var lt=c("e0ae"),it={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[lt["a"]],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}}},rt=c("6b0d"),st=c.n(rt);const ot=st()(it,[["render",nt]]);var dt=ot,bt=c("1799"),Ot={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:bt["a"],DelModal:v["a"],OrderModal:dt},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/admin/orders?page=").concat(e);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(e){t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1})).catch((function(e){console.log(e),t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))},openModal:function(t){this.tempOrder=Object(f["a"])({},t),this.isNew=!1;var e=this.$refs.orderModal;e.openModal()},openDelOrderModal:function(t){this.tempOrder=Object(f["a"])({},t);var e=this.$refs.delModal;e.openModal()},updatePaid:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/admin/order/").concat(t.id),a={is_paid:t.is_paid};this.$http.put(c,{data:a}).then((function(t){e.isLoading=!1;var c=e.$refs.orderModal;c.hideModal(),e.getOrders(e.pagination.current_page),console.log(t),e.$httpMessageState(t,"更新付款狀態")})).catch((function(t){console.log(t),e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},delOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chinghsin-api","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(){t.isLoading=!1;var e=t.$refs.delModal;e.hideModal(),t.getOrders(t.pagination.current_page)})).catch((function(e){console.log(e),t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))}},created:function(){this.getOrders()}};const ht=st()(Ot,[["render",m]]);e["default"]=ht},1799:function(t,e,c){"use strict";var a=c("7a23"),n={"aria-label":"Page navigation example"},l={class:"pagination"},i=Object(a["h"])("span",{"aria-hidden":"true"},"⟨",-1),r=[i],s=["onClick"],o=Object(a["h"])("span",{"aria-hidden":"true"},"⟩",-1),d=[o];function b(t,e,c,i,o,b){return Object(a["B"])(),Object(a["g"])("nav",n,[Object(a["h"])("ul",l,[Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!c.pages.has_pre}])},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=Object(a["X"])((function(e){return t.$emit("emit-pages",c.pages.current_page-1)}),["prevent"]))},r)],2),(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(c.pages.total_pages,(function(e){return Object(a["B"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item",{active:e===c.pages.current_page}]),key:e+"page"},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["X"])((function(c){return t.$emit("emit-pages",e)}),["prevent"])},Object(a["M"])(e),9,s)],2)})),128)),Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!c.pages.has_next}])},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=Object(a["X"])((function(e){return t.$emit("emit-pages",c.pages.current_page+1)}),["prevent"]))},d)],2)])])}var O={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}},h=c("6b0d"),u=c.n(h);const j=u()(O,[["render",b]]);e["a"]=j},b0c0:function(t,e,c){var a=c("83ab"),n=c("5e77").EXISTS,l=c("e330"),i=c("9bf2").f,r=Function.prototype,s=l(r.toString),o=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=l(o.exec),b="name";a&&!n&&i(r,b,{configurable:!0,get:function(){try{return d(o,s(this))[1]}catch(t){return""}}})},e0ae:function(t,e,c){"use strict";var a=c("7c2b"),n=c.n(a);e["a"]={methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new n.a(this.$refs.modal)}}}}]);
//# sourceMappingURL=chunk-280c859f.5a07e340.js.map