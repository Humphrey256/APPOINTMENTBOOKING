"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["47388"],{30533:function(e,t,r){r.d(t,{D:function(){return s},G:function(){return o}});var a=r(336083);function o(e={},t){switch(t.type){case a.V$:let{experienceId:r,placementId:s,status:i}=t.payload,n={...e},l=n[s]||[],d=l.findIndex(e=>e.experience_id===r);return d>=0&&(["completed","dismissed"].includes(i)?l.splice(d,1):l[d].status=i),n;case a.$S:let{experiencesMulti:u}=t.payload;return{...u};default:return e}}function s(e={},t){switch(t.type){case a.iY:let{placementId:r,status:o}=t.payload,i={...e};return i[r]&&(["completed","dismissed"].includes(o)?delete i[r]:i[r].status=o),i;case a.mR:return{...e,...t.payload.experiences};case a._4:let{experiences:n}=t.payload;return{...n};default:return e}}},545720:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(424428),o=r(539274),s=r(775540);let i=e=>e&&e[0]!==o.qx?e[0]:o.qx,n=e=>({api_error_code:e.api_error_code,code:e.code,message:e.message,message_detail:e.message_detail,extraData:e.extraData||e.extra_data||void 0,httpStatus:e.httpStatus||e.http_status||void 0});function l(e={},t){if(t.type===s.se){let r={...e||{},[t.payload.resource]:{...(e||{})[t.payload.resource]||Object.freeze({})}},o="string"==typeof t.payload.optionsOrOptionsKey?t.payload.optionsOrOptionsKey:(0,a.Z)(t.payload.optionsOrOptionsKey);return delete r[t.payload.resource][o],0===Object.keys(r[t.payload.resource]).length&&delete r[t.payload.resource],r}if(t.type===s.zP||t.type===s.aW||t.type===s.cR||t.type===s.KK){let{options:r,resource:o}=t.payload,l=(0,a.Z)(r),d=e[o]||{},u=function(e,t){switch(e.type){case s.KK:return{...t||{},fetching:e.payload.isFetching,error:null};case s.cR:return{...t||{},fetching:!1,error:n(e.payload.error),data:null};default:let{options:r,resource:a,response:o}=e.payload,l=e.type===s.zP&&e.payload.isRefresh,d=i(r?.bookmarks||o.bookmarks),u=o.resource_response.error?n(o.resource_response.error):void 0,_=t?.auxData,c=l?void 0:t?.data,p=o.resource_response.data;return("BaseSearchResource"===a||"VisualLiveSearchResource"===a||"StoreFrontSearchResource"===a||"VisualSearchFlashlightUnifiedResource"===a||"NativeInteractionsResource"===a)&&c?Array.isArray(c.results)&&(p=p?{...c,results:[...c.results||[],...p.results||[]]}:c):Array.isArray(c)&&(p=[...c||[],...p||[]]),{...t||{},auxData:_?{..._,...o.auxData}:o.auxData,data:p,fetching:!1,nextBookmark:d,error:u}}}(t,d[l]);return{...e,[o]:{...d,[l]:u}}}return e}},595478:function(e,t,r){function a(e,t,r,a){let o=r.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return`/today/${t?"shop":0===e||2===e?"trending":1===e?"best":"article"}/${encodeURIComponent(o)}/${a}/`}r.d(t,{T7:function(){return a},Y_:function(){return s},d9:function(){return n},nx:function(){return i},xt:function(){return o}});let o=(e,t,r)=>e||t||r||"",s=e=>"todayarticle"===e.type,i=e=>Array.isArray(e)&&e.length>0&&e.every(e=>"story"===e.type),n=(e,t)=>(e??1)/(t??1)},719711:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(725106);function o(e){return e&&e.id?{allow_personalization_cookies:e.allow_personalization_cookies??!1,allow_analytic_cookies:e.allow_analytic_cookies??!1,allow_marketing_cookies:e.allow_marketing_cookies??!1,boardCount:e.board_count,groupBoardCount:e.group_board_count,secretBoardCount:e.secret_board_count,pinCount:e.pin_count,eligibleForStlTool:e.eligible_for_stl_tool,isAuth:!0,id:e.id,epik:e.epik,username:e.username,fullName:e.full_name??"",firstName:e.first_name??"",lastName:e.last_name??"",email:e.email??"",facebookId:e.facebook_id,hasPassword:e.has_password??!1,hasPublishedPins:e.has_published_pins,isEmployee:e.is_employee??!1,isEligibleForCoreActionsHeader:e.is_eligible_for_core_actions_header??!1,isEligibleForImageOnlyGrid:e.is_eligible_for_image_only_grid??!1,isLimitedLogin:e.login_state===a.Z.LIMITED,isMaturedNewUser:e.is_matured_new_user??!1,isPartner:e.is_partner??!1,isPrivateProfile:e.is_private_profile??!1,isUnder16:e.is_under_16??!1,isUnder18:e.is_under_18??!1,isWriteBanned:e.is_write_banned??!1,imageSmallUrl:e.image_small_url??"",imageMediumUrl:e.image_medium_url??"",imageLargeUrl:e.image_large_url??"",imageXLargeUrl:e.image_xlarge_url??"",nags:e.nags??[],profileDiscoveredPublic:e.profile_discovered_public??!1,shouldDefaultCommentsOff:e.should_default_comments_off,showDiscoveredFeed:e.show_discovered_feed??!1,createdAt:e.created_at??"",resurrectionInfo:e.resurrection_info&&e.resurrection_info.resurrection_dt?{resurrectionDate:e.resurrection_info.resurrection_dt}:void 0,country:e.country??"",domainUrl:e.domain_url,domainVerified:e.domain_verified,isAnyWebsiteVerified:e.is_any_website_verified,verifiedWebsites:e.verified_user_websites,listedWebsiteUrl:e.listed_website_url??"",gender:e.gender,customGender:e.custom_gender,firstHomeFeedRequestAfterNux:e.firstHomeFeedRequestAfterNux??!1,partner:e.partner,socialNetwork:{facebook:{connected:!!e.connected_to_facebook},google:{connected:!!e.connected_to_google},youtube:{connected:!!e.connected_to_youtube},gplus:{connected:!!e.gplus_url,url:e.gplus_url},microsoft:{connected:!!e.connected_to_microsoft},twitter:{connected:!!e.twitter_url,url:e.twitter_url},etsy:{connected:!!e.connected_to_etsy},instagram:{connected:!!e.connected_to_instagram,username:e.instagram_data?.username,url:e.instagram_data?.url},dropbox:{connected:!!e.connected_to_dropbox}},can_enable_mfa:e.can_enable_mfa??!1,has_mfa_enabled:e.has_mfa_enabled??!1,is_sso_user:e.is_sso_user??!1,has_quicksave_board:e.has_quicksave_board,phone_country:e.phone_country??"",phone_number:e.phone_number??"",phone_number_end:e.phone_number_end??"",push_package_user_id:e.push_package_user_id??"",third_party_marketing_tracking_enabled:void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled,age_in_years:e.age_in_years,save_behavior:e.save_behavior,shopping_rec_disabled:e.shopping_rec_disabled,show_personal_boutique:e.show_personal_boutique??!1,should_show_messaging:e.should_show_messaging??!1,isParentalControlPasscodeEnabled:e.is_parental_control_passcode_enabled??!1,isParentalControlPasscodeVerificationPending:e.is_parental_control_passcode_verification_pending??!1,isCandidateForParentalControlPasscode:e.is_candidate_for_parental_control_passcode??!1,parentalControlAnonymizedEmail:e.parental_control_anonymized_email??"",teenSafetyOptionsUrl:e.teen_safety_options_url??""}:{isAuth:!1,isLimitedLogin:!1}}},797605:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(651068);let o=function(e,t){let r=t=>!!(t.entities&&t.entities[e]);return(o,s)=>{let i=t(o,s);if(s.payload&&!Array.isArray(s.payload)){let{normalizedResponse:t}=s.payload;if(t&&r(t)){var n;return Object.keys(n=t.entities[e]).reduce((e,t)=>({...e,[t]:(0,a.Z)(e[t],n[t])}),i)}}return i}}},176325:function(e,t,r){r.d(t,{Z:()=>c});var a=r("14890"),o=r("753894"),s=r("343601"),i=r("336083"),n=r("246976");let l=(0,n.RK)("experiences"),d=(0,n.RK)("session"),u=(0,n.RK)("users"),_=[o.Z,e=>t=>r=>{if("ERROR_LOG_EVENT"===r.type){let{error:e,auxData:a}=r;return(0,s.H)(e,a),t(r)}try{return t(r)}catch(t){return(0,s.H)(t||Error("unknown error"),{action:r}),e.getState()}},e=>t=>r=>{let a=t(r);switch(r.type){case i.mR:case i._4:case i.iY:l(e.getState().experiences);break;case"AUTHENTICATE_USER":case"REGISTER_USER":let o=e.getState();l(o.experiences),d(o.session),u({[o.session.userId]:o.users[o.session.userId]})}return a}],c=()=>(0,a.applyMiddleware)(..._)},640185:function(e,t,r){r.d(t,{Z:()=>g});var a=r("422578"),o=r("172045"),s=r("103650"),i=r("651068"),n=r("775540"),l=r("482678"),d=r("797605"),u=r("595478");let _=e=>e||[],c=e=>e?e.reduce((e,t)=>t?.objects?e.concat(t.objects):e.concat([t].filter(Boolean)),[]):[],p=e=>e&&Array.isArray(e)?e.map(e=>e.content_pin).filter(e=>!!e):[],y={ApiResource:e=>{if(e&&Array.isArray(e)){let t=[];return e.forEach(e=>{e.call_to_create_source_pin_id?t.push(e):"story"===e.type&&e.objects&&Array.isArray(e.objects)?e.objects.forEach(e=>{t.push(e)}):"pin"===e.type&&t.push(e)}),t}return[]},BaseSearchResource:e=>e?c(e.results):[],BoardContentRecommendationResource:_,BoardFeedResource:_,BoardlessPinsResource:_,BoardSectionPinsResource:_,BoardShopCategoryFeedResource:_,BoardShopSavedProductsFeedResource:_,BrandCatalogFeedResource:_,BusinessProfileUserPinsResource:_,CategoryFeedResource:_,DomainFeedResource:_,IdeaPinStelaResultsResource:_,InterestResource:e=>e?e.results:[],LiveSessionProductsResource:e=>e?Object.values(e).reduce((e,t)=>e.concat(t),[]):[],NewsHubDetailsResource:e=>e?e.reduce((e,t)=>t.content_items?e.concat(t.content_items.map(e=>e.content_object).filter(Boolean)):e,[]):[],PinCatalogResource:_,PinterestPicksFeedResource:_,ProfileCoverFeedResource:_,RelatedModulesResource:c,RelatedPinFeedResource:_,RelatedProductFeedResource:_,RelatedStreamResource:_,SearchResource:_,SectionSuggestionsPinsResource:_,ShoppingFeedModularizedResource:c,TaggedObjectsResource:c,TodayArticleFeedResource:e=>(0,u.nx)(e)?e.reduce((e,t)=>{if(Array.isArray(t.objects)){let r=[];return t.objects.forEach(e=>{"todayarticle"===e.type&&e.content_pin?.type==="pin"?r.push(e.content_pin):"pin"===e.type&&r.push(e)}),e.concat(r)}return e},[]):e||[],TodayTabInterestFeedResource:p,TodayTabResource:p,TopicFeedResource:_,UserDiscoveredPinsResource:_,UserHomefeedResource:c,UserActivityPinsResource:_,UserRecentActivityResource:_,UserStoryPinsFeedResource:_,UserPinsResource:_,VisualLiveSearchResource:e=>e?e.results:[],VisualLiveSearchProductFeedResource:_,VisualLinkVisualSearchResource:_,VisualSearchFlashlightUnifiedResource:e=>e?c(e.results):[],ShoppingListFeedResource:c,ShoppingListRecentlyViewedFeedResource:_,BestPinsFeedAltResource:_,StoryFeedResource:c};var E=r("169276");let f=(e,t,r=!1)=>{let a=(0,i.Z)(e,t,r?(e,t)=>null===t?e:void 0:void 0);return(0,s.ZP)(e,a)?e:a},R=(e,t)=>({...e,[t.id]:{...e[t.id]||{},...t}}),T=(e,t)=>{let{pinId:r,increment:a,reactionType:o}=t.payload;if(!e[r])return e;let s=e[r].reaction_counts??{},i=s[o]??0,n=a?i+1:Math.max(i-1,0);return 0===n?(delete e[r].reaction_counts?.[o],R(e,{id:r,reaction_counts:{...s}})):R(e,{id:r,reaction_counts:{...s,[o]:n}})};function I(e,t){let r=(0,E.Ig)();switch(t.type){case"CHANGE_CAROUSEL_SLOT_INDEX":{let{id:r,index:a}=t.payload;if(r===e.id&&e.carousel_data)return{...e,carousel_data:{...e.carousel_data,index:a}};return e}case"SET_PIN_COMMENTS_DISABLED":{let{id:r,pinCommentsDisabled:a}=t.payload;if(r===e.id)return{...e,comments_disabled:a,is_eligible_for_aggregated_comments:!a};return e}case"PIN_SAVE":{let{boardId:o,localPinId:s,id:i,title:n,url:l,nodeId:d}=t.payload;if(i===e.id)return r&&d&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(d);t||(t=e.create(d,"Pin"));let r=t.getOrCreateLinkedRecord("savedInfo","SaveTarget");r.setValue(o,"boardId"),r.setValue(s,"localPinId"),r.setValue(null,"score"),r.setValue(null,"sectionId"),r.setValue(n,"title"),r.setValue(null,"type"),r.setValue(l,"url")}),{...e,savedInfo:{boardId:o,title:n,url:l,localPinId:s}};return e}case"PIN_UNSAVE":{let{id:o,nodeId:s}=t.payload;if(o===e.id){r&&s&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(s);t&&t.setValue(null,"savedInfo")});let{savedInfo:t,...o}=e;return o}return e}case"PIN_SHOW_SUGGESTED_CREATOR_RECS":if(t.payload.id===e.id)return{...e,show_suggested_creator_recs:t.payload.value};return e;case"PIN_QUICK_SAVE":{let{pinId:o,boardId:s,localPinId:i,title:n,url:l,nodeId:d}=t.payload;if(o===e.id)return r&&d&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(d);t||(t=e.create(d,"Pin"));let r=t.getOrCreateLinkedRecord("savedInfo","SaveTarget");r.setValue(s,"boardId"),r.setValue(i,"localPinId"),r.setValue(null,"score"),r.setValue(null,"sectionId"),r.setValue(n,"title"),r.setValue(null,"type"),r.setValue(l,"url")}),{...e,savedInfo:{boardId:s,localPinId:i,title:n,url:l}};return e}case"PIN_SHOW_FEEDBACK":{let{id:s,value:i,text:n,nodeId:l}=t.payload;if(s===e.id)return r&&l&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(l);t||(t=e.create(l,"Pin")),t.setValue(i,"showFeedback");let r=t.getOrCreateLinkedRecord("feedbackText","FeedbackText");r.setValue(n?.title,"title"),r.setValue__UNSAFE(n?.subTitle,"subTitle");let{unfollow:a,undoCallbackProps:s}=n??{},d=r.getOrCreateLinkedRecord("unfollow","Unfollow");d.setValue(a?.action,"action"),d.setValue(a?.title,"title"),d.setValue(a?.subTitle,"subTitle");let u=r.getOrCreateLinkedRecord("undoCallbackProps","UndoCallbackProps");u.setValue(s?.action,"action"),u.setValue(s?.viewType,"viewType"),u.setValue(s?.viewParameter,"viewParameter");let _=(t,r)=>{let a=t.getOrCreateLinkedRecord("actionOptions","ActionOptions");if(a.setValue(r?.board_id,"boardId"),a.setValue(r?.interest_id,"interestId"),a.setValue(r?.interest_list,"interestList"),a.setValue(r?.complaint_reason,"complaintReason"),a.setValue(r?.feedback_type,"feedbackType"),a.setValue(r?.pin_id,"pinId"),a.setValue(r?.pin_type,"pinType"),a.setValue(r?.pin,"pin"),a.setValue(r?.promoted,"promoted"),a.setValue(r?.recommendation_reason_id,"recommendationReasonId"),a.setValue(r?.undo,"undo"),a.setValue(r?.user_id,"userId"),a.setValue(r?.query,"query"),a.setValue(r?.news_id,"newsId"),a.setValue(r?.through_id,"throughId"),a.setValue(r?.client_tracking_params,"clientTrackingParams"),a.setValue(r?.is_third_party_ad,"isThirdPartyAd"),r?.through_properties){let t=Object.entries(r.through_properties).map(([t,r])=>{let a=e.create((0,o.Z)(),"ThroughProperties");return a?.setValue(r,"data"),a?.setValue(t,"key"),a});a.setLinkedRecords(t,"throughProperties")}};_(d,a?.actionOptions),_(u,s?.actionOptions)}),{...e,showFeedback:i,feedbackText:n};return e}case"PIN_UPDATE_COMMENT_COUNT":{let{id:r,increment:a}=t.payload;if(r===e.id&&e.aggregated_pin_data){let t={...e.aggregated_pin_data,comment_count:(e.aggregated_pin_data.comment_count||0)+a};return{...e,aggregated_pin_data:t}}return e}case"PIN_DID_IT":{let{id:r,value:a}=t.payload;if(r===e.id){let t=(e.aggregated_pin_data||{}).did_it_data,r={...t,images_count:(t?.images_count||0)+(a?1:-1)},o={...e.aggregated_pin_data,did_it_data:r};return{...e,aggregated_pin_data:o,done_by_me:a}}return e}case"PIN_SHOW_FEEDBACK_OVERLAY":{let{id:o,value:s,nodeId:i}=t.payload;if(o===e.id)return r&&i&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(i);t||(t=e.create(i,"Pin")),t.setValue(s,"showFeedbackOverlay")}),{...e,showFeedbackOverlay:s};return e}case"PIN_SHOW_AD_REASONS_MODAL":if(t.payload.id===e.id)return{...e,show_ad_reasons:t.payload.value};return e;case"APPROVE_PIN_SPONSORSHIP":{let{isApproved:r,pinId:a}=t.payload;if(a===e.id)return{...e,sponsorship:{...e.sponsorship,sponsor:r?e.sponsorship?.sponsor:void 0,status:r?1:2}};return e}case"DELETE_PIN_SPONSORSHIP":{let{pinId:r,userId:a}=t.payload;if(r===e.id){if(a===e.sponsorship?.creator?.id)return{...e,sponsorship:void 0};if(a===e.sponsorship?.sponsor?.id)return{...e,sponsorship:{...e.sponsorship,sponsor:void 0,status:3}}}return e}case"PIN_UPDATE_REACTION_COUNT":{let{id:r,increment:a,reactionType:o}=t.payload;if(r===e.id){let{reaction_counts:t={}}=e,r=t[o]||0,s=a?r+1:Math.max(r-1,0),i=a?o:0;if(0!==s)return{...{...e,reaction_counts:{...t,[o]:s},reaction_by_me:i}};{let r={...e,reaction_counts:{...t},reaction_by_me:i};return delete r.reaction_counts[o],{...r}}}return e}case"PIN_BETTER_SAVE":{let{pinId:o,boardId:s,localPin:i,localPinId:n,sectionId:l,title:d,type:u,url:_,nodeId:c}=t.payload;if(o===e.id)return r&&c&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(c);t||(t=e.create(c,"Pin"));let r=t.getOrCreateLinkedRecord("savedInfo","SaveTarget");r.setValue(s,"boardId"),r.setValue(n,"localPinId"),r.setValue(null,"score"),r.setValue(l,"sectionId"),r.setValue(d,"title"),r.setValue(u,"type"),r.setValue(_,"url")}),{...e,savedInfo:{boardId:s??"",localPinId:n||i&&i.id,sectionId:l,title:d,type:u,url:_}};return e}case"PIN_BETTER_SAVE_CUTOUT":{let{pinId:o,boardId:s,localPinId:i,title:n,type:l,url:d,nodeId:u}=t.payload;if(o===e.id)return r&&u&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(u);t||(t=e.create(u,"Pin"));let r=t.getOrCreateLinkedRecord("savedCutout","SaveTarget");r.setValue(s,"boardId"),r.setValue(i,"localPinId"),r.setValue(n,"title"),r.setValue(l,"type"),r.setValue(d,"url")}),{...e,savedCutout:{boardId:s??"",localPinId:i,title:n,type:l,url:d}};return e}case"PIN_BETTER_UNSAVE":{let{pinId:o,nodeId:s}=t.payload;if(o===e.id){r&&s&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(s);t&&t.setValue(null,"savedInfo")});let{savedInfo:t,...o}=e;return o}return e}case"PIN_BETTER_UNSAVE_CUTOUT":{let{pinId:o,nodeId:s}=t.payload;if(o===e.id){r&&s&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(s);t&&t.setValue(null,"savedCutout")});let t={...e};return delete t.savedCutout,{...t}}return e}case"PIN_BETTER_SELECT_BOARD_CUTOUT":case"PIN_BETTER_SELECT_BOARD_OR_SECTION":{let{pinId:o,boardId:s,sectionId:i,score:n,title:l,type:d,url:u,nodeId:_}=t.payload;if(o===e.id)return r&&_&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(_);t||(t=e.create(_,"Pin"));let r=t.getOrCreateLinkedRecord("selectedItem","SaveTarget");r.setValue(s,"boardId"),r.setValue(null,"localPinId"),r.setValue(n,"score"),r.setValue(i,"sectionId"),r.setValue(l,"title"),r.setValue(d,"type"),r.setValue(u,"url")}),{...e,selectedItem:{boardId:s??"",sectionId:i,score:n,title:l,type:d,url:u}};return e}case"DELETE_PIN_MENTION":{let{pinId:r,userId:a}=t.payload;if(r===e.id){let{story_pin_data:t}=e;if(!t)return e;let{pages:r=[]}=t,o=r.map(e=>{let{blocks:t=[]}=e,r=t.map(e=>e.type===l.h8.MENTION_STICKER&&e.user_id===a?{...e,is_removed:!0}:e);return{...e,blocks:r}});return{...{...e,story_pin_data:{...t,pages:o}}}}return e}case"PIN_FAVORITE":{let{id:r,increment:a,value:o}=t.payload,{favorite_user_count:s=0}=e;if(r===e.id)return{...e,favorited_by_me:o,favorite_user_count:s+a};return e}case"PIN_NOTE_UPDATE":{let{pinId:r,pinNote:a}=t.payload;if(r===e.id)return{...e,pin_note:a??void 0};return e}default:return e}}let g=(0,d.Z)("pins",(e={},t)=>{let r=(0,E.Ig)();switch(t.type){case n.zP:case n.aW:{let{options:r,resource:a,response:{resource_response:{data:o}}}=t.payload,{isDesktop:s}=r||{};if(a in y){let t=y[a](o)||[],r={...e};return t.forEach(t=>{t.type&&"pin"!==t.type||(r[t.id]=f(e[t.id],t,!0))}),r}if(("PinResource"===a||"PinPageResource"===a||"StoryPinEditResource"===a)&&o){let{preserve_component_state:t=!1}=r??{},a=o||{};return{...e,[a.id]:t?f(a,e[a.id]):f(e[a.id],a)}}if("ApiResource"===a&&r?.url?.match(/\/v3\/pins\/([0-9]|[a-z]|[A-Z])+\/board_title_suggestions\//))return t.type===n.zP&&t.payload.options?.pin_id?R(e,{id:t.payload.options.pin_id,boardTitleSuggestions:t.payload.response.resource_response.data.map(e=>e.title)}):e;if("BoardPickerBoardsResource"===a&&!s)return function(e,t){if(t.type===n.zP&&t.payload.normalizedResponse&&t.payload.options?.pin_id){let r=t.payload.options.pin_id,{boards_shortlist:a}=t.payload.normalizedResponse.result;return R(e,{id:r,boards_shortlist:a})}return e}(e,t);else if("PinInterestsResource"===a)return function(e,t){if(t.type===n.zP&&t.payload.options?.pinId){let{options:r,response:a}=t.payload,o=a.resource_response.data;if(o?.length)return R(e,{id:r.pinId,related_interest_ids:o.map(e=>e.id)})}return e}(e,t);else if("StoryPinTaggedProductsResource"===a)return function(e,t){if(t.type===n.zP){let{response:r}=t.payload,a=r.resource_response.data;if(a?.[0])return a.reduce((e,t)=>R(e,t),e)}return e}(e,t);else if("LiveSessionProductsResource"===a)return function(e,t){if(t.type===n.zP){let{options:r,response:a}=t.payload,{data:o}=a.resource_response;return o[r?.classId].reduce((e,t)=>R(e,t),e)}return e}(e,t);return e}case n.AF:let{payload:o}=t,s=({name:e,url:t,privacy:o,boardNodeId:s,boardId:i,nodeId:n})=>{r&&n&&(0,a.commitLocalUpdate)(r,r=>{let a=r.get(n);a||(a=r.create(n,"Pin")),o&&a.setValue(o,"privacy");let l=r.get(s);l||((l=r.create(s,"Board")).setValue(i,"entityId"),l.setValue(e,"name"),l.setValue(t,"url"),l.setValue("board","type")),a.setLinkedRecord(l,"pinnedToBoard")})};if("RepinResource"===o.resource){let{pin_id:t,board_id:r}=o.options,{board:a}=o.response.resource_response.data,{name:i,url:n,privacy:l,node_id:d}=a;return s({name:i,url:n,privacy:l,boardNodeId:d,nodeId:e?.[t]?.node_id,boardId:r}),R(e,{id:t,pinned_to_board:{id:r,name:i,url:n,node_id:d,type:"board"},privacy:l})}if("BoardResource"===o.resource&&o.options.initial_pins){let t=o.options.initial_pins[0],{name:r,boardId:a,url:i,node_id:n}=o.response.resource_response.data;return s({name:r,url:i,boardNodeId:n,nodeId:e?.[t]?.node_id,boardId:a}),R(e,{id:t,pinned_to_board:{id:a,name:r,url:i,node_id:n,type:"board"}})}return e;case"CHANGE_CAROUSEL_SLOT_INDEX":case"PIN_DID_IT":case"PIN_SAVE":case"PIN_SHOW_SUGGESTED_CREATOR_RECS":case"PIN_UNSAVE":case"PIN_UPDATE_COMMENT_COUNT":case"SET_PIN_COMMENTS_DISABLED":case"PIN_SHOW_FEEDBACK":case"PIN_SHOW_FEEDBACK_OVERLAY":case"PIN_FEEDBACK":case"PIN_SHOW_AD_REASONS_MODAL":case"PIN_FAVORITE":case"PIN_UPDATE_REACTION_COUNT":{let{id:r}=t.payload;if(!e[r])return e;return{...e,[r]:I(e[r],t)}}case"PIN_BETTER_SAVE":{let{payload:{localPin:r,pinId:a}}=t,o={...e};return r&&"pin"===r.type&&(o[r.id]=r),e[a]&&(o[a]=I(e[a],t)),o}case"PIN_BETTER_SAVE_CUTOUT":{let{payload:{localPin:r,pinId:a,nodeId:o}}=t,s={...e};return r&&"pin"===r.type&&(s[r.id]=r),e&&(s[a]=I(e[a]??{id:a,node_id:o,type:"pin"},t)),s}case"PIN_BETTER_SELECT_BOARD_CUTOUT":{let{pinId:r,nodeId:a}=t.payload,o={...e};return e&&(o[r]=I(e[r]??{id:r,node_id:a,type:"pin"},t)),o}case"APPROVE_PIN_SPONSORSHIP":case"DELETE_PIN_SPONSORSHIP":case"PIN_BETTER_UNSAVE":case"PIN_BETTER_UNSAVE_CUTOUT":case"PIN_BETTER_SELECT_BOARD_OR_SECTION":case"PIN_QUICK_SAVE":case"DELETE_PIN_MENTION":case"PIN_NOTE_UPDATE":{let{pinId:r}=t.payload;if(!e[r])return e;return{...e,[r]:I(e[r],t)}}case"UPDATE_PINS_WITH_QUICKSAVE_REPIN":{let{payload:{newPin:r}}=t;if(r&&"pin"===r.type)return{...e,[r.id]:r};return e}case"PIN_REMOVE_USER_STORY_PIN_TAGGED_PRODUCTS":{let{payload:{blocksIds:r,pinId:a}}=t,o={...e},s=o[a];return s={...s,story_pin_data:{...s.story_pin_data,pages:s.story_pin_data?.pages?.map(e=>(e.blocks=e.blocks?.map(e=>("story_pin_product_sticker_block"===e.type&&r.includes(e.pin_id)&&(e.is_removed=!0),e)),e))??[]}},o[a]=s,o}case"NFT_FETCH_DATA":{let{payload:{data:r}}=t;return{...e,[r.id]:r}}case"UPDATE_PIN_REACTION_COUNT":return T(e,t);case"PIN_DELETE":{let{pinId:r}=t.payload;return{...Object.keys(e).reduce((t,a)=>(a!==r&&(t[a]=e[a]),t),{})}}case"PIN_EDIT":{let{pinId:r,description:a,boardId:o,sectionId:s,title:i}=t.payload;return R(e,{id:r,closeup_user_note:a,board:{id:o,type:"board"},section:{id:s},title:i,unified_user_note:a})}case"ONE_TAP_SAVE":{let{boardId:o,localPinId:s,pinId:i,nodeId:n}=t.payload;if(e[i])return r&&n&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(n);t||(t=e.create(n,"Pin"));let r=t.getOrCreateLinkedRecord("savedInfo","SaveTarget");r.setValue(o,"boardId"),r.setValue(s,"localPinId"),r.setValue(null,"score"),r.setValue(null,"sectionId"),r.setValue(null,"title"),r.setValue(null,"type"),r.setValue(null,"url")}),R(e,{id:i,savedInfo:{boardId:o,localPinId:s}})}return e;case"ONE_TAP_UNSAVE":{let{pinId:o,nodeId:s}=t.payload,i=e[o];if(!i)return e;r&&s&&(0,a.commitLocalUpdate)(r,e=>{let t=e.get(s);t&&t.setValue(null,"savedInfo")});let{savedInfo:n,...l}=i;return{...e,[o]:l}}default:return e}})},254609:function(e,t,r){r.d(t,{xw:()=>_,Cp:()=>d,rh:()=>u,XT:()=>l});var a=r("14890");let o={current:null,locationToErrorMap:{}},s={step:"welcome"},i={images:[]},n={recentSaves:[],recentUpsell:{}},l={mainComponent:(e=o,t)=>{if("SET_LOCATION_TO_ERROR_MAP_ENTRY"===t.type){let r={...e.locationToErrorMap};return r[t.payload.pathname]=t.payload.renderError,{...e,locationToErrorMap:r}}if("UNSET_LOCATION_TO_ERROR_MAP_ENTRY"===t.type){let r={...e.locationToErrorMap};return delete r[t.payload.pathname],{...e,locationToErrorMap:r}}return e}},d={nuxSelectedInterestImages:(e=i,t)=>"SET_NUX_SELECTED_INTEREST_IMAGES"===t.type?{...e,images:t.payload.images}:e,nuxProgress:(e=s,t)=>"SET_NUX_PROGRESS"===t.type?{...e,step:t.payload.step}:e,postRepinMoreIdeasUpsell:(e=n,t)=>{switch(t.type){case"PIN_BETTER_SAVE":{let{localPin:r,boardId:a}=t.payload;if(!r||!a)return e;return{...e,recentSaves:[{boardId:a},...e.recentSaves]}}case"POST_REPIN_MORE_IDEAS_UPSELL_SHOWN":{let{boardId:r}=t.payload;return{...e,recentUpsell:{...e.recentUpsell,[r]:Date.now()}}}default:return e}}},u=(0,a.combineReducers)({...l,...d}),_=(0,a.combineReducers)(l)},245995:function(e,t,r){r.d(t,{ZP:function(){return _}});var a=r(775540),o=r(797605);let s=["SearchResource","UserFollowingResource","SuggestedCreatorFollowsResource"],i=(e,t)=>({...e,[t.id]:{...e[`${t.id}`],...t}}),n=(e,t)=>({...e,[t.id]:{...e[t.id],partner:{...e[t.id].partner,...t.partner}}}),l=(e,t)=>t.reduce((e,t)=>{let{type:r}=t;return r&&"user"!==r?e:i(e,t)},{...e});function d(e={},t){switch(t.type){case"UPDATE_USER_PIN_COUNT":{let{payload:{increment:r}}=t;return{...e,pin_count:(e.pin_count||0)+r}}case"USER_FOLLOW":let{value:r}=t.payload;return{...e,explicitly_followed_by_me:r,follower_count:(e.follower_count??0)+(r?1:-1)};case"USER_BLOCK":return{...e,blocked_by_me:t.payload.value,...t.payload.value?{explicitly_followed_by_me:!1}:{}};default:return e}}function u(e){let t=(e&&e.id)??"";return{[t]:{...e||{},id:t}}}function _(e){let t=(e&&e.id)??"";return(0,o.Z)("users",(r=u(e),o)=>{let _=t?r[t]:void 0;switch(o.type){case"REPLACE_STATE":return{...r,...o.payload.users};case"BOARD_SECTION_DELETE":{let{userId:e,pinCount:t}=o.payload,a=r[e].pin_count??0;return i(r,{id:e,pin_count:a-t})}case a.AF:{let{options:e,resource:t,response:a}=o.payload,s=e.user_id;if(s){let{board_count:o=0,pin_count:n=0}=r[s]||{},{resource_response:l}=a;if("BoardResource"===t){let{initial_pins:t}=e,{owner:a={}}=l.data;return i(r,{id:s,pin_count:a.pin_count||n+t.length,board_count:o+1,last_repin_id:t[0]})}if("RepinResource"===t||"PinResource"===t&&"uploaded"===e.method){let{pin_id:t}=e,{pinner:a={}}=l.data;return i(r,{id:s,pin_count:(a.pin_count||n)+1,last_repin_id:t})}}return r}case a.zP:case a.aW:let{resource:c,normalizedResponse:p,options:y,response:{resource_response:{data:E}}}=o.payload;if(o.type===a.zP&&"BoardPickerBoardsResource"===c&&p)return i(r,{id:y?.user_id||"",recent_boards:p.result.boards_shortlist});if("UserResource"===c&&E)return i(r,E);if(s.includes(c)&&E)return l(r,E);if("TodayArticleResource"===c&&E?.article_creator_user)return i(r,E.article_creator_user);if("TodayArticleFeedResource"===c&&Array.isArray(E))return l(r,E.filter(e=>"story"===e.type&&e.user?.type==="user").map(e=>e.user));return r;case"USER_BLOCK":let{payload:{id:f}}=o;return{...r,[f]:d(r[f],o)};case"USER_FOLLOW":let{payload:{id:R}}=o;return{...r,[R]:d(r[R],o)};case"USER_BULK_FOLLOW":let{ids:T,value:I}=o.payload,g={...r};return T.forEach(e=>{let t=r[e];g[e]={...t,explicitly_followed_by_me:I}}),g;case"USER_SETTING_CHANGE":return i(r,{id:o.payload.id,[o.payload.field]:o.payload.value});case"USER_PARTNER_SETTING_CHANGE":return n(r,{id:o.payload.id,partner:{[o.payload.field]:o.payload.value}});case"UPDATE_USER_PIN_COUNT":{let{payload:{userId:e}}=o;if(r[e])return{...r,[e]:d(r[e],o)};return r}case"UPDATE_USER_SCHEDULED_PIN_COUNT":{let{payload:{userId:e,increment:t}}=o,a=r[e],s=a.scheduled_pin_count||0;return{...r,[e]:{...a,scheduled_pin_count:s+t}}}case"PROFILE_COVER_SOURCE":let{payload:{coverSource:m,id:P}}=o,S=r[P]||{};return{...r,[P]:{...S,profile_cover:m}};case"BOARD_CREATE_COMPLETE":if(_&&!_.has_quicksave_board)return{...r,[_.id]:{..._,board_count:void 0===_.board_count?void 0:_.board_count+1}};return r;case"BOARD_DELETE":if(_){let{boardPinCount:e}=o.payload,t=_.pin_count??0;return{...r,[_.id]:{..._,board_count:_.board_count?_.board_count-1:_.board_count,pin_count:t-(e??0)}}}return r;case"PIN_DELETE":return i(r,{id:o.payload.userId,pin_count:r[o.payload.userId].pin_count??-1});case"PIN_ADD":let{pinnerId:O}=o.payload;return i(r,{id:O,pin_count:r[O].pin_count??1});case"SET_PERSONALIZATION_COOKIES":if(_){let{payload:e}=o;return{...r,[_.id]:{..._,allow_personalization_cookies:e.value}}}return r;case"SET_ANALYTICS_COOKIES":if(_){let{payload:e}=o;return{...r,[_.id]:{..._,allow_analytic_cookies:e.value}}}return r;case"SET_MARKETING_COOKIES":if(_){let{payload:e}=o;return{...r,[_.id]:{..._,allow_marketing_cookies:e.value}}}return r;case"ALLOW_ALL_COOKIES":if(_)return{...r,[_.id]:{..._,allow_personalization_cookies:!0,allow_analytic_cookies:!0,allow_marketing_cookies:!0}};return r;case"REJECT_ALL_COOKIES":if(_)return{...r,[_.id]:{..._,allow_personalization_cookies:!1,allow_analytic_cookies:!1,allow_marketing_cookies:!1}};return r;case"AUTHENTICATE_USER":case"REGISTER_USER":let A=o.payload.user.id;return t=A,{...r,[A]:{...r[A],...o.payload.user}};case"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX":let b=o.payload;if(_&&_.firstHomeFeedRequestAfterNux!==b)return{...r,[_.id]:{..._,firstHomeFeedRequestAfterNux:b}};return r;case"UPDATE_USER_SET":if(_){let e=o.payload.partner?{..._.partner,...o.payload.partner}:_.partner;return{...r,[_.id]:{..._,...o.payload,partner:e}}}return r;case"UPDATE_USER_SOCIAL_NETWORK":if(_){let e=o.payload.socialNetworkName;return{...r,[_.id]:{..._,[`connected_to_${e}`]:o.payload.connected}}}return r;case"UPDATE_HAS_QUICKSAVE_BOARD":let{createdQuicksaveBoard:N}=o.payload;if(_&&_.has_quicksave_board!==N){let{createdQuicksaveBoard:e}=o.payload;return{...r,[_.id]:{..._,has_quicksave_board:e}}}return r;case"UPDATE_USER_SAVE_BEHAVIOR":let{saveBehavior:h}=o.payload;if(_&&_.save_behavior!==h)return{...r,[_.id]:{..._,save_behavior:h}};return r;case"USER_DOMAIN_VERIFIED":if(_&&_.verified_user_websites){let{verifiedWebsite:e}=o.payload;return{...r,[_.id]:{..._,verified_user_websites:[..._.verified_user_websites,e],is_any_website_verified:!0}}}return r;case"USER_DOMAIN_UNVERIFIED":if(_&&_.verified_user_websites){let{verifiedWebsite:e}=o.payload,t=_.verified_user_websites&&_.verified_user_websites.indexOf(e),a=_.verified_user_websites&&_.verified_user_websites.slice(0);return a&&a.splice(t,1),{...r,[_.id]:{..._,verified_user_websites:a,isAnyWebsiteVerified:a&&a.length>0}}}return r;default:return r}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/47388-59626fc57400134b.mjs.map