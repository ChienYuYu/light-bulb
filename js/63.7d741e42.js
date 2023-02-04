"use strict";(self["webpackChunklight_bulb"]=self["webpackChunklight_bulb"]||[]).push([[63],{8013:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3396),i=n(7139);const o={class:"footer"};function s(e,t,n,s,c,a){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("h3",null,"© "+(0,i.zw)(s.year)+" by Chen Chien Yu",1)])}var c={setup(){const e=(new Date).getFullYear();return{year:e}}},a=n(89);const l=(0,a.Z)(c,[["render",s],["__scopeId","data-v-b977a274"]]);var u=l},4006:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3396),i=n(7139);const o={class:"progress-bar"};function s(e,t,n,s,c,a){return(0,r.wg)(),(0,r.iD)("ul",o,[(0,r._)("li",{class:(0,i.C_)(["left",{active:1===s.step}])},"1.確認訂單",2),(0,r._)("li",{class:(0,i.C_)({active:2===s.step})},"2.填寫資料",2),(0,r._)("li",{class:(0,i.C_)(["right",{active:3===s.step}])},"3.送出訂單",2)])}var c=n(4870),a=n(2483),l={setup(){const e=(0,a.yj)(),t=(0,c.iH)(1);return(0,r.bv)((()=>{"/checkout"===e.path&&(t.value=1),"/buyerInfo"===e.path&&(t.value=2),"/sendOrder"===e.path&&(t.value=3)})),{step:t}}},u=n(89);const d=(0,u.Z)(l,[["render",s],["__scopeId","data-v-ac7df154"]]);var p=d},6063:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(3396),i=n(9242);const o=e=>((0,r.dD)("data-v-5297e9c8"),e=e(),(0,r.Cn)(),e),s={class:"buyer-info"},c=o((()=>(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"填寫資料")],-1))),a={class:"info container"},l={class:"col-10 col-md-6 mx-auto"},u={class:"row g-3"},d={class:"col-md-6"},p={class:"col-md-6"},v={class:"col-lg-12"},m={class:"col-12"},f={class:"col btn-group"};function h(e,t,n,o,h,b){const _=(0,r.up)("ProgressBar"),y=(0,r.up)("RouterLink"),g=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[c,(0,r.Wm)(_),(0,r._)("div",a,[(0,r._)("div",l,[(0,r._)("form",u,[(0,r._)("div",d,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"recipient-name","aria-label":"1",placeholder:"收件人姓名","onUpdate:modelValue":t[0]||(t[0]=e=>o.recipientInfo.recipientName=e)},null,512),[[i.nr,o.recipientInfo.recipientName]])]),(0,r._)("div",p,[(0,r.wy)((0,r._)("input",{type:"tel",class:"form-control",id:"recipient-phone","aria-label":"1",placeholder:"收件人電話","onUpdate:modelValue":t[1]||(t[1]=e=>o.recipientInfo.recipientPhone=e)},null,512),[[i.nr,o.recipientInfo.recipientPhone]])]),(0,r._)("div",v,[(0,r._)("button",{class:"btn same w-100",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>o.sameAsBuyer&&o.sameAsBuyer(...e)),["prevent"]))},"收件人就是我")]),(0,r._)("div",m,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"inputAddress",placeholder:"收件地址","aria-label":"1","onUpdate:modelValue":t[3]||(t[3]=e=>o.recipientInfo.recipientAddress=e)},null,512),[[i.nr,o.recipientInfo.recipientAddress]])]),(0,r._)("div",f,[(0,r.Wm)(y,{to:"/checkout",class:"btn"},{default:(0,r.w5)((()=>[(0,r.Uk)("返回")])),_:1}),(0,r.Wm)(y,{to:"",class:"btn",onClick:(0,i.iM)(o.writeBuyerInfo,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Uk)("下一步")])),_:1},8,["onClick"])])])])])]),(0,r.Wm)(g)],64)}n(7658);var b=n(2492),_=n.n(b),y=n(4006),g=n(8013),w=n(4870),I=n(65),k=n(2483),C=n(6943),A={components:{Footer:g.Z,ProgressBar:y.Z},setup(){const e=(0,I.oR)(),t=(0,k.tv)(),n=(0,w.iH)({buyerName:"",buyerPhone:"",buyerAddress:""}),i=(0,w.iH)({recipientName:"",recipientPhone:"",recipientAddress:""}),o=()=>{const e=JSON.parse(sessionStorage.getItem("orderInfo"));void 0!==e.recipientName&&(i.value.recipientName=e.recipientName,i.value.recipientPhone=e.recipientPhone,i.value.recipientAddress=e.recipientAddress)},s=()=>{e.commit("showLoadingCircle",!0);const t=localStorage.getItem("userId");C.Z.get(`https://bulbgo.onrender.com/customer/user/${t}`,{withCredentials:!0}).then((t=>{const r=n.value;r.buyerName=t.data.name,r.buyerPhone=t.data.tel,r.buyerAddress=t.data.address,e.commit("showLoadingCircle",!1)})).catch((e=>alert(e)))};(0,r.bv)((()=>{e.commit("checkout/initSessionStorage"),o(),s()}));const c=()=>{const e=i.value,t=n.value;e.recipientName=t.buyerName,e.recipientPhone=t.buyerPhone,e.recipientAddress=t.buyerAddress},a=()=>{const r=Object.values(i.value);if(r.includes("")||r.includes(void 0))_().fire({icon:"error",title:"欄位不能為空",text:"所有欄位都必須填寫"});else{const r={...n.value,...i.value};e.commit("checkout/writeBuyerInfo",r),t.push("/sendOrder")}};return{buyerInfo:n,sameAsBuyer:c,writeBuyerInfo:a,keepInputShow:o,recipientInfo:i,getBuyerInfo:s}}},N=n(89);const P=(0,N.Z)(A,[["render",h],["__scopeId","data-v-5297e9c8"]]);var B=P}}]);
//# sourceMappingURL=63.7d741e42.js.map