"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[47714],{13882:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},983946:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},619013:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(13882);function n(e){(0,o.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}},334589:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){return e?"/pin-creation-tool/":"/idea-pin-builder/"}},406718:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(340523),n=i(554786),a=i(149722),l=i(785059),r=i(199677);function s(e){let t=(0,n.HG)(),{checkExperiment:i}=(0,o.F)(),s=(0,l.Z)(),d=(0,a.Z)(),c=(0,r.lJ)(d,s),u=!t||i("web_sce_organic_pinbuilder_dep").anyEnabled,_=!t||i("web_sce_monetized_pinbuilder_dep").anyEnabled,h=i("uid_sce_lightswitch_advertisers").anyEnabled;return!c&&((e&&(i("sce_lightswitch_organic"),i("sce_lightswitch_monetized")),t)?!!(u||_||h):u||_)}},32346:(e,t,i)=>{i.d(t,{Z:()=>o});function o(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},67030:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(481177);function n(e){return e===o.ZP.BoardPrivacy.SECRET}},220488:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(667294),n=i(883119),a=i(510989),l=i(401429),r=i(862249),s=i(983983),d=i(785893);let c=s.fe,u=new n.Ry(c-1);function _(e){let{button:t,onClick:i}=e;return t.url?(0,d.jsx)(n.ZP,{color:"white",fullWidth:!0,href:t.url,onClick:i,rel:(0,r.Z)({url:t.url})?"nofollow":"none",text:t.text}):(0,d.jsx)(n.zx,{color:"white",fullWidth:!0,onClick:i,text:t.text})}let h=e=>{let t;let{anchors:i,experience:a,dismiss:l,complete:r,scrollToDismiss:s,onAnchorTouch:c,idealDirection:h}=e,p=!0,{message:m,anchor:b,complete_button:P}=(a||{}).display_data,g=i[b],f=()=>{t&&clearTimeout(t),l()},y=()=>{t||p||(t=setTimeout(()=>f(),1500)),p=!1};return(0,o.useEffect)(()=>(g&&(s&&(window.addEventListener("scroll",y),window.addEventListener("touchmove",y)),c&&g&&g.addEventListener("click","complete"===c?r:f)),()=>{s&&(window.removeEventListener("scroll",y),window.removeEventListener("touchmove",y),t&&clearTimeout(t)),c&&g&&g.removeEventListener("click","complete"===c?r:f)}),[g]),(0,d.jsx)(n.Li,{anchor:g,idealDirection:h,onDismiss:f,zIndex:u,children:(0,d.jsx)(n.xu,{padding:4,tabIndex:0,children:(0,d.jsxs)(n.kC,{direction:"column",gap:3,children:[(0,d.jsx)(n.xv,{color:"light",children:m}),P&&(0,d.jsx)(_,{button:P,onClick:r})]})})})},p=e=>{let{placementId:t,anchors:i}=e,[n,r]=(0,o.useState)(!0),s=()=>r(!1);return(0,d.jsx)(a.Z,{name:"ExperiencePopoverEducational",children:n&&(0,d.jsx)(l.Z,{placementId:t,predicate:e=>{if(e?.type!==29)return!1;let{anchor:t}=(e||{}).display_data;return!!t&&!!i[t]},children:({complete:t,dismiss:i,experience:o})=>(0,d.jsx)(h,{...e,complete:()=>{s(),t()},dismiss:()=>{s(),i()},experience:o})})})}},200201:(e,t,i)=>{i.d(t,{_:()=>s,a:()=>d});var o=i(667294),n=i(545007),a=i(105737),l=i(25919),r=i(5859);let s=({extraContext:e,id:t,shouldUsePlacedExperience:i=!0})=>{let s=(0,o.useRef)(),d=(0,n.I0)(),{isBot:c}=(0,r.B)(),u=(0,n.v9)(e=>e.experiences[t]);return(0,o.useEffect)(()=>{d((0,l.kd)(t))},[d,u,t]),(0,o.useEffect)(()=>{i||(0,a.ZP)(s.current,e)||(d((0,l.pz)([t],c,e)),s.current=e)},[d,e,c,t,i]),u},d=e=>(s(e),(0,n.v9)(t=>t.experiencesMulti[e.id]))},388769:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(72461),n=i(5859),a=i(785893);let l=({currency:e,maximumFractionDigits:t,minimumFractionDigits:i,shortform:l,shortformMaximumFractionDigits:r,formatStyle:s,uplimit:d,value:c})=>{let u=(0,o.Z)();return(0,a.jsx)(n.LC,{children:o=>u(o.locale||"en-US",c,{currency:e,maximum_fraction_digits:t,minimum_fraction_digits:i,shortform:l,shortform_maximum_fraction_digits:r,style:s,uplimit:d})})}},317540:(e,t,i)=>{i.d(t,{Z:()=>o});let o={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},705895:(e,t,i)=>{function o(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z:()=>l});let n=new class{constructor(){o(this,"onResumeListeners",[]),o(this,"onPauseListeners",[]),o(this,"inExp",!1),o(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},a=e=>{if(e.isHidden){let{reason:t}=e;n.windowInFocus=!1,n.onPauseListeners.forEach(e=>e(t))}else n.windowInFocus=!0,n.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>a({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>a({isHidden:!1})),window.addEventListener("blur",()=>a({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>a({isHidden:!1})),window.addEventListener("pagehide",()=>a({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>a(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>a(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let l=n},55202:(e,t,i)=>{i.d(t,{U:()=>l,Z:()=>r});var o=i(317540),n=i(785893);let a=()=>{},l=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function r({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:i,allowScroll:r,children:s}){let d=e=>{t&&e.keyCode===o.Z.ESCAPE||l(e)};return(0,n.jsx)("div",{onAbort:l,onAnimationEnd:l,onAnimationIteration:l,onAnimationStart:l,onBlur:a,onCanPlay:i?a:l,onCanPlayThrough:l,onChange:l,onClick:e?a:l,onCompositionEnd:l,onCompositionStart:l,onCompositionUpdate:l,onContextMenu:l,onCopy:l,onCut:l,onDoubleClick:l,onDurationChange:l,onEmptied:l,onEncrypted:l,onEnded:l,onError:l,onFocus:a,onInput:l,onInvalid:l,onKeyDown:d,onKeyPress:d,onKeyUp:d,onLoad:l,onLoadedData:l,onLoadedMetadata:l,onLoadStart:l,onMouseDown:l,onMouseEnter:l,onMouseLeave:l,onMouseMove:e?a:l,onMouseOut:l,onMouseOver:l,onMouseUp:e?a:l,onPaste:l,onPause:l,onPlay:l,onPlaying:l,onProgress:l,onRateChange:l,onScroll:r?a:l,onSeeked:l,onSeeking:l,onSelect:l,onStalled:l,onSubmit:l,onSuspend:l,onTimeUpdate:l,onTouchCancel:l,onTouchEnd:e?a:l,onTouchMove:e?a:l,onTouchStart:e?a:l,onTransitionEnd:l,onVolumeChange:l,onWaiting:l,onWheel:l,children:s})}},564855:(e,t,i)=>{i.d(t,{ZP:()=>n,mP:()=>o});let o="…";function n(e,t=80,i=o,a=!1){let l;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||a)l=e.substring(0,t);else{let i=e.lastIndexOf(" ",t);l=e.substring(0,i)}return(l=l.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+i}},239821:(e,t,i)=>{i.d(t,{g:()=>_,I:()=>u});var o=i(667294),n=i(342513),a=i(705895),l=i(259866);let r={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},s=(e=r,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:o,isPromoted:n,currentTime:a}=i,{videosAutoplaying:r}=e,{currentlyPlayingOrganicVideoId:s,promotedVideosAutoplaying:d,organicVideosAutoplaying:c}=r,u=(0,l.Z)(d),_=(0,l.Z)(c);return!n&&s?e:(n?u[o]={pinId:o,currentTime:a,paused:!1}:_[o]={pinId:o,currentTime:a,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:n?s:o,promotedVideosAutoplaying:u,organicVideosAutoplaying:_}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:o,isPromoted:n,currentTime:a}=i,{videosAutoplaying:r}=e,{promotedVideosAutoplaying:s,organicVideosAutoplaying:d}=r,c=(0,l.Z)(s),u=(0,l.Z)(d);return n?c[o]={...c[o],paused:!0,currentTime:a}:u[o]={...u[o],paused:!0,currentTime:a},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:c,organicVideosAutoplaying:u}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var d=i(785893);let{Provider:c,useHook:u}=(0,n.Z)("AppUI");function _({children:e}){let[t,i]=(0,o.useReducer)(s,r),n=(0,o.useCallback)(e=>i({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),l=(0,o.useCallback)(e=>i({type:"SET_APP_FOCUS_STATE",payload:e}),[]),u=(0,o.useCallback)(e=>i({type:"SET_CURRENT_VIDEO",payload:e}),[]),_=(0,o.useCallback)(e=>i({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),h=(0,o.useCallback)(e=>i({type:"SET_IS_AUTOPLAY",payload:e}),[]),p=(0,o.useCallback)(e=>i({type:"SET_VIEWPORT_SIZE",payload:e}),[]),m=(0,o.useCallback)(e=>i({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),b=(0,o.useMemo)(()=>({pauseAutoplay:n,setCurrentVideo:u,setFooterPlusButtonVisible:_,setIsAutoplay:h,setViewportSize:p,toggleTypeaheadOverlay:m,setAppFocusState:l,appUI:t}),[n,u,_,h,p,m,l,t]);return(0,o.useEffect)(()=>{a.Z.onSessionResume(()=>{l(!0)}).onSessionPause(()=>{l(!1)})},[l]),(0,d.jsx)(c,{value:b,children:e})}},104567:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(883119),a=i(652151),l=i(785893);let r={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"};function s({children:e,forwardRef:t,position:i="static",shouldShowShadow:s=!1,top:d,style:c={}}){let{currentScrollPosition:u,isScrolled:_,setSubheaderShadow:h}=(0,a.W)();(0,o.useEffect)(()=>(s&&h("contentHeader"),()=>{s&&h(null)}),[s]);let p=!1;"pending"!==d&&(p=null!=d?u>=d:_);let m=(0,l.jsx)(n.xu,{ref:t,dangerouslySetInlineStyle:{__style:{position:i,...c,...p&&s&&{...r,zIndex:499}}},children:e});return"sticky"===i?(0,l.jsx)(n.Le,{top:0,children:m}):m}},831641:(e,t,i)=>{i.d(t,{Z:()=>E});var o=i(667294),n=i(545007),a=i(616550),l=i(883119),r=i(587703),s=i(220488),d=i(930837),c=i(140017),u=i(340523),_=i(554786),h=i(747602),p=i(785893);function m({isOpen:e,onDismiss:t}){let i=(0,c.ZP)();return(0,p.jsx)(d.ZP,{accessibilityModalLabel:i._('Disabled Pin Publishing Error Message Modal', 'disabledPinCreationModal.modal.accessibilityLabel', 'Label for disabled pin creation modal'),isOpen:e,mobileAccessibilityCloseIconLabel:i._('Close disabled publishing message modal', 'disabledPinCreationModal.modal.closeIconLabel', 'Label for the close button on the disabled publishing modal'),onDismiss:t,type:"DisabledPublishingModal",children:(0,p.jsxs)(l.xu,{alignItems:"center",direction:"column",display:"flex",paddingX:6,paddingY:4,children:[(0,p.jsx)(l.X6,{children:i._('Oops...', 'disabledPinCreationModal.modal.heading', 'Exclamation used to show recognition of a mistake.')}),(0,p.jsx)(l.xu,{paddingY:3,children:(0,p.jsx)(l.xv,{children:i._('Our server is experiencing a mild case of the hiccups at the moment. Please try refreshing and publishing again later.', 'disabledPinCreationModal.modal.text', 'Message to let users know there is an error.')})}),(0,p.jsx)(l.xu,{paddingY:3,children:(0,p.jsx)(l.zx,{color:"red",onClick:()=>t(),size:"lg",text:i._('Dismiss', 'disabledPinCreationModal.button.dismiss', 'Button text for closing the disabled pin creation modal')})})]})})}function b(e){let t=(0,c.ZP)(),{viewType:i,boardId:o,handleTouch:n}=e,a=t._('Board', 'createMenuLinkButton.Create.Board.Label', 'label for creating a new board option'),r=t._('Section', 'createMenuLinkButton.Create.Section.Label', 'label for creating a new section option');return 5===i&&o?(0,p.jsx)(l.Tg,{href:`/board/${o}/create_section/`,onTap:n,rounding:2,children:(0,p.jsx)(l.xu,{"data-test-id":"addSectionButton",paddingY:2,children:(0,p.jsx)(l.X6,{size:"400",children:r})})}):(0,p.jsx)(l.Tg,{href:"/board/create/",onTap:n,children:(0,p.jsx)(l.xu,{"data-test-id":"createMenuCreateBoardButton",paddingY:2,children:(0,p.jsx)(l.X6,{size:"400",children:a})})})}var P=i(851420);function g({disabledPinCreation:e,handleDisablePublish:t,handleTouch:i}){let o=(0,c.ZP)(),n=(0,a.k6)(),r=e=>({imageBase64:e,description:"",imageUrl:"",method:P.Iv}),s=o._('Photo', 'createPinButton.Photo.Upload.Label', 'label to upload pin from camera roll photos');return(0,p.jsx)(l.iP,{onTap:()=>{if(e){t();return}i()},tapStyle:"none",children:(0,p.jsxs)(l.xu,{paddingY:2,position:"relative",children:[(0,p.jsx)(l.X6,{size:"400",children:s}),e?null:(0,p.jsx)("input",{accept:"image/*",id:"upload-pin",onChange:e=>{let t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=()=>{let e=t.result;n.push({pathname:`/pin/create/${P.Iv}/`,state:r(String(e))})}},style:{opacity:0,position:"absolute",top:"0px",height:"100%",width:"100%"},type:"file"})]})})}var f=i(739382),y=i(358589),x=i(640772);function A(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let v=new l.Ry(1),w=e=>{let t=window&&window.innerWidth||0,i=e._('Enter a link to create a Pin, https://...', 'placeholder in text field where a user inputs a URL to create a Pin', 'placeholder in text field where a user inputs a URL to create a Pin'),o=e._('Enter a link, https://...', 'placeholder in text field where a user inputs a URL to create a Pin - short version, 30 char limit', 'placeholder in text field where a user inputs a URL to create a Pin - short version, 30 char limit');return t<380?o:i};class C extends o.PureComponent{constructor(...e){super(...e),A(this,"state",{createPinFromLinkUrl:"",showCreateModal:!1,showInlineTextEditCreatePin:!1,showPublishingDisabledError:!1,urlValidationError:null}),A(this,"createPinFromLinkInput",(0,o.createRef)()),A(this,"createMenuPlusIconButtonRef",(0,o.createRef)()),A(this,"closeCreateModal",()=>{this.setState({showCreateModal:!1,showInlineTextEditCreatePin:!1}),this.props.updatePinBuilderInput({isInputOpen:!1,submittedLink:""})}),A(this,"clearValidationError",()=>{this.setState({urlValidationError:null})}),A(this,"openCreateModal",()=>{this.handleTouch(),this.props.requireAuthForLimitedLogin({fn:()=>this.setState({showCreateModal:!0}),modalHeader:(0,f.is)(this.props.i18n)})()}),A(this,"handleCreatePinFromLinkTouch",()=>{this.setState({showInlineTextEditCreatePin:!0}),this.props.updatePinBuilderInput({isInputOpen:!0})}),A(this,"handleDisablePublish",()=>{this.setState({showCreateModal:!1,showPublishingDisabledError:!0})}),A(this,"handleLinkFieldChange",({value:e})=>{this.setState({createPinFromLinkUrl:e})}),A(this,"handlePinFromLinkFormSubmit",(e,t)=>{let{createPinFromLinkUrl:i}=this.state,{experimentsClient:o}=this.props;e.preventDefault();let{errors:n}=(0,h.Jx)({message:this.props.i18n._('Oops! Please enter a valid URL.', 'URL validation error message on Pin builder form', 'URL validation error message on Pin builder form'),experimentsClient:o})(i),[a]=n;a?this.setState({urlValidationError:a}):this.handleUrlValidationSuccess(t)}),A(this,"handleTouch",()=>{let{logContextEvent:e,viewType:t,elementType:i}=this.props;e({view_type:t,view_parameter:3106,element:i,event_type:102})}),A(this,"handleUrlValidationSuccess",e=>{this.setState({showInlineTextEditCreatePin:!1});let{createPinFromLinkUrl:t}=this.state;this.props.updatePinBuilderInput({submittedLink:t}),e.push({pathname:"/pin-builder/",state:{createPinFromLinkUrl:t}}),this.closeCreateModal()}),A(this,"renderCreatePinFromLinkOption",()=>{let{disabledPinCreation:e,history:t}=this.props,{createPinFromLinkUrl:i,showInlineTextEditCreatePin:o}=this.state,n=this.props.i18n._('Website', 'editPin.CreatePinFromUrl.Label', 'label for option to create a pin from a url');return(0,p.jsx)(l.kC,{alignItems:"center",height:46,justifyContent:"start",children:o?(0,p.jsx)("form",{onSubmit:e=>this.handlePinFromLinkFormSubmit(e,t),style:{width:"100%"},children:(0,p.jsxs)(l.xu,{display:"flex",justifyContent:"between",position:"relative",zIndex:v,children:[(0,p.jsxs)(l.xu,{ref:this.createPinFromLinkInput,width:"100%",children:[this.renderErrorFlyout(),(0,p.jsx)(l.nv,{id:"create-pin-from-link",onChange:this.handleLinkFieldChange,onFocus:()=>this.setState({urlValidationError:null}),placeholder:w(this.props.i18n),size:"lg",value:i})]}),(0,p.jsx)(l.hU,{accessibilityLabel:this.props.i18n._('Create Pin from entered link', 'navigation button to confirm user will create a Pin from a link they entered', 'navigation button to confirm user will create a Pin from a link they entered'),icon:"arrow-forward",iconColor:"darkGray",onClick:({event:e})=>this.handlePinFromLinkFormSubmit(e,t),size:"lg"})]})}):(0,p.jsx)(l.iP,{onTap:()=>{if(e){this.handleDisablePublish();return}this.handleCreatePinFromLinkTouch()},tapStyle:"none",children:(0,p.jsx)(l.xu,{"data-test-id":"websiteButton",position:"relative",children:(0,p.jsx)(l.X6,{size:"400",children:n})})})})}),A(this,"renderErrorFlyout",()=>{let{urlValidationError:e}=this.state;return e&&(0,p.jsx)(l.J2,{anchor:this.createPinFromLinkInput.current,idealDirection:"up",onDismiss:this.clearValidationError,size:"sm",children:(0,p.jsx)(l.xu,{padding:3,width:"100%",children:(0,p.jsxs)(l.kC,{gap:2,children:[(0,p.jsx)(l.qb,{type:"problem"}),(0,p.jsx)(l.xv,{align:"center",weight:"bold",children:e})]})})})})}componentDidMount(){let{isInputOpen:e,submittedLink:t}=this.props;(e||t)&&this.setState({showCreateModal:!!e,showInlineTextEditCreatePin:!!e,createPinFromLinkUrl:t||""})}render(){let{bgColor:e,boardId:t,buttonPadding:i,disabledPinCreation:n,i18n:a,isDesktop:r,iconButtonColor:c="gray",iconButtonSize:u="xl",viewType:_}=this.props,{showCreateModal:h,showPublishingDisabledError:P}=this.state,f=this.props.i18n._('Add a Pin or board', 'heading in profile create modal', 'heading in profile create modal');164===_?f=this.props.i18n._('Add to section', 'heading in section create modal', 'heading in section create modal'):5===_&&(f=this.props.i18n._('Add a Pin or section', 'heading in profile create modal', 'heading in profile create modal')||a._('Add to board', 'heading in board create modal', 'heading in board create modal'));let y=4===_?this.props.i18n._('Add to profile', 'editPin.AddToProfile.Modal.Header', 'heading in profile create modal'):f,x=(5===_||164===_)&&this.createMenuPlusIconButtonRef.current;return(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(l.kC,{alignItems:"center",justifyContent:"start",children:(0,p.jsx)(l.xu,{"data-test-id":"createMenuCreateButton",children:(0,p.jsx)(l.hU,{ref:this.createMenuPlusIconButtonRef,accessibilityLabel:this.props.i18n._('Create a Pin or board', 'icon that opens model prompting user to create a new pin or board', 'icon that opens model prompting user to create a new pin or board'),bgColor:e,icon:"add",iconColor:c,onClick:this.openCreateModal,padding:"auto"!==i?i:1,size:u})})}),h&&(0,p.jsx)(d.ZP,{accessibilityModalLabel:"",heading:y,isOpen:this.state.showCreateModal,mobileAccessibilityCloseIconLabel:this.props.i18n._('close board and pin create modal', 'close modal that prompts user to create a new pin or board', 'close modal that prompts user to create a new pin or board'),onDismiss:this.closeCreateModal,type:"create_menu",children:(0,p.jsx)(l.xu,{padding:3,children:(0,p.jsxs)(l.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[(0,p.jsxs)(o.Fragment,{children:[(0,p.jsxs)(l.xu,{paddingX:2,children:[(0,p.jsx)(l.xv,{children:this.props.i18n._('Create', 'editPin.Create.Section.Text', 'Section title to Create new things on Edit Pin add modal')}),(0,p.jsx)(o.Fragment,{children:this.renderCreatePinFromLinkOption()}),(0,p.jsx)(g,{disabledPinCreation:n,handleDisablePublish:this.handleDisablePublish,handleTouch:this.handleTouch})]}),164!==_&&(0,p.jsxs)(l.xu,{marginTop:6,paddingX:2,children:[(0,p.jsx)(l.xv,{children:this.props.i18n._('Add', 'editPin.Section.Add.Text', 'Section Add title on Edit Pin add modal')}),(0,p.jsx)(b,{boardId:t,handleTouch:()=>{this.handleTouch(),this.closeCreateModal()},viewType:_})]})]}),(0,p.jsx)(l.xu,{display:"flex",justifyContent:"center",marginBottom:2,marginTop:7,children:(0,p.jsx)(l.zx,{onClick:()=>this.closeCreateModal(),size:"lg",text:this.props.i18n._('Close', 'editPin.Modal.Close.Button', 'Button text to close modal on EditPin')})})]})})}),P&&(0,p.jsx)(m,{isOpen:!0,onDismiss:()=>{this.setState({showPublishingDisabledError:!1})}}),x&&(0,p.jsx)(s.Z,{anchors:{[r?3006:4006]:this.createMenuPlusIconButtonRef.current},idealDirection:"up",onAnchorTouch:"complete",placementId:r?18:1000251,scrollToDismiss:!0})]})}}function E(e){let t=(0,c.ZP)(),i=(0,_.HG)(),o=(0,u.F)(),{checkExperiment:l}=o,s=["disable_all","disable_web_pins"].includes(l("disable_pin_creation").group),d=(0,n.I0)(),h=(0,a.k6)(),{pinBuilder:m}=(0,n.v9)(e=>e.session),b=(0,r.Z)(),P=m&&m.isInputOpen,g=m&&m.submittedLink,f=(0,y.Z)();return(0,p.jsx)(C,{...e,disabledPinCreation:s,experimentsClient:o,history:h,i18n:t,isDesktop:i,isInputOpen:P,logContextEvent:b,requireAuthForLimitedLogin:f,submittedLink:g,updatePinBuilderInput:e=>d((0,x.p)(e))})}},407996:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(883119),n=i(140017),a=i(785893);let l=({isInModal:e})=>{let t=(0,n.ZP)();return(0,a.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new o.Ry(1),children:(0,a.jsx)(o.$j,{accessibilityLabel:t._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},652151:(e,t,i)=>{i.d(t,{H:()=>d,W:()=>s});var o=i(667294),n=i(342513),a=i(71328),l=i(785893);let{Provider:r,useHook:s}=(0,n.Z)("HeaderShadow");function d({children:e}){let[t,i]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),[d,c]=(0,o.useState)(0),[u,_]=(0,o.useState)(null),h=(0,a.Z)(()=>{t&&(s(window.scrollY>0),c(window.scrollY))},50);return(0,o.useEffect)(()=>(i(!0),()=>{i(!1)}),[]),(0,o.useEffect)(()=>(window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}),[t]),(0,l.jsx)(r,{value:{currentScrollPosition:d,isScrolled:n,setSubheaderShadow:_,subheaderShadow:u},children:e})}},490166:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(883119),n=i(785893);function a({children:e,onMouseEnter:t,onMouseLeave:i,onTouch:a,rounding:l,fullWidth:r=!1,pressState:s="none",accessibilityLabel:d,role:c,dataTestId:u}){let _=(Array.isArray(s)?s:[s]).includes("compress");return(0,n.jsx)(o.iP,{accessibilityLabel:d,dataTestId:u,fullWidth:r,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:i&&(({event:e})=>i(e)),onTap:a&&(({event:e})=>a(e)),role:c,rounding:l,tapStyle:_?"compress":"none",children:e})}},766311:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(587703),a=i(217058);let l=e=>Object.keys(e).reduce((t,i)=>(void 0===e[i]&&delete t[i],t),{...e}),r=({viewType:e,viewParameter:t,viewData:i,auxData:o,objectIdStr:n,component:r,clientTrackingParams:s,element:d},c)=>{let u=l({event_type:13,view_type:e,view_parameter:t,view_data:i,aux_data:o,object_id_str:n,component:r,clientTrackingParams:s,element:d});-1===Object.keys(u).indexOf("view_type")&&(0,a.My)("mweb.logging.null_view_type"),c(u)};function s(e){let{auxData:t,clientTrackingParams:i,children:a,component:l,element:s,objectIdStr:d,viewData:c,viewParameter:u,viewType:_}=e,h=(0,n.Z)(),p=JSON.stringify(t),m=JSON.stringify(c);return(0,o.useEffect)(()=>{r(e,h)},[h,p,i,l,s,d,m,u,_]),o.Children.only(a)}},400564:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(883119),n=i(785893);function a(e){let{accessibilityLabel:t,bgColor:i,icon:a,iconColor:l,onClick:r,selected:s,size:d,tooltip:c}=e;return(0,n.jsx)(o.hU,{accessibilityLabel:t,bgColor:i??"transparent",icon:a,iconColor:l??"darkGray",onClick:r,selected:s,size:d??"lg",tooltip:c?{text:c}:void 0})}},452364:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(667294),n=i(883119),a=i(400564),l=i(785893);function r({bgColor:e,children:t,label:i,icon:r,iconColor:s,id:d,size:c,tooltip:u}){let _=(0,o.useRef)(null),[h,p]=(0,o.useState)(!1),m=()=>p(!1);return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(n.xu,{ref:_,"data-test-id":d,children:(0,l.jsx)(a.Z,{accessibilityLabel:i,bgColor:e,icon:r,iconColor:s,onClick:()=>p(!h),selected:h,size:c,tooltip:u})}),h&&(0,l.jsx)(n.Lt,{anchor:_.current,disableMobileUI:!0,id:"actionBarMenuButton",idealDirection:"down",onDismiss:m,zIndex:new n.Ry(1e3),children:t({handleClose:m})})]})}},851420:(e,t,i)=>{i.d(t,{Iv:()=>o,dU:()=>_,it:()=>l,jI:()=>u,n0:()=>s,nY:()=>a,sW:()=>c,up:()=>n});let o="uploaded",n="pinbuilder",a="scraped",l="button";function r(e){return!!e&&"object"==typeof e&&"method"in e}function s(e){return r(e)&&e.method===a}function d(e){return r(e)&&e.method===o}function c(e){return r(e)&&e.method===l}function u(e){return s(e)||d(e)||c(e)}function _({boardId:e,checkExperiment:t,createPin:i,sectionId:o,state:n}){let a=[];if(s(n)){let{imgData:l}=n;l.forEach(l=>{a.push(i(function({boardId:e,checkExperiment:t,image:i,sectionId:o,state:n}){let{description:a,link:l,method:r}=n;return{boardId:e,checkExperiment:t,description:a,guid:"",imageBase64:"",imageUrl:i,link:l,method:r,sectionId:o}}({boardId:e,checkExperiment:t,image:l,sectionId:o,state:n})))})}else a.push(i(function({boardId:e,checkExperiment:t,sectionId:i,state:o}){if(d(o)){let{description:n,imageBase64:a,imageUrl:l,method:r}=o;return{boardId:e,checkExperiment:t,description:n,guid:"",imageBase64:a,imageUrl:l,link:"",method:r,sectionId:i}}{let{description:n,guid:a,imageUrl:l,link:r,method:s}=o;return{boardId:e,checkExperiment:t,description:n,guid:a,imageUrl:l,link:r,method:s,sectionId:i}}}({boardId:e,checkExperiment:t,sectionId:o,state:n})));return a}},344278:(e,t,i)=>{i.d(t,{CC:()=>c,H$:()=>_,Mt:()=>s,dp:()=>u,p9:()=>h});var o=i(224796),n=i(481177),a=i(731714),l=i(573810),r=i(407053);let s=({key:e,lastVisitedPage:t,imageSignature:i,pinId:o,imageInfo:l,pinDescription:r,pinInviteCode:s})=>{let d=(0,a.M0)().getItem(e)??[];if(!d[0]||d[0].path!==t){let d=[{path:t,ts:Date.now(),pin_id:o||0,first_pin_image_signature:i||"",first_pin_id:o||"",image_info:l||"",pin_description:r||"",is_shared:!!s,pin_invite_code:s}];(0,a.M0)().prependItem(e,d,n.LG)}},d=()=>{let e;let t=(0,l.qn)(r.KH);if(!t)return[];try{e=JSON.parse(t)}catch(t){e=[]}return e},c=({path:e,image:t,dominant_color:i,pin_description:o,pin_id:n})=>{let a=d();a[0]&&a[0].path===e||(0,l.Nh)(r.KH,JSON.stringify([{path:e,image:t,pin_description:o||"",dominant_color:i||"",pin_id:n||""}].concat(a)))};function u(e,t,i,n,a,l){s({key:o.uc,lastVisitedPage:e,imageSignature:t,pinId:i,imageInfo:n,pinDescription:a,pinInviteCode:l})}let _=(e,t,i,n,a)=>{s({key:o.hI,lastVisitedPage:e,imageSignature:t,pinId:i,imageInfo:n,pinDescription:a??""})};function h(e,t,i,n,a){s({key:o.tH,lastVisitedPage:e,imageSignature:t,pinId:i,imageInfo:n,pinDescription:a??""})}},739382:(e,t,i)=>{i.d(t,{Bb:()=>m,Bx:()=>r,F4:()=>l,Qj:()=>s,_6:()=>p,gv:()=>a,hg:()=>d,is:()=>_,jP:()=>h,lt:()=>n,oM:()=>c,wI:()=>u});var o=i(624797);let n=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),a=({firstName:e,i18n:t})=>e?(t._('{{ name }} invited you to join their board', 'limitedLogin.modalHeader.groupBoardCollab', 'Mobile Modal prompting users to join a friends({{ name }}) board')).replace("{{ name }}",e):t._('Your friends invited you to join their board', 'limitedLogin.modalHeader.groupBoardCollab', 'Mobile Modal prompting users to join a friends board'),l=e=>{let t=(0,o.mB)(e.search).board_url;if(t){let e=(0,o.Jx)(t),i=(0,o.XP)({accept_invite:!0,seamless:!0});return e.includes("?")?`${e}&${i}`:`${e}?${i}`}return e.pathname},r=e=>e._('Log in to save this Pin', 'limitedLogin.modalHeader.repin', 'Title on mobile web limited login modal to prompt users to login after they clicked save button.'),s=e=>{let t=e.pathname;if(t.startsWith("/pin/")){let e=t.split("/");if(e.length>2)return`/${e[1]}/${e[2]}/repin/`}return t},d=e=>e._('Log in to send this Pin', 'limitedLogin.modalHeader.send', 'Title on mobile web limited login modal to prompt users to login after they clicked send button.'),c=e=>e._('Log in to edit this Pin', 'limitedLogin.modalHeader.editPin', 'Title on mobile web limited login modal to prompt users to login after they clicked edit button.'),u=e=>{let t=e.pathname;if(t.startsWith("/pin/")){let e=t.split("/");if(e.length>2)return`/${e[1]}/${e[2]}/edit/`}return t},_=e=>e._('Log in to create a Pin or board', 'limitedLogin.modalHeader.create', 'Title on mobile web limited login modal to prompt users to login to create a Pin or board.'),h=e=>e._('Log in to hide this Pin', 'limitedLogin.modalHeader.hidePin', 'Title on mobile web limited login modal to prompt users to login after they clicked hide Pin button.'),p=e=>e._('Log in to share the profile', 'limitedLogin.modalHeader.shareProfile', 'Title on mobile web limited login modal to prompt users to login after they clicked share button on profile page.'),m=e=>e._('Log in to create a board', 'limitedLogin.modalHeader.createBoard', 'Title on mobile web limited login modal to prompt users to login to create a board.')},101056:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(5859),n=i(541891);function a(){let{countryFromIp:e}=(0,o.B)();return{isEUBasedIp:!!e&&!!n.a0?.dsa?.COUNTRY_CODES?.includes(e),isIndiaIp:!!e&&!!n.a0?.india?.COUNTRY_CODES?.includes(e)}}},588380:(e,t,i)=>{i.d(t,{Fj:()=>s,JI:()=>d,aG:()=>r});var o=i(667294),n=i(785893);let a=(0,o.createContext)(),l=(0,o.createContext)();function r({children:e}){let[t,i]=(0,o.useState)(!1);return(0,n.jsx)(a.Provider,{value:t,children:(0,n.jsx)(l.Provider,{value:i,children:e})})}function s(){let e=(0,o.useContext)(a);if(void 0===e)throw Error("useCountState must be used within a ShowBoardlessPinsContextProvider");return e}function d(){let e=(0,o.useContext)(l);if(void 0===e)throw Error("useCountUpdater must be used within a ShowBoardlessPinsContextProvider");return e}},640772:(e,t,i)=>{i.d(t,{F:()=>o,p:()=>n});let o=e=>({type:"PIN_BUILDER_LOADED_IMAGES",payload:e}),n=e=>({type:"UPDATE_PIN_BUILDER_INPUT",payload:e})},125768:(e,t,i)=>{i.d(t,{Z:()=>P});var o=i(545007),n=i(616550),a=i(883119),l=i(224796),r=i(587703),s=i(525364),d=i(696534),c=i(140017),u=i(741983),_=i(731714),h=i(217058),p=i(623409),m=i(554786),b=i(785893);function P({alignIconLeft:e,bgColor:t,color:i,disableRedirect:P=!1,fallbackUrl:g,icon:f="arrow-back",onTouch:y,padding:x,placement:A,shouldUseFallbackUrl:v,size:w="lg",viewParameter:C,viewType:E,isVisualSearch:L}){let S=(0,c.ZP)(),j=(0,n.k6)(),z=(0,n.TH)(),I=(0,m.HG)(),T=(0,o.v9)(e=>e.session.isAuthenticated),k=(0,r.Z)(),B=(0,p.Z)(),D=(0,d.vs)(),{viewType:M,viewParameter:O}=(0,s.SU)(),[Z,F]=E?[E,C]:[M,O],U=()=>z.search&&z.search.includes("?nativeShouldDismiss=true"),R=()=>{let e=_.ZP.getItem(l.pm);z.key||"/ideas"!==g?(0,h.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,h.My)("pinner_conversion.back_button.no_history"),(0,h.My)(`web_back_button_click.${String(A)}.is_auth_${String(T)}`),B({action:"click",item:"back-button"}),Z&&k({view_type:Z,view_parameter:F,element:34,event_type:102}),y&&y(),P||((!z.key||z.state&&"redirect"===z.state.referrer||v)&&g?j.push(g):z.pathname.includes("/password/reset/")&&U()?j.push("/login/?dismissWebview=true"):j.goBack())},H=D?d.t4:"white",N=(0,u.am)(z)||L||"white"===i;return(0,b.jsx)(a.xu,{"data-test-id":"back-button",children:e?(0,b.jsx)(a.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===f?-1:-2,width:48,children:(0,b.jsx)(a.hU,{accessibilityLabel:S._('Back', 'navigation button', 'navigation button'),bgColor:t,icon:f,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:R,padding:"auto"!==x?x:2,size:w})}):(0,b.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:I||N?"":H,width:D&&!N?"fit-content":""}},rounding:"circle",children:(0,b.jsx)(a.hU,{accessibilityLabel:S._('Back', 'navigation button', 'navigation button'),bgColor:t||I?t:"transparent",icon:f,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:R,padding:"auto"!==x?x:2,size:w})})})}},10568:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(667294),n=i(883119),a=i(214877),l=i(140017),r=i(915986),s=i(785893);function d({anchor:e,hideAddSectionTooltip:t}){let i=(0,l.ZP)();return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:r.bW,children:(0,s.jsx)(n.Li,{anchor:e,idealDirection:"down",message:i._('Tap + to add a section any time', 'boardActionsButton.addIconButton.addSectionFlyout', 'Flyout to point out where you can find add section'),onDismiss:t})})})}var c=i(406718),u=i(875936);function _({anchor:e,idealDirection:t,onAddOrEditDate:i,onAddSection:a,onClose:r,onCreateBoard:d,onCreatePin:_,onCreateStoryPin:h,surface:p,isWithinFixedContainer:m}){let b=(0,l.ZP)(),P=(0,c.Z)(!0),g=(0,o.useMemo)(()=>({pin:b._('Pin', 'BoardActionsButton.LegoFlyout.Pin', 'Option to create a pin'),rename:b._('Idea Pin', 'BoardActionsButton.LegoFlyout.IdeaPin', 'Option to create a Idea Pin'),board:b._('Board', 'profileHeader.actionBar.board', 'Option to create a board'),section:b._('Section', 'BoardActionsButton.LegoFlyout.Section', 'Option to create a board section'),date:b._('Date', 'BoardActionsButton.LegoFlyout.Date', 'Option to add a date to a board'),todos:b._('To-dos', 'BoardActionsButton.LegoFlyout.Note', 'Option to create a board note'),new:b._('New', 'BoardActionsButton.LegoFlyout.New', 'New option indicator')}),[b]);return(0,s.jsxs)(n.Lt,{anchor:e,id:"board_actions",idealDirection:t||"down",isWithinFixedContainer:m,onDismiss:r,zIndex:u.PJ,children:[(0,s.jsx)(n.Lt.Section,{label:b._('Create', 'BoardActionsButton.LegoFlyout.Create', 'Label for a list of options to create a pin or a section'),children:[!P&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create Pin",onSelect:()=>{_(),r()},option:{label:g.pin,value:g.pin}},"actions-create-0"),h&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create Story Pin",onSelect:()=>{h(),r()},option:{label:P?g.pin:g.rename,value:P?g.pin:g.rename}},"actions-create-1"),"profileBoards"===p&&d&&(0,s.jsx)(n.Lt.Item,{dataTestId:"Create board",onSelect:()=>{d(),r()},option:{label:g.board,value:g.board}},"actions-create-2")].filter(Boolean)}),"board"===p&&(0,s.jsx)(n.Lt.Section,{label:b._('Add', 'BoardActionsButton.LegoFlyout.Add', 'Label for a list of options to add board sections or a board date'),children:[a&&(0,s.jsx)(n.Lt.Item,{dataTestId:"addSection",onSelect:()=>{a(),r()},option:{label:g.section,value:g.section}},"actions-add-1"),!!i&&(0,s.jsx)(n.Lt.Item,{onSelect:()=>{i(),r()},option:{label:g.date,value:g.date}},"actions-add-2")].filter(Boolean)})]})}var h=i(619370),p=i(588380);function m({anchor:e}){let t=(0,p.JI)();return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:r.bW,children:(0,s.jsx)(h.default,{anchor:e,experienceIds:[503447],flyoutSize:"md",idealDirection:"down",onClickComplete:()=>{t(!0)},placementId:19,positionRelativeToAnchor:!1,showCaret:!0,textAlign:"center",textWeight:"normal"})})})}function b({anchor:e}){return(0,s.jsx)(n.mh,{children:(0,s.jsx)(n.xu,{position:"absolute",top:!0,zIndex:r.bW,children:(0,s.jsx)(h.default,{anchor:e,experienceIds:[502096],idealDirection:"down",placementId:18,positionRelativeToAnchor:!1,showCaret:!0})})})}var P=i(971504);function g({children:e,idealDirection:t,onAddOrEditDate:i,onAddSection:r,onCreateBoard:c,onCreatePin:u,onCreateStoryPin:h,onOpen:p=()=>{},surface:g,isWithinFixedContainer:f}){let y;let x=(0,l.ZP)(),{showCreateSectionTooltip:A,setShowCreateSectionTooltip:v}=(0,P.L)()??{},{logContextEvent:w}=(0,a.v)(),C=()=>v(!1),E=(0,o.useRef)(),[L,S]=(0,o.useState)(!1),j=()=>{p(),A&&C(),S(!0),w({component:13056,element:1208,event_type:101,view_parameter:3106,view_type:4})},z=()=>S(!1),I=()=>{L?z():j()},T={board:x._('Board Actions', 'button that allows user view actions on a board such as add section, create pin, create pincode, and create widget', 'button that allows user view actions on a board such as add section, create pin, create pincode, and create widget'),profileBoards:x._('Profile Actions', 'profileHeader.actionBar.createButton', 'Button on user\'s profile to open flyout with options to create a pin or a board'),profilePins:x._('Profile Actions', 'profileHeader.actionBar.createButton', 'Button on user\'s profile to open flyout with options to create a pin or a board'),section:x._('Create Pin', 'Button to begin pin creation flow', 'Button to begin pin creation flow')},k=e&&e({active:L,openFlyout:I})||(0,s.jsx)(n.hU,{accessibilityLabel:T[g],icon:"add",iconColor:"gray",onClick:"section"===g?u:I,size:"lg"});return!L&&"board"===g&&(A?y="addSectionTooltip":i&&(y="planningActionsExperience")),L||"profileBoards"!==g||(y="createBoardTooltip"),(0,s.jsxs)(n.xu,{"data-test-id":"boardActionsButton",children:[(0,s.jsx)(n.xu,{ref:E,children:k}),L&&(0,s.jsx)(_,{anchor:E.current,idealDirection:t,isWithinFixedContainer:!!f,onAddOrEditDate:i,onAddSection:r,onClose:z,onCreateBoard:c,onCreatePin:u,onCreateStoryPin:h,surface:g}),"addSectionTooltip"===y&&(0,s.jsx)(d,{anchor:E.current,hideAddSectionTooltip:C}),"planningActionsExperience"===y&&(0,s.jsx)(b,{anchor:E.current}),"createBoardTooltip"===y&&(0,s.jsx)(m,{anchor:E.current})]})}},971504:(e,t,i)=>{i.d(t,{L:()=>r,M:()=>s});var o=i(667294),n=i(342513),a=i(785893);let{Provider:l,useMaybeHook:r}=(0,n.Z)("CreateSectionTooltip");function s({children:e}){let[t,i]=(0,o.useState)(!1),n=(0,o.useMemo)(()=>({showCreateSectionTooltip:t,setShowCreateSectionTooltip:i}),[t]);return(0,a.jsx)(l,{value:n,children:e})}},54966:(e,t,i)=>{i.d(t,{Z:()=>o});function o({boardDensity:e,component:t,viewType:i,viewParameter:o},n){let a=function({boardDensity:e,viewType:t}){switch(t){case 164:return"regular"===e?10618:10619;case 5:case 4:return"regular"===e?10607:10608;default:return 10607}}({boardDensity:e,viewType:i}),l=o??4===i?3106:3069;n({event_type:101,component:t,element:a,...i?{view_type:i,view_parameter:l}:Object.freeze({})})}},881157:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(216167);function n({density:e,surface:t}){o.Z.create("UserMetadataResource","board"===t?{profile_pin_rep_view_type:e}:{board_pin_rep_view_type:e}).callUpdate()}},915986:(e,t,i)=>{i.d(t,{Ev:()=>a,IK:()=>n,Jk:()=>s,Oj:()=>l,bW:()=>r});var o=i(883119);let n=1,a=1,l=2,r=new o.Ry(5e3),s=15}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/47714-5d9de2fe5c241567.mjs.map