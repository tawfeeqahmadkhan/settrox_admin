import{j as e,r as N,v as x,d as a,L as Q,S as W,f as X}from"./index-CMwVzeIB.js";import{u as U,l as Z,F as ee,a as le,b as se}from"./Layout-BjD68e0c.js";import{u as A}from"./useAsync-3D9_nwwI.js";import{T as F,D as ae,u as M,M as R}from"./DrawerButton-ORFdy47n.js";import{u as te}from"./useFilter-CzeXV83K.js";import{D as L,E as re}from"./EditDeleteButton-CYYmh68G.js";import{T as ie,B as oe}from"./BulkActionDrawer-Dt663Ar_.js";import{P as de}from"./PageTitle-CiYCa1gH.js";import{E as S}from"./index.esm-COT8LWOL.js";import{I as ne}from"./InputArea-Bkb2-nDq.js";import{u as ce,U as me}from"./Uploader-o_DGVQLp.js";import{S as ge}from"./SwitchToggle-B5l6JUS2.js";import{L as E}from"./LabelArea-DxplvXvq.js";import{C as O}from"./ProductServices-BvNfP5wu.js";import{M as he}from"./ParentCategory-CmfVHEj-.js";import{T as xe}from"./SpecificationServices-DpSQCShk.js";import{a as I}from"./toast-Bi8odYBa.js";import{U as pe}from"./UploadMany-mKeCxth4.js";import{T as ue}from"./TableLoading-UbVPBLmP.js";import{C as H,S as je}from"./ShowHideButton-BYPQhCd6.js";import{N as fe}from"./Tooltip-CK2c9wXD.js";import{A as ye}from"./AnimatedContent-BUFKB-yB.js";import{B as P}from"./BrandServices-Jo5NrGFc.js";import"./iconBase-E_75oB0f.js";import"./useDispatch-DX3rZxrl.js";import"./httpService-y4n1pDxN.js";import"./SelectLanguageTwo-BgAeF8hI.js";import"./LanguageServices-BvaG6nfs.js";import"./spinner-CkndCogW.js";import"./browser-G6HRTwGe.js";import"./index-DJ3uWcwx.js";import"./isToday-tsJAS3Ca.js";import"./CurrencyServices-DcYd_dUH.js";import"./AdminServices-D9Q4xkaE.js";import"./index--KU_TfxA.js";import"./tslib.es6-RU1n5ZxP.js";import"./index.prod-bp3Z4JqG.js";/* empty css                      */import"./exportFromJSON-BvevaQwb.js";import"./index-V2XaSKc-.js";import"./react-tooltip.min-DdxQKMRK.js";const be=({selectedCategory:h,setSelectedCategory:n,setDefaultCategory:o})=>{var l;const{data:c,loading:g}=A((l=O)==null?void 0:l.getAllCategory),{showingTranslateValue:p}=U(),b=`
  .rc-tree-child-tree {
    display: block;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`,u={motionName:"node-motion",motionAppear:!1,onAppearStart:s=>({height:0}),onAppearActive:s=>({height:s.scrollHeight}),onLeaveStart:s=>({height:s.offsetHeight}),onLeaveActive:()=>({height:0})},y=s=>{var t;let d=[];for(let i of s)d.push({title:p(i.name),key:i._id,children:((t=i==null?void 0:i.children)==null?void 0:t.length)>0&&y(i.children)});return d},j=(s,d)=>{var t;return s._id===d?s:(t=s==null?void 0:s.children)==null?void 0:t.reduce((i,m)=>i??j(m,d),void 0)},r=s=>{let d={};for(const i of c)if(i._id===s&&(d=i),i.children&&i.children.length>0)for(const m of i.children)m._id===s&&(d=m);if(typeof d.parentId>"u")return I("Select subcategory only!");const t=j(d,s);if(console.log("selectedDataObj",d),t!==void 0){if(h.filter(m=>m._id===t._id).length!==0)return I("This category already selected!");n(m=>[...m,{_id:t==null?void 0:t._id,name:p(t==null?void 0:t.name)}]),o(()=>[{_id:t==null?void 0:t._id,name:p(t==null?void 0:t.name)}])}},f=s=>{n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2",children:e.jsx(he,{displayValue:"name",groupBy:"name",isObject:!0,hidePlaceholder:!0,onKeyPressFn:function(){},onRemove:s=>f(s),onSearch:function(){},onSelect:s=>r(s),selectedValues:h,placeholder:"Select Category"})}),!g&&c!==void 0&&e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:b}}),e.jsx(xe,{expandAction:"click",treeData:y(c),onSelect:s=>r(s[0]),motion:u,animation:"slide-up",defaultExpandAll:!0})]})]})},V=({id:h})=>{const{register:n,handleSubmit:o,onSubmit:c,errors:g,setImageUrl:p,imageUrl:b,published:u,setPublished:y,isSubmitting:j,setIsSubmitting:r,handleSelectLanguage:f,language:l,selectedCategory:s,setSelectedCategory:d,setDefaultCategory:t}=ce(h),[i,m]=N.useState(!1);console.log(j,"dddddddddddddddddddd");const[k,C]=N.useState(null);return N.useEffect(()=>{(async()=>{try{const w=await O.getAllCategories();C(w),console.log("Fetched categorydata:",w)}catch(w){console.error("Error fetching categorydata:",w)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:h?e.jsx(F,{register:n,handleSelectLanguage:f,title:x("UpdateBrand"),description:x("UpdateBrandDescription")}):e.jsx(F,{register:n,handleSelectLanguage:f,title:x("AddBrand"),description:x("AddBrandDescription")})}),e.jsx(Z.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:o(c),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 col-span-2",children:x("BrandImage")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(me,{imageUrl:b,setImageUrl:p,setbtladoing:m,folder:"brand"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(E,{label:x("Category")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(be,{lang:l,selectedCategory:s,setSelectedCategory:d,setDefaultCategory:t})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 col-span-2",children:x("BrandName")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(ne,{required:!0,register:n,label:"Brand Name",name:"name",type:"text",placeholder:x("EnterBrandName")}),e.jsx(S,{errorName:g.brandName})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(E,{label:x("Description")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(ie,{register:n,label:"Description",name:"description",type:"text",placeholder:"brand Description"}),e.jsx(S,{errorName:g.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 col-span-2",children:x("Published")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(ge,{handleProcess:y,processOption:u}),e.jsx(S,{errorName:g.published})]})]})]}),e.jsx(ae,{id:h,title:"Brand",isSubmitting:j||i})]})})]})},Ne=({data:h,lang:n,isCheck:o,brands:c,setIsCheck:g,useParamId:p})=>{const{title:b,serviceId:u,handleModalOpen:y,handleUpdate:j}=M(),{showingTranslateValue:r}=U(),f=l=>{const{id:s,checked:d}=l.target;g([...o,s]),d||g(o.filter(t=>t!==s))};return console.log(c,"ttttttttttttttttttttttttttttttt"),e.jsxs(e.Fragment,{children:[(o==null?void 0:o.length)<1&&e.jsx(L,{useParamId:p,id:u,title:b}),e.jsx(R,{children:e.jsx(V,{id:u,data:h,lang:n})}),e.jsx(a.TableBody,{children:c==null?void 0:c.map(l=>{var s;return e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:e.jsx(H,{type:"checkbox",name:"brand",id:l._id,handleClick:f,isChecked:o==null?void 0:o.includes(l._id)})}),e.jsx(a.TableCell,{className:"font-semibold uppercase text-xs",children:(s=l==null?void 0:l._id)==null?void 0:s.substring(20,24)}),e.jsx(a.TableCell,{children:l!=null&&l.logo?e.jsx(a.Avatar,{className:"hidden mr-3 md:block bg-gray-50 p-1",src:l==null?void 0:l.logo,alt:l==null?void 0:l.name}):e.jsx(a.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"brand",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})}),e.jsx(a.TableCell,{className:"font-medium text-sm",children:e.jsx(Q,{to:`/brands/${l==null?void 0:l._id}`,className:"text-blue-700",children:r(l==null?void 0:l.name)})}),e.jsx(a.TableCell,{className:"text-sm",children:r(l==null?void 0:l.description)}),e.jsx(a.TableCell,{className:"text-center",children:e.jsx(je,{id:l._id,status:l.status})}),e.jsx(a.TableCell,{children:e.jsx(re,{id:l==null?void 0:l._id,parent:l,isCheck:o,handleUpdate:j,handleModalOpen:y,title:r(l==null?void 0:l.name)})})]},l._id)})})]})},cl=()=>{const{toggleDrawer:h,lang:n}=N.useContext(W),{data:o,loading:c,error:g}=A(P.getAllBrands),{data:p}=A(P.getAllBrands),{handleDeleteMany:b,allId:u,handleUpdateMany:y,serviceId:j}=M(),{t:r}=X(),{handleSubmitBrand:f,brandRef:l,totalResults:s,resultsPerPage:d,dataTable:t,serviceData:i,handleChangePage:m,filename:k,isDisabled:C,setBrandType:D,handleSelectFile:w,handleUploadMultiple:q,handleRemoveSelectFile:z}=te(o),[B,K]=N.useState(!1),[T,v]=N.useState([]),[Y,we]=N.useState(!1),$=()=>{var _;K(!B),v((_=o[0])==null?void 0:_.children.map(J=>J._id)),B&&v([])},G=()=>{D(""),l.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:r("Brands")}),e.jsx(L,{ids:u,setIsCheck:v}),e.jsx(oe,{ids:u,title:"Brands",lang:n,data:o,isCheck:T}),e.jsx(R,{children:e.jsx(V,{id:j,data:o,lang:n})}),e.jsxs(ye,{children:[e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:f,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 xl:flex",children:[e.jsx("div",{className:"flex justify-start w-1/2 xl:w-1/2 md:w-full",children:e.jsx(pe,{title:"Brands",exportData:p,filename:k,isDisabled:C,handleSelectFile:w,handleUploadMultiple:q,handleRemoveSelectFile:z})}),e.jsxs("div",{className:"lg:flex md:flex xl:justify-end xl:w-1/2 md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(a.Button,{disabled:T.length<1,onClick:()=>y(T),className:"w-full rounded-md h-12 text-gray-600 btn-gray",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ee,{})}),r("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0",children:e.jsxs(a.Button,{disabled:T.length<1,onClick:()=>b(T),className:"w-full rounded-md h-12 bg-red-500 btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(le,{})}),r("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(a.Button,{onClick:h,className:"rounded-md h-12 w-full",children:[e.jsx("span",{className:"mr-2",children:e.jsx(se,{})}),r("AddBrand")]})})]})]})})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg mb-4",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:f,className:"py-3 grid gap-4 md:flex",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(a.Input,{ref:l,type:"search",placeholder:r("SearchBrand")})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a.Button,{type:"submit",className:"h-12 w-full bg-blue-700",children:r("Filter")}),e.jsx(a.Button,{layout:"outline",onClick:G,type:"reset",className:"h-12",children:r("Reset")})]})]})})})]}),c?e.jsx(ue,{row:12,col:6,width:190,height:20}):g?e.jsx("span",{className:"text-center mx-auto text-red-500",children:g}):(i==null?void 0:i.length)!==0?e.jsxs(a.TableContainer,{className:"mb-8",children:[e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(a.TableCell,{children:e.jsx(H,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:$,isChecked:B})}),e.jsx(a.TableCell,{children:r("brandIdTbl")}),e.jsx(a.TableCell,{children:r("brandIconTbl")}),e.jsx(a.TableCell,{children:r("BrandName")}),e.jsx(a.TableCell,{children:r("BrandDescription")}),e.jsx(a.TableCell,{className:"text-center",children:r("brandPublishedTbl")}),e.jsx(a.TableCell,{className:"text-right",children:r("brandActionsTbl")})]})}),e.jsx(Ne,{data:o,lang:n,isCheck:T,brands:t,setIsCheck:v,showChild:Y})]}),e.jsx(a.TableFooter,{children:e.jsx(a.Pagination,{totalResults:s,resultsPerPage:d,onChange:m,label:"Table navigation"})})]}):e.jsx(fe,{title:"Sorry, There are no brands right now."})]})};export{cl as default};
