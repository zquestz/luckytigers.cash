(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{247:function(t,e){},256:function(t,e){},274:function(t,e){},276:function(t,e){},295:function(t,e){},296:function(t,e){},359:function(t,e){},361:function(t,e){},394:function(t,e){},396:function(t,e){},397:function(t,e){},402:function(t,e){},404:function(t,e){},410:function(t,e){},412:function(t,e){},425:function(t,e){},437:function(t,e){},440:function(t,e){},445:function(t,e){},453:function(t,e){},462:function(t,e){},464:function(t,e){},534:function(t,e,n){},535:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,u,d,j,p,x,b,h,f,g,O,m=n(1),y=n(86),v=n.n(y),C=n(17),A=n.n(C),w=n(44),E=n(70),T=n(14),S=n(59),N=n(69),_=n.n(N),k=n(221),D=n.n(k),L=n(71),M=n(222),I=n(20),U={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},U),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},U),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},F=Object(L.b)({blockchain:R,data:P}),W=[M.a],H=Object(L.c)(L.a.apply(void 0,W)),Y=Object(L.d)(F,H),B=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},z=function(){return function(){var t=Object(w.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(B("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t){return{type:"CONNECTION_FAILED",payload:t}},q=function(t){return function(){var e=Object(w.a)(A.a.mark((function e(n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(z());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=n(15),X=Q.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),J=Q.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=Q.a.div(a||(a=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=Q.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=Q.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),tt=Q.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),et=Q.a.div(l||(l=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  @media (max-width: 767px) {\n    flex-direction: row;\n  }\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),nt=Q.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ct=(Q.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(j||(j=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),rt=(Q.a.div(p||(p=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(226)),at=n(2),ot=function(){return""},it=Q.a.button(x||(x=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=Q.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: white;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: black;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),lt=Q.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ut=Q.a.img(f||(f=Object(T.a)(["\n  width: 416px;\n  @media (min-width: 767px) {\n    width: 416px;\n  }\n  max-width: 100%;\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 1em;\n"]))),dt=Q.a.img(g||(g=Object(T.a)(["\n  border: none;\n  background-color: var(--accent);\n  width: 175px;\n  transition: width 0.5s;\n  margin: 0.5em;\n  @media (max-width: 767px) {\n    max-width: 30%;\n  }\n"]))),jt=Q.a.a(O||(O=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var pt=function(){var t,e,n=Object(S.b)(),c=Object(S.c)((function(t){return t.blockchain})),r=Object(S.c)((function(t){return t.data})),a=Object(m.useState)(!1),o=Object(E.a)(a,2),i=o[0],s=o[1],l=Object(m.useState)("Click BUY to mint your Lucky Tiger."),u=Object(E.a)(l,2),d=u[0],j=u[1],p=Object(m.useState)(1),x=Object(E.a)(p,2),b=x[0],h=x[1],f=Object(m.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1,LAUNCH_DATE:""}),g=Object(E.a)(f,2),O=g[0],y=g[1],v=function(){""!==c.account&&null!==c.smartContract&&n(z(c.account))},C=function(){var t=Object(w.a)(A.a.mark((function t(){var e,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,y(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.useEffect)((function(){C()}),[]),Object(m.useEffect)((function(){v()}),[c.account]),Object(at.jsx)(X,{children:Object(at.jsxs)(tt,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},children:[Object(at.jsx)(ut,{alt:"Leap into Prosperity",src:"/config/images/logo.png"}),Object(at.jsx)("img",{style:{maxWidth:"100%"},src:"/flip.gif",alt:"Lucky Tigers"}),Object(at.jsxs)(lt,{flex:1,style:{padding:24},test:!0,children:[Object(at.jsxs)(et,{flex:1,jc:"center",ai:"center",children:[Object(at.jsx)(dt,{alt:"example",src:"/samples/1.png"}),Object(at.jsx)(dt,{alt:"example",src:"/samples/2.png"}),Object(at.jsx)(dt,{alt:"example",src:"/samples/3.png"})]}),Object(at.jsx)($,{}),Object(at.jsxs)(tt,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"none"},children:[Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--primary-text)",paddingBottom:"1em",maxWidth:"450px"},children:Object(at.jsx)("p",{style:{marginTop:"1em"},children:"Leap into prosperity this coming year with Lucky Tigers, a limited edition series of 888 generative NFTs by Panny Chayapumh. Each unique artwork features this year's celebrated zodiac creature, the tiger, along with varying symbols and motifs of good fortune."})}),Object(at.jsxs)(nt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",O.MAX_SUPPLY]}),Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(at.jsx)(jt,{target:"_blank",href:O.SCAN_LINK,children:(t=O.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(at.jsx)(V,{}),Number(r.totalSupply)>=O.MAX_SUPPLY?Object(at.jsxs)(at.Fragment,{children:[Object(at.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(at.jsxs)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",O.NFT_NAME," on"]}),Object(at.jsx)(V,{}),Object(at.jsx)(jt,{target:"_blank",href:O.MARKETPLACE_LINK,children:Object(at.jsx)("img",{style:{width:"192px"},src:"/oasis_logo.svg",alt:"Oasis"})})]}):Object(at.jsxs)(at.Fragment,{children:[Object(at.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",O.SYMBOL," costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL,"."]}),Object(at.jsx)(J,{}),Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(at.jsx)(V,{}),""===c.account||null===c.smartContract?Object(at.jsxs)(tt,{ai:"center",jc:"center",children:[Object(at.jsxs)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",O.NETWORK.NAME," network"]}),Object(at.jsx)(V,{}),Object(at.jsx)(it,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(w.a)(A.a.mark((function t(e){var n,c,r,a,o,i,s,l,u;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return _.a.setProvider(i),s=new D.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(u=new _.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){e(q(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(G("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(G("Something went wrong."));case 31:t.next=34;break;case 33:e(G("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(at.jsxs)(at.Fragment,{children:[Object(at.jsx)(V,{}),Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(at.jsxs)(at.Fragment,{children:[new Date>new Date(O.LAUNCH_DATE)?Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}):null,Object(at.jsx)(Z,{}),new Date>new Date(O.LAUNCH_DATE)?Object(at.jsxs)(tt,{ai:"center",jc:"center",fd:"row",children:[Object(at.jsx)(st,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(at.jsx)(Z,{}),Object(at.jsx)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(at.jsx)(Z,{}),Object(at.jsx)(st,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b+1;t>10&&(t=10),h(t)}()},children:"+"})]}):null,Object(at.jsx)(V,{}),new Date>new Date(O.LAUNCH_DATE)?Object(at.jsx)(tt,{ai:"center",jc:"center",fd:"row",children:Object(at.jsx)(it,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=O.WEI_COST,e=O.GAS_LIMIT,r=String(t*b),a=String(e*b);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(O.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(a),to:O.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),j("WOW, the ".concat(O.NFT_NAME," is yours! go visit oasis.cash to view it!")),s(!1),n(z(c.account))}))}(),v()},children:i?"BUSY":"BUY"})}):Object(at.jsxs)(ct,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Minting begins ",new Date(O.LAUNCH_DATE).toUTCString(),"."]})]})]}),Object(at.jsx)("div",{className:"countdown",children:Object(at.jsx)(rt.a,{date:new Date(O.LAUNCH_DATE),children:Object(at.jsx)(ot,{})})}),Object(at.jsx)(Z,{})]}),Object(at.jsx)($,{}),Object(at.jsxs)(et,{flex:1,jc:"center",ai:"center",children:[Object(at.jsx)(dt,{alt:"example",src:"/samples/4.png"}),Object(at.jsx)(dt,{alt:"example",src:"/samples/5.png"}),Object(at.jsx)(dt,{alt:"example",src:"/samples/6.png"})]})]}),Object(at.jsx)(Z,{}),Object(at.jsxs)(tt,{jc:"center",ai:"center",style:{width:"70%",maxWidth:"540px"},children:[Object(at.jsxs)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",O.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(at.jsx)(V,{}),Object(at.jsxs)(ct,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",O.GAS_LIMIT," for the contract to successfully mint your Lucky Tiger. We recommend that you don't lower the gas limit."]})]})]})})},xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,539)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(534);v.a.render(Object(at.jsx)(S.a,{store:Y,children:Object(at.jsx)(pt,{})}),document.getElementById("root")),xt()}},[[535,1,2]]]);
//# sourceMappingURL=main.8c5d8011.chunk.js.map