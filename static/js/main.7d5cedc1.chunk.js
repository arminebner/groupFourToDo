(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),o=c(14),a=c.n(o),i=(c(34),c(10)),r=c(3),l=c(8),d=c.p+"static/media/happy.b46ec01c.svg",u=c.p+"static/media/angry.58a76ddd.svg",j=c.p+"static/media/busy.f0c2ee01.svg",b=(c(25),function(){var e=Object(l.c)((function(e){return e})),t=function(){var t={image:d,expression:"Awww Yeahhh!"};return e<1?(t.image=d,t.expression="Awww Yeahhh!"):e<=5?(t.image=j,t.expression="Alright - get to it:"):(t.image=u,t.expression="You suck. Your life sucks. Your dreams suck..."),t};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"main-wrapper",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("div",{className:"headLine",children:"Welcome back!"}),Object(s.jsx)("p",{className:"text-upper",children:"".concat(t().expression)}),Object(s.jsxs)("p",{className:"text",children:["You have ",Object(s.jsx)("span",{children:e})," Tasks to do!"]}),Object(s.jsx)("img",{className:"avatar",src:t().image,alt:"welcome"}),Object(s.jsx)("div",{className:"button-container",children:Object(s.jsx)(i.b,{className:"nav-link",to:"/overview",children:"see overview"})})]})})})}),m=c(13),O=(c(26),c(28)),p=function(e){var t=e.setInputText,c=e.todos,n=e.setTodos,o=e.inputText,a=e.setStatus,i=Object(l.b)();return Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{value:o,onChange:function(e){console.log(e.target.value),t(e.target.value)},type:"text",className:"todo-input"}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),i({type:"INCREMENT"}),n([].concat(Object(O.a)(c),[{text:o,completed:!1,id:1e3*Math.random()}])),t("")},className:"todo-button",type:"submit",children:Object(s.jsx)("i",{className:"fas fa-plus-square"})}),Object(s.jsx)("div",{className:"select",children:Object(s.jsxs)("select",{onChange:function(e){a(e.target.value)},name:"todos",className:"filter-todo",children:[Object(s.jsx)("option",{value:"all",children:"All"}),Object(s.jsx)("option",{value:"completed",children:"Completed"}),Object(s.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},f=c(23),h=function(e){var t=e.text,c=e.todo,n=e.todos,o=e.setTodos,a=Object(l.b)();return Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:t}),Object(s.jsx)("button",{onClick:function(){o(n.map((function(e){return e.id===c.id?Object(f.a)(Object(f.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(s.jsx)("i",{className:"fas fa-check"})}),Object(s.jsx)("button",{onClick:function(){a({type:"DECREMENT"}),o(n.filter((function(e){return e.id!==c.id})))},className:"trash-btn",children:Object(s.jsx)("i",{className:"fas fa-trash"})})]})},x=function(e){var t=e.todos,c=e.setTodos,n=e.filteredTodos;return Object(s.jsx)("div",{className:"todo-container",children:Object(s.jsx)("ul",{className:"todo-list",children:n.map((function(e){return Object(s.jsx)(h,{setTodos:c,todos:t,todo:e,text:e.text},e.id)}))})})};var v=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)([]),r=Object(m.a)(a,2),l=r[0],d=r[1],u=Object(n.useState)("all"),j=Object(m.a)(u,2),b=j[0],O=j[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),v=h[0],g=h[1];Object(n.useEffect)((function(){T()}),[]),Object(n.useEffect)((function(){N(),S()}),[l,b]);var N=function(){switch(b){case"completed":g(l.filter((function(e){return!0===e.completed})));break;case"uncompleted":g(l.filter((function(e){return!1===e.completed})));break;default:g(l)}},S=function(){null===localStorage.getItem("todos")?localStorage.setItem("todos",JSON.stringify([])):localStorage.setItem("todos",JSON.stringify(l))},T=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));d(e)}};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{className:"h1-title",children:"Yann's To-Do-List"})}),Object(s.jsx)(p,{inputText:c,todos:l,setTodos:d,setInputText:o,setStatus:O}),Object(s.jsx)(x,{filteredTodos:v,setTodos:d,todos:l}),Object(s.jsx)("div",{className:"button-container button-container-overview",children:Object(s.jsx)(i.b,{className:"nav-link",to:"/",children:"start"})})]})};var g=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i.a,{children:Object(s.jsxs)(r.c,{children:[Object(s.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(s.jsx)(r.a,{path:"/overview",component:v})]})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),o(e),a(e)}))},S=c(16),T=function(e,t){switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},E=0;JSON.parse(localStorage.getItem("todos"))&&function(){var e=JSON.parse(localStorage.getItem("todos"));E=e.length}();var w=Object(S.b)(T,E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(s.jsx)(l.a,{store:w,children:Object(s.jsx)(g,{})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.7d5cedc1.chunk.js.map