(this["webpackJsonpxe-ops-bandwdith-monitor"]=this["webpackJsonpxe-ops-bandwdith-monitor"]||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},172:function(e,t){},204:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(33),n=a.n(r),l=(a(146),a(147),a(148),a(27)),i=a.n(l),o=a(53),d=a(6),j=a(23),b=a(42),x=a(66),u=a.n(x),p=a(49),h=a(30),O=a(19),m=a(13),g=a(35),f=a(31),v=a(2),y=a(45),N=a(109),I=a(0);function S(e){return"Request Timeout"===e.msg?Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",backdrop:!0,children:[Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:e.msg}),Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:"The App Did Not Receive A Response From The Device"})]}),Object(I.jsx)(y.a.Footer,{children:Object(I.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(N.a,{size:"sm",variant:"danger",onClick:e.onHide,style:{alignItems:"center"},children:"ReAuth"})})})]})):Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",backdrop:!0,children:[Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:e.msg}),"Authentication Failed"!==e.msg?Object(I.jsx)("div",{style:{marginLeft:"100px"},children:Object(I.jsx)("div",{className:"spinner"})}):Object(I.jsx)("p",{style:{color:"black",textAlign:"center"},children:"Verify RESTCONF Capabilities and Credentials"})]}),Object(I.jsx)(y.a.Footer,{children:"Authentication Failed"===e.msg?Object(I.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(N.a,{size:"sm",variant:"danger",onClick:e.onHide,style:{alignItems:"center"},children:"ReAuth"})}):Object(I.jsx)("div",{})})]}))}var k=a(62);function C(){var e=Object(f.c)(V),t=Object(d.a)(e,1)[0],a=Object(c.useState)(""),r=Object(d.a)(a,2),n=r[0],l=r[1],x=Object(c.useState)(""),v=Object(d.a)(x,2),y=v[0],N=v[1],C=Object(c.useState)(""),w=Object(d.a)(C,2),A=w[0],F=w[1],D=Object(c.useState)(443),M=Object(d.a)(D,2),T=M[0],B=M[1],E=Object(c.useState)(!1),P=Object(d.a)(E,2),_=P[0],R=P[1],z=s.a.useState(!1),L=Object(d.a)(z,2),q=L[0],W=L[1],Q=Object(c.useState)("Autheniticating"),H=Object(d.a)(Q,2),U=H[0],J=H[1],K=u.a.create();K.defaults.timeout=3e4;var X=Object(b.useQuery)(n+"login",Object(o.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/login",{ip:n,username:y,password:A,port:T}).then((function(e){if(200===e.data.status){var a=k.AES.encrypt(A,t);return localStorage.setItem("ip",n),localStorage.setItem("port",443),localStorage.setItem("username",y),localStorage.setItem("password",a.toString()),localStorage.setItem("pollingInterval",2e4),W(!1),R(!0),e.data}J("Authentication Failed")})).catch((function(){J("Request Timeout")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),{enabled:!1,cacheTime:1/0}).refetch;return Object(c.useEffect)((function(){localStorage.clear()}),[]),_?_?Object(I.jsx)(j.a,{push:!0,to:{pathname:"/live_interfaces"},from:"/login"}):void 0:Object(I.jsx)(p.a,{fluid:"xl",children:Object(I.jsxs)(O.a,{style:{alignItems:"center",marginTop:"100px"},children:[Object(I.jsx)(m.a,{xl:4}),Object(I.jsx)(m.a,{xl:4,children:Object(I.jsx)(h.a,{children:Object(I.jsxs)(h.a.Body,{children:[Object(I.jsx)(h.a.Title,{className:"mb-3",style:{color:"black",textAlign:"center"},children:"IOS-XE Login"}),Object(I.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),X()},children:[Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:n,onChange:function(e){return l(e.target.value)},placeholder:"IP Address",name:"ipAddress",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:y,onChange:function(e){return N(e.target.value)},placeholder:"Username",name:"username",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:A,onChange:function(e){return F(e.target.value)},placeholder:"Password",name:"password",required:!0}),Object(I.jsx)(g.a.Control,{size:"sm",className:"mb-3 text-center",value:T,onChange:function(e){return B(e.target.value)},placeholder:"Default 443",name:"restconfPort",required:!0}),Object(I.jsx)(g.a.Control,{onClick:function(){return W(!0)},type:"submit",value:"Login",className:"btn btn-success"})]}),q?Object(I.jsx)(S,{msg:U,show:q,onHide:function(){return J("Autheniticating"),void W(!1)}}):Object(I.jsx)(I.Fragment,{})]})})}),Object(I.jsx)(m.a,{xl:4})]})})}var w=a(59),A=a(18);function F(e,t,a){A.d.register(A.f,A.g,A.i,A.h,A.c,A.j,A.e);var c=new Date;return new A.d(e,{type:"line",options:{responsive:!0,animation:!0,plugins:{legend:{display:!0,labels:{color:"white"},position:"top"}},scales:{y:{min:0,suggestedMin:5,suggestedMax:20,display:!0,position:"right",padding:3,grid:{},ticks:{stepSize:5,color:"yellow"}},y1:{suggestedMin:5,suggestedMax:20,min:0,display:!0,position:"left",padding:3,grid:{},ticks:{stepSize:5,color:"white"}},x:{grid:{borderColor:"white"},ticks:{stepSize:1,color:"white"},title:{display:!0,text:"Seconds",color:"white"}}}},data:{labels:[c.getSeconds()],datasets:[{label:"Mbps Out",pointStyle:"star",pointRadius:4,pointBorderColor:"yellow",pointBackgroundColor:"yellow",borderColor:"yellow",backgroundColor:"yellow",data:[parseInt(t)/1e3],fill:!1,radius:0,borderWidth:1,yAxisID:"y"},{pointStyle:"star",pointBackgroundColor:"yellow",pointBorderColor:"yellow",pointRadius:4,label:"Mbps In",borderColor:"white",backgroundColor:"white",data:[parseInt(a)/1e3],fill:!1,radius:0,borderWidth:1,yAxisID:"y1"}]}})}function D(e,t,a){var c=new Date;return e.data.datasets.forEach((function(s,r){s.data.length>=10?0===r?(e.data.labels.shift(),e.data.labels.push(c.getSeconds()),s.data.shift(),s.data.push(parseInt(t))):(s.data.shift(),s.data.push(parseInt(a))):0===r?(e.data.labels.push(c.getSeconds()),s.data.push(parseInt(t))):s.data.push(parseInt(a))})),e}function M(e){var t=Object(c.useRef)(null),a=s.a.createRef();return Object(c.useEffect)((function(){if(null!==t.current)try{var a=D(t.current,parseInt(e.value.statistics["tx-kbps"]),parseInt(e.value.statistics["rx-kbps"]));a.update(),t.current=a}catch(c){}}),[e.value,a]),Object(c.useEffect)((function(){try{var c=F(a.current.getContext("2d"),parseInt(e.value.statistics["tx-kbps"]),parseInt(e.value.statistics["rx-kbps"]));t.current=c}catch(s){}}),[e.value,a]),Object(I.jsxs)("div",{id:e.value.name,children:[Object(I.jsx)(O.a,{children:Object(I.jsx)("canvas",{ref:a,height:"300px"})}),Object(I.jsx)("br",{}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)(m.a,{xl:3,style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:"Speed:"}),Object(I.jsx)("p",{className:"card-text",children:"Status:"}),Object(I.jsx)("p",{className:"card-text",children:"IP:"}),Object(I.jsx)("p",{className:"card-text",children:"MTU:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps Out:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps In:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps Out Diff:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps In Diff:"})]}),Object(I.jsxs)(m.a,{xl:3,style:{textAlign:"left"},children:[Object(I.jsxs)("p",{className:"card-text",children:[1e3*Math.round(parseInt(e.value.speed)/1e9)," (Mbps)"]}),Object(I.jsx)("p",{className:"card-text",children:e.value["oper-status"]}),e.value.ipv4?Object(I.jsx)("p",{className:"card-text",children:e.value.ipv4}):Object(I.jsx)("p",{className:"card-text",children:"n/a"}),Object(I.jsx)("p",{className:"card-text",children:e.value.mtu}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["tx-kbps"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["rx-kbps"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.outbandwidthDiff}),Object(I.jsx)("p",{className:"card-text",children:e.value.inbandwidthDiff})]}),Object(I.jsxs)(m.a,{xl:3,style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:"PPs Out:"}),Object(I.jsx)("p",{className:"card-text",children:"PPs In:"}),Object(I.jsx)("p",{className:"card-text",children:"InDis:"}),Object(I.jsx)("p",{className:"card-text",children:"OutDis:"}),Object(I.jsx)("p",{className:"card-text",children:"InErr:"}),Object(I.jsx)("p",{className:"card-text",children:"InDis:"}),Object(I.jsx)("p",{className:"card-text",children:"CRC:"}),Object(I.jsx)("p",{className:"card-text",children:"InDis:"})]}),Object(I.jsxs)(m.a,{xl:3,style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["rx-pps"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["tx-pps"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["in-discards"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["out-discards"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["in-errors"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["out-errors"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["in-crc-errors"]}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["num-flaps"]})]})]}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)(m.a,{xl:3,className:"mt-3",style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:"Description:"}),Object(I.jsx)("p",{className:"card-text",children:"LastChange:"})]}),Object(I.jsxs)(m.a,{xl:9,className:"mt-3",style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:e.value.description}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["discontinuity-time"].split(".")[0]})]})]})]})}a(83).DataTable=a(107),a(83).DataTable=a(107);var T=a(133),B=a(100),E=a(73),P=a(63);function _(){return Object(I.jsx)(p.a,{fluid:!0,children:Object(I.jsx)(O.a,{xl:!0,className:"mt-3",children:Object(I.jsxs)(B.a,{bg:"black",expand:!1,className:"mb-3",children:[Object(I.jsx)(B.a.Toggle,{"aria-controls":"offcanvasNavbar",style:{backgroundColor:"white"}}),Object(I.jsxs)(B.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(I.jsx)(E.a.Header,{style:{backgroundColor:"#868F80"},closeButton:!0,children:Object(I.jsx)(E.a.Title,{id:"offcanvasNavbarLabel",style:{color:"black"},children:"XE-Ops Bandwdith Viewer"})}),Object(I.jsx)("div",{className:"border-bottom",style:{color:"black"}}),Object(I.jsx)(E.a.Body,{style:{backgroundColor:"#868F80"},children:Object(I.jsxs)(T.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(I.jsx)(P.b,{style:{color:"black",fontWeight:"bold"},className:"nav-link ",to:"/live_interfaces",children:"Cisco Live Interfaces"}),Object(I.jsx)(P.b,{style:{color:"black",fontWeight:"bold"},className:"nav-link ",to:"/ietf_live_interfaces",children:"IETF Live Interfaces"}),Object(I.jsx)(P.b,{style:{color:"black",fontWeight:"bold"},className:"nav-link ",to:"/logout",children:"Logout"}),Object(I.jsxs)("p",{className:"nav-link  disabledCursor",style:{color:"black",fontWeight:"bold"},children:["Connection: ",localStorage.getItem("ip")]})]})})]})]})})})}function R(e){var t=e.error,a=String(t.message);return Object(I.jsx)(h.a,{bg:"dark",className:"mb-3",style:{height:"500px"},children:Object(I.jsxs)(h.a.Body,{children:[Object(I.jsx)("h3",{classname:"text-center fade-in",style:{marginTop:185,color:"orange",fontWeight:"bold",textAlign:"center"},children:"!Something Went Wrong. Please Refresh! Please Report the Issue"}),Object(I.jsx)(m.a,{style:{textAlign:"center",fontSize:20},children:Object(I.jsx)("a",{href:"https://github.com/cober2019/react-ios-xe-ops/issues",children:"Click Here to Submit Issue"})}),Object(I.jsx)("h5",{className:"mt-3",style:{textAlign:"center",fontSize:20},children:"Report your current page/location in the app. Also a brief explanation on your task that errored"}),Object(I.jsx)("pre",{className:"mt-3",style:{textAlign:"center",fontSize:20},children:a})]})})}function z(e,t){return Object(I.jsx)(h.a,{bg:"dark",className:"mb-3 border-0 overflow-auto",children:Object(I.jsxs)(h.a.Body,{children:[Object(I.jsx)(h.a.Title,{className:"mb-3",children:t}),Object(I.jsx)(w.ErrorBoundary,{FallbackComponent:R,children:e})]})})}var L=function(e,t,a,c,s){return Object(I.jsx)(p.a,{fluid:"xl",children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(m.a,{xl:2}),Object(I.jsx)(m.a,{xl:8,children:Object(I.jsxs)("h3",{className:"blinking-loader",style:{marginTop:"100px"},children:["Collecting Data From ",e]})}),Object(I.jsx)(m.a,{xl:2})]})})},q=function(e,t){try{var a=e.getQueryCache(localStorage.getItem("ip")+"indexData").queries[0].state.data.interfaces;Object.values(a).map((function(e){return Object.values(t.interfaces).map((function(t){if(t.data.name===e.data.name){var a=parseFloat(t.data.statistics["rx-kbps"]-parseFloat(e.data.statistics["rx-kbps"])),c=parseFloat(t.data.statistics["tx-kbps"]-parseFloat(e.data.statistics["tx-kbps"]));return 1===Math.sign(a)?t.data.inbandwidthDiff="+"+a.toFixed(2):-1===Math.sign(a)?t.data.inbandwidthDiff=a.toFixed(2):t.data.inbandwidthDiff=a,1===Math.sign(c)?t.data.outbandwidthDiff="+"+c.toFixed(2):-1===Math.sign(c)?t.data.outbandwidthDiff=c.toFixed(2):t.data.outbandwidthDiff=c,null}return null})),null}))}catch(c){}return t};function W(e){return console.log(e),Object(I.jsxs)(y.a,Object(v.a)(Object(v.a)({},e),{},{size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:!1,children:[Object(I.jsx)(y.a.Header,{closeButton:!0}),Object(I.jsx)(y.a.Body,{children:z(e.component,e.interface)})]}))}function Q(e){var t=s.a.useState(),a=Object(d.a)(t,2),c=a[0],r=a[1];return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(g.a,{onSubmit:function(e){localStorage.setItem("pollingInterval",c)},v:!0,children:[Object(I.jsxs)(g.a.Group,{as:m.a,controlId:"routerId",children:[Object(I.jsxs)(g.a.Label,{style:{textAlign:"left",fontWeight:"bold"},children:["Polling Interval (",localStorage.getItem("pollingInterval"),"ms + 5ish)"]}),Object(I.jsx)(g.a.Control,{className:"mb-3",size:"sm",onChange:function(e){return r(e.target.value)},placeholder:"Interval Ms ex. 10000",name:"interval",style:{textAlign:"left",fontWeight:"bold"}})]}),Object(I.jsx)(m.a,{xl:4,children:Object(I.jsx)(g.a.Control,{type:"submit",value:"Change",className:"btn btn-success btn-sm mb-3"})})]})})}function H(){var e=Object(f.c)(V),t=Object(d.a)(e,1)[0],a=Object(f.c)(X),c=Object(d.a)(a,1)[0],r=s.a.useState(!1),n=Object(d.a)(r,2),l=n[0],j=n[1],x=s.a.useState(void 0),h=Object(d.a)(x,2),g=h[0],v=h[1],y=k.AES.decrypt(localStorage.getItem("password"),t),N=Object(b.useQuery)(localStorage.getItem("ip")+"liveinterfaces",Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/liveinterfaces",{ip:localStorage.getItem("ip"),username:localStorage.getItem("username"),password:y.toString(k.enc.Utf8),port:localStorage.getItem("port")});case 2:return t=e.sent,a=q(c,t.data),void 0!==g&&Object.values(a.interfaces).map((function(e){return e.data.name===g.interface&&l&&v(e),Int8Array})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),{refetchInterval:parseInt(localStorage.getItem("pollingInterval"))}),S=N.isLoading,C=N.error,A=N.data,F=N.isFetching;return C?Object(I.jsxs)("div",{children:[Object(I.jsx)(_,{}),Object(I.jsx)("h4",{className:"text-center fade-in",style:{marginTop:100},children:"Error Collecting Data. I'll Keep Trying"}),Object(I.jsx)("div",{className:"warning-loader text-center"})]}):A?Object(I.jsxs)(p.a,{fluid:!0,children:[Object(I.jsx)(w.ErrorBoundary,{FallbackComponent:R,children:Object(I.jsx)(_,{update:A,ip:localStorage.getItem("ip"),fetchingStatus:F,cpu:A.cpu,mem:A.mem})}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)(m.a,{xl:2,children:[Object(I.jsx)(O.a,{children:Object.values(A.interfaces).map((function(e){return Object(I.jsx)("button",{type:"button",style:{marginBottom:"10px"},className:"btn btn-success btn-md",onClick:function(){return v(e),void j(!0)},children:e.interface},e)}))}),Object(I.jsx)(O.a,{className:"border-bottom mb-3 mt-3",style:{color:"black"}}),Object(I.jsx)(w.ErrorBoundary,{FallbackComponent:R,children:Object(I.jsx)(Q,{})})]}),Object(I.jsx)(m.a,{xl:10,children:Object(I.jsx)(O.a,{children:Object.values(A.interfaces).map((function(e){return Object(I.jsx)(m.a,{xl:4,children:z(Object(I.jsx)(M,{qos:e.qos,value:e.data},e.interface),e.interface)},e)}))})})]}),l?Object(I.jsx)(W,{interface:g.interface,component:Object(I.jsx)(M,{qos:g.qos,value:g.data},g.interface),show:l,onHide:function(){return v(void 0),void j(!1)}}):Object(I.jsx)(I.Fragment,{})]}):S?Object(I.jsx)(I.Fragment,{children:L(localStorage.getItem("ip"),localStorage.getItem("serial"),localStorage.getItem("model"),localStorage.getItem("uptime"),localStorage.getItem("software"))}):void 0}function U(e){var t=Object(c.useRef)(null),a=s.a.createRef();return Object(c.useEffect)((function(){if(null!==t.current&&!e.isPolling)try{var a=D(t.current,parseInt(e.value.mbps_out),parseInt(e.value.mbps_in));a.update(),t.current=a}catch(c){}}),[e.value,a]),Object(c.useEffect)((function(){try{var c=F(a.current.getContext("2d"),parseInt(e.value.mbps_out),parseInt(e.value.mbps_in));t.current=c}catch(s){}}),[e.value,a]),Object(I.jsxs)("div",{id:e.key,children:[Object(I.jsx)(O.a,{children:Object(I.jsx)("canvas",{ref:a,height:"300px"})}),Object(I.jsx)("br",{}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)(m.a,{xl:3,style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:"Descr:"}),Object(I.jsx)("p",{className:"card-text",children:"IP Address:"}),Object(I.jsx)("p",{className:"card-text",children:"Speed:"}),Object(I.jsx)("p",{className:"card-text",children:"Status:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps Out:"}),Object(I.jsx)("p",{className:"card-text",children:"Mbps In:"}),Object(I.jsx)("p",{className:"card-text",children:"LastChange:"})]}),Object(I.jsxs)(m.a,{xl:9,style:{textAlign:"left"},children:[Object(I.jsx)("p",{className:"card-text",children:e.value.description}),Object(I.jsx)("p",{className:"card-text",children:e.value.ip_address}),Object(I.jsxs)("p",{className:"card-text",children:[1e3*Math.round(parseInt(e.value.speed)/1e9)," (Mbps)"]}),Object(I.jsx)("p",{className:"card-text",children:e.value["oper-status"]}),Object(I.jsx)("p",{className:"card-text",children:Math.round(parseInt(e.value.mbps_out))}),Object(I.jsx)("p",{className:"card-text",children:Math.round(parseInt(e.value.mbps_in))}),Object(I.jsx)("p",{className:"card-text",children:e.value.statistics["discontinuity-time"].split(".")[0]})]})]})]})}function J(){var e=Object(f.c)(V),t=Object(d.a)(e,1)[0],a=Object(f.c)(X),c=(Object(d.a)(a,1)[0],s.a.useState(!1)),r=Object(d.a)(c,2),n=r[0],l=r[1],j=s.a.useState(void 0),x=Object(d.a)(j,2),h=x[0],g=x[1],v=(k.AES.decrypt(localStorage.getItem("password"),t),Object(b.useQuery)(localStorage.getItem("ip")+"interface_stats_ietf",Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/interface_stats_ietf",{pollingInterval:localStorage.getItem("pollingInterval")});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:parseInt(localStorage.getItem("pollingInterval"))})),y=v.isLoading,N=v.error,S=v.data,C=v.isFetching;return N?Object(I.jsxs)("div",{children:[Object(I.jsx)(_,{}),Object(I.jsx)("h4",{className:"text-center fade-in",style:{marginTop:100},children:"Error Collecting Data. I'll Keep Trying"}),Object(I.jsx)("div",{className:"warning-loader text-center"})]}):S?Object(I.jsxs)(p.a,{fluid:!0,children:[Object(I.jsx)(w.ErrorBoundary,{FallbackComponent:R,children:Object(I.jsx)(_,{update:S,ip:localStorage.getItem("ip"),fetchingStatus:C,cpu:S.cpu,mem:S.mem})}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)(m.a,{xl:2,children:[Object(I.jsx)(O.a,{children:S.data.stats.map((function(e){return Object(I.jsx)("button",{type:"button",style:{marginBottom:"10px"},className:"btn btn-success btn-md",onClick:function(){return g(e),void l(!0)},children:e.name},e)}))}),Object(I.jsx)(O.a,{className:"border-bottom mb-3 mt-3",style:{color:"black"}}),Object(I.jsx)(w.ErrorBoundary,{FallbackComponent:R,children:Object(I.jsx)(Q,{})})]}),Object(I.jsx)(m.a,{xl:10,children:Object(I.jsx)(O.a,{children:S.data.stats.map((function(e){return Object(I.jsx)(m.a,{xl:4,children:z(Object(I.jsx)(U,{isPolling:C,value:e},e.name),e.name)},e)}))})})]}),n?Object(I.jsx)(W,{interface:h.interface,component:Object(I.jsx)(U,{value:h},h.name),show:n,onHide:function(){return g(void 0),void l(!1)}}):Object(I.jsx)(I.Fragment,{})]}):y?Object(I.jsx)(I.Fragment,{children:L(localStorage.getItem("ip"),localStorage.getItem("serial"),localStorage.getItem("model"),localStorage.getItem("uptime"),localStorage.getItem("software"))}):void 0}a(83).DataTable=a(107);var K=new b.QueryClient,V=Object(f.b)({key:"key",default:"jdh%):Aap(3>S#"}),X=Object(f.b)({key:"queryClient",default:K});var G=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(P.a,{children:Object(I.jsxs)(j.d,{children:[Object(I.jsx)(j.b,{path:"/live_interfaces",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:K,children:Object(I.jsx)(H,{})})})}),Object(I.jsx)(j.b,{path:"/ietf_live_interfaces",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:K,children:Object(I.jsx)(J,{})})})}),Object(I.jsx)(j.b,{path:"/",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:K,children:Object(I.jsx)(C,{})})})}),Object(I.jsx)(j.b,{path:"/logout",children:Object(I.jsx)(f.a,{children:Object(I.jsx)(b.QueryClientProvider,{client:K,children:Object(I.jsx)(C,{})})})})]})})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,208)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(G,{})}),document.getElementById("root")),Y()}},[[204,1,2]]]);
//# sourceMappingURL=main.9de7cddd.chunk.js.map