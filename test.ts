// Generated by Framer (ff86393)
import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import{addFonts,cx,Floating,Image,RichText,useActiveVariantCallback,useComponentViewport,useLocaleInfo,useOverlayState,useVariantState,withCSS,withFX}from"framer";import{AnimatePresence,LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";import{withHover}from"https://framerusercontent.com/modules/7IoOsbxV78XuISa8SL49/nHYxyeZSUWQkxXU32S71/Examples.js";const MotionDivWithFX=withFX(motion.div);const MotionDivWithHover=withHover(motion.div);const serializationHash="framer-5rvXJ";const variantClassNames={hi206woYM:"framer-v-jdu7rf"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transition1={bounce:.2,delay:0,duration:.4,type:"spring"};const transformTemplate1=(_,t)=>`translate(-50%, -50%) ${t}`;const animation={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:transition1,x:0,y:0};const animation1={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:transition1,x:0,y:0};const animation2={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/_jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const Overlay=({children,blockDocumentScrolling,enabled=true})=>{const[visible,setVisible]=useOverlayState({blockDocumentScrolling});return children({hide:()=>setVisible(false),show:()=>setVisible(true),toggle:()=>setVisible(!visible),visible:enabled&&visible});};const Variants=motion.create(React.Fragment);const getProps=({height,id,width,...props})=>{return{...props};};const createLayoutDependency=(props,variants)=>{if(props.layoutDependency)return variants.join("-")+props.layoutDependency;return variants.join("-");};const Component=/*#__PURE__*/React.forwardRef(function(props,ref){const{activeLocale,setLocale}=useLocaleInfo();const{style,className,layoutId,variant,...restProps}=getProps(props);const{baseVariant,classNames,clearLoadingGesture,gestureHandlers,gestureVariant,isLoading,setGestureState,setVariant,variants}=useVariantState({defaultVariant:"hi206woYM",variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onMouseEntert682wp=({overlay,paginationInfo})=>activeVariantCallback(async(...args)=>{setGestureState({isHovered:true});overlay.show();});const ref1=React.useRef(null);const ref2=React.useRef(null);const defaultLayoutId=React.useId();const sharedStyleClassNames=[];const componentViewport=useComponentViewport();return /*#__PURE__*/_jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/_jsx(Variants,{animate:variants,initial:false,children:/*#__PURE__*/_jsx(Overlay,{blockDocumentScrolling:false,children:overlay=>/*#__PURE__*/_jsx(_Fragment,{children:/*#__PURE__*/_jsx(Transition,{value:transition1,children:/*#__PURE__*/_jsxs(MotionDivWithHover,{...restProps,...gestureHandlers,className:cx(serializationHash,...sharedStyleClassNames,"framer-jdu7rf",className,classNames),"data-framer-name":"Card","data-highlight":true,id:`${layoutId}-jdu7rf`,layoutDependency:layoutDependency,layoutId:"hi206woYM",onMouseEnter:onMouseEntert682wp({overlay}),ref:ref!==null&&ref!==void 0?ref:ref1,style:{backgroundColor:"rgb(3, 3, 3)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)",...style},children:[/*#__PURE__*/_jsx(Image,{background:{alt:"",fit:"fill",intrinsicHeight:720,intrinsicWidth:960},className:"framer-1m91cgs","data-framer-name":"Image",layoutDependency:layoutDependency,layoutId:"aY0BxFIFE",style:{borderTopLeftRadius:20,borderTopRightRadius:20}}),/*#__PURE__*/_jsxs(motion.div,{className:"framer-17q5f2g","data-framer-name":"Content",layoutDependency:layoutDependency,layoutId:"u4r_EUsxI",style:{backgroundColor:"rgba(171, 171, 171, 0.25)"},children:[/*#__PURE__*/_jsx(motion.div,{className:"framer-dxw6c9","data-framer-name":"text2",layoutDependency:layoutDependency,layoutId:"JY9UjFiPn",children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx(motion.h3,{style:{"--font-selector":"R0Y7SW50ZXItNjAw","--framer-font-family":'"Inter", "Inter Placeholder", sans-serif',"--framer-font-size":"20px","--framer-font-weight":"600","--framer-letter-spacing":"-0.5px","--framer-line-height":"1.4em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-a0htzi, rgb(230, 230, 230))"},children:"Expanding Your Website"})}),className:"framer-1b8nmfd","data-framer-name":"text2",fonts:["GF;Inter-600"],layoutDependency:layoutDependency,layoutId:"oF05nQxLO",style:{"--extracted-a0htzi":"rgb(230, 230, 230)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transformTemplate:transformTemplate1,verticalAlignment:"top",withExternalLayout:true})}),/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItNTAw","--framer-font-family":'"Inter", "Inter Placeholder", sans-serif',"--framer-font-weight":"500","--framer-line-height":"1.6em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv, rgb(230, 230, 230))"},children:"Learn about hosting built for scale and reliability."})}),className:"framer-g26zb9",fonts:["GF;Inter-500"],layoutDependency:layoutDependency,layoutId:"zyC7N2PpF",style:{"--extracted-r6o4lv":"rgb(230, 230, 230)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/_jsx(motion.button,{className:"framer-1y5wgns","data-framer-name":"Button","data-reset":"button",layoutDependency:layoutDependency,layoutId:"bjYLG3ETt",style:{backgroundColor:"rgb(34, 34, 34)",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8,boxShadow:"0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.14764), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)"},children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItNjAw","--framer-font-family":'"Inter", "Inter Placeholder", sans-serif',"--framer-font-size":"14px","--framer-font-weight":"600","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv, rgb(255, 255, 255))"},children:"Read More"})}),className:"framer-1rdws0n",fonts:["GF;Inter-600"],layoutDependency:layoutDependency,layoutId:"LWOXGsMmY",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true})})]}),/*#__PURE__*/_jsx(AnimatePresence,{children:overlay.visible&&/*#__PURE__*/_jsx(Floating,{alignment:"center",anchorRef:ref!==null&&ref!==void 0?ref:ref1,className:cx(serializationHash,classNames,...sharedStyleClassNames),collisionDetection:true,collisionDetectionPadding:20,"data-framer-portal-id":`${layoutId}-jdu7rf`,offsetX:0,offsetY:10,onDismiss:overlay.hide,placement:"bottom",portalSelector:"#overlay",safeArea:true,zIndex:11,children:/*#__PURE__*/_jsx(MotionDivWithFX,{__perspectiveFX:false,__smartComponentFX:true,__targetOpacity:1,animate:animation1,className:"framer-1ui6714",exit:animation,initial:animation2,layoutDependency:layoutDependency,layoutId:"SceAuUHU2",ref:ref2,role:"dialog",style:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,boxShadow:"0px 10px 20px 0px rgba(0,0,0,0.05)"}})})})]})})})})})});});const css=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-5rvXJ.framer-1cqj33p, .framer-5rvXJ .framer-1cqj33p { display: block; }",".framer-5rvXJ.framer-jdu7rf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-width: 100px; overflow: hidden; padding: 0px; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }",".framer-5rvXJ .framer-1m91cgs { aspect-ratio: 1.3333333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 150px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",".framer-5rvXJ .framer-17q5f2g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 30px; position: relative; width: 100%; }",".framer-5rvXJ .framer-dxw6c9 { flex: none; height: 28px; overflow: visible; position: relative; width: 100%; }",".framer-5rvXJ .framer-1b8nmfd { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre-wrap; width: 260px; word-break: break-word; word-wrap: break-word; }",".framer-5rvXJ .framer-g26zb9 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-5rvXJ .framer-1y5wgns { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; width: min-content; }",".framer-5rvXJ .framer-1rdws0n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-5rvXJ .framer-1ui6714 { height: 150px; overflow: hidden; position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5rvXJ.framer-jdu7rf, .framer-5rvXJ .framer-17q5f2g, .framer-5rvXJ .framer-1y5wgns { gap: 0px; } .framer-5rvXJ.framer-jdu7rf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-5rvXJ.framer-jdu7rf > :first-child, .framer-5rvXJ .framer-17q5f2g > :first-child { margin-top: 0px; } .framer-5rvXJ.framer-jdu7rf > :last-child, .framer-5rvXJ .framer-17q5f2g > :last-child { margin-bottom: 0px; } .framer-5rvXJ .framer-17q5f2g > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-5rvXJ .framer-1y5wgns > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5rvXJ .framer-1y5wgns > :first-child { margin-left: 0px; } .framer-5rvXJ .framer-1y5wgns > :last-child { margin-right: 0px; } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 459
 * @framerIntrinsicWidth 320
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"],"constraints":["100px",null,null,null]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */const FramerAAx8A2SRx=withCSS(Component,css,"framer-5rvXJ");export default FramerAAx8A2SRx;FramerAAx8A2SRx.displayName="Card";FramerAAx8A2SRx.defaultProps={height:459,width:320};addFonts(FramerAAx8A2SRx,[{explicitInter:true,fonts:[{family:"Inter",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2",weight:"600"},{family:"Inter",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",weight:"500"}]}],{supportsExplicitInterCodegen:true});
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerAAx8A2SRx","slots":[],"annotations":{"framerIntrinsicWidth":"320","framerIntrinsicHeight":"459","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"],\"constraints\":[\"100px\",null,null,null]}}}","framerDisplayContentsDiv":"false","framerComponentViewportWidth":"true","framerImmutableVariables":"true","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}