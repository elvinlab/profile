(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{339:function(e,n,t){},340:function(e,n,t){"use strict";t.r(n);var i,r,c,o,a,l,s,d,b,h,m,u=t(4),j=t.n(u),x=t(57),v=t.n(x),g=t(27),p=function(e,n){var t=Object(u.useState)((function(){var t=localStorage.getItem(e);return t?JSON.parse(t):n})),i=Object(g.a)(t,2),r=i[0],c=i[1];return Object(u.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,c]},f={key:"dark",primaryTextColor:"#FFF",secondaryTextColor:"#CCC",tertiaryTextColor:"#999",background:"#000",shadowColor:"rgba(0, 0, 0, 0.5)"},O={key:"light",primaryTextColor:"#000",secondaryTextColor:"#333",tertiaryTextColor:"#777",background:"#FFF",shadowColor:"rgba(255, 255, 255, 0.5)"},w=t(2),z=Object(u.createContext)({isDark:Boolean,setIsDark:function(){}}),C=function(e){var n=e.children,t=p("theme",!0),i=Object(g.a)(t,2),r=i[0],c=i[1],o=r?f:O,a=window.matchMedia("(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)").matches;return Object(w.jsx)(z.Provider,{value:{isDark:r,setIsDark:c,theme:o,isMobile:a},children:n})},y=t(12),k=t(13),M=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",height:"4.5em",width:"4.5em",children:[Object(w.jsx)("title",{children:"Moon Icon"}),Object(w.jsx)("path",{fill:"#F1C40F",d:"M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 29-80.788-15.022-88.919A257.936 257.936 0 00279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.69 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"})]})},T=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",height:"4.5em",width:"4.5em",children:[Object(w.jsx)("title",{children:"Sun Icon"}),Object(w.jsx)("path",{fill:"#FF8C00",d:"M494.103 221.914l-59.788-40.498 13.697-70.996c2.6-13.2-1.6-26.8-11.097-36.399-9.598-9.5-23.196-13.699-36.193-11.1l-70.886 13.7-40.393-59.897c-15.097-22.299-51.89-22.299-66.986 0l-40.393 59.897-70.786-13.7c-13.297-2.499-26.795 1.6-36.293 11.2-9.498 9.6-13.697 23.1-11.097 36.299l13.697 70.996-59.788 40.498C6.599 229.514 0 242.014 0 255.513c0 13.499 6.699 25.998 17.797 33.498l59.788 40.498-13.697 70.996c-2.6 13.2 1.6 26.8 11.097 36.299 9.498 9.5 22.896 13.699 36.293 11.1l70.786-13.7 40.393 59.897C229.955 505.3 242.553 512 255.95 512c13.397 0 25.995-6.7 33.493-17.8l40.393-59.896 70.886 13.7c13.397 2.699 26.794-1.6 36.293-11.1 9.498-9.5 13.597-23.1 11.097-36.299l-13.697-70.996 59.788-40.498c11.098-7.5 17.797-20.1 17.797-33.498-.1-13.6-6.699-26.1-17.897-33.699zM381.226 307.51l17.596 91.196-90.982-17.6-51.89 76.897-51.89-76.997-90.882 17.6 17.596-91.196-76.785-51.997 76.785-51.998-17.596-91.195 90.982 17.599 51.79-76.797 51.89 76.897 90.982-17.6-17.596 91.096 76.785 51.998zM255.95 152.018c-57.289 0-103.98 46.697-103.98 103.995 0 57.297 46.691 103.994 103.98 103.994s103.98-46.697 103.98-103.995c0-57.297-46.691-103.994-103.98-103.994zm0 159.992c-30.894 0-55.989-25.099-55.989-55.997 0-30.899 25.095-55.998 55.989-55.998s55.99 25.099 55.99 55.998c0 30.898-25.096 55.997-55.99 55.997z"})]})},I=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("title",{children:"GitHub Icon"}),Object(w.jsx)("path",{fill:"currentColor",d:"M296.133 354.174c49.885-5.891 102.942-24.029 102.942-110.192 0-24.49-8.624-44.448-22.67-59.869 2.266-5.89 9.515-28.114-2.734-58.947 0 0-18.139-5.898-60.759 22.669-18.139-4.983-38.09-8.163-56.682-8.163-19.053 0-39.011 3.18-56.697 8.163-43.082-28.567-61.22-22.669-61.22-22.669-12.241 30.833-4.983 53.057-2.718 58.947-14.061 15.42-22.677 35.379-22.677 59.869 0 86.163 53.057 104.301 102.942 110.192-6.344 5.452-12.241 15.873-14.507 30.387-12.702 5.438-45.808 15.873-65.758-18.592 0 0-11.795-21.31-34.012-22.669 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.089 76.179 29.48v38.543c0 5.906-4.53 12.702-15.865 10.89C96.139 438.977 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c.001-20.873-6.811-34.465-14.966-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z"})]})},S=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("title",{children:"LinkedIn Icon"}),Object(w.jsx)("path",{fill:"currentColor",d:"M160.008 423h-70V197h70zm6.984-298.004c0-22.629-18.36-40.996-40.976-40.996C103.312 84 85 102.367 85 124.996 85 147.633 103.313 166 126.016 166c22.617 0 40.976-18.367 40.976-41.004zM422 298.664C422 237.996 409.184 193 338.312 193c-34.054 0-56.914 17.031-66.246 34.742H272V197h-68v226h68V310.79c0-29.388 7.48-57.856 43.906-57.856 35.93 0 37.094 33.605 37.094 59.722V423h69zM512 452V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v392c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60zM455.26 32C466.694 32 480 45.305 480 56.74v398.52c0 11.435-13.305 24.74-24.74 24.74H56.74C45.306 480 32 466.695 32 455.26V56.74C32 45.306 45.305 32 56.74 32zM452 40"})]})},_=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("title",{children:"Resume Icon"}),Object(w.jsx)("path",{fill:"currentColor",d:"M433.9 97.95L350 14.05c-9-9-21.2-14.1-33.9-14.1H112c-26.5.1-48 21.6-48 48.1v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-332.1c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H320v-95.5c2.8.7 5.3 2.1 7.4 4.2zM400 480.05H112c-8.8 0-16-7.2-16-16v-416c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"})]})},F=function(){return Object(w.jsxs)("svg",{role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("title",{children:"Email Icon"}),Object(w.jsx)("path",{fill:"currentColor",d:"M464.004 4.326L15.986 262.714c-23 13.3-20.7 47.198 3.8 57.297l140.206 57.997v101.996c0 30.198 37.802 43.298 56.702 20.299l60.703-73.797L403.8 478.704c19.101 7.9 40.702-4.2 43.802-24.7l64.003-417.08c4.1-26.698-24.601-45.897-47.602-32.598zm-272.01 475.678v-88.796l54.501 22.499zm224.008-30.899l-206.208-85.196L409.302 128.12c4.8-5.6-2.9-13.199-8.5-8.4l-255.31 217.59-113.505-46.797L480.004 32.025z"})]})},H={Container:k.b.main(i||(i=Object(y.a)(["\n    position: fixed;\n    z-index: 1;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n\n    :active {\n      -webkit-transform: scale(0.9);\n      transform: scale(0.9);\n    }\n  "]))),Toggle:k.b.input(r||(r=Object(y.a)(["\n    display: none;\n  "]))),Switch:k.b.label(c||(c=Object(y.a)(["\n    cursor: pointer;\n    display: flex;\n    width: 1.5rem;\n    height: 1.5rem;\n    padding: 0.75rem;\n    background-color: ",";\n    border-radius: 25%;\n    box-shadow: 0 0 0.25rem 0.25rem rgba(128, 128, 128, 0.25);\n    align-items: center;\n    justify-content: center;\n    transition: background-color 0.5s linear;\n    font-size: 0.5rem;\n  "])),(function(e){return e.theme.shadowColor}))},L=function(){var e=Object(u.useContext)(z),n=e.isDark,t=e.setIsDark,i=e.theme;return Object(w.jsxs)(H.Container,{children:[Object(w.jsx)(H.Toggle,{id:"toggle",name:"toggle",type:"checkbox",checked:n,onChange:function(e){return t(e.target.checked)}}),Object(w.jsx)(H.Switch,{theme:i,htmlFor:"toggle",children:n?Object(w.jsx)(M,{}):Object(w.jsx)(T,{})})]})},V=Object(k.a)(o||(o=Object(y.a)(["\n  transition: color 0.5s linear;\n  font-weight: normal;\n  position: relative;\n  z-index: 1;\n"]))),D={Name:k.b.h1(a||(a=Object(y.a)(["\n    ",";\n    font-size: 6rem;\n    margin: 0 0 3.5rem;\n    color: ",";\n    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {\n      font-size: 4.5rem;\n    }\n  "])),V,(function(e){return e.theme.primaryTextColor})),Title:k.b.h2(l||(l=Object(y.a)(["\n    ",";\n    font-size: 3.5rem;\n    margin: 4rem 0;\n    color: ",";\n    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {\n      font-size: 2.5rem;\n    }\n  "])),V,(function(e){return e.theme.secondaryTextColor}))},E=function(){var e=Object(u.useContext)(z).theme;return Object(w.jsxs)("div",{children:[Object(w.jsx)(D.Name,{theme:e,"data-v2":"name","aria-label":"My name is Elvin Gonz\xe1lez",children:"Elvin Gonz\xe1lez Gonz\xe1lez"}),Object(w.jsx)(D.Title,{theme:e,"data-v2":"title","aria-label":"I am a software engineer",children:"Software Engineer"})]})},G=k.b.div(s||(s=Object(y.a)(["\n  a,\n  a:active,\n  a:hover {\n    outline: 0;\n  }\n\n  .button-container {\n    display: inline-block;\n    height: 6rem;\n    width: 6rem;\n    margin: 0 1.75rem;\n  }\n\n  .button {\n    transition: color 0.5s linear;\n    height: 6rem;\n    width: 6rem;\n    color: ",";\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    text-decoration: none;\n    position: relative;\n    z-index: 1;\n    border-radius: 25%;\n  }\n\n  .icon {\n    height: 4.5rem;\n    width: 4.5rem;\n    padding: 1rem;\n  }\n\n  .icon_title {\n    font-size: 1.25rem;\n  }\n\n  .button:hover {\n    background-color: ",";\n    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);\n  }\n\n  .button:active {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n\n  .button-container .icon_title {\n    display: none;\n  }\n\n  .button-container:hover .icon_title {\n    display: initial;\n  }\n\n  .button-container:hover .icon {\n    display: none;\n  }\n\n  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {\n    .button-container {\n      height: 5rem;\n      width: 5rem;\n      margin: 0 0.8rem;\n    }\n\n    .button {\n      height: 5rem;\n      width: 5rem;\n    }\n\n    .icon {\n      height: 4rem;\n      width: 4rem;\n      padding: 0.5rem;\n    }\n\n    .icon_title {\n      font-size: 1rem;\n    }\n  }\n"])),(function(e){return e.theme.primaryTextColor}),(function(e){return e.theme.shadowColor})),N=function(){var e=Object(u.useContext)(z).theme,n=[{href:"https://github.com/elvinlab/",aria:"Visit my GitHub profile",icon:Object(w.jsx)(I,{}),label:"GitHub"},{href:"https://www.linkedin.com/in/elvinlab/",aria:"Visit my LinkedIn profile",icon:Object(w.jsx)(S,{}),label:"LinkedIn"},{href:"https://1drv.ms/u/s!AhsHSg6Zvebbn1mZUvFJr9n6ZW0S?e=GRAvgt",aria:"Visit One Drive to view and download my resume",icon:Object(w.jsx)(_,{}),label:"Resume"},{href:"mailto:elvinlab@outlook.com",aria:"Send me an email with this template",icon:Object(w.jsx)(F,{}),label:"Email"}];return Object(w.jsx)(G,{theme:e,children:n.map((function(e,n){var t=e.href,i=e.aria,r=e.icon,c=e.label;return Object(w.jsx)("span",{className:"button-container",children:Object(w.jsxs)("a",{className:"button",href:t,target:"_self","aria-label":i,rel:"noopener noreferrer",children:[Object(w.jsx)("div",{className:"icon",children:r}),Object(w.jsx)("span",{className:"icon_title","data-v2":c,children:c})]})},n)}))})},B={Container:k.b.div(d||(d=Object(y.a)(["\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 0.75rem;\n    padding-right: ",";\n    z-index: 1;\n  "])),(function(e){return e.isMobile?"1.5rem":"1rem"})),Text:k.b.p(b||(b=Object(y.a)(["\n    transition: color 0.5s linear;\n    color: ",";\n  "])),(function(e){return e.theme.tertiaryTextColor})),Link:k.b.a(h||(h=Object(y.a)(["\n    transition: color 0.5s linear;\n    text-decoration: none;\n    color: ",";\n  "])),(function(e){return e.theme.secondaryTextColor}))},J=function(){var e=Object(u.useContext)(z),n=e.theme,t=e.isMobile;return Object(w.jsx)(B.Container,{isMobile:t,children:Object(w.jsxs)(B.Text,{theme:n,"aria-label":"Designed and built by Elvin Gonz\xe1lez",children:["Designed and built by\xa0",Object(w.jsx)(B.Link,{theme:n,"data-v2":"creator",href:"https://github.com/elvinlab",children:"Elvin Gonz\xe1lez"}),t?Object(w.jsx)(w.Fragment,{}):Object(w.jsxs)(w.Fragment,{children:["\xa0|\xa0",Object(w.jsx)(B.Link,{theme:n,"data-v2":"source","aria-label":"Source code",href:"https://github.com/elvinlab/",children:"Sources"})]})]})})},A=t(61),R={Container:k.b.div(m||(m=Object(y.a)(["\n    transition: background-color 0.5s linear;\n    position: absolute;\n    background-color: ",";\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n    z-index: 0;\n  "])),(function(e){return e.theme.background}))},Z=function(){var e=Object(u.useContext)(z).theme;return Object(w.jsx)(R.Container,{theme:e,children:Object(w.jsx)(A.Particles,{width:"100vw",height:"100vh",options:{particles:{number:{value:100,density:{enable:!0,area:800}},color:{value:["c912ed","00bfff","22dd22","ffd500","ff8000","ff2600"]},shape:{type:"circle",stroke:{width:0,color:"000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:1,opacity_min:.5,sync:!1}},size:{value:4,random:{enable:!0,minimumValue:2},anim:{enable:!1,speed:30,size_min:.1,sync:!0}},links:{enable:!0,distance:75,color:"999",opacity:.9,width:1,consent:!1,blink:!1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{attract:{distance:100,duration:1,speed:5},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},grab:{distance:400,line_linked:{opacity:1}},push:{particles_nb:3},remove:{particles_nb:2},repulse:{distance:100,duration:1}}},retina_detect:!0,fpsLimit:60}})})},P=(t(339),function(){return Object(w.jsx)(C,{children:Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(L,{}),Object(w.jsx)(E,{}),Object(w.jsx)(N,{}),Object(w.jsx)(J,{}),Object(w.jsx)(Z,{})]})})});v.a.render(Object(w.jsx)(j.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.1bfc9acf.chunk.js.map