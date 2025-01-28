import{r as b,S as E,j as e,v as n,d as s}from"./index-CMwVzeIB.js";import{l as U,F as R,a as L,b as O}from"./Layout-BjD68e0c.js";import{B as q}from"./BulkActionDrawer-Dt663Ar_.js";import{T as k,D as H,u as F,M as I}from"./DrawerButton-ORFdy47n.js";import{u as V,E as v}from"./index.esm-COT8LWOL.js";import{I as A}from"./InputArea-Bkb2-nDq.js";import{L as T}from"./LabelArea-DxplvXvq.js";import{S as z}from"./SwitchToggle-B5l6JUS2.js";import{C as w}from"./CurrencyServices-DcYd_dUH.js";import{a as D,n as B}from"./toast-Bi8odYBa.js";import{D as P,E as G}from"./EditDeleteButton-CYYmh68G.js";import{P as J}from"./PageTitle-CiYCa1gH.js";import{u as K}from"./useAsync-3D9_nwwI.js";import{u as Q}from"./useFilter-CzeXV83K.js";import{T as W}from"./TableLoading-UbVPBLmP.js";import{C as M,S as X}from"./ShowHideButton-BYPQhCd6.js";import{N as Y}from"./Tooltip-CK2c9wXD.js";import{A as Z}from"./AnimatedContent-BUFKB-yB.js";import"./iconBase-E_75oB0f.js";import"./useDispatch-DX3rZxrl.js";import"./httpService-y4n1pDxN.js";import"./index--KU_TfxA.js";import"./ParentCategory-CmfVHEj-.js";import"./SpecificationServices-DpSQCShk.js";import"./ProductServices-BvNfP5wu.js";import"./LanguageServices-BvaG6nfs.js";import"./SelectLanguageTwo-BgAeF8hI.js";import"./spinner-CkndCogW.js";import"./index.prod-bp3Z4JqG.js";/* empty css                      */import"./AdminServices-D9Q4xkaE.js";import"./BrandServices-Jo5NrGFc.js";import"./browser-G6HRTwGe.js";import"./index-DJ3uWcwx.js";import"./isToday-tsJAS3Ca.js";import"./index-V2XaSKc-.js";import"./react-tooltip.min-DdxQKMRK.js";const $=t=>{const[i,m]=b.useState(!0),[h,l]=b.useState(!1),{isDrawerOpen:x,closeDrawer:o,setIsUpdate:p}=b.useContext(E),{handleSubmit:r,register:j,setValue:u,clearErrors:g,formState:{errors:N}}=V(),C=async({symbol:f,name:c})=>{var a,y;try{l(!0);const d={name:c,symbol:f,status:i?"show":"hide"};if(t){const S=await w.updateCurrency(t,d);p(!0),l(!1),B(S.message),o()}else{const S=await w.addCurrency(d);p(!0),l(!1),B(S.message),o()}}catch(d){l(!1),D(((y=(a=d==null?void 0:d.response)==null?void 0:a.data)==null?void 0:y.message)||(d==null?void 0:d.message)),o()}};return b.useEffect(()=>{if(!x){u("name"),u("symbol"),m(!0),g("symbol"),g("name");return}t&&(async()=>{var f,c;try{const a=await w.getCurrencyById(t);a&&(u("name",a.name),u("symbol",a.symbol),m(a.status==="show"))}catch(a){D(((c=(f=a==null?void 0:a.response)==null?void 0:f.data)==null?void 0:c.message)||(a==null?void 0:a.message))}})()},[g,t,x,u]),{errors:N,onSubmit:C,register:j,status:i,setStatus:m,isSubmitting:h,handleSubmit:r}},_=({id:t})=>{const{errors:i,onSubmit:m,register:h,status:l,setStatus:x,isSubmitting:o,handleSubmit:p}=$(t);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:t?e.jsx(k,{title:n("UpdateCurrency"),description:n("UpdateCurrencyText")}):e.jsx(k,{title:n("AddCurrency"),description:n("AddCurrencyText")})}),e.jsx(U.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:p(m),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(T,{label:n("CurrenciesName")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(A,{required:!0,register:h,label:"Name",name:"name",type:"text",placeholder:"Name"}),e.jsx(v,{errorName:i.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(T,{label:n("CurrenciesSymbol")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(A,{required:!0,register:h,label:"Symbol",name:"symbol",type:"text",placeholder:"Symbol"}),e.jsx(v,{errorName:i.symbol})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(T,{label:n("CurrenciesEnabled")}),e.jsx("div",{className:"col-span-8 sm:col-span-1 text-align-left",children:e.jsx(z,{processOption:l,handleProcess:x})})]})]}),e.jsx(H,{id:t,title:"Currency",isSubmitting:o})]})})]})},ee=({currency:t,isCheck:i,setIsCheck:m})=>{const{title:h,serviceId:l,handleModalOpen:x,handleUpdate:o}=F(),p=r=>{const{id:j,checked:u}=r.target;m([...i,j]),u||m(i.filter(g=>g!==j))};return e.jsxs(e.Fragment,{children:[i.length<1&&e.jsx(P,{id:l,title:h}),e.jsx(I,{children:e.jsx(_,{id:l})}),e.jsx(s.TableBody,{children:t==null?void 0:t.map(r=>e.jsxs(s.TableRow,{children:[e.jsx(s.TableCell,{children:e.jsx(M,{type:"checkbox",name:r.symbol,id:r._id,handleClick:p,isChecked:i.includes(r._id)})}),e.jsx(s.TableCell,{className:"text-center",children:e.jsx("span",{className:"font-medium text-sm",children:r.name})}),e.jsx(s.TableCell,{className:"text-center",children:e.jsx("span",{className:"font-medium text-sm",children:r.symbol})}),e.jsx(s.TableCell,{className:"text-center",children:e.jsx(X,{id:r._id,status:r.status,currencyStatusName:"status"})}),e.jsx(s.TableCell,{children:e.jsx(G,{title:r.name,id:r._id,handleUpdate:o,handleModalOpen:x})})]},r._id))})]})},Re=()=>{const{toggleDrawer:t}=b.useContext(E),{allId:i,handleUpdateMany:m,handleDeleteMany:h}=F(),{data:l,loading:x,error:o}=K(w.getAllCurrency),{totalResults:p,resultsPerPage:r,dataTable:j,handleChangePage:u,handleSubmitCurrency:g,currencyRef:N}=Q(l),[C,f]=b.useState(!1),[c,a]=b.useState([]),y=()=>{f(!C),a(l.map(d=>d._id)),C&&a([])};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:"Currencies"}),e.jsx(q,{ids:i,title:"Currencies"}),e.jsx(I,{children:e.jsx(_,{})}),e.jsx(P,{ids:i,setIsCheck:a,title:"Selected Currencies"}),e.jsx(Z,{children:e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("form",{onSubmit:g,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex md:justify-between",children:[e.jsx("div",{className:"w-full",children:e.jsx(s.Input,{ref:N,type:"search",placeholder:n("SearchIsoCode")})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(s.Button,{disabled:c.length<1,onClick:()=>m(c),className:"w-full rounded-md h-12 btn-gray text-gray-600",children:[e.jsx("span",{className:"mr-2",children:e.jsx(R,{})}),"Bulk Action"]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0",children:e.jsxs(s.Button,{disabled:c.length<1,onClick:()=>h(c),className:"w-full rounded-md h-12 bg-red-500 btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(L,{})}),"Delete"]})}),e.jsxs(s.Button,{onClick:t,className:"rounded-md h-12 w-48",children:[e.jsx("span",{className:"mr-2",children:e.jsx(O,{})}),"Add Currency"]})]})]})})})}),x?e.jsx(W,{row:12,col:7,width:163,height:20}):o?e.jsx("span",{className:"text-center mx-auto text-red-500",children:o}):l.length!==0&&e.jsxs(s.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:e.jsx(M,{type:"checkbox",name:"selectAll",id:"selectAll",isChecked:C,handleClick:y})}),e.jsx(s.TableCell,{className:"text-center",children:n("CurrenciesName")}),e.jsx(s.TableCell,{className:"text-center",children:n("CurrenciesSymbol")}),e.jsx(s.TableCell,{className:"text-center",children:n("CurrenciesEnabled")}),e.jsx(s.TableCell,{className:"text-right",children:n("CurrenciesActions")})]})}),e.jsx(ee,{currency:j,isCheck:c,setIsCheck:a})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:p,resultsPerPage:r,onChange:u,label:"Table navigation"})})]}),!x&&l.length===0&&!o&&e.jsx(Y,{title:"Sorry, There are no currency right now."})]})};export{Re as default};
