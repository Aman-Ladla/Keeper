(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),j=n(7),i=n.n(j),o=n(43),a=n(22),s=n(76),u=n(2);var b=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:[Object(u.jsx)(s.a,{}),"Keeper"]})})})};var l=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:"Copyright \xa9 2021"})})},O=n(41),d=n.n(O);var h=function(e){return console.log(e.item),Object(u.jsxs)("div",{className:"note",children:[Object(u.jsx)("h1",{children:e.item.topic}),Object(u.jsx)("p",{children:e.item.content}),Object(u.jsx)("button",{onClick:function(){e.remove(e.item)},children:Object(u.jsx)(d.a,{})})]})},x=n(26),f=n(32),p=n(42),v=n.n(p),m=n(78),g=n(79);var k=function(e){var t=Object(c.useState)({topic:"",content:""}),n=Object(a.a)(t,2),r=n[0],j=n[1],i=Object(c.useState)(!1),o=Object(a.a)(i,2),s=o[0],b=o[1];function l(e){var t=e.target,n=t.name,c=t.value;j((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,c))}))}return Object(u.jsx)("div",{onClick:function(){b(!0)},children:Object(u.jsxs)("form",{className:"create-note",children:[s&&Object(u.jsx)("input",{onChange:l,value:r.topic,name:"topic",placeholder:"Title"}),Object(u.jsx)("textarea",{onChange:l,value:r.content,name:"content",placeholder:"Take a note...",rows:s?"3":"1"}),Object(u.jsx)(g.a,{in:s,children:Object(u.jsx)(m.a,{onClick:function(t){e.add(r),t.preventDefault(),j({topic:"",content:""})},children:Object(u.jsx)(v.a,{})})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];function j(e){r((function(t){return t.filter((function(t){return e!==t}))}))}return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(k,{add:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(u.jsx)(h,{id:t,item:e,remove:j},t)})),Object(u.jsx)(l,{})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ded6a36a.chunk.js.map