(this.webpackJsonphash_hub=this.webpackJsonphash_hub||[]).push([[8],{28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)(null)},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)(null)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),s=n.n(a),l=(n(54),n(11)),o=n(13),r=(n(55),n(3)),i=n(28),j=n(36),b=(n(56),n(1));var u=function(){return Object(b.jsxs)("div",{className:"preloader",children:[Object(b.jsx)("h1",{children:"Hash/Hub"}),Object(b.jsxs)("div",{className:"loader",children:[Object(b.jsx)("div",{class:"line line-1"}),Object(b.jsx)("div",{class:"line line-2"}),Object(b.jsx)("div",{class:"line line-3"}),Object(b.jsx)("div",{class:"line line-4"}),Object(b.jsx)("div",{class:"line line-5"})]})]})},x=n(43),h=n.n(x),O=n(45),p=n.n(O),m=n(46),d=n.n(m),g=n(40),f=n.n(g),v=n(39),y=n.n(v),_=n.p+"static/media/logo.f79833e3.png",k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(2),n.e(6),n.e(11)]).then(n.bind(null,202))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(2),n.e(6)]).then(n.bind(null,189))})),P=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(25)]).then(n.bind(null,103))})),S=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,108))})),B=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,195))})),C=Object(c.lazy)((function(){return n.e(24).then(n.bind(null,196))})),E=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(19)]).then(n.bind(null,205))})),I=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(16)]).then(n.bind(null,206))})),H=Object(c.lazy)((function(){return n.e(20).then(n.bind(null,207))})),N=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(3),n.e(12)]).then(n.bind(null,203))})),w=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,95))})),R=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,197))})),J=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,198))})),L=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(7),n.e(21)]).then(n.bind(null,199))})),F=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(7),n.e(22)]).then(n.bind(null,200))})),W=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(23)]).then(n.bind(null,201))}));var q=function(){var e=Object(r.f)(),t=Object(c.useState)("home"),n=Object(o.a)(t,2),a=n[0],s=n[1],x=Object(c.useState)(!1),O=Object(o.a)(x,2),m=O[0],g=O[1],v=Object(c.useState)([]),q=Object(o.a)(v,2),A=q[0],D=q[1],G=Object(c.useState)([]),K=Object(o.a)(G,2),M=K[0],Q=K[1];return Object(c.useEffect)((function(){localStorage.getItem("user")&&D(JSON.parse(localStorage.getItem("user"))),"true"===localStorage.getItem("userexist")?g(!0):g(!1)}),[localStorage.getItem("user")]),Object(b.jsx)(b.Fragment,{children:!0===m?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)(u,{}),children:[Object(b.jsxs)("div",{id:"main-nav-bar",children:[Object(b.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(b.jsx)("img",{style:{maxWidth:"3rem"},src:_}),Object(b.jsx)(l.b,{to:"/",children:"Hash/Hub"})]}),Object(b.jsxs)("nav",{id:"nav-menu",children:[Object(b.jsxs)(l.b,{className:"home"===a?"active":"",onClick:function(){return s("home")},to:"/",children:[" ",Object(b.jsx)(h.a,{style:{marginRight:"5px"}})," Home"]}),Object(b.jsxs)(l.b,{className:"Explore"===a?"active":"",onClick:function(){return s("Explore")},to:"/Explore",children:[" ",Object(b.jsx)(p.a,{style:{marginRight:"5px"}})," Explore"]}),Object(b.jsxs)(l.b,{className:"Blogs"===a?"active":"",onClick:function(){return s("Blogs")},to:"/Blogs",children:[Object(b.jsx)(d.a,{style:{marginRight:"5px"}})," Blogs"]}),Object(b.jsxs)("a",{href:"https://github.com/vedant-jain03/HashHub",children:[" ",Object(b.jsx)(y.a,{style:{marginRight:"5px"}})," Contribute"]})]}),!0===m?Object(b.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:function(){return e.push("/userprofile")},className:"user",children:[Object(b.jsx)(f.a,{style:{cursor:"pointer",color:"white"}}),Object(b.jsx)("span",{style:{fontWeight:"600",color:"white"},children:A.name}),Object(b.jsx)("button",{id:"login_logout_tackle",onClick:function(){localStorage.setItem("userexist","false"),g(!1)},style:{marginLeft:"1rem"},children:"Logout"})]}):Object(b.jsx)("button",{id:"login_logout_tackle",onClick:function(){e.push("/")},children:"Login"})]}),Object(b.jsx)(l.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsxs)(i.a.Provider,{value:{user:A,setuser:D,userexist:m,setuserexist:g},children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:k}),Object(b.jsx)(r.a,{exact:!0,path:"/Explore",component:z}),Object(b.jsx)(r.a,{exact:!0,path:"/Opensource",component:P}),Object(b.jsx)(r.a,{exact:!0,path:"/ai",component:S}),Object(b.jsx)(r.a,{exact:!0,path:"/ml",component:B}),Object(b.jsx)(r.a,{exact:!0,path:"/github_profile_readme",component:C}),Object(b.jsx)(r.a,{exact:!0,path:"/certificate_generator",component:E}),Object(b.jsx)(r.a,{exact:!0,path:"/Smart_pdf",component:I}),Object(b.jsx)(r.a,{exact:!0,path:"/markdown_generator",component:H}),Object(b.jsx)(r.a,{exact:!0,path:"/resume_maker",component:N}),Object(b.jsx)(r.a,{exact:!0,path:"/login",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/register",component:R}),Object(b.jsxs)(j.a.Provider,{value:{currentindexblog:M,setcurrentblog:Q},children:[Object(b.jsx)(r.a,{exact:!0,path:"/Blogs",component:J}),Object(b.jsx)(r.a,{exact:!0,path:"/CreateBlog",component:L}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogpage",component:F}),Object(b.jsx)(r.a,{exact:!0,path:"/userprofile",component:W})]})]})})})]})}):Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(u,{}),children:Object(b.jsx)(l.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsxs)(i.a.Provider,{value:{user:A,setuser:D,userexist:m,setuserexist:g},children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/login",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/register",component:R}),Object(b.jsx)(r.a,{exact:!0,path:"/Explore",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Opensource",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/ai",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/ml",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/github_profile_readme",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/certificate_generator",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Smart_pdf",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/markdown_generator",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/resume_maker",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogs",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/CreateBlog",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogpage",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/userprofile",component:w})]})})})})})};s.a.render(Object(b.jsx)(l.a,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[67,9,10]]]);
//# sourceMappingURL=main.a8160c25.chunk.js.map