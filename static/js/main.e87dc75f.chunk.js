(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/wsi-imageoptim-reddit-marketing-.a171ce6d.jpg"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),l=(a(26),a(18)),s=a(2),c=a(3),m=a(6),u=a(5),d=a(4),h=a(7),p=a(19),g=a.n(p);function b(e){return r.a.createElement("div",{className:"generated-post"},r.a.createElement("a",{href:e.url},r.a.createElement("img",{src:e.imageSRC,alt:"thumbnail of a Reddit post"}),r.a.createElement("ul",{className:"post-title"},e.title)),r.a.createElement("ul",null,"Score: ",e.score))}var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"category-form"},r.a.createElement("label",null,"Category  \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("select",{id:"category",onChange:this.props.handleChange},r.a.createElement("option",{value:"Best"},"Best"),r.a.createElement("option",{value:"Controversial"},"Controversial"),r.a.createElement("option",{value:"Hot"},"Hot"),r.a.createElement("option",{value:"New"},"New"),r.a.createElement("option",{value:"Rising"},"Rising"),r.a.createElement("option",{value:"Top"},"Top"))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"term-form"},r.a.createElement("label",null,"Search Keyword  \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("input",{id:"searchTerm",className:"rounded",value:this.props.searchTerm,onChange:this.props.handleChange,type:"text"})),r.a.createElement("label",null,"Timeframe  \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("select",{id:"category",onChange:this.props.handleChange},r.a.createElement("option",{value:"Hour"},"Hour"),r.a.createElement("option",{value:"Day"},"Day"),r.a.createElement("option",{value:"Week"},"Week"),r.a.createElement("option",{value:"Month"},"Month"),r.a.createElement("option",{value:"Year"},"Year"),r.a.createElement("option",{value:"All"},"All"))))}}]),a}(n.Component),E=a(20),f=a.n(E),C=(a(44),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={category:"Best",minScore:-100,numPosts:25,subreddit:"",searchTerm:"",timeframe:"hour",postArray:[],animationTracker:!1,selectedForm:"Category"},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.backendCall=n.backendCall.bind(Object(m.a)(n)),n.changeForm=n.changeForm.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.risingAnimation(".page-title")}},{key:"changeForm",value:function(e){this.setState({selectedForm:e,searchTerm:"",category:"Best"})}},{key:"opacityAnimation",value:function(e,t){console.log(e,t),Object(h.a)({targets:e,opacity:t,duration:.01})}},{key:"loadingAnimation",value:function(){console.log("animation has begun"),Object(h.a)({targets:".orange-circle",translateX:125,loop:!0,easing:"cubicBezier(0.950, 0.095, 0.060, 0.950)",direction:"alternate"}).restart(),Object(h.a)({targets:".blue-circle",translateX:-125,loop:!0,easing:"cubicBezier(0.950, 0.095, 0.060, 0.950)",direction:"alternate"}).restart()}},{key:"risingAnimation",value:function(e){Object(h.a)({targets:e,translateY:[100,0],opacity:[0,1],delay:h.a.stagger(100,{start:500}),backgroundColor:"#00FFFFFF",duration:1600})}},{key:"handleChange",value:function(e){var t=e.target.id;this.setState(Object(l.a)({},t,e.target.value))}},{key:"backendCall",value:function(e){var t=this,a="https://scrappy-gnb.herokuapp.com/".concat(this.state.selectedForm);console.log(a),this.opacityAnimation([".orange-circle",".blue-circle"],1),!1===this.state.animationTracker&&(this.loadingAnimation(),this.setState({animationTracker:!0}));var n=this;g.a.get(a,{headers:{},params:{category:this.state.category,searchTerm:this.state.searchTerm,minScore:this.state.minScore,numPosts:this.state.numPosts,subreddit:this.state.subreddit}}).then(function(e){return e}).then(function(e){console.log(e);for(var t=[],a=0;a<e.data.length;a++){var r=e.data[a].title.length<150?e.data[a].title:e.data[a].title.slice(0,150)+"...",o={score:e.data[a].score,title:r,url:e.data[a].url,preview:e.data[a].preview,id:e.data[a].id};t.push(o)}n.opacityAnimation([".orange-circle",".blue-circle"],0),n.setState({postArray:t}),console.log(n.state.postArray)}).then(function(e){t.risingAnimation(".generated-post")}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.postArray.map(function(e){return void 0!==e.preview&&!1!==e.preview.enabled?r.a.createElement(b,{key:e.id,url:e.url,imageSRC:e.url,title:e.title,score:e.score}):r.a.createElement(b,{key:e.id,url:e.url,imageSRC:f.a,title:e.title,score:e.score})});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"page-title"},"Scrappy"),r.a.createElement("p",null,r.a.createElement("button",{id:"about-button",className:"btn btn-primary button-triad",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"About")),r.a.createElement("div",{className:"collapse",id:"collapseExample"},r.a.createElement("div",{className:"card card-body"},"The chief goal of this project is to learn more about APIs, scripting, and React. My project has two desired features - first, to allow users to view Reddit posts based on certain queries that Reddit itself does not allow users to search by. Second, to allow users to download searched content in aggregation.")),r.a.createElement("form",{className:"request-form column-children",onSubmit:this.backendCall},r.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},r.a.createElement("label",{onClick:function(){return e.changeForm("Category")},className:"category-label btn btn-secondary active button-triad"},r.a.createElement("input",{type:"radio",name:"options",id:"option1",autoComplete:"off"}),"Search By Category"),r.a.createElement("label",{onClick:function(){return e.changeForm("Search")},className:"search-label btn btn-secondary button-triad"},r.a.createElement("input",{type:"radio",name:"options",id:"option2",autoComplete:"off"}),"Search By Term")),"Category"===this.state.selectedForm?r.a.createElement(v,{handleChange:this.handleChange.bind(this)}):r.a.createElement(y,{handleChange:this.handleChange.bind(this),searchTerm:this.state.searchTerm,timeframe:this.state.timeframe}),r.a.createElement("label",{htmlFor:"minScore"},"Minimum Score (upvotes - downvotes)  \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("input",{id:"minScore",className:"rounded min-score",value:this.state.minScore,onChange:this.handleChange,type:"number"})),r.a.createElement("label",{htmlFor:"numPosts"},"Number of Posts (up to 25) \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("input",{id:"numPosts",className:"rounded num-posts",value:this.state.numPosts,onChange:this.handleChange,type:"number"})),"Best"===this.state.category&&"Category"===this.state.selectedForm?r.a.createElement("label",{htmlFor:"subreddit"},"Subreddit (without the r/) \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("input",{disabled:!0,id:"subreddit",className:"rounded subreddit",value:"Does not work for 'best'",onChange:this.handleChange,type:"text"})):r.a.createElement("label",{htmlFor:"subreddit"},"Subreddit (without the r/) \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("input",{id:"subreddit",className:"rounded subreddit",value:this.state.subreddit,onChange:this.handleChange,type:"text"})),r.a.createElement("input",{className:"form-submit rounded",value:"Search",type:"submit"})),r.a.createElement("div",null,r.a.createElement("span",{"data-testid":"orange-circle",className:"orange-circle",id:"orange-circle"}),r.a.createElement("span",{className:"blue-circle",id:"blue-circle"})),r.a.createElement("div",{className:"posts-container"},t))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.e87dc75f.chunk.js.map