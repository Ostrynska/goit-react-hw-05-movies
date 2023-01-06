"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9257:function(o,i,n){n.r(i),n.d(i,{default:function(){return G}});var e,r,A,K,t,a,c,s,g,u,p,h,d,f=n(5861),l=n(9439),x=n(7757),C=n.n(x),v=n(2791),w=n(7689),m=n(9014),b=n(4390),Z=n(168),j=n(6444),H=n(1087),Q=(0,j.ZP)(H.rU)(e||(e=(0,Z.Z)(["\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  color: white;\n  border-radius: 7px;\n  padding: 0.375rem;\n  height: 1.5rem;\n  width: auto;\n  font-size: 0.75rem;\n  background-color: #301934;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    color: #000;\n    background-color: #f5f4fa;\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"]))),B=j.ZP.main(r||(r=(0,Z.Z)(["\n  padding: 1rem 2rem;\n  display: block;\n  min-height: 100vh;\n  margin: 0px;\n"]))),E=j.ZP.div(A||(A=(0,Z.Z)(["\n  margin-top: 1rem;\n  display: flex;\n  padding: 3rem 15rem;\n  flex-grow: 1;\n  justify-content: center;\n  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n"]))),k=j.ZP.img(K||(K=(0,Z.Z)(["\n  border-radius: 10px;\n  width: 350px;\n  height: auto;\n"]))),R=j.ZP.div(t||(t=(0,Z.Z)(["\n  display: block;\n  margin-left: 3.5rem;\n"]))),P=j.ZP.h2(a||(a=(0,Z.Z)(["\n  font-size: 3.5rem;\n  line-height: 1;\n  margin-bottom: 2rem;\n  color: #301934;\n"]))),F=j.ZP.h3(c||(c=(0,Z.Z)(["\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #301934;\n"]))),U=j.ZP.p(s||(s=(0,Z.Z)(["\n  font-size: 1.05rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n"]))),y=j.ZP.span(g||(g=(0,Z.Z)(["\n  color: white;\n  background-color: #301934;\n  text-transform: uppercase;\n  padding: 0.3rem;\n  border-radius: 10px;\n"]))),W=j.ZP.span(u||(u=(0,Z.Z)(["\n  margin-left: 10px;\n  font-weight: 700;\n"]))),D=j.ZP.ul(p||(p=(0,Z.Z)(["\n  display: flex;\n"]))),S=j.ZP.li(h||(h=(0,Z.Z)(["\n  width: 80px;\n  text-align: center;\n  border: 1px solid #301934;\n  padding: 0.3rem;\n  border-radius: 10px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :last-child {\n    margin-left: 1rem;\n  }\n  :hover {\n    border: none;\n    background-color: #e6e6fa;\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"]))),z=(0,j.ZP)(H.rU)(d||(d=(0,Z.Z)([""]))),N=n(5015),J=n(184),G=function(){var o,i,n=(0,v.useState)([]),e=(0,l.Z)(n,2),r=e[0],A=e[1],K=(0,w.UO)().id,t=null!==(o=null===(i=(0,w.TH)().state)||void 0===i?void 0:i.from)&&void 0!==o?o:"/";if((0,v.useEffect)((function(){var o=function(){var o=(0,f.Z)(C().mark((function o(){var i;return C().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,b.s_(K);case 3:i=o.sent,A(i),o.next=10;break;case 7:o.prev=7,o.t0=o.catch(0),m.Am.error("Something went wrong, please try again");case 10:case"end":return o.stop()}}),o,null,[[0,7]])})));return function(){return o.apply(this,arguments)}}();o()}),[K]),r){var a=r.title,c=r.poster_path,s=r.release_date,g=r.vote_average,u=r.overview,p=r.genres,h=(s||"").slice(0,4),d=Math.round(10*g);return(0,J.jsxs)(B,{children:[(0,J.jsx)(Q,{type:"button",to:t,children:"Go back"}),(0,J.jsxs)(E,{children:[(0,J.jsx)(k,{src:c?"".concat("https://image.tmdb.org/t/p/w400").concat(c):N,alt:a}),(0,J.jsxs)(R,{children:[(0,J.jsxs)(P,{children:[a," (",h,")"]}),(0,J.jsxs)(U,{children:[(0,J.jsx)(y,{children:"User Score"}),(0,J.jsxs)(W,{children:[d,"%"]})]}),(0,J.jsx)(F,{children:"Overview"}),(0,J.jsx)(U,{children:u}),(0,J.jsx)(F,{children:"Genres"}),(0,J.jsx)(U,{children:p&&p.map((function(o){return o.name})).join(", ")}),(0,J.jsx)(F,{children:"Additional Information"}),(0,J.jsxs)(D,{children:[(0,J.jsx)(S,{children:(0,J.jsx)(z,{to:"cast",state:{from:t},children:"Cast"})}),(0,J.jsx)(S,{children:(0,J.jsx)(z,{to:"reviews",state:{from:t},children:"Reviews"})})]})]})]}),(0,J.jsx)(v.Suspense,{fallback:(0,J.jsx)("div",{children:"Loading..."}),children:(0,J.jsx)(w.j3,{})})]})}}},4390:function(o,i,n){n.d(i,{Hg:function(){return c},IQ:function(){return u},Jh:function(){return p},on:function(){return s},s_:function(){return g}});var e=n(5861),r=n(7757),A=n.n(r),K=n(2388),t=n(9014),a="d20de05767e33e4f2fb018551512ab87";K.Z.defaults.baseURL="https://api.themoviedb.org/3/",K.Z.defaults.headers.common.Authorization=a,K.Z.defaults.params={api_key:"".concat(a)};var c=function(){var o=(0,e.Z)(A().mark((function o(){var i,n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,K.Z.get("trending/movie/day");case 3:return i=o.sent,n=i.data,o.abrupt("return",n);case 8:o.prev=8,o.t0=o.catch(0),t.Am.error("Something went wrong, please try again");case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(){return o.apply(this,arguments)}}(),s=function(){var o=(0,e.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,K.Z.get("search/movie?query=".concat(i));case 3:return n=o.sent,e=n.data,o.abrupt("return",e);case 8:o.prev=8,o.t0=o.catch(0),t.Am.error("Something went wrong, please try again");case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(i){return o.apply(this,arguments)}}(),g=function(){var o=(0,e.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,K.Z.get("/movie/".concat(i));case 3:return n=o.sent,e=n.data,o.abrupt("return",e);case 8:o.prev=8,o.t0=o.catch(0),t.Am.error("Something went wrong, please try again");case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(i){return o.apply(this,arguments)}}(),u=function(){var o=(0,e.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,K.Z.get("/movie/".concat(i,"/credits"));case 3:return n=o.sent,e=n.data,o.abrupt("return",e.cast);case 8:o.prev=8,o.t0=o.catch(0),t.Am.error("Something went wrong, please try again");case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(i){return o.apply(this,arguments)}}(),p=function(){var o=(0,e.Z)(A().mark((function o(i){var n,e;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,K.Z.get("/movie/".concat(i,"/reviews"));case 3:return n=o.sent,e=n.data,o.abrupt("return",e.results);case 8:o.prev=8,o.t0=o.catch(0),t.Am.error("Something went wrong, please try again");case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(i){return o.apply(this,arguments)}}()},5015:function(o){o.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODUK/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgBGwDIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+y6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCGS6t47iO3kniSaQExxs4DN9B1NBuIBci1M8QnK7xHvG8r646496+Y/2rdE1rX/jr4BsfDVz9m16PTb2702UAZ+0QKZ4154G5owvPHzc5HFUdF+IMHiv496J4+0+0VbuL4dXL3Fmw+aC6hmn8yFh1GHHGcEqQe9AH09f67omn3sdjf6zp1pdS48uGa5RJHzwMKTk1pV8wfs+/B3wP8RPg9H4v8bWMuu+IPEktzNd6jNcP5sbCZ4xsIOFI2Z6HkkHKgKOy/Yw1vVNV+EVxYanevff2Hq8+l2tw7EmSBFjdOT1A8wqPRVA7UAewzappkMrRTajaRyKcMjzKCD7gmrW5du7cNuM5zxivi3xOPhcv7QvxO/4WX4W1TX1Nxa/YFsIZneM+T+8yYnXGf3eCfQ4xzVaxtfFsHwO8EfD/Wjq+i6R4s8afZEjnyk8emMYwIiGHyhnZ3AIwcDjacEHY+zNK1zRdWllh0vWNPvpIv8AWpbXKSFPqFJxTtW1nR9IER1bVbHTxKSIzdXCRbz3A3EZr5n/AGkPh74T+EnhbRPiH8O9PHh/XNG1OGOM288hF1GwbdG4Zjuzjn1XcDkHiD4reFb3TfjT4n8T+OfhLq3xF8PanHbppt1p8rySadCkeHQQocj5ucnaBgsDl2oEfUtxfWVskclxeW8KScozyhQw9snmo4dV0yaQRw6jZyOc4VJ1JOBk8A+gzXgfwb8BfB74hfCe2tI49Y8SaXot/ci1tdblaK40t5FRnt8RFQV4Vhyw+Y89QOb/AGSvh94OuPgtD8QZdDhbxNAmoJHfiWQMAUkjxsDbPuMR07+vNAH09/bWj/8AQWsP/AhP8akn1LTrd1W4v7WFmUOoeZVJU9DyenvXwv8AB3wvoOofDTSru7/Z21bxjNIsu7V7fU2hjucSuAAgYAbQNnTkoTXd/tA6d4Ui/aa0LT/EHgnWvFWjweDoYo9L0i3ee4G24uQjAK6sVUDk7vzoA+s7aeC5iEtvNHNGejowYH8RUtfMP7I1vpp+LHxAuPCWn3vhrwzFHbQr4e1CRhdxT4GZXjZmKcrKOWP3sdFAH09QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBw3iT4fDWfi74W+IP9rNA3h+3uYRZ/Z9wn86Nkzv3DbjdnGDnHasPRPgtpOjfHPUPibp2omJNQglW40s2wKGWUDzJA+7jcRuK7TyzHPOB6rRQB4NH8BvE+hJqekfD/4t6n4X8L6hK0jaV/ZqXLQbvvLFMXVox2BXDYxkseT6n8MvBWjfD7wZY+FtCST7JaglpJSDJNIxy0jkAAkn0GAMAYAArpqKAOE8E/D0eGviV4z8ZjV2uj4na2Y2v2fYLbyVZfvbjvzu9BirPxe+HukfErwi2garNcWrxzLc2V5bNiW1nXO2RfXgkEdwTgg4I7KigDxC1+CHiPWNd0W6+JfxRvvGOmaLOtxZ6adMjtI3lX7rTFWbzcf7QyckZwzA3/Enwi8TJ471bxZ8PfiZe+EJta2HUrZ9Njv4JHUYDosjAJ3Pc5LYIBxXsFFAHDfCL4d2vw98N32nrqt3rGo6neS3+p6jcqA9zcSABmwM7Rx0yecnJJqt8Ivhovw/+FZ8CrrTaip+0f6Wbbyj+9z/AAbj0z68+1ehUUAeA+FPgV8QPCvh+20Dw98ctS0/TbUN5MEWhwlU3MWbG5yeWYnr3rt7H4ZXEfxX0T4g3/iWS+vdN8OJos8bWgU3ThnZrgsG+UsXJ2gED1r0eigDgvDHw7OhfGDxV8QI9Y85PEUEEclibXBgaJEQMJN3zA7SSNo+8OeOe9oooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"}}]);
//# sourceMappingURL=257.f771750e.chunk.js.map