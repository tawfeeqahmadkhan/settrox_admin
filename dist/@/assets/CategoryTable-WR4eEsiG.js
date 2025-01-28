import{r as g,S as J,f as Q,j as e,d as p,L as K}from"./index-CMwVzeIB.js";import{u as Y,S as W,I as X}from"./Layout-BjD68e0c.js";import{C as Z,S as y}from"./ShowHideButton-BYPQhCd6.js";import{T as $,D as ee,u as se,M as ae}from"./DrawerButton-ORFdy47n.js";import{D as te,E as ne}from"./EditDeleteButton-CYYmh68G.js";import{T as re}from"./SpecificationServices-DpSQCShk.js";import{a as F,n as k}from"./toast-Bi8odYBa.js";import{u as le,E as z}from"./index.esm-COT8LWOL.js";import{I as ie}from"./InputArea-Bkb2-nDq.js";import{L as P}from"./LabelArea-DxplvXvq.js";import{S as de}from"./SwitchToggle-B5l6JUS2.js";import{T as oe}from"./BulkActionDrawer-Dt663Ar_.js";import{U as me}from"./Uploader-o_DGVQLp.js";import{C as H}from"./ProductServices-BvNfP5wu.js";const pe=(o,c)=>{const{isDrawerOpen:t,closeDrawer:j,setIsUpdate:x,lang:v}=g.useContext(J),[C,w]=g.useState({}),[S,T]=g.useState(""),[D,u]=g.useState(""),[_,s]=g.useState([]),[n,f]=g.useState(v),[m,E]=g.useState(!0),[L,I]=g.useState(""),[O,A]=g.useState(!1),{register:B,handleSubmit:U,setValue:l,clearErrors:a,reset:h,formState:{errors:i}}=le(),N=d=>{for(const r in d)d[r].trim()===""&&delete d[r];return d},M=async({name:d,description:r})=>{var V,q;try{A(!0);const b={name:N({[n]:d}),description:N({[n]:r||""}),parentId:S||void 0,parentName:L||"Home",icon:D,status:m?"show":"hide",lang:n};if(o){const R=await H.updateCategory(o,b);x(!0),A(!1),k(R.message),j(),h()}else{const R=await H.addCategory(b);x(!0),A(!1),k(R.message),j()}}catch(b){A(!1),F(b?(q=(V=b==null?void 0:b.response)==null?void 0:V.data)==null?void 0:q.message:b==null?void 0:b.message),j()}},G=d=>{f(d),Object.keys(C).length>0&&(l("name",C.name[d||"en"]),l("description",C.description[d||"en"]))};return g.useEffect(()=>{var d;if(!t){w({}),l("name"),l("parentId"),l("parentName"),l("description"),l("icon"),u(""),E(!0),a("name"),a("parentId"),a("parentName"),a("description"),I("Home"),f(v),l("language",n),c!==void 0&&((d=c[0])==null?void 0:d._id)!==void 0&&T(c[0]._id);return}o&&(async()=>{try{const r=await H.getCategoryById(o);r&&(w(r),l("name",r.name[n||"en"]),l("description",r.description[n||"en"]),l("language",n),l("parentId",r.parentId),l("parentName",r.parentName),I(r.parentName),T(r.parentId),u(r.icon),E(r.status==="show"))}catch(r){F(r?r.response.data.message:r.message)}})()},[o,l,t,n,a,c,v]),{register:B,handleSubmit:U,onSubmit:M,errors:i,imageUrl:D,setImageUrl:u,children:_,setChildren:s,published:m,setPublished:E,checked:S,setChecked:T,isSubmitting:O,selectCategoryName:L,setSelectCategoryName:I,handleSelectLanguage:G}},ce=({id:o,data:c})=>{const{t}=Q(),{checked:j,register:x,onSubmit:v,handleSubmit:C,errors:w,imageUrl:S,setImageUrl:T,published:D,setPublished:u,setChecked:_,selectCategoryName:s,setSelectCategoryName:n,handleSelectLanguage:f,isSubmitting:m}=pe(o,c),[E,L]=g.useState(!1),{showingTranslateValue:I}=Y(),O=`
  .rc-tree-child-tree {
    display: hidden;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`,A={motionName:"node-motion",motionAppear:!1,onAppearStart:a=>({height:0}),onAppearActive:a=>({height:a.scrollHeight}),onLeaveStart:a=>({height:a.offsetHeight}),onLeaveActive:()=>({height:0})},B=a=>{let h=[];for(let i of a)h.push({title:I(i.name),key:i._id,children:i.children.length>0&&B(i.children)});return h},U=(a,h)=>{var i;return a._id===h?a:(i=a==null?void 0:a.children)==null?void 0:i.reduce((N,M)=>N??U(M,h),void 0)},l=async a=>{if(a!==void 0)if(o){const h=await H.getCategoryById(a);if(o===a)return F("This can't be select as a parent category!");if(o===h.parentId)return F("This can't be select as a parent category!");{if(a===void 0)return;_(a);const i=c[0],N=U(i,a);n(I(N==null?void 0:N.name))}}else{if(a===void 0)return;_(a);const h=c[0],i=U(h,a);n(I(i==null?void 0:i.name))}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:o?e.jsx($,{register:x,handleSelectLanguage:f,title:t("UpdateCategory"),description:t("UpdateCategoryDescription")}):e.jsx($,{register:x,handleSelectLanguage:f,title:t("AddCategoryTitle"),description:t("AddCategoryDescription")})}),e.jsx(W,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:C(v),children:[e.jsxs("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(P,{label:t("Name")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(ie,{required:!0,register:x,label:"Category title",name:"name",type:"text",placeholder:t("ParentCategoryPlaceholder")}),e.jsx(z,{errorName:w.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(P,{label:t("Description")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(oe,{register:x,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(z,{errorName:w.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(P,{label:t("ParentCategory")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4 relative",children:[e.jsx(p.Input,{readOnly:!0,...x("parent",{required:!1}),name:"parent",value:s||"Home",placeholder:t("ParentCategory"),type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:O}}),e.jsx(re,{expandAction:"click",treeData:B(c),selectedKeys:[j],onSelect:a=>l(a[0]),motion:A,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(P,{label:t("CategoryIcon")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(me,{imageUrl:S,setImageUrl:T,folder:"category",setbtladoing:L})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(P,{label:t("Published")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(de,{handleProcess:u,processOption:D})})]})]}),e.jsx(ee,{id:o,title:"Category",isSubmitting:m||E})]})})]})},De=({data:o,lang:c,isCheck:t,categories:j,setIsCheck:x,useParamId:v,showChild:C})=>{const{title:w,serviceId:S,handleModalOpen:T,handleUpdate:D}=se(),{showingTranslateValue:u}=Y(),_=s=>{const{id:n,checked:f}=s.target;x([...t,n]),f||x(t.filter(m=>m!==n))};return e.jsxs(e.Fragment,{children:[(t==null?void 0:t.length)<1&&e.jsx(te,{useParamId:v,id:S,title:w}),e.jsx(ae,{children:e.jsx(ce,{id:S,data:o,lang:c})}),e.jsx(p.TableBody,{children:j==null?void 0:j.map(s=>{var n,f;return e.jsxs(p.TableRow,{children:[e.jsx(p.TableCell,{children:e.jsx(Z,{type:"checkbox",name:"category",id:s._id,handleClick:_,isChecked:t==null?void 0:t.includes(s._id)})}),e.jsx(p.TableCell,{className:"font-semibold uppercase text-xs",children:(n=s==null?void 0:s._id)==null?void 0:n.substring(20,24)}),e.jsx(p.TableCell,{children:s!=null&&s.icon?e.jsx(p.Avatar,{className:"hidden mr-3 md:block bg-gray-50 p-1",src:s==null?void 0:s.icon,alt:s==null?void 0:s.parent}):e.jsx(p.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})}),e.jsx(p.TableCell,{className:"font-medium text-sm ",children:(s==null?void 0:s.children.length)>0?e.jsxs(K,{to:`/categories/${s==null?void 0:s._id}`,className:"text-blue-700",children:[u(s==null?void 0:s.name),e.jsx(e.Fragment,{children:C&&e.jsxs(e.Fragment,{children:[" ",e.jsx("div",{className:"pl-2 ",children:(f=s==null?void 0:s.children)==null?void 0:f.map(m=>e.jsx("div",{children:e.jsx(K,{to:`/categories/${m==null?void 0:m._id}`,className:"text-blue-700",children:e.jsxs("div",{className:"flex text-xs items-center  text-blue-800",children:[e.jsx("span",{className:" text-xs text-gray-500 pr-1",children:e.jsx(X,{})}),e.jsx("span",{className:"text-gray-500",children:u(m.name)})]})})},m._id))})]})})]}):e.jsx("span",{children:u(s==null?void 0:s.name)})}),e.jsx(p.TableCell,{className:"text-sm",children:u(s==null?void 0:s.description)}),e.jsx(p.TableCell,{className:"text-center",children:e.jsx(y,{id:s._id,category:!0,status:s.status})}),e.jsx(p.TableCell,{children:e.jsx(ne,{id:s==null?void 0:s._id,parent:s,isCheck:t,children:s==null?void 0:s.children,handleUpdate:D,handleModalOpen:T,title:u(s==null?void 0:s.name)})})]},s._id)})})]})};export{ce as C,De as a};
