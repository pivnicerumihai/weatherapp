(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{21:function(e,t,a){},38:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l);a(43),a(21);var o=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h3",null,"Simple Weather App"))},i=a(19),p=a(80),m=a(82),u=function(e){var t;switch(e.weather){case"Thunderstorm":t="http://openweathermap.org/img/wn/11d@2x.png";break;case"Drizzle":t="http://openweathermap.org/img/wn/09d@2x.png";break;case"Rain":t="http://openweathermap.org/img/wn/10d@2x.png";break;case"Snow":t="http://openweathermap.org/img/wn/13d@2x.png";break;case"Clear":t="http://openweathermap.org/img/wn/01d@2x.png";break;case"Clouds":t="http://openweathermap.org/img/wn/02d@2x.png";break;case"Mist":t="http://openweathermap.org/img/wn/50d@2x.png";break;default:t=null}return r.a.createElement(m.a,{className:"box",display:"flex",justifyContent:"space-around"},r.a.createElement(m.a,null,e.degree===Number?null:r.a.createElement("p",null,r.a.createElement("b",null,"Degree:")," ",r.a.createElement("br",null)," ",e.degree," \xb0C")),r.a.createElement(m.a,null,e.weather===String?null:r.a.createElement("p",null,r.a.createElement("b",null,"Weather:")," ",r.a.createElement("br",null)," ",e.weather," ",r.a.createElement("br",null)," ",r.a.createElement("img",{src:"".concat(t)}))),r.a.createElement(m.a,null,e.description===String?null:r.a.createElement("p",null,r.a.createElement("b",null,"Description:")," ",r.a.createElement("br",null),e.description)))},s=a(83),h=function(e){return r.a.createElement("form",{onSubmit:e.click},r.a.createElement("input",{className:"input",required:!0,placeholder:"Enter location here"}),r.a.createElement("br",null),r.a.createElement(s.a,{style:{marginTop:"10%"},type:"submit",variant:"contained",color:"primary"},"Get Location Weather"))},d=function(e){return r.a.createElement("p",{className:"city"},e.children)},g=a(33),w=a.n(g),E=function(e){var t=Object(n.useState)({degree:Number,weather:String,description:String}),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),m=Object(i.a)(o,2),s=m[0],g=m[1];return r.a.createElement(p.a,{className:"container"},r.a.createElement(d,null,null===s?null:s.charAt(0).toUpperCase()+s.slice(1)),r.a.createElement(u,{degree:l.degree,weather:l.weather,description:l.description}),r.a.createElement(h,{click:function(e){e.preventDefault();var t=e.target.children[0].value;w.a.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=be8b00b8613ea0e37b4d865a3f5b1d33")).then((function(e){return c({degree:10*Math.round(e.data.main.temp-273.15)/10,weather:e.data.weather[0].main,description:e.data.weather[0].description})})).then(g(t+" Weather")).catch((function(e){e&&g("City does not exist. Please Try Again")}))}}))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8260ef3a.chunk.js.map