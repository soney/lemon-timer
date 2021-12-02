(this["webpackJsonplemon-timer"]=this["webpackJsonplemon-timer"]||[]).push([[0],{26:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a,r=n(3),c=n(11),i=n.n(c),s=n(9),o=n(16),l=n(1),u=n.n(l),b=n(0),j=function(t){var e=t.workInterval,n=t.breakInterval,a=t.onChangeWorkInterval,c=t.onChangeBreakInterval,i=Object(l.useState)(e),s=Object(r.a)(i,2),o=s[0],u=s[1],j=Object(l.useState)(n),d=Object(r.a)(j,2),f=d[0],O=d[1];return Object(b.jsxs)("form",{className:"form-inline row",children:[Object(b.jsx)("div",{className:"col-md-3"}),Object(b.jsxs)("div",{className:"col-md-3",children:[Object(b.jsx)("label",{htmlFor:"work-len",children:"work interval (minutes):"}),Object(b.jsx)("input",{className:"form-control",min:1,max:120,type:"number",id:"work-len",value:o||"",onChange:function(t){var e=parseInt(t.target.value);u(e),a(e)}})]}),Object(b.jsxs)("div",{className:"col-md-3",children:[Object(b.jsx)("label",{htmlFor:"break-len",children:"break interval (minutes):"}),Object(b.jsx)("input",{className:"form-control",min:1,max:120,type:"number",id:"break-len",value:f||"",onChange:function(t){var e=parseInt(t.target.value);O(e),c(e)}})]}),Object(b.jsx)("div",{className:"col-md-3"})]})},d=n(4),f=n.n(d);!function(t){t[t.EDITING=0]="EDITING",t[t.VIEWING=1]="VIEWING"}(a||(a={}));var O=function(t){var e=t.value,n=t.placeholder,c=t.editing,i=t.editable,s=t.editingClassName,o=t.viewingClassName,u=t.onChange,j=t.onFinishChange,d=t.onStartEditing,O=t.onStopEditing,k=Object(l.useState)(c?a.EDITING:a.VIEWING),v=Object(r.a)(k,2),m=v[0],h=v[1],g=Object(l.useState)(e||""),I=Object(r.a)(g,2),p=I[0],x=I[1],N=Object(l.useState)(e||""),E=Object(r.a)(N,2),w=E[0],C=E[1],S=Object(l.useRef)(null);if(Object(l.useEffect)((function(){m===a.EDITING&&S.current&&(S.current.focus(),S.current.select())}),[m]),m===a.EDITING){var D=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h(a.VIEWING),O&&O(),t?(C(p),j&&j(p)):j&&j(w)};return Object(b.jsx)("input",{className:f()(s),type:"text",value:w,onKeyDown:function(t){"Enter"===t.key?D():"Esc"===t.key&&D(!0)},onChange:function(t){var e=t.target.value;C(e),u&&u(e)},onBlur:function(){return D()},placeholder:n,ref:S})}var T=!w.trim();return Object(b.jsx)("button",{disabled:!i,className:f()("btn","btn-link",o,{placeholder:T}),onClick:function(){i&&(h(a.EDITING),x(w),d&&d())},children:T?n||"(empty)":w})},k=n(12);function v(t){var e=Math.round(t/1e3),n=Math.floor(e/60).toString().padStart(2,"0"),a=(e%60).toString().padStart(2,"0");return"".concat(n,":").concat(a)}var m,h=function(t){var e=t.target,n=t.onDone,a=Object(l.useState)(e-Date.now()),c=Object(r.a)(a,2),i=c[0],s=c[1];return Object(l.useEffect)((function(){var t=setInterval((function(){var a=e-Date.now();s(a),a<=0&&(clearInterval(t),n())}),1e3);return function(){return clearInterval(t)}}),[]),Object(b.jsx)(b.Fragment,{children:v(i)})},g=function(t){var e=t.blinking,n=Object(l.useState)(!0),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(l.useEffect)((function(){if(e){var t=setInterval((function(){i((function(t){return!t}))}),500);return function(){clearInterval(t)}}}),[e]),Object(b.jsx)("i",{className:f()("lemon","fa-lemon",c?"fa-solid":"fa-regular")})},I=function(t){var e=t.task,n=t.editing,a=t.onRemove,c=t.onDescriptionChange,i=t.onStart,s=t.workOnUntil,o=t.editable,u=t.onStop,j=Object(l.useState)(n),d=Object(r.a)(j,2),v=d[0],I=d[1],p=Object(k.times)(e.completedIntervals,(function(t){return Object(b.jsx)(g,{blinking:!1},t)}));return Object(b.jsxs)("tr",{className:"task"+(s?" active":""),children:[Object(b.jsxs)("td",{className:"input-group",style:{minWidth:"25em"},children:[Object(b.jsx)(O,{editable:o,onStartEditing:function(){return I(!0)},onStopEditing:function(){return I(!1)},editingClassName:"form-control",value:e.description,editing:n,placeholder:"Task description",onFinishChange:function(t){return c(e.id,t)}}),v&&Object(b.jsx)("button",{className:"btn btn-outline-danger btn-sm",onMouseDown:function(){return a(e.id)},children:Object(b.jsx)("i",{className:"fa-regular fa-trash-can"})})]}),Object(b.jsx)("td",{className:"completedCount align-middle",style:{width:"100%"},children:Object(b.jsxs)("div",{className:"py-1",children:[p,s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{blinking:!0},p.length),"\xa0",Object(b.jsx)("span",{className:"lemon-timer",children:Object(b.jsx)(h,{target:s,onDone:function(){return u(e.id,m.COMPLETED)}})})]})]})}),Object(b.jsxs)("td",{className:"d-grid",style:{width:"15em"},children:[s&&Object(b.jsxs)("button",{className:"btn btn-outline-danger btn-block",onClick:function(){return u(e.id,m.USER_INTERRUPT)},children:[Object(b.jsx)("i",{className:"fa-solid fa-stop"}),"\xa0stop"]}),!s&&Object(b.jsxs)("button",{className:f()("btn","btn-outline-success","btn-block",{invisible:!o}),onClick:function(){return i(e.id)},children:[Object(b.jsx)("i",{className:"fa-solid fa-play"}),"\xa0start"]})]})]})},p=n(5),x=n.n(p),N=u.a.memo(I);!function(t){t[t.USER_INTERRUPT=0]="USER_INTERRUPT",t[t.COMPLETED=1]="COMPLETED"}(m||(m={}));var E=new Audio("ping.wav"),w=!1,C=function(t){var e=t.state,n=t.onStateChange,a=Object(l.useState)(e),c=Object(r.a)(a,2),i=c[0],d=c[1];Object(l.useEffect)((function(){n&&n(i)}),[i]);var O=u.a.useCallback((function(){d((function(t){var e=Math.max.apply(Math,[0].concat(Object(o.a)(t.tasks.map((function(t){return t.id}))))),n={id:w=e+1,description:"",completedIntervals:0};return x()(t,{tasks:{$push:[n]}})}))}),[]),k=u.a.useCallback((function(t){d((function(e){var n=Date.now()+6e4*(e.workInterval||0);return x()(e,{activeTaskID:{$set:t},workingUntil:{$set:n}})}))}),[]),v=u.a.useCallback((function(t,e){d((function(n){if(e===m.COMPLETED){E.play();var a=S(n.tasks,t);if(!1!==a){var r=Date.now()+6e4*(n.breakInterval||0);return x()(n,{activeTaskID:{$set:!1},workingUntil:{$set:!1},onBreakUntil:{$set:r},tasks:Object(s.a)({},a,{completedIntervals:{$apply:function(t){return t+1}}})})}}return x()(n,{activeTaskID:{$set:!1},workingUntil:{$set:!1}})}))}),[]),g=u.a.useCallback((function(t){d((function(e){var n=S(e.tasks,t);return!1!==n?x()(e,{tasks:{$splice:[[n,1]]}}):e}))}),[]),I=u.a.useCallback((function(t,e){d((function(n){var a=S(n.tasks,t);return!1!==a?x()(n,{tasks:Object(s.a)({},a,{description:{$set:e}})}):n}))}),[]),p=u.a.useCallback((function(t){d((function(e){return x()(e,{workInterval:{$set:t}})}))}),[]),C=u.a.useCallback((function(t){d((function(e){return x()(e,{breakInterval:{$set:t}})}))}),[]),D=function(t){d((function(e){return t===m.COMPLETED&&E.play(),x()(e,{onBreakUntil:{$set:!1}})}))},T=!1!==i.activeTaskID,U=!1!==i.onBreakUntil,y=!T&&!U,R=i.tasks.map((function(t){var e=t.id===i.activeTaskID,n=!1===i.activeTaskID&&!1===i.onBreakUntil;return Object(b.jsx)(N,{onStop:v,onStart:k,task:t,editing:t.id===w,onRemove:g,onDescriptionChange:I,workOnUntil:e&&i.workingUntil,editable:n},t.id)}));return w=!1,Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("main",{className:"container",children:Object(b.jsxs)("table",{id:"lemon-app",className:f()("table",{working:T}),children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:Object(b.jsxs)("th",{colSpan:3,className:f()({invisible:T}),children:[!U&&Object(b.jsx)("h1",{children:"what do you want to do?"}),i.onBreakUntil&&Object(b.jsxs)("h1",{children:["take a break\xa0",Object(b.jsx)(h,{target:i.onBreakUntil,onDone:function(){return D(m.COMPLETED)}}),"\xa0",Object(b.jsxs)("button",{className:"btn btn-outline-danger btn-block",onClick:function(){return D(m.USER_INTERRUPT)},children:[Object(b.jsx)("i",{className:"fa-solid fa-stop"}),"\xa0end break"]})]})]})})}),Object(b.jsx)("tbody",{children:!U&&R}),Object(b.jsx)("tfoot",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:3,children:Object(b.jsx)("div",{className:"d-grid",children:y&&Object(b.jsxs)("button",{className:"btn btn-primary btn-block",disabled:!1!==i.activeTaskID,onClick:O,children:[Object(b.jsx)("i",{className:"fa-solid fa-plus"}),"\xa0add task"]})})})})})]})}),Object(b.jsx)("footer",{className:"container",children:y&&Object(b.jsx)(j,{workInterval:i.workInterval,breakInterval:i.breakInterval,onChangeWorkInterval:p,onChangeBreakInterval:C})})]})};function S(t,e){for(var n=0;n<t.length;n++)if(t[n].id===e)return n;return!1}n(24),n(25),n(26);var D=n(13),T="SI 579 PS 7",U="lemon_timer",y={tasks:[],activeTaskID:!1,workingUntil:!1,onBreakUntil:!1,workInterval:25,breakInterval:5};var R=u.a.memo(C);function B(){var t=Object(l.useState)(function(){try{var t=localStorage.getItem(U);return!!t&&JSON.parse(t)}catch(e){return!1}}()||y),e=Object(r.a)(t,2),n=e[0],a=e[1],c=Object(l.useState)(T),i=Object(r.a)(c,2),s=i[0],o=i[1];Object(l.useEffect)((function(){var t=setInterval((function(){if(!1!==n.workingUntil&&!1!==n.activeTaskID){var t=v(n.workingUntil-Date.now()),e=S(n.tasks,n.activeTaskID),a=!1===e?"focus":n.tasks[e].description;o("".concat(t," - ").concat(a))}else if(!1!==n.onBreakUntil){var r=n.onBreakUntil-Date.now();o("".concat(v(r)," - Break"))}else s!==T&&o(T)}),1e3);return function(){return clearInterval(t)}}),[n]);var j=u.a.useCallback((function(t){a(t),function(t){localStorage.setItem(U,JSON.stringify(t))}(t)}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D.a,{children:Object(b.jsx)("title",{children:s})}),Object(b.jsx)(R,{onStateChange:j,state:n})]})}i.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1b6812d5.chunk.js.map