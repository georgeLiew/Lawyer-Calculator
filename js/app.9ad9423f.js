(function(e){function t(t){for(var l,u,r=t[0],c=t[1],i=t[2],b=0,s=[];b<r.length;b++)u=r[b],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&s.push(n[u][0]),n[u]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);d&&d(t);while(s.length)s.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],l=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(l=!1)}l&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var l={},n={app:0},o=[];function u(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=l,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)u.d(a,l,function(t){return e[t]}.bind(null,l));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Lawyer-Calculator/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b50":function(e,t,a){},"1ba6":function(e,t,a){},"34c0":function(e,t,a){"use strict";a("5333")},5333:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("7a23"),n=Object(l["d"])("h1",{class:"brand"},"MySolicitor Calculator",-1);function o(e,t,a,o,u,r){var c=Object(l["j"])("Form");return Object(l["g"])(),Object(l["c"])("div",null,[n,Object(l["f"])(c)])}var u={class:"from_box"},r={class:"form-group"},c={class:"result form-group"},i={key:0};function d(e,t,a,n,o,d){var b=Object(l["j"])("inputNumber"),s=Object(l["j"])("customLabelNumber");return Object(l["g"])(),Object(l["c"])("div",u,[Object(l["d"])("div",r,[Object(l["f"])(b,{labelName:"Purchase Price",modelValue:o.buyerCalc.purchasePrice,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.buyerCalc.purchasePrice=e}),onUpdateValue:d.onPurchasePriceChange},null,8,["modelValue","onUpdateValue"]),Object(l["f"])(b,{labelName:"Actual Price",modelValue:o.prop.price,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.prop.price=e}),onUpdateValue:d.onPropertyPriceChange},null,8,["modelValue","onUpdateValue"]),Object(l["f"])(b,{labelName:"Loan Amount",modelValue:o.buyerCalc.loanAmount,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.buyerCalc.loanAmount=e})},null,8,["modelValue"]),Object(l["f"])(b,{labelName:"Paid Deposit",modelValue:o.buyerCalc.depositPaid,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.buyerCalc.depositPaid=e}),onUpdateValue:d.onPaidDepositChange},null,8,["modelValue","onUpdateValue"]),Object(l["f"])(b,{labelName:"Deposit Balance",modelValue:o.buyerCalc.depositBalance,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.buyerCalc.depositBalance=e})},null,8,["modelValue"]),Object(l["f"])(b,{labelName:"Lega Fee",modelValue:o.buyerCalc.legal_fee,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.buyerCalc.legal_fee=e})},null,8,["modelValue"]),Object(l["f"])(b,{labelName:"Agent Commission",modelValue:o.buyerCalc.agent_commission,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.buyerCalc.agent_commission=e})},null,8,["modelValue"]),Object(l["d"])("button",{type:"button",onClick:t[7]||(t[7]=function(){return d.CalculateBuyerBalance&&d.CalculateBuyerBalance.apply(d,arguments)})},"Calculate buyer balance")]),Object(l["d"])("div",c,[Object(l["f"])(s,{labelName:"Purchase Price",modelValue:o.buyerCalc.purchasePrice,"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.buyerCalc.purchasePrice=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Actual Price",modelValue:o.prop.price,"onUpdate:modelValue":t[9]||(t[9]=function(e){return o.prop.price=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Loan Amount",modelValue:o.buyerCalc.loanAmount,"onUpdate:modelValue":t[10]||(t[10]=function(e){return o.buyerCalc.loanAmount=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Total Deposit",modelValue:o.prop.totalDeposit,"onUpdate:modelValue":t[11]||(t[11]=function(e){return o.prop.totalDeposit=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Deposit Paid",modelValue:o.buyerCalc.depositPaid,"onUpdate:modelValue":t[12]||(t[12]=function(e){return o.buyerCalc.depositPaid=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Deposit Balance",modelValue:o.buyerCalc.depositBalance,"onUpdate:modelValue":t[13]||(t[13]=function(e){return o.buyerCalc.depositBalance=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Legal Fee",modelValue:o.buyerCalc.legal_fee,"onUpdate:modelValue":t[14]||(t[14]=function(e){return o.buyerCalc.legal_fee=e})},null,8,["modelValue"]),Object(l["f"])(s,{labelName:"Agent Commission",modelValue:o.buyerCalc.agent_commission,"onUpdate:modelValue":t[15]||(t[15]=function(e){return o.buyerCalc.agent_commission=e})},null,8,["modelValue"]),o.buyerCalc.showBalance?(Object(l["g"])(),Object(l["c"])("div",i,[Object(l["f"])(s,{labelName:"Buyer Balance",modelValue:o.buyerCalc.balance,"onUpdate:modelValue":t[16]||(t[16]=function(e){return o.buyerCalc.balance=e})},null,8,["modelValue"])])):Object(l["b"])("",!0)])])}var b=function(e){return Object(l["i"])("data-v-5b48d552"),e=e(),Object(l["h"])(),e},s={class:"form-element"},p={key:0},m=Object(l["e"])(),f=b((function(){return Object(l["d"])("br",null,null,-1)})),h=["value"],y={key:1},j=Object(l["e"])(),O=b((function(){return Object(l["d"])("br",null,null,-1)}));function V(e,t,a,n,o,u){return Object(l["g"])(),Object(l["c"])("div",s,[o.form.visible?(Object(l["g"])(),Object(l["c"])("div",p,[Object(l["d"])("label",null,Object(l["k"])(a.labelName),1),m,Object(l["d"])("span",null,Object(l["k"])(o.form.error),1),f,Object(l["d"])("input",{type:"number",placeholder:"",value:a.modelValue,onBlur:t[0]||(t[0]=function(){return u.onBlurNumber&&u.onBlurNumber.apply(u,arguments)}),onInput:t[1]||(t[1]=function(){return u.onInput&&u.onInput.apply(u,arguments)})},null,40,h)])):Object(l["b"])("",!0),!1===o.form.visible?(Object(l["g"])(),Object(l["c"])("div",y,[Object(l["d"])("label",null,Object(l["k"])(a.labelName),1),j,Object(l["d"])("span",null,Object(l["k"])(o.form.error),1),O,Object(l["m"])(Object(l["d"])("input",{type:"text",placeholder:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.form.amountText=e}),onFocus:t[3]||(t[3]=function(){return u.onFocusText&&u.onFocusText.apply(u,arguments)})},null,544),[[l["l"],o.form.amountText]])])):Object(l["b"])("",!0)])}a("a9e3"),a("ac1f"),a("5319"),a("d3b7"),a("25f0");var C={name:"InputNumber",props:{labelName:{type:String,default:""},modelValue:{type:Number,default:0}},data:function(){return{form:{error:"",visible:!1,amountText:this.thousandSeprator(this.modelValue)}}},methods:{onBlurNumber:function(){this.form.visible=!1,this.form.amountText=this.thousandSeprator(this.modelValue)},onFocusText:function(){this.form.visible=!0},thousandSeprator:function(e){return""!==e||void 0!==e||0!==e||"0"!==e||null!==e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e},onInput:function(e){this.$emit("update:modelValue",e.target.value),this.$emit("updateValue",e.target.value)}},watch:{modelValue:{handler:function(e){this.form.amountText=this.thousandSeprator(e),e&&(this.error="")}}}},v=(a("8a2e"),a("6b0d")),g=a.n(v);const P=g()(C,[["render",V],["__scopeId","data-v-5b48d552"]]);var N=P,_=function(e){return Object(l["i"])("data-v-c76aab10"),e=e(),Object(l["h"])(),e},B={class:"form-element"},U=_((function(){return Object(l["d"])("br",null,null,-1)}));function x(e,t,a,n,o,u){return Object(l["g"])(),Object(l["c"])("div",B,[Object(l["d"])("label",null,Object(l["k"])(a.labelName),1),U,Object(l["d"])("label",null,"RM "+Object(l["k"])(this.form.amountText),1)])}var S={name:"CustomLabelNumber",props:{labelName:{type:String,default:""},modelValue:{type:Number,default:0}},data:function(){return{form:{error:"",visible:!1,amountText:this.thousandSeprator(this.modelValue)}}},methods:{thousandSeprator:function(e){return""!==e||void 0!==e||0!==e||"0"!==e||null!==e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}},watch:{modelValue:{handler:function(e){this.form.amountText=this.thousandSeprator(e),e&&(this.error="")}}}};a("34c0");const w=g()(S,[["render",x],["__scopeId","data-v-c76aab10"]]);var F=w,A={name:"Form",data:function(){return{prop:{price:0,totalDeposit:0},buyerCalc:{purchasePrice:0,loanAmount:0,depositPaid:0,depositBalance:0,legal_fee:0,agent_commission:0,showBalance:!1,balance:0},sellerCalc:{legal_fee:0,agent_comission:0}}},methods:{onSubmit:function(){var e=new FormData;for(var t in this.fromMess)e.append(t,this.fromMess[t])},onPurchasePriceChange:function(e){this.buyerCalc.loanAmount=.9*e},onPropertyPriceChange:function(e){this.prop.totalDeposit=.1*e,this.buyerCalc.depositPaid=.01*e,this.buyerCalc.depositBalance=this.prop.totalDeposit-this.buyerCalc.depositPaid},onPaidDepositChange:function(e){this.buyerCalc.depositBalance=this.prop.totalDeposit-e},CalculateBuyerBalance:function(){this.buyerCalc.showBalance=!0,this.buyerCalc.balance=parseFloat(this.buyerCalc.loanAmount)-parseFloat(this.prop.price)+parseFloat(this.buyerCalc.depositPaid)-parseFloat(this.buyerCalc.legal_fee)-parseFloat(this.buyerCalc.agent_commission)}},components:{inputNumber:N,customLabelNumber:F}};a("e10a");const D=g()(A,[["render",d],["__scopeId","data-v-30e92602"]]);var T=D,k={name:"App",components:{Form:T}};a("818e");const I=g()(k,[["render",o]]);var L=I;Object(l["a"])(L).mount("#app")},"818e":function(e,t,a){"use strict";a("0b50")},"8a2e":function(e,t,a){"use strict";a("fa34")},e10a:function(e,t,a){"use strict";a("1ba6")},fa34:function(e,t,a){}});
//# sourceMappingURL=app.9ad9423f.js.map