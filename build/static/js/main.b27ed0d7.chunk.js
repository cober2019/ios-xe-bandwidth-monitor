(this["webpackJsonpxe-ops-bandwdith-monitor"]=this["webpackJsonpxe-ops-bandwdith-monitor"]||[]).push([[0],{147:function(e,t,a){},148:function(e,t,a){},173:function(e,t){},202:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(32),r=a.n(n),i=(a(147),a(148),a(149),a(31)),l=a.n(i),o=a(62),d=a(7),j=a(22),b=a(49),u=a(87),x=a.n(u),h=a(55),p=a(27),O=a(23),m=a(19),g=a(59),f=a(42),v=a(2),y=a(43),S=a(108),I=a(0);function k(e){return"Request Timeout"===e.msg?Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",backdrop:!0,children:[Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:e.msg}),Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:"The App Did Not Receive A Response From The Device"})]}),Object(I.jsx)(y.a.Footer,{children:Object(I.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(S.a,{size:"sm",variant:"danger",onClick:e.onHide,style:{alignItems:"center"},children:"ReAuth"})})})]})):Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",backdrop:!0,children:[Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:e.msg}),"Authentication Failed"!==e.msg?Object(I.jsx)("div",{style:{marginLeft:"100px"},children:Object(I.jsx)("div",{className:"spinner"})}):Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:"Verify RESTCONF Capabilities and Credentials"})]}),Object(I.jsx)(y.a.Footer,{children:"Authentication Failed"===e.msg?Object(I.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(S.a,{size:"sm",variant:"danger",onClick:e.onHide,style:{alignItems:"center"},children:"ReAuth"})}):Object(I.jsx)("div",{})})]}))}var w=a(77);function C(){var e=Object(f.c)(Q),t=Object(d.a)(e,1)[0],a=Object(c.useState)(""),n=Object(d.a)(a,2),r=n[0],i=n[1],u=Object(c.useState)(""),v=Object(d.a)(u,2),y=v[0],S=v[1],C=Object(c.useState)(""),N=Object(d.a)(C,2),A=N[0],D=N[1],F=Object(c.useState)(443),B=Object(d.a)(F,2),T=B[0],M=B[1],z=Object(c.useState)(!1),P=Object(d.a)(z,2),R=P[0],E=P[1],q=s.a.useState(!1),L=Object(d.a)(q,2),H=L[0],W=L[1],U=Object(c.useState)("Autheniticating"),J=Object(d.a)(U,2),V=J[0],X=J[1],_=x.a.create();_.defaults.timeout=3e4;var K=Object(b.useQuery)(r+"login",Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.post("/login",{ip:r,username:y,password:A,port:T}).then((function(e){if(200===e.data.status){var a=w.AES.encrypt(A,t);return localStorage.setItem("ip",r),localStorage.setItem("port",443),localStorage.setItem("username",y),localStorage.setItem("password",a.toString()),localStorage.setItem("model",e.data.model),localStorage.setItem("serial",e.data.serial),localStorage.setItem("uptime",e.data.uptime),localStorage.setItem("software",e.data.software),W(!1),E(!0),e.data}X("Authentication Failed")})).catch((function(){X("Request Timeout")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),{enabled:!1,cacheTime:1/0}).refetch;return Object(c.useEffect)((function(){localStorage.clear()}),[]),R?R?Object(I.jsx)(j.a,{push:!0,to:{pathname:"/live_interfaces"},from:"/login"}):void 0:Object(I.jsx)(h.a,{fluid:"xl",children:Object(I.jsxs)(O.a,{style:{alignItems:"center",marginTop:"100px"},children:[Object(I.jsx)(m.a,{xl:4}),Object(I.jsx)(m.a,{xl:4,children:Object(I.jsx)(p.a,{children:Object(I.jsxs)(p.a.Body,{children:[Object(I.jsx)(p.a.Title,{className:"mb-3",style:{color:"black",textAlign:"center"},children:"IOS-XE Login"}),Object(I.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),K()},children:[Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:r,onChange:function(e){return i(e.target.value)},placeholder:"IP Address",name:"ipAddress",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:y,onChange:function(e){return S(e.target.value)},placeholder:"Username",name:"username",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:A,onChange:function(e){return D(e.target.value)},placeholder:"Password",name:"password",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:T,onChange:function(e){return M(e.target.value)},placeholder:"Default 443",name:"restconfPort",required:!0}),Object(I.jsx)(g.a.Control,{onClick:function(){return W(!0)},type:"submit",value:"Login",className:"btn btn-success"})]}),H?Object(I.jsx)(k,{msg:V,show:H,onHide:function(){return X("Autheniticating"),void W(!1)}}):Object(I.jsx)(I.Fragment,{})]})})}),Object(I.jsx)(m.a,{xl:4})]})})}var N=a(94),A=a(17);function D(e){var t=Object(c.useRef)(null),a=s.a.createRef();return Object(c.useEffect)((function(){if(null!==t.current)try{var a=function(e,t,a){var c=new Date;return e.data.datasets.forEach((function(s,n){s.data.length>=10?0===n?(e.data.labels.shift(),e.data.labels.push(c.getSeconds()),s.data.shift(),s.data.push(parseInt(t))):(s.data.shift(),s.data.push(parseInt(a))):0===n?(e.data.labels.push(c.getSeconds()),s.data.push(parseInt(t))):s.data.push(parseInt(a))})),e}(t.current,parseInt(e.value.statistics["tx-kbps"]),parseInt(e.value.statistics["rx-kbps"]));a.update(),t.current=a}catch(c){}}),[e.value,a]),Object(c.useEffect)((function(){try{var c=function(e,t,a){A.d.register(A.f,A.g,A.i,A.h,A.c,A.j,A.e);var c=new Date;return new A.d(e,{type:"line",options:{responsive:!0,animation:!0,plugins:{legend:{display:!0,labels:{color:"white"},position:"top"}},scales:{y:{min:0,suggestedMin:5,suggestedMax:20,display:!0,position:"right",padding:3,grid:{},ticks:{stepSize:5,color:"yellow"}},y1:{suggestedMin:5,suggestedMax:20,min:0,display:!0,position:"left",padding:3,grid:{},ticks:{stepSize:5,color:"white"}},x:{grid:{borderColor:"white"},ticks:{stepSize:1,color:"white"},title:{display:!0,text:"Seconds",color:"white"}}}},data:{labels:[c.getSeconds()],datasets:[{label:"Mbps Out",pointStyle:"star",pointRadius:4,pointBorderColor:"yellow",pointBackgroundColor:"yellow",borderColor:"yellow",backgroundColor:"yellow",data:[parseInt(t)/1e3],fill:!1,radius:0,borderWidth:1,yAxisID:"y"},{pointStyle:"star",pointBackgroundColor:"yellow",pointBorderColor:"yellow",pointRadius:4,label:"Mbps In",borderColor:"white",backgroundColor:"white",data:[parseInt(a)/1e3],fill:!1,radius:0,borderWidth:1,yAxisID:"y1"}]}})}(a.current.getContext("2d"),parseInt(e.value.statistics["tx-kbps"]),parseInt(e.value.statistics["rx-kbps"]));t.current=c}catch(s){}}),[e.value,a]),Object(I.jsxs)("div",{id:e.value.name,children:[Object(I.jsx)(O.a,{children:Object(I.jsx)("canvas",{ref:a,height:"300px"})}),Object(I.jsx)("br",{}),Object(I.jsxs)(O.a,{style:{textAlign:"left"},children:[Object(I.jsxs)(m.a,{xl:3,children:[Object(I.jsx)("p",{children:"Speed:"}),Object(I.jsx)("p",{children:"Status:"}),Object(I.jsx)("p",{children:"IP:"}),Object(I.jsx)("p",{children:"MTU:"}),Object(I.jsx)("p",{children:"Mbps Out:"}),Object(I.jsx)("p",{children:"Mbps In:"}),Object(I.jsx)("p",{children:"Mbps Out Diff:"}),Object(I.jsx)("p",{children:"Mbps In Diff:"})]}),Object(I.jsxs)(m.a,{xl:4,children:[Object(I.jsxs)("p",{children:[1e3*Math.round(parseInt(e.value.speed)/1e9)," (Mbps)"]}),Object(I.jsx)("p",{children:e.value["oper-status"]}),e.value.ipv4?Object(I.jsx)("p",{children:e.value.ipv4}):Object(I.jsx)("p",{children:"n/a"}),Object(I.jsx)("p",{children:e.value.mtu}),Object(I.jsx)("p",{children:e.value.statistics["tx-kbps"]}),Object(I.jsx)("p",{children:e.value.statistics["rx-kbps"]}),Object(I.jsx)("p",{children:e.value.outbandwidthDiff}),Object(I.jsx)("p",{children:e.value.inbandwidthDiff})]}),Object(I.jsxs)(m.a,{xl:2,children:[Object(I.jsx)("p",{children:"PPs Out:"}),Object(I.jsx)("p",{children:"PPs In:"}),Object(I.jsx)("p",{children:"InDis:"}),Object(I.jsx)("p",{children:"OutDis:"}),Object(I.jsx)("p",{children:"InErr:"}),Object(I.jsx)("p",{children:"InDis:"}),Object(I.jsx)("p",{children:"CRC:"}),Object(I.jsx)("p",{children:"InDis:"})]}),Object(I.jsxs)(m.a,{xl:2,children:[Object(I.jsx)("p",{children:e.value.statistics["rx-pps"]}),Object(I.jsx)("p",{children:e.value.statistics["tx-pps"]}),Object(I.jsx)("p",{children:e.value.statistics["in-discards"]}),Object(I.jsx)("p",{children:e.value.statistics["out-discards"]}),Object(I.jsx)("p",{children:e.value.statistics["in-errors"]}),Object(I.jsx)("p",{children:e.value.statistics["out-errors"]}),Object(I.jsx)("p",{children:e.value.statistics["in-crc-errors"]}),Object(I.jsx)("p",{children:e.value.statistics["num-flaps"]})]})]}),Object(I.jsxs)(O.a,{style:{textAlign:"left"},children:[Object(I.jsxs)(m.a,{xl:3,className:"mt-3",children:[Object(I.jsx)("p",{children:"Description:"}),Object(I.jsx)("p",{children:"LastChange:"})]}),Object(I.jsxs)(m.a,{xl:9,className:"mt-3",children:[e.value.description?Object(I.jsx)("p",{children:e.value.description}):Object(I.jsx)("p",{children:"n/a"}),Object(I.jsx)("p",{children:e.value.statistics["discontinuity-time"].split(".")[0]})]})]})]})}a(106).DataTable=a(128),a(106).DataTable=a(128);var F=a(134),B=a(99),T=a(69),M=a(73);function z(){return Object(I.jsx)(h.a,{fluid:!0,children:Object(I.jsx)(O.a,{xl:!0,className:"mt-3",children:Object(I.jsxs)(B.a,{bg:"black",expand:!1,className:"mb-3",children:[Object(I.jsx)(B.a.Toggle,{"aria-controls":"offcanvasNavbar",style:{backgroundColor:"white"}}),Object(I.jsxs)(B.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(I.jsx)(T.a.Header,{style:{backgroundColor:"#868F80"},closeButton:!0,children:Object(I.jsx)(T.a.Title,{id:"offcanvasNavbarLabel",style:{color:"black"},children:"XE-Ops Bandwdith Viewer"})}),Object(I.jsx)("div",{className:"border-bottom",style:{color:"black"}}),Object(I.jsx)(T.a.Body,{style:{backgroundColor:"#868F80"},children:Object(I.jsxs)(F.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(I.jsx)(M.b,{style:{color:"black",fontWeight:"bold"},className:"nav-link ",to:"/logout",children:"Logout"}),Object(I.jsxs)("p",{className:"nav-link  disabledCursor",style:{color:"black",fontWeight:"bold"},children:["Connection: ",localStorage.getItem("ip")]})]})})]})]})})})}function P(e){var t=e.error,a=String(t.message);return Object(I.jsx)(p.a,{bg:"dark",className:"mb-3",style:{height:"500px"},children:Object(I.jsxs)(p.a.Body,{children:[Object(I.jsx)("h3",{classname:"text-center fade-in",style:{marginTop:185,color:"orange",fontWeight:"bold",textAlign:"center"},children:"!Something Went Wrong. Please Refresh! Please Report the Issue"}),Object(I.jsx)(m.a,{style:{textAlign:"center",fontSize:20},children:Object(I.jsx)("a",{href:"https://github.com/cober2019/react-ios-xe-ops/issues",children:"Click Here to Submit Issue"})}),Object(I.jsx)("h5",{className:"mt-3",style:{textAlign:"center",fontSize:20},children:"Report your current page/location in the app. Also a brief explanation on your task that errored"}),Object(I.jsx)("pre",{className:"mt-3",style:{textAlign:"center",fontSize:20},children:a})]})})}function R(e,t,a){return Object(I.jsx)(p.a,{bg:"dark",className:"mb-3 border-0 overflow-auto",children:Object(I.jsxs)(p.a.Body,{children:[Object(I.jsx)(p.a.Title,{className:"mb-3",children:t}),a,Object(I.jsx)(N.ErrorBoundary,{FallbackComponent:P,children:e})]})})}var E=function(e,t){try{var a=e.getQueryCache(localStorage.getItem("ip")+"indexData").queries[0].state.data.interfaces;Object.values(a).map((function(e){return Object.values(t.interfaces).map((function(t){if(t.data.name===e.data.name){var a=parseFloat(t.data.statistics["rx-kbps"]-parseFloat(e.data.statistics["rx-kbps"])),c=parseFloat(t.data.statistics["tx-kbps"]-parseFloat(e.data.statistics["tx-kbps"]));return 1===Math.sign(a)?t.data.inbandwidthDiff="+"+a.toFixed(2):-1===Math.sign(a)?t.data.inbandwidthDiff=a.toFixed(2):t.data.inbandwidthDiff=a,1===Math.sign(c)?t.data.outbandwidthDiff="+"+c.toFixed(2):-1===Math.sign(c)?t.data.outbandwidthDiff=c.toFixed(2):t.data.outbandwidthDiff=c,null}return null})),null}))}catch(c){}return t};function q(e){return console.log(e),Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:!1,children:[Object(I.jsx)(y.a.Header,{closeButton:!0}),Object(I.jsx)(y.a.Body,{children:R(e.component,e.interface)})]}))}function L(){var e,t,a,c,n,r=Object(f.c)(Q),i=Object(d.a)(r,1)[0],j=Object(f.c)(W),u=Object(d.a)(j,1)[0],g=s.a.useState(!1),v=Object(d.a)(g,2),y=v[0],S=v[1],k=s.a.useState(void 0),C=Object(d.a)(k,2),A=C[0],F=C[1],B=w.AES.decrypt(localStorage.getItem("password"),i),T=Object(b.useQuery)(localStorage.getItem("ip")+"liveinterfaces",Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/liveinterfaces",{ip:localStorage.getItem("ip"),username:localStorage.getItem("username"),password:B.toString(w.enc.Utf8),port:localStorage.getItem("port")});case 2:return t=e.sent,a=E(u,t.data),void 0!==A&&Object.values(a.interfaces).map((function(e){return e.data.name===A.interface&&y&&F(e),Int8Array})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),{refetchInterval:2e3}),M=T.isLoading,L=T.error,H=T.data,U=T.isFetching;return L?Object(I.jsxs)("div",{children:[Object(I.jsx)(z,{}),Object(I.jsx)("h4",{className:"text-center fade-in",style:{marginTop:100},children:"Error Collecting Data. I'll Keep Trying"}),Object(I.jsx)("div",{className:"warning-loader text-center"})]}):H?Object(I.jsxs)(h.a,{fluid:!0,children:[Object(I.jsx)(N.ErrorBoundary,{FallbackComponent:P,children:Object(I.jsx)(z,{update:H,ip:localStorage.getItem("ip"),fetchingStatus:U,cpu:H.cpu,mem:H.mem})}),Object(I.jsxs)(O.a,{children:[Object(I.jsx)(m.a,{xl:2,children:Object(I.jsx)(O.a,{children:Object.values(H.interfaces).map((function(e){return Object(I.jsx)("button",{type:"button",style:{marginBottom:"10px"},className:"btn btn-success btn-md",onClick:function(){return F(e),void S(!0)},children:e.interface},e)}))})}),Object(I.jsx)(m.a,{xl:10,children:Object(I.jsx)(O.a,{children:Object.values(H.interfaces).map((function(e){return Object(I.jsx)(m.a,{xl:4,children:R(Object(I.jsx)(D,{qos:e.qos,value:e.data},e.interface),e.interface)},e)}))})})]}),y?Object(I.jsx)(q,{interface:A.interface,component:Object(I.jsx)(D,{qos:A.qos,value:A.data},A.interface),show:y,onHide:function(){return F(void 0),void S(!1)}}):Object(I.jsx)(I.Fragment,{})]}):M?Object(I.jsx)(I.Fragment,{children:(e=localStorage.getItem("ip"),t=localStorage.getItem("serial"),a=localStorage.getItem("model"),c=localStorage.getItem("uptime"),n=localStorage.getItem("software"),Object(I.jsx)(h.a,{fluid:"xl",children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(m.a,{xl:2}),Object(I.jsx)(m.a,{xl:8,children:Object(I.jsx)(p.a,{bg:"dark",className:"mb-3",style:{marginTop:"100px"},children:Object(I.jsxs)(p.a.Body,{children:[Object(I.jsxs)("h3",{className:"blinking-loader",children:["Collecting Data From ",e]}),Object(I.jsx)("br",{}),Object(I.jsxs)("h6",{children:["Device Model/SN: ",a," (",t,")"]}),Object(I.jsxs)("h6",{children:["Uptime: ",c]}),Object(I.jsxs)("h6",{children:["Software:  (",n,")"]})]})})}),Object(I.jsx)(m.a,{xl:2})]})}))}):void 0}var H=new b.QueryClient,Q=Object(f.b)({key:"key",default:"jdh%):Aap(3>S#"}),W=Object(f.b)({key:"queryClient",default:H});var U=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(M.a,{children:Object(I.jsxs)(j.d,{children:[Object(I.jsx)(j.b,{path:"/live_interfaces",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:H,children:Object(I.jsx)(L,{})})})}),Object(I.jsx)(j.b,{path:"/",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:H,children:Object(I.jsx)(C,{})})})}),Object(I.jsx)(j.b,{path:"/logout",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:H,children:Object(I.jsx)(C,{})})})})]})})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,206)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(U,{})}),document.getElementById("root")),J()}},[[202,1,2]]]);
//# sourceMappingURL=main.b27ed0d7.chunk.js.map