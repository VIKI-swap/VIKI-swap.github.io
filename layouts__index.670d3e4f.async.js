(self.webpackChunk=self.webpackChunk||[]).push([[717],{74595:function(n,r,t){"use strict";t.d(r,{I:function(){return l}});var e=t(27424),o=t.n(e),i=t(67294),c=t(88305),a=t(36493),u=t(22537),l=(0,c.f)((function(){var n=(0,i.useState)(!1),r=o()(n,2),t=r[0],e=r[1],c=(0,i.useState)([]),l=o()(c,2),s=l[0],f=l[1],d=(0,i.useState)(!1),v=o()(d,2),w=v[0],g=v[1],p=(0,i.useState)(!1),h=o()(p,2),m=h[0],E=h[1],T=(0,i.useState)(/iPad/i.test(navigator.userAgent)),S=o()(T,2),b=S[0],x=(S[1],(0,i.useState)(u.t4.Binance)),P=o()(x,2),I=P[0],B=P[1];return(0,i.useEffect)((function(){E((0,a.tq)())}),[window]),{pendingTxns:s,walletVisible:t,isIpad:b,setWalletVisible:e,setPendingTxns:f,tableFlag:w,setTableFlag:g,isMobile:m,platform:I,setPlatform:B}}))},96748:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var e=t(3410),o=t(241),i=t(34713),c=t(58720),a=(t(67294),t(4480)),u=t(95591),l=t(74595),s={token:{colorBgElevated:"#121418"},components:{Tooltip:{colorBgDefault:"var(--color_30)"},Form:{colorTextHeading:"#fff"},Select:{controlHeightLG:42,colorBgContainer:"var(--color_30)",colorText:"#fff",colorBorder:"var(--color_30)",colorPrimaryHover:"#33373E",colorBgElevated:"var(--color_30)",controlItemBgActive:"#33373E",colorTextPlaceholder:"rgba(255,255,255,.6)"},Input:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"var(--color_40)"},InputNumber:{colorBgContainer:"#1E2126",colorBorder:"#1E2126",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",fontSize:16,colorTextPlaceholder:"var(--color_40)"},Table:{borderRadius:16,colorBgContainer:"#121418",borderRadiusLG:16,colorText:"#fff",colorTextHeading:"#78808E",fontWeightStrong:400,colorPrimary:"#78808E",colorBorderSecondary:"rgba(255,255,255,.0)"},Spin:{colorPrimary:"#d9c099"}}},f=t(85893);function d(n){return new o.Q(n)}function v(){return(0,f.jsx)(u.J$,{value:{refreshInterval:5e3},children:(0,f.jsx)(i.Ht,{getLibrary:d,children:(0,f.jsx)(l.I.Provider,{children:(0,f.jsx)(a.Wh,{children:(0,f.jsx)(c.ZP,{theme:s,children:(0,f.jsx)(e.j3,{})})})})})})}},65334:function(n,r,t){"use strict";t.d(r,{Cs:function(){return s},HC:function(){return a},Wr:function(){return f},ZK:function(){return c},eQ:function(){return u},kX:function(){return l},pW:function(){return o},pd:function(){return i},py:function(){return v},rI:function(){return d}});function e(n){return"".concat(n||"").concat("V1")}var o=e("DEI_0001"),i=e("DEI_0002"),c=(e("depx-market-selection"),e("depx-swap-leverage-option")),a=(e("depx-swap-leverage-useinput-lev"),e("DEPX_SELECTED_NETWORK")),u=e("DEPX_walletconnect"),l=e("DEPX_-walletlink"),s=e("DEPX_eagerconnect"),f=e("DEPX_currentprovider");var d=function(n,r,t){var e=window.localStorage.getItem(n);if(!e)return r;try{var o=JSON.parse(e),i=o.data,c=o.validTime;if(!c)return i;var a=Number(c);if(Number.isNaN(a))return;if(Date.now()>a)return;return console.log("Read ".concat(n," from local cache")),t?o:i}catch(n){console.error(n)}},v=function(n,r,t){try{var e=JSON.stringify({data:r,validTime:t?Date.now()+t:""});window.localStorage.setItem(n,e)}catch(n){console.error(n)}}},36493:function(n,r,t){"use strict";t.d(r,{$H:function(){return c},D4:function(){return a},Ij:function(){return f},R$:function(){return i},do:function(){return u},tq:function(){return s},yG:function(){return l}});var e=t(20238),o=(t(80129),t(65334)),i=(e.dE,function(){return(0,o.rI)(o.pW,Object.create({}))}),c=function(n){return-1!==window.location.href.indexOf("".concat(n,"="))};function a(n){return n?n.split("/")[0]:""}var u=function(n){var r="BTCUSDT";if(!n)return r;if("Test Market"===n)return r;var t=n.split("/");return"".concat(t[0],"USDT")};function l(){var n,r;return!(null!==(n=window.location.host)&&void 0!==n&&n.includes("gmx.io")||null!==(r=window.location.host)&&void 0!==r&&r.includes("ipfs.io"))}var s=function(){var n=navigator.userAgent.toLowerCase(),r=/iphone/.test(n)&&!/ipad/.test(n),t=/android/.test(n)&&/mobile/.test(n),e=/windows/.test(n)&&/phone/.test(n),o=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(r||t||e)&&o<768},f=function(){var n=window.navigator.userAgent.toLowerCase(),r={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(n)?r.isMacOS=!0:/(iphone|ipad|ipod)/i.test(n)?r.isIOS=!0:/(win32|win64|windows|wince)/i.test(n)?r.isWindows=!0:/android/.test(n)&&(r.isAndroid=!0),r}},22537:function(n,r,t){"use strict";t.d(r,{BA:function(){return f},Ew:function(){return e},OY:function(){return s},R7:function(){return u},SQ:function(){return c},WG:function(){return o},j$:function(){return l},qL:function(){return a},t4:function(){return i}});var e,o,i,c,a="",u="",l="VIKI.io",s="VIKI | Decentralized Perpetual Exchange";!function(n){n.GitbookFeeStructure="",n.AVAXNetworkTest="",n.ETHNetworkTest="",n.TokenEconomyUsdblp="",n.WhitePaperReferrals="",n.WhitePaperMediaKit=""}(e||(e={})),function(n){n.Twitter="",n.Medium="",n.Discord="",n.Telegram="",n.Github="",n.Docs=""}(o||(o={})),function(n){n.Binance="binance",n.BinanceUS="binanceUS"}(i||(i={})),function(n){n.English="en",n.Japanese="ja"}(c||(c={}));var f={Overview:"/overview",Competitions:"/more/competitions"}},88677:function(){},62808:function(){},24654:function(){}}]);