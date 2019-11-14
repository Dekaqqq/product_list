(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getProducts",(function(){return $})),n.d(r,"fff",(function(){return q}));var a={};n.r(a),n.d(a,"loaderOn",(function(){return te})),n.d(a,"loaderOff",(function(){return ne}));var c={};n.r(c),n.d(c,"addProducts",(function(){return ue})),n.d(c,"fetchProducts",(function(){return ie}));var o=n(0),u=n.n(o),i=n(24),s=n.n(i),l=n(13),f=n(20),p=(n(69),n(70),n(26)),d=n(27),m=n(28),h=n(30),b=n(29),g=n(31),O=n(10),v=n(14),y=n(50),j=n.n(y),E=(n(90),n(17)),w=n(18);function x(){var e=Object(E.a)(["\n    font-weight: 700;\n    font-size: 1.4rem;\n    color: #0e9753;\n"]);return x=function(){return e},e}function C(){var e=Object(E.a)(["\n    margin: 10px 0;\n    font-size: 1.5rem;\n"]);return C=function(){return e},e}function _(){var e=Object(E.a)(["\n    display: block;\n    margin-bottom: 6px;\n    font-size: 1.2rem;\n    font-weight: 700;\n    text-decoration: none;\n    color: #159292;\n"]);return _=function(){return e},e}function k(){var e=Object(E.a)(["\n    display: block;\n    margin: 10px 0;\n    font-weight: 700;\n    cursor: pointer;\n"]);return k=function(){return e},e}function P(){var e=Object(E.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n"]);return P=function(){return e},e}function D(){var e=Object(E.a)(["\n    text-align: center;\n    margin-bottom: 20px;\n    padding: 20px;\n"]);return D=function(){return e},e}var S=w.a.li(D()),L=w.a.ul(P()),N=w.a.span(k()),A=w.a.a(_()),F=w.a.p(C()),R=w.a.p(x()),T=function(e){var t=e.img,n=e.brand,r=e.name,a=e.bsr_category,c=e.link,o=e.price,i=r.slice(0,16);return u.a.createElement(S,{className:"col-md-4"},u.a.createElement("img",{src:t,alt:n,className:"list-item__img",width:"120",height:"150"}),u.a.createElement("h3",{className:"list-item__headline"},a),u.a.createElement(F,{className:"list-item__name"},i),u.a.createElement(A,{href:c,target:"_blank",rel:"noopener noreferrer",className:"list-item__link"},"Show Product"),u.a.createElement(R,{className:"list-item__price"},o," $"))},H=function(e){return e.value},z=Object(l.b)((function(e){return{value:H(e)}}))((function(e){var t=e.products,n=e.value,r="All Categories"!==n&&n?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.bsr_category.toLowerCase().includes(n.toLowerCase())})):t;return u.a.createElement(L,{className:"col-sm-10 col-md-8"},r.map((function(e){return u.a.createElement(T,Object.assign({},e,{key:e.asin}))})))})),B=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={text:""},n.handleChange=function(e){var t=e.target,r=t.name,a=t.value,c=n.props.onSearch;n.setState(Object(p.a)({},r,a),(function(){return c(a)}))},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.text;return u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{type:"text",value:e,onChange:this.handleChange,name:"text",className:"form-element  text-center col-md-12",placeholder:"Enter name of product to search..."}))}}]),t}(o.Component),U=Object(l.b)((function(e){return{value:H(e)}}))(B),V=n(53),I=n.n(V),J=function(e){var t=e.categories,n=e.selectCategory;return u.a.createElement(u.a.Fragment,null,u.a.createElement("ul",{className:"col-sm-2 col-md-4"},t.map((function(e){return u.a.createElement("li",{key:I.a.generate()},u.a.createElement(f.b,{to:e.replace(/\s/g,"")},u.a.createElement(N,{onClick:function(){return n(e)}},e)))}))))},M="productList/products/ADD_PRODUCT",W="productList/products/FETCH_PRODUCTS",K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case W:return e;case M:return r;default:return e}},$=function(e){return e.products},q=function(){},G=n(22),Q=n.n(G),X=n(15),Y="productList/loader/LOADER_ON",Z="productList/loader/LOADER_OFF",ee=function(e){return e.loading},te=function(){return{type:Y}},ne=function(){return{type:Z}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case Y:return!0;case Z:return!1;default:return e}},ae=n(55),ce=n.n(ae),oe=function(){return ce.a.get("https://demo9165932.mockable.io/products").then((function(e){return e.data.products}))},ue=function(e){return{type:M,payload:e}},ie=function(){return{type:W}},se="productList/error/SHOW_ERROR",le=function(){return{type:se}},fe=Q.a.mark(de),pe=Q.a.mark(me);function de(){var e;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(X.b)(a.loaderOn());case 3:return t.next=5,Object(X.a)(oe);case 5:return e=t.sent,t.next=8,Object(X.b)(ue(e));case 8:return t.next=10,Object(X.b)(a.loaderOff());case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(X.b)(a.loaderOff());case 16:return t.next=18,Object(X.b)(le());case 18:case"end":return t.stop()}}),fe,null,[[0,12]])}function me(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)(W,de);case 2:case"end":return e.stop()}}),pe)}var he=K,be="productList/value/ADD_VALUE",ge=function(e){return{type:be,payload:e}};function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).onSearch=function(e){var t=n.props,r=t.history,a=t.location;(0,t.changeValue)(e),e&&r.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{search:"item=".concat(e)}))},n.selectCategory=function(e){n.onSearch(e)},n.handleChange=function(e){n.onSearch(e)},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location;if((0,e.fetchData)(),t.search){var n=t.search,r=n.lastIndexOf("="),a=n.substring(r+1);this.onSearch(a)}}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.products,r=function(e){return e.reduce((function(e,t){return e.includes(t.bsr_category)||e.push(t.bsr_category),e}),[])}(n);return r.unshift("All Categories"),u.a.createElement("div",{className:"container"},t&&u.a.createElement(j.a,{type:"Triangle",color:"#00BFFF",style:{textAlign:"center"}}),u.a.createElement(U,{onSearch:this.handleChange}),u.a.createElement("div",{className:"row"},r.length>=5&&u.a.createElement(J,{categories:r,selectCategory:this.selectCategory}),u.a.createElement(v.c,null,u.a.createElement(v.a,{path:"/",exact:!0,render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}),u.a.createElement(v.a,{path:"/AllCategories",render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}),u.a.createElement(v.a,{path:"/Home&Kitchen",render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}),u.a.createElement(v.a,{path:"/Sports&Outdoors",render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}),u.a.createElement(v.a,{path:"/Health&PersonalCare",render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}),u.a.createElement(v.a,{path:"/BabyProducts",render:function(e){return u.a.createElement(z,Object.assign({products:n},e))}}))))}}]),t}(o.Component),ye=Object(O.compose)(Object(l.b)((function(e){return{products:r.getProducts(e),loading:ee(e),value:H(e)}}),(function(e){return{fetchData:function(){return e(c.fetchProducts())},changeValue:function(t){return e(ge(t))}}})),v.f)(ve),je=n(56),Ee=n(57),we=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case se:return!0;default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case be:return r;default:return e}},Ce=Object(Ee.a)(),_e=[Ce],ke=Object(O.combineReducers)({products:he,loading:re,error:we,value:xe}),Pe=Object(O.createStore)(ke,Object(je.composeWithDevTools)(O.applyMiddleware.apply(void 0,_e)));Ce.run(me);var De=Pe;s.a.render(u.a.createElement(f.a,{basename:"/"},u.a.createElement(l.a,{store:De},u.a.createElement(ye,null))),document.getElementById("root"))},60:function(e,t,n){e.exports=n(117)},69:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.b00ab914.chunk.js.map