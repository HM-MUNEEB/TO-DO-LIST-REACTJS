(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(8),r=a.n(l),s=(a(25),a(17)),c=a(14),o=a(15),m=a(7),d=a(19),u=a(18),h=a(10),p=(a(36),a(37),a(16));var v=function(e){var t=e.items,a=t.map((function(a){return i.a.createElement("ul",null,i.a.createElement("li",{className:"list",key:t.key},i.a.createElement("div",{onClick:function(){e.deleteItem(a.key)}},i.a.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",class:"bi bi-trash",fill:"white",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),i.a.createElement("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))),i.a.createElement("p",{id:"pTag"},i.a.createElement("p",{id:"vertitalSlash"},"|"),a.text)))}));return i.a.createElement(p.a,{duration:100,easing:"ease-in-out",className:"items"},a)},f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={speed:0,items:[],currentItem:{text:null,key:null}},n.handleInput=n.handleInput.bind(Object(m.a)(n)),n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),null!==t.text){var a=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:null,key:null}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"componentDidMount",value:function(){var e=this;h.database().ref().child("speed").on("value",(function(t){e.setState({speed:t.val()})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("header",{id:"header"},i.a.createElement("h3",null,"SHAHMEN IS WATCHIN! ",this.state.speed)),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-list",onSubmit:this.addItem},i.a.createElement("textarea",{placeholder:"Enter Here",type:"text",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("div",{id:"bMargin"},i.a.createElement("button",{type:"submit"},"Add")))),i.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem}))),i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"All copy fucking rights goes to ",i.a.createElement("i",null,"HM Muneeb UR rehman"))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.initializeApp({apiKey:"AIzaSyAXUv88yvsngGKfQgjseq0AXCR_l2HV-gk",authDomain:"to-do-list-reactjs.firebaseapp.com",databaseURL:"https://to-do-list-reactjs.firebaseio.com",projectId:"to-do-list-reactjs",storageBucket:"to-do-list-reactjs.appspot.com",messagingSenderId:"460903040164",appId:"1:460903040164:web:89796c6b6980de16d39231",measurementId:"G-B6T3WSLLYZ"}),r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.cc2f49be.chunk.js.map