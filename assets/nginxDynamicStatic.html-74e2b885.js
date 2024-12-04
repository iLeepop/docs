import{_ as n,o as t,c as a,b as e,d as c}from"./app-5539d687.js";const i={},o=e("h1",{id:"动静分离",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#动静分离","aria-hidden":"true"},"#"),c(" 动静分离")],-1),s=e("p",null,"Nginx的静态处理能力很强，但是动态处理能力不足，因此，在企业中常用动静分离技术。动静分离技术其实是采用代理的方式，在server{}段中加入带正则匹配的location来指定匹配项针对PHP的动静分离：静态页面交给Nginx处理，动态页面交给PHP-FPM模块或Apache处理。在Nginx的配置中，是通过location配置段配合正则匹配实现静态与动态页面的不同处理方式。 通过使用Nginx大大提高了网站的响应速度，优化用户体验，提升网站的健壮性。",-1),r=[o,s];function _(d,l){return t(),a("div",null,r)}const x=n(i,[["render",_],["__file","nginxDynamicStatic.html.vue"]]);export{x as default};