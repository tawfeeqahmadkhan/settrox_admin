import{j as e,d as l,v as B,L as Q,r as N,S as O,f as R}from"./index-CMwVzeIB.js";import{u as _,i as W,F as X,a as Y,b as ee}from"./Layout-BjD68e0c.js";import{u as J}from"./useAsync-3D9_nwwI.js";import{u as M,M as E}from"./DrawerButton-ORFdy47n.js";import{U as se}from"./UploadMany-mKeCxth4.js";import{T as le,N as te}from"./Tooltip-CK2c9wXD.js";import{P as U,C as ae}from"./ProductServices-BvNfP5wu.js";import{P as ie}from"./PageTitle-CiYCa1gH.js";import{P as L}from"./ProductDrawer-CYu61Of0.js";import{C as V,S as re}from"./ShowHideButton-BYPQhCd6.js";import{D as H,E as ne}from"./EditDeleteButton-CYYmh68G.js";import{A as oe,c as de}from"./browser-G6HRTwGe.js";import{a as D,n as I}from"./toast-Bi8odYBa.js";import{B as ce}from"./BulkActionDrawer-Dt663Ar_.js";import{T as xe}from"./TableLoading-UbVPBLmP.js";import{A as me}from"./AnimatedContent-BUFKB-yB.js";import"./iconBase-E_75oB0f.js";import"./useDispatch-DX3rZxrl.js";import"./httpService-y4n1pDxN.js";import"./SelectLanguageTwo-BgAeF8hI.js";import"./LanguageServices-BvaG6nfs.js";import"./spinner-CkndCogW.js";import"./exportFromJSON-BvevaQwb.js";import"./react-tooltip.min-DdxQKMRK.js";import"./index--KU_TfxA.js";import"./ParentCategory-CmfVHEj-.js";import"./SpecificationServices-DpSQCShk.js";import"./index.esm-COT8LWOL.js";import"./InputArea-Bkb2-nDq.js";import"./LabelArea-DxplvXvq.js";import"./InputValue-QRZ_5r73.js";import"./Uploader-o_DGVQLp.js";import"./tslib.es6-RU1n5ZxP.js";import"./index-DJ3uWcwx.js";import"./BrandServices-Jo5NrGFc.js";import"./index.prod-bp3Z4JqG.js";import"./CurrencyServices-DcYd_dUH.js";import"./AdminServices-D9Q4xkaE.js";/* empty css                      */import"./SwitchToggle-B5l6JUS2.js";import"./index-V2XaSKc-.js";const ge=({products:g,isCheck:r,setIsCheck:m})=>{const{title:T,serviceId:d,handleModalOpen:t,handleUpdate:S}=M(),{currency:j,showingTranslateValue:h,getNumberTwo:b}=_(),f=s=>{const{id:u,checked:y}=s.target;m([...r,u]),y||m(r.filter(w=>w!==u))};return e.jsxs(e.Fragment,{children:[(r==null?void 0:r.length)<1&&e.jsx(H,{id:d,title:T}),(r==null?void 0:r.length)<2&&e.jsx(E,{children:e.jsx(L,{currency:j,id:d})}),e.jsx(l.TableBody,{children:g==null?void 0:g.map((s,u)=>{var y,w,A,v,o;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{children:e.jsx(V,{type:"checkbox",name:(y=s==null?void 0:s.title)==null?void 0:y.en,id:s._id,handleClick:f,isChecked:r==null?void 0:r.includes(s._id)})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[s!=null&&s.image[0]?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:s==null?void 0:s.image[0],alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsx("div",{children:e.jsx("h2",{className:`text-sm font-medium ${(s==null?void 0:s.title.length)>30?"wrap-long-title":""}`,children:(w=h(s==null?void 0:s.title))==null?void 0:w.substring(0,28)})})]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:h((A=s==null?void 0:s.category)==null?void 0:A.name)})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[j,s!=null&&s.isCombination?b((v=s==null?void 0:s.variants[0])==null?void 0:v.originalPrice):b(s==null?void 0:s.originalPrice)]})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[j,s!=null&&s.isCombination?b((o=s==null?void 0:s.variants[0])==null?void 0:o.price):b(s==null?void 0:s.price)]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:s.stock})}),e.jsx(l.TableCell,{children:s.stock>0?e.jsx(l.Badge,{type:"success",children:B("Selling")}):e.jsx(l.Badge,{type:"danger",children:B("SoldOut")})}),e.jsx(l.TableCell,{children:e.jsx(Q,{to:`/product/${s._id}`,className:"flex justify-center text-gray-400 hover:text-blue-600",children:e.jsx(le,{id:"view",Icon:W,title:B("DetailsTbl"),bgColor:"#10B981"})})}),e.jsx(l.TableCell,{className:"text-center",children:e.jsx(re,{id:s._id,product:!0,status:s.status})}),e.jsx(l.TableCell,{children:e.jsx(ne,{id:s._id,product:s,isCheck:r,handleUpdate:S,handleModalOpen:t,title:h(s==null?void 0:s.title)})})]},u+1)})})]})},he={type:"object",properties:{title:{type:"object"},feature:{type:"object"},description:{type:"object"},slug:{type:"string"},category:{type:"object"},barcode:{type:"string"},price:{type:"number"},originalPrice:{type:"number"},discount:{type:"number"},topSeller:{type:"boolean"},stock:{type:"number"},image:{type:"array"},sku:{type:"string"},attributes:{type:"array"},variants:{type:"array"},productId:{type:"string"},categories:{type:"array"},tag:{type:"array"},isCombination:{type:"boolean"},meta_title:{type:"object"},meta_description:{type:"object"},brand:{type:"object"},specification:{type:"array"},status:{type:"string"}},required:["categories","category","prices","title"]},pe=g=>{const r=new oe({allErrors:!0}),{setLoading:m,setIsUpdate:T}=N.useContext(O),[d]=N.useState([]),[t,S]=N.useState([]),[j,h]=N.useState(""),[b,f]=N.useState(!1);return{data:g,filename:j,isDisabled:b,handleSelectFile:async o=>{var P;o.preventDefault();const a=new FileReader,n=(P=o.target)==null?void 0:P.files[0];n&&n.type==="application/json"?(h(n==null?void 0:n.name),f(!0),a.readAsText(n,"UTF-8"),a.onload=c=>{const C=JSON.parse(c.target.result);console.log("textjson",C);const p=C.map(i=>({categories:i.categories,image:i.image,barcode:i.barcode,tag:i.tag,variants:i.variants,status:i.status,title:i.title,productId:i.productId,slug:i.slug,sku:i.sku,category:i.category,stock:i.stock,description:i.description}));S(p)}):n&&n.type==="text/csv"?(h(n==null?void 0:n.name),f(!0),a.onload=async c=>{const C=c.target.result,i=(await de().fromString(C)).map(x=>({categories:JSON.parse(x.categories),image:JSON.parse(x.image),barcode:x.barcode,tag:JSON.parse(x.tag),variants:JSON.parse(x.variants),status:x.status,title:JSON.parse(x.title),productId:x.productId,slug:x.slug,sku:x.sku,category:JSON.parse(x.category),stock:JSON.parse(x.stock),description:JSON.parse(x.description)}));S(i)},a.readAsText(n)):(h(n==null?void 0:n.name),f(!0),D("Unsupported file type!"))},serviceData:g,handleOnDrop:o=>{for(let a=0;a<o.length;a++)d.push(o[a].data)},handleUploadProducts:()=>{d.length<1?D("Please upload/select csv file first!"):U.addAllProducts(d).then(o=>{I(o.message)}).catch(o=>D(o.message))},handleRemoveSelectFile:o=>{h(""),S([]),setTimeout(()=>f(!1),1e3)},handleUploadMultiple:o=>{if(console.log("selectedFile.length",t.length),t.length>0){m(!0);let a=t.map(c=>r.validate(he,c));const n=c=>c===!0,P=a.every(n);console.log("productDataValidation",a),P?U.addAllProducts(t).then(c=>{T(!0),m(!1),I(c.message)}).catch(c=>{m(!1),D(c.message)}):(m(!1),D("Please enter valid data!"))}else m(!1),D("Please select a valid json, csv & xls file first!")}}},je=({setCategory:g})=>{const{t:r}=R(),{data:m}=J(ae.getAllCategories),{showingTranslateValue:T}=_();return e.jsx(e.Fragment,{children:e.jsxs(l.Select,{onChange:d=>g(d.target.value),children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:r("Category")}),m==null?void 0:m.map(d=>e.jsx("option",{value:d._id,children:T(d==null?void 0:d.name)},d._id))]})})},as=()=>{const{title:g,allId:r,serviceId:m,handleDeleteMany:T,handleUpdateMany:d}=M(),{t}=R(),{toggleDrawer:S,lang:j,currentPage:h,handleChangePage:b,searchText:f,category:s,setCategory:u,searchRef:y,handleSubmitForAll:w,sortedField:A,setSortedField:v,limitData:o}=N.useContext(O),{data:a,loading:n,error:P}=J(()=>U.getAllProducts({page:h,limit:o,category:s,title:f,price:A})),[c,C]=N.useState(!1),[p,i]=N.useState([]),x=()=>{C(!c),i(a==null?void 0:a.products.map(k=>k._id)),c&&i([])},$=()=>{u(""),v(""),y.current.value=""},{serviceData:F,filename:q,isDisabled:Z,handleSelectFile:z,handleUploadMultiple:G,handleRemoveSelectFile:K}=pe(a==null?void 0:a.products);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:t("ProductsPage")}),e.jsx(H,{ids:r,setIsCheck:i,title:g}),e.jsx(ce,{ids:r,title:"Products"}),e.jsx(E,{children:e.jsx(L,{id:m})}),e.jsxs(me,{children:[e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:w,className:"py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex",children:[e.jsx("div",{className:"flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(se,{title:"Products",filename:q,isDisabled:Z,totalDoc:a==null?void 0:a.totalDoc,handleSelectFile:z,handleUploadMultiple:G,handleRemoveSelectFile:K})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{disabled:p.length<1,onClick:()=>d(p),className:"w-full rounded-md h-12 btn-gray text-gray-600",children:[e.jsx("span",{className:"mr-2",children:e.jsx(X,{})}),t("BulkAction")]})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{disabled:(p==null?void 0:p.length)<1,onClick:()=>T(p,a.products),className:"w-full rounded-md h-12 bg-red-300 disabled btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(Y,{})}),t("Delete")]})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Button,{onClick:S,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ee,{})}),t("AddProduct")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:w,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(l.Input,{ref:y,type:"search",name:"search",placeholder:"Search Product"}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(je,{setCategory:u,lang:j})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Select,{onChange:k=>v(k.target.value),children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:t("Price")}),e.jsx("option",{value:"low",children:t("LowtoHigh")}),e.jsx("option",{value:"high",children:t("HightoLow")}),e.jsx("option",{value:"published",children:t("Published")}),e.jsx("option",{value:"unPublished",children:t("Unpublished")}),e.jsx("option",{value:"status-selling",children:t("StatusSelling")}),e.jsx("option",{value:"status-out-of-stock",children:t("StatusStock")}),e.jsx("option",{value:"date-added-asc",children:t("DateAddedAsc")}),e.jsx("option",{value:"date-added-desc",children:t("DateAddedDesc")}),e.jsx("option",{value:"date-updated-asc",children:t("DateUpdatedAsc")}),e.jsx("option",{value:"date-updated-desc",children:t("DateUpdatedDesc")})]})}),e.jsxs("div",{className:"flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{type:"submit",className:"h-12 w-full bg-blue-700",children:"Filter"})}),e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{layout:"outline",onClick:$,type:"reset",className:"px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})})]}),n?e.jsx(xe,{row:12,col:7,width:160,height:20}):P?e.jsx("span",{className:"text-center mx-auto text-red-500",children:P}):(F==null?void 0:F.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(V,{type:"checkbox",name:"selectAll",id:"selectAll",isChecked:c,handleClick:x})}),e.jsx(l.TableCell,{children:t("ProductNameTbl")}),e.jsx(l.TableCell,{children:t("CategoryTbl")}),e.jsx(l.TableCell,{children:t("PriceTbl")}),e.jsx(l.TableCell,{children:"Sale Price"}),e.jsx(l.TableCell,{children:t("StockTbl")}),e.jsx(l.TableCell,{children:t("StatusTbl")}),e.jsx(l.TableCell,{className:"text-center",children:t("DetailsTbl")}),e.jsx(l.TableCell,{className:"text-center",children:t("PublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:t("ActionsTbl")})]})}),e.jsx(ge,{lang:j,isCheck:p,products:a==null?void 0:a.products,setIsCheck:i})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:a==null?void 0:a.totalDoc,resultsPerPage:o,onChange:b,label:"Product Page Navigation"})})]}):e.jsx(te,{title:"Product"})]})};export{as as default};
