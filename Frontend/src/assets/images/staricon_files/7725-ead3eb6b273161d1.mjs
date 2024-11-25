"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["7725"],{208083:function(e,a,n){var l,t,i,r,s,u,o;n.r(a),n.d(a,{default:function(){return c}});let d={fragment:{argumentDefinitions:l=[{defaultValue:null,kind:"LocalArgument",name:"pinId"}],kind:"Fragment",metadata:null,name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t=[{kind:"Variable",name:"pin",variableName:"pinId"}],concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r={alias:null,args:null,concreteType:"AggregateRatingMetadata",kind:"LinkedField",name:"aggregateRating",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ratingValue",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupPageDesktop_pin"}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t,concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i,{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r,{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[u={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:[s],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[u],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[s,o],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},o],storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}]},params:{id:"a63ca367dda24dea17d6b9f2cf759bdd0fa3ff2f36bd8fc6c3650013c979c099",metadata:{},name:"CloseupPageDesktopQuery",operationKind:"query",text:null}};d.hash="e7468ff73e618822b529aa9bcbecc941";let c=d;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let a=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[a]=e}}}(d.default||d)},152194:function(e,a,n){n.r(a),n.d(a,{default:function(){return t}});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupPageDesktop_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};l.hash="d71620869b6e7be6f13389f82ed52e1b";let t=l},21253:function(e,a,n){n.d(a,{JZ:function(){return g},Qs:function(){return c},jr:function(){return p}});var l=n(980570),t=n(11602),i=n(561162),r=n(3879),s=n(3915),u=n(55077);let o={auth_dweb_google_fedcm_onetap_modal:122,auth_mweb_google_fedcm_onetap_modal:122,dweb_unauth_google_fedcm_button_flow_eap:130,mweb_unauth_google_fedcm_button_flow_eap:130},d=(e,a,n,l)=>e?n>=(l?o.auth_dweb_google_fedcm_onetap_modal:o.dweb_unauth_google_fedcm_button_flow_eap)&&(l?a("auth_dweb_google_fedcm_onetap_modal").anyEnabled:a("dweb_unauth_google_fedcm_button_flow_eap").anyEnabled):n>=(l?o.auth_mweb_google_fedcm_onetap_modal:o.mweb_unauth_google_fedcm_button_flow_eap)&&(l?a("auth_mweb_google_fedcm_onetap_modal").anyEnabled:a("mweb_unauth_google_fedcm_button_flow_eap").anyEnabled),c=e=>e.isAuth&&e.socialNetwork&&e.socialNetwork.gplus&&e.socialNetwork.gplus.connected&&!s.ZP.getItem(l.tr),g=(e,a,n,l)=>{let i=n.browserVersion?parseInt(n.browserVersion.split(".")[0],10):0;return(0,t.i7)(n.browserName??"")&&(e&&d(e,a,i,l)||!e&&"android"===n.platform&&d(e,a,i,l))},p=e=>{let a=(0,u.HG)(),{checkExperiment:n}=(0,i.F)(),{userAgent:l}=(0,r.B)();return c(e)&&g(a,n,l,e.isAuth)}},766755:function(e,a,n){n.d(a,{A:function(){return l}});let l="socialPinLanding"},645966:function(e,a,n){n.d(a,{Z:function(){return r}});var l=n(694623),t=n(543123),i=n(353556);function r(){let{conversationCreate:e}=(0,i.Z)();return async a=>{let n;let i=l.Z.create("ConversationsResource",a);try{let a=(await i.callCreate()).resource_response.data;a&&(e(a),n=a)}catch(e){throw Error((0,t.Z)(e,"message"))}return n}}},416903:function(e,a,n){n.d(a,{Z:function(){return h}});var l=n(616550),t=n(883119),i=n(219300),r=n(543123),s=n(971634),u=n(249043),o=n(708130),d=n(967629),c=n(465683),g=n(55077),p=n(766755),m=n(645966),_=n(353556),y=n(977802),f=n(785893);function h({hideToast:e,pinAttachment:a}){let n=(0,o.ZP)(),h=(0,l.k6)(),{logContextEvent:k}=(0,i.v)(),{showToast:P}=(0,c.F9)(),w=(0,m.Z)(),{conversationOpen:b,dropdownOpen:S,setObjectAttachment:v}=(0,_.Z)(),F=(0,g.HG)(),R=(0,y.t2)(),E=(0,y._l)(),K=F?R?.data?.toastData:E?.data?.toastData,L=F?14344:14343;if(K){let{inviter:l,viewer:i}=K,o=(0,f.jsx)(t.xv,{inline:!0,weight:"bold",children:l.inviterName}),c=(0,f.jsx)(t.xv,{children:(0,d.nk)(n._('Like this Pin? Let {{ inviterName }} know.', 'SocialPinLandingPage.AuthSocialPinLandingPage.toastText', 'text to show info about this invite, inviterName: the name of inviter'),{inviterName:o})}),g=({conversationId:e,pinAttachment:a})=>{F?(S(),b(e)):h.push(`/conversation/${e}`),v(a)},m=async()=>{k({event_type:F?101:102,view_type:3,view_parameter:156,component:L});try{let e=await w({user_ids:[l.inviterId,i.viewerId]});if(e){let n=e.id;g({conversationId:n,pinAttachment:{...a,source:p.A}})}}catch(e){P(({hideToast:a})=>(0,f.jsx)(u.ZP,{onHide:a,text:(0,r.Z)(e,"message")??""}))}};return k({event_type:13,view_type:3,view_parameter:156,component:L}),(0,f.jsx)(t.kC,{justifyContent:"center",children:(0,f.jsx)(t.iP,{onTap:()=>{m(),e()},children:(0,f.jsx)(u.ZP,{duration:7e3,onHide:e,primaryAction:{accessibilityLabel:n._('Reply', 'SocialPinLandingPage.AuthToast.replyButtonAccessibilityLabel', 'reply back to a Pin shared to the viewer'),label:n._('Reply', 'SocialPinLandingPage.AuthToast.replyButton', 'reply back to a Pin shared to the viewer'),size:"lg",onClick:()=>{}},text:c,thumbnail:{avatar:(0,f.jsx)(s.qE,{name:l.inviterName,src:l.inviterAvatarUrl})}})})})}}},789652:function(e,a,n){n.d(a,{D:function(){return x},Z:function(){return N}});var l,t,i=n(667294),r=n(167912),s=n(616550),u=n(883119),o=n(260327),d=n(253087),c=n(985250),g=n(151127),p=n(131548),m=n(170217),_=n(21253),y=n(561162),f=n(673695),h=n(465683),k=n(657204),P=n(959474),w=n(409412),b=n(596078),S=n(458410),v=n(652348),F=n(977802),R=n(416903),E=n(757892),K=n(435443),L=n(785893);let C=(0,i.lazy)(()=>Promise.all([n.e("15868"),n.e("68209")]).then(n.bind(n,665608))),A=void 0!==l?l:l=n(208083),T=void 0!==t?t:t=n(152194);function x({pinId:e}){return{query:A,variables:{pinId:e}}}function j({isEligibleForPdp:e,pinId:a,ratingValue:n,pinKey:l}){let t=(0,m.aX)(),r=(0,s.k6)(),_=(0,s.TH)(),y=(0,P.Z)(),{trafficSource:f}=(0,d.Z)(t,y.isAuth),w=(0,p.Z)(T,l),{showToast:S}=(0,h.F9)(),E=(0,F.t2)(),K=(0,F.w2)();(0,i.useEffect)(()=>{let e=w?.gridTitle||w?.richMetadata?.title||w?.richSummary?.displayName||w?.richMetadata?.article?.name||"Pin page";document.title=e},[w]),(0,i.useEffect)(()=>{if(!K||K.hasSeenAuthDesktopLandingToast)return()=>{};let{setHasSeenAuthDesktopLandingToast:e}=K,n=setTimeout(()=>{if(E){let n={type:"pin",id:a};e(!0),S(({hideToast:e})=>(0,L.jsx)(R.Z,{hideToast:e,pinAttachment:n}))}},3e3);return()=>{clearTimeout(n)}},[E,a,S,K]);let C=(0,k.Z)(w);return((0,g.Q)({view_type:3,object_id_str:a,view_data:{pin_id:a},component:13283,aux_data:{current_page_url:_.pathname+_.search,closeup_navigation_type:(0,b.Z)(r,f),...C(),...n?{rating_value:n}:{},is_go_linkless:!!w?.isGoLinkless},clientTrackingParams:(0,v.Z)((_?.state||{}).trackingParams,w?.trackingParams)},a),e)?(0,L.jsx)(u.xu,{"data-test-id":"pdp-container",children:(0,L.jsx)(c.Z,{})}):(0,L.jsx)(u.xu,{"data-test-id":"closeup-container",children:(0,L.jsx)(o.ZP,{})})}function q({pinId:e,queryRef:a}){let n=(0,r.usePreloadedQuery)(A,a),l=n.v3GetPinQuery?.__typename==="V3GetPin"&&n.v3GetPinQuery?.data?n.v3GetPinQuery?.data:null;return(0,L.jsx)(j,{isEligibleForPdp:l?.isEligibleForPdp??!1,pinId:e,pinKey:l,ratingValue:l?.richSummary?.aggregateRating?.ratingValue})}function D({pinId:e,descriptor:a}){let n=(0,r.useLazyLoadQuery)(A,a.variables),l=n.v3GetPinQuery?.__typename==="V3GetPin"&&n.v3GetPinQuery?.data?n.v3GetPinQuery?.data:null;return(0,L.jsx)(j,{isEligibleForPdp:l?.isEligibleForPdp??!1,pinId:e,pinKey:l,ratingValue:l?.richSummary?.aggregateRating?.ratingValue})}function Z({pinId:e}){let{checkExperiment:a}=(0,y.F)(),n=a("closeup_dweb_preload_closeup_query_before_navigation").anyEnabled,l=x({pinId:e}),{findPreloadedQuery:t}=(0,K.Us)(),i=t(l);return n&&i?.queryRef?(0,L.jsx)(q,{pinId:e,queryRef:i.queryRef}):(0,L.jsx)(D,{descriptor:l,pinId:e})}function Q({pinId:e}){let a=(0,E.S6)(),n=e?a(e):null;return(0,L.jsx)(j,{isEligibleForPdp:n?.is_eligible_for_pdp??!1,pinId:e,pinKey:null!=n?{type:"deprecated",data:n}:null,ratingValue:n?.rich_summary?.aggregate_rating?.rating_value})}function N(){let{id:e}=(0,s.UO)(),{isGraphQLEnabledInGeneral:a}=(0,S.nF)(),n=(0,P.Z)(),l=(0,_.jr)(n);return(0,L.jsxs)(w.Z,{type:"authDesktop",children:[l&&(0,L.jsx)(f.Z,{children:(0,L.jsx)(C,{})}),a?(0,L.jsx)(f.Z,{children:(0,L.jsx)(Z,{pinId:e||""})}):(0,L.jsx)(Q,{pinId:e||""})]})}},169276:function(e,a,n){n.d(a,{Cw:function(){return g},Ig:function(){return f},Vl:function(){return m},ZP:function(){return y}});var l=n(244311),t=n(821098),i=n(271413),r=n(575818),s=n(320288);function u(e,a,n){var l;return(a="symbol"==typeof(l=function(e,a){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,a||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"))?l:String(l))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}class o extends Error{constructor(...e){super(...e),u(this,"name","GraphQLFetchError"),u(this,"extraData",{})}}let d=new l.QueryResponseCache({size:100,ttl:6e4});function c(e){return e.id??e.cacheID}function g(e,a){let n=c(e),l=!!n&&null!==d.get(n,a);return(0,s.nP)("pws.graphql.RelayClientEnvironment.isQueryInServerResponseCache",{sampleRate:1,tags:{inCache:l,query:e.name??"unknown"}}),l}function p({concreteRequestCache:e,environment:a}){Array.from(document.querySelectorAll("script[data-relay-response]:not([data-preloaded])")).forEach(n=>{if(!n.dataset.preloaded){let{requestParameters:t,variables:i,response:r}=JSON.parse(n.textContent??""),u=e[[t.name,t.id].join(":")],o=u?(0,l.createOperationDescriptor)(u,i):null;if(o&&!Array.isArray(r)&&r.data){a.commitPayload(o,r.data);let e=c(t);e&&d.set(e,i,r),n.dataset.preloaded="true"}else Array.isArray(r)&&(0,s.nP)("pws.graphql.commitRelayResponsesToStore.isArrayResponse",{sampleRate:1,tags:{name:t.name}})}})}function m(e){let a=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{};window.__pwsCacheRelayConcreteRequest=n=>{a[[n.params.name,n.params.id].join(":")]=n,p({concreteRequestCache:a,environment:e})},delete window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__,p({concreteRequestCache:a,environment:e})}let _=null;function y(){let e;let a=new l.Environment({network:l.Network.create((e=!0,window.addEventListener("focus",()=>e=!0),window.addEventListener("blur",()=>e=!1),async function(a,n){let l=Date.now(),u=(0,i.H)(),d=document.cookie.match(RegExp("\\b"+t.fS.name+"=.+?($|;)","g")),c=(0,r.Z)({handler:u,queryName:a.name,windowIsInFocus:e});try{let e=await fetch("/_/graphql/",{credentials:"include",method:"POST",headers:c,body:JSON.stringify({queryHash:a.id,variables:n})});return(0,s.LY)("pws.graphql.fetchQueryClient.request",Date.now()-l,{sampleRate:1,tags:{handler:u??"unknown",queryName:a.name,status:e.status}}),await e.json()}catch(n){let e=new o(n.message);throw e.stack=n.stack,e.extraData={csrfCookies:d?.join(";")??"unknown",requestHeaders:c},(0,s.nP)("pws.graphql.fetchQueryClient.networkError",{sampleRate:1,tags:{handler:u,queryName:a.name}}),e}})),store:new l.Store(new l.RecordSource)});return"undefined"!=typeof window&&(_=a),a}function f(){return _}},575818:function(e,a,n){n.d(a,{Z:function(){return i}});var l=n(3360),t=n(936306);function i({handler:e,queryName:a,windowIsInFocus:n}){let{searchParams:i}=new URL(window.location.href),r=i.get("force_country"),s=i.get("force_country_from_ip"),u={};return r&&(u["X-Force-Country"]=r),s&&(u["X-Force-Country-From-IP"]=s),e&&(u["X-Pinterest-PWS-Handler"]=e),{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":(0,l._V)(),"X-Requested-With":"XMLHttpRequest","X-Pinterest-Source-Url":(0,t.Z)(),"X-Pinterest-GraphQL-Name":a,"X-Pinterest-AppState":n?"active":"background",...u}}},435443:function(e,a,n){n.d(a,{Us:()=>g,h_:()=>c,rL:()=>d,Tr:()=>p});var l=n("422578"),t=n("244311"),i=n("486188"),r=n("169276"),s=n("900328"),u=n("320288"),o=n("554281");function d({relayEnvironment:e}){let a=[];return{preloadQuery:function(n){let i=(0,l.loadQuery)(e,(0,t.getRequest)(n.query),n.variables??{});return a=a.concat({descriptor:n,queryRef:i}),i},ensureFlushed:async function(e){throw Error("ensureFlushed should not be called on the client")},findPreloadedQuery:function(e){return a.find(({descriptor:a})=>(function(e,a){let n=(0,t.getRequest)(e.query),l=(0,t.getRequest)(a.query);return n.operation.name===l.operation.name&&n.hash===l.hash&&(0,s.L)(e.variables,a.variables)})(a,e))}}}let{Provider:c,useHook:g}=(0,i.Z)("QueryPreloader");function p(e){let{findPreloadedQuery:a,preloadQuery:n}=g(),l=(0,o.MM)();if(!e)return null;let i=a(e)?.queryRef,s=(0,t.getRequest)(e.query),d=(0,r.Cw)(s.params,e.variables);return i||(d||(0,u.nP)("pws.graphql.usePreloadedQueryRef.miss",{sampleRate:1,tags:{handler:l,query:s.operation.name??"unknown",runtime:"client"}}),n(e))}},900328:function(e,a,n){n.d(a,{L:function(){return i},Z:function(){return r}});var l=n(667294),t=n(227148);let i=(e,a)=>(0,t.Z)(e,a);function r(e){let[a,n]=(0,l.useState)(e);return i(e,a)?a:(n(e),e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/7725-ead3eb6b273161d1.mjs.map