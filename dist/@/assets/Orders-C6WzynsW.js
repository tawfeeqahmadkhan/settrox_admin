import{f as E,j as e,d as n,r as _,L as X,S}from"./index-CMwVzeIB.js";import{d as H,m as ee,n as se,u as J,i as te,o as ne}from"./Layout-BjD68e0c.js";import{e as Q}from"./exportFromJSON-BvevaQwb.js";import{a as U}from"./toast-Bi8odYBa.js";import{u as Z}from"./useAsync-3D9_nwwI.js";import{u as le}from"./useFilter-CzeXV83K.js";import{O as Y}from"./OrderServices-N7mxR2h1.js";import{T as K,N as ie}from"./Tooltip-CK2c9wXD.js";import{P as ae}from"./PageTitle-CiYCa1gH.js";import{S as ce}from"./Status-CHFu-4Hp.js";import{l as re}from"./index-DeDvdzBK.js";import{S as xe}from"./SelectStatus-CmDkvPKY.js";import{T as me}from"./TableLoading-UbVPBLmP.js";import{s as de}from"./spinner-CkndCogW.js";import{A as he}from"./AnimatedContent-BUFKB-yB.js";import"./iconBase-E_75oB0f.js";import"./useDispatch-DX3rZxrl.js";import"./httpService-y4n1pDxN.js";/* empty css                      */import"./browser-G6HRTwGe.js";import"./index-DJ3uWcwx.js";import"./isToday-tsJAS3Ca.js";import"./ProductServices-BvNfP5wu.js";import"./CurrencyServices-DcYd_dUH.js";import"./LanguageServices-BvaG6nfs.js";import"./react-tooltip.min-DdxQKMRK.js";import"./index-V2XaSKc-.js";const pe=({data:s,printRef:o,globalSetting:l})=>{var c,j,y,b,f,N,d,F,P,k,A;const{t:a}=E(),i=(l==null?void 0:l.default_currency)||"$";return e.jsx("div",{ref:o,className:"p-4",children:Array.isArray(s)?s==null?void 0:s.map((t,r)=>{var u,v,x,M,D,I,g,C,z,T,L;return e.jsxs("div",{className:"mb-8",children:[(l==null?void 0:l.logo)&&e.jsx("img",{className:"flex mx-auto",size:"large",src:l==null?void 0:l.logo,alt:"",width:50}),e.jsxs("div",{className:"my-1",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("h1",{className:"font-bold text-xl",children:l==null?void 0:l.company_name})}),e.jsxs(n.ModalBody,{className:"flex flex-col justify-center text-center",children:[e.jsx("span",{className:"flex-row",children:l==null?void 0:l.address}),e.jsx("span",{className:"flex justify-center",children:l==null?void 0:l.contact}),l==null?void 0:l.web_site,e.jsx("br",{}),l==null?void 0:l.email]})]}),e.jsx(n.TableContainer,{className:"my-4 rounded-b-lg",children:e.jsxs(n.Table,{children:[e.jsx(n.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(n.TableCell,{className:"bg-white",children:e.jsx("span",{className:"text-xs capitalize text-gray-700",children:a("Item")})}),e.jsx(n.TableCell,{className:"text-xs bg-white capitalize text-center text-gray-700",children:a("QTY")}),e.jsx(n.TableCell,{className:"text-xs bg-white capitalize text-right text-gray-700",children:a("Amount")})]})}),e.jsx(n.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm",children:(u=t==null?void 0:t.cart)==null?void 0:u.map((w,R)=>{var O;return e.jsxs(n.TableRow,{className:"dark:border-gray-700 dark:text-gray-400 bill",children:[e.jsx(n.TableCell,{className:"py-1",children:e.jsxs("span",{className:"font-normal text-gray-600 bill",children:[" ",(O=w.title)==null?void 0:O.substring(0,15)]})}),e.jsx(n.TableCell,{className:"text-center py-1",children:e.jsxs("span",{className:"font-bold text-center bill",children:[" ",w.quantity," "]})}),e.jsx(n.TableCell,{className:"text-right py-1",children:e.jsxs("span",{className:"text-right font-bold text-gray-700 bill",children:[" ",i,(w.price*w.quantity).toFixed(2)]})})]},R)})})]})}),e.jsx(n.ModalBody,{children:e.jsxs("div",{className:"flex justify-between -mt-3 mr-1 mb-4",children:[e.jsxs("div",{className:"mt-2",children:[(t==null?void 0:t.paymentMethod)==="Combined"?e.jsxs("p",{className:"bill",children:[e.jsxs("span",{className:"mb-1 font-semibold bill font-serif text-xs text-gray-700 dark:text-gray-500 block",children:[a("Paymentmethod")," :"," ",e.jsx("span",{className:"text-gray-600 bill",children:t.paymentMethod})]}),((v=t==null?void 0:t.paymentDetails)==null?void 0:v.selectPaymentOption_Card)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(x=t==null?void 0:t.paymentDetails)==null?void 0:x.selectPaymentOption_Card,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",i,parseFloat((M=t==null?void 0:t.paymentDetails)==null?void 0:M.paymentAmount_Card).toFixed(2)]})]}),e.jsx("br",{}),((D=t==null?void 0:t.paymentDetails)==null?void 0:D.selectPaymentOption_Cash)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(I=t==null?void 0:t.paymentDetails)==null?void 0:I.selectPaymentOption_Cash,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[i,parseFloat((g=t==null?void 0:t.paymentDetails)==null?void 0:g.paymentAmount_Cash).toFixed(2)]})]}),e.jsx("br",{}),((C=t==null?void 0:t.paymentDetails)==null?void 0:C.selectPaymentOption_Credit)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(z=t==null?void 0:t.paymentDetails)==null?void 0:z.selectPaymentOption_Credit,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[i,parseFloat((T=t==null?void 0:t.paymentDetails)==null?void 0:T.paymentAmount_Credit).toFixed(2)]})]})]}):e.jsx("p",{className:"bill",children:e.jsxs("span",{className:"font-semibold bill font-serif text-xs text-gray-600 dark:text-gray-500 block",children:[a("Paymentmethod")," :"," ",e.jsx("span",{className:"text-gray-700 bill",children:t.paymentMethod})]})}),e.jsxs("div",{className:"text-xs bill",children:[(t==null?void 0:t.shippingOption)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-gray-600",children:[a("ShippingMethodLower")," :",e.jsx("span",{className:"font-semibold text-gray-900",children:t==null?void 0:t.shippingOption})]}),e.jsx("br",{})]}),e.jsxs("span",{className:"text-gray-600",children:[a("NoofItems")," :"," ",e.jsx("span",{className:"font-semibold text-gray-900",children:(L=t==null?void 0:t.cart)==null?void 0:L.length})," "]})," ",e.jsx("br",{}),e.jsxs("span",{className:"text-gray-600",children:[a("BillNo")," :"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",t==null?void 0:t.invoice]})," "]})," ",e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.vat_number)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-gray-600",children:[a("VATNumber"),":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",l==null?void 0:l.vat_number]})," "]}),e.jsx("br",{})]}),e.jsxs("span",{className:"text-gray-600",children:[a("Date")," :"," ",e.jsxs("span",{className:"font-semibold text-gray-700",children:[" ",H(new Date).format("MM/D/YYYY")]})," "]})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("h5",{className:"flex justify-between font-medium text-xs ",children:[e.jsxs("span",{children:[a("GrossTotal")," :"]})," ",e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(t==null?void 0:t.subTotal).toFixed(2)]})]}),(t==null?void 0:t.shippingCost)>0&&e.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[e.jsxs("span",{children:[" ",a("ShippingCostLower")," :"]})," ",e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(t==null?void 0:t.shippingCost).toFixed(2)]})]}),(t==null?void 0:t.discount)>0&&e.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[e.jsxs("span",{children:[" ",a("DiscountLower")," :"]})," ",e.jsxs("span",{className:"font-semibold",children:[i,parseFloat(t==null?void 0:t.discount).toFixed(2)]})]}),e.jsxs("h3",{className:"flex justify-between font-medium text-xs border-t border-black mt-2",children:[e.jsxs("span",{children:[" ",a("Total")," : "]}),e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(t==null?void 0:t.total).toFixed(2)]})]})]})]})}),e.jsx("h2",{className:"mb-2 text-center font-medium text-sm",children:a("ThankYouMsg")})]},r+1)}):e.jsxs(_.Fragment,{children:[(l==null?void 0:l.logo)&&e.jsx("img",{className:"flex mx-auto",size:"large",src:l==null?void 0:l.logo,alt:"",width:50}),e.jsxs("div",{className:"my-1",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("h1",{className:"font-bold text-xl",children:l==null?void 0:l.company_name})}),e.jsxs(n.ModalBody,{className:"flex flex-col justify-center text-center",children:[e.jsx("span",{className:"flex-row",children:l==null?void 0:l.address}),e.jsx("span",{className:"flex justify-center",children:l==null?void 0:l.contact}),l==null?void 0:l.web_site,e.jsx("br",{}),l==null?void 0:l.email]})]}),e.jsx(n.TableContainer,{className:"my-4 rounded-b-lg",children:e.jsxs(n.Table,{children:[e.jsx(n.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(n.TableCell,{className:"bg-white",children:e.jsx("span",{className:"text-xs capitalize text-gray-700",children:a("Item")})}),e.jsx(n.TableCell,{className:"text-xs bg-white capitalize text-center text-gray-700",children:a("QTY")}),e.jsx(n.TableCell,{className:"text-xs bg-white capitalize text-right text-gray-700",children:a("Amount")})]})}),e.jsx(n.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm",children:(c=s==null?void 0:s.cart)==null?void 0:c.map((t,r)=>{var u;return e.jsxs(n.TableRow,{className:"dark:border-gray-700 dark:text-gray-400 bill",children:[e.jsx(n.TableCell,{className:"py-1",children:e.jsxs("span",{className:"font-normal text-gray-600 bill",children:[" ",(u=t.title)==null?void 0:u.substring(0,15)]})}),e.jsx(n.TableCell,{className:"text-center py-1",children:e.jsxs("span",{className:"font-bold text-center bill",children:[" ",t.quantity," "]})}),e.jsx(n.TableCell,{className:"text-right py-1",children:e.jsxs("span",{className:"text-right font-bold text-gray-700 bill",children:[" ",i,(t.price*t.quantity).toFixed(2)]})})]},r)})})]})}),e.jsx(n.ModalBody,{children:e.jsxs("div",{className:"flex justify-between -mt-3 mr-1 mb-4",children:[e.jsxs("div",{className:"mt-2",children:[(s==null?void 0:s.paymentMethod)==="Combined"?e.jsxs("p",{className:"bill",children:[e.jsxs("span",{className:"mb-1 font-semibold bill font-serif text-xs text-gray-700 dark:text-gray-500 block",children:[a("Paymentmethod")," :"," ",e.jsx("span",{className:"text-gray-600 bill",children:s.paymentMethod})]}),((j=s==null?void 0:s.paymentDetails)==null?void 0:j.selectPaymentOption_Card)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(y=s==null?void 0:s.paymentDetails)==null?void 0:y.selectPaymentOption_Card,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",i,parseFloat((b=s==null?void 0:s.paymentDetails)==null?void 0:b.paymentAmount_Card).toFixed(2)]})]}),e.jsx("br",{}),((f=s==null?void 0:s.paymentDetails)==null?void 0:f.selectPaymentOption_Cash)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(N=s==null?void 0:s.paymentDetails)==null?void 0:N.selectPaymentOption_Cash,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[i,parseFloat((d=s==null?void 0:s.paymentDetails)==null?void 0:d.paymentAmount_Cash).toFixed(2)]})]}),e.jsx("br",{}),((F=s==null?void 0:s.paymentDetails)==null?void 0:F.selectPaymentOption_Credit)!==void 0&&e.jsxs("span",{className:"text-xs bill",children:[(P=s==null?void 0:s.paymentDetails)==null?void 0:P.selectPaymentOption_Credit,":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[i,parseFloat((k=s==null?void 0:s.paymentDetails)==null?void 0:k.paymentAmount_Credit).toFixed(2)]})]})]}):e.jsx("p",{className:"bill",children:e.jsxs("span",{className:"font-semibold bill font-serif text-xs text-gray-600 dark:text-gray-500 block",children:[a("Paymentmethod")," :"," ",e.jsx("span",{className:"text-gray-700 bill",children:s.paymentMethod})]})}),e.jsxs("div",{className:"text-xs bill",children:[(s==null?void 0:s.shippingOption)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-gray-600",children:[a("ShippingMethodLower")," :",e.jsx("span",{className:"font-semibold text-gray-900",children:s==null?void 0:s.shippingOption})]}),e.jsx("br",{})]}),e.jsxs("span",{className:"text-gray-600",children:[a("NoofItems")," :"," ",e.jsx("span",{className:"font-semibold text-gray-900",children:(A=s==null?void 0:s.cart)==null?void 0:A.length})," "]})," ",e.jsx("br",{}),e.jsxs("span",{className:"text-gray-600",children:[a("BillNo")," :"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",s==null?void 0:s.invoice]})," "]})," ",e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.vat_number)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-gray-600",children:[a("VATNumber"),":"," ",e.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",l==null?void 0:l.vat_number]})," "]}),e.jsx("br",{})]}),e.jsxs("span",{className:"text-gray-600",children:[a("Date")," :"," ",e.jsxs("span",{className:"font-semibold text-gray-700",children:[" ",H(new Date).format("MM/D/YYYY")]})," "]})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("h5",{className:"flex justify-between font-medium text-xs ",children:[e.jsxs("span",{children:[a("GrossTotal")," :"]})," ",e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(s==null?void 0:s.subTotal).toFixed(2)]})]}),(s==null?void 0:s.shippingCost)>0&&e.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[e.jsxs("span",{children:[" ",a("ShippingCostLower")," :"]})," ",e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(s==null?void 0:s.shippingCost).toFixed(2)]})]}),(s==null?void 0:s.discount)>0&&e.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[e.jsxs("span",{children:[" ",a("DiscountLower")," :"]})," ",e.jsxs("span",{className:"font-semibold",children:[i,parseFloat(s==null?void 0:s.discount).toFixed(2)]})]}),e.jsxs("h3",{className:"flex justify-between font-medium text-xs border-t border-black mt-2",children:[e.jsxs("span",{children:[" ",a("Total")," : "]}),e.jsxs("span",{className:"font-semibold ",children:[i,parseFloat(s==null?void 0:s.total).toFixed(2)]})]})]})]})}),e.jsx("h2",{className:"mb-2 text-center font-medium text-sm",children:a("ThankYouMsg")})]})})},oe=({orderId:s})=>{const o=_.useRef(),[l,a]=_.useState({}),{data:i}=Z(ee.getGlobalSetting),c=`
    @media print {
      @page {
        size: ${(i==null?void 0:i.receipt_size)==="A4"?"8.5in 14in":(i==null?void 0:i.receipt_size)==="3-1/8"?"9.8in 13.8in":(i==null?void 0:i.receipt_size)==="2-1/4"?"3in 8in":"3.5in 8.5in"};
        margin: 0;
        padding: 0;
        font-size: 10px !important;
      }
    
      @page: first {
        size: ${(i==null?void 0:i.receipt_size)==="A4"?"8.5in 14in":(i==null?void 0:i.receipt_size)==="3-1/8"?"9.8in 13.8in":(i==null?void 0:i.receipt_size)==="2-1/4"?"3in 8in":"3.5in 8.5in"};
        margin: 0;
        font-size: 10px !important;
      }
    }
`,j=re.useReactToPrint({content:()=>o.current,pageStyle:c,documentTitle:"Invoice"}),y=async b=>{var f,N;try{const d=await Y.getOrderById(b);a(d),j()}catch(d){U(d?(N=(f=d==null?void 0:d.response)==null?void 0:f.data)==null?void 0:N.message:d==null?void 0:d.message)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"none"},children:Object.keys(l).length>0&&e.jsx(pe,{data:l,printRef:o,globalSetting:i})}),e.jsx("button",{onClick:()=>y(s),type:"button",className:"ml-2 p-2 cursor-pointer text-gray-500 hover:text-blue-600 focus:outline-none",children:e.jsx(K,{id:"receipt",Icon:se,title:"Print Receipt",bgColor:"#f59e0b"})})]})},je=({orders:s})=>{const{t:o}=E(),{showDateTimeFormat:l,currency:a,getNumberTwo:i}=J();return console.log(s,"-------"),e.jsx(e.Fragment,{children:e.jsx(n.TableBody,{className:"dark:bg-gray-900",children:s==null?void 0:s.map((c,j)=>{var y;return e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:e.jsx("span",{className:"font-semibold uppercase text-xs",children:c==null?void 0:c._id})}),e.jsx(n.TableCell,{children:e.jsx("span",{className:"text-sm",children:c==null?void 0:c.createdAt})}),e.jsxs(n.TableCell,{className:"text-xs",children:[e.jsx("span",{className:"text-sm",children:(y=c==null?void 0:c.userId)==null?void 0:y.name})," "]}),e.jsx(n.TableCell,{children:e.jsx("span",{className:"text-sm font-semibold",children:c==null?void 0:c.method})}),e.jsx(n.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[a,i(c==null?void 0:c.totalPrice)]})}),e.jsx(n.TableCell,{className:"text-xs",children:e.jsx(ce,{status:c==null?void 0:c.status})}),e.jsx(n.TableCell,{className:"text-center",children:e.jsx(xe,{id:c._id,order:c})}),e.jsx(n.TableCell,{className:"text-right flex justify-end",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(oe,{orderId:c._id}),e.jsx("span",{className:"p-2 cursor-pointer text-gray-400 hover:text-blue-600",children:e.jsx(X,{to:{pathname:`/order/${c._id}`,state:{orderData:c}},children:e.jsx(K,{id:"view",Icon:te,title:o("ViewInvoice"),bgColor:"#059669"})})})]})})]},j+1)})})})},qe=()=>{var R,O,V,$;const{time:s,setTime:o,status:l,endDate:a,setStatus:i,setEndDate:c,startDate:j,currentPage:y,searchText:b,searchRef:f,method:N,setMethod:d,setStartDate:F,setSearchText:P,handleChangePage:k,handleSubmitForAll:A,resultsPerPage:t}=_.useContext(S),{t:r}=E(),[u,v]=_.useState(!1),{data:x,loading:M,error:D}=Z(()=>Y.getAllOrders({day:s,method:N,status:l,page:y,endDate:a,startDate:j,limit:t,customerName:b})),{currency:I,getNumber:g,getNumberTwo:C}=J(),{dataTable:z,serviceData:T}=le(x==null?void 0:x.orders),L=async()=>{var m,B,q;try{v(!0);const p=await Y.getAllOrders({page:1,day:s,method:N,status:l,endDate:a,download:!0,startDate:j,limit:x==null?void 0:x.totalDoc,customerName:b}),W=(m=p==null?void 0:p.orders)==null?void 0:m.map(h=>{var G;return{_id:h._id,invoice:h.invoice,subTotal:C(h.subTotal),shippingCost:C(h.shippingCost),discount:C(h==null?void 0:h.discount),total:C(h.total),paymentMethod:h.paymentMethod,status:h.status,user_info:(G=h==null?void 0:h.user_info)==null?void 0:G.name,createdAt:h.createdAt,updatedAt:h.updatedAt}});Q({data:W,fileName:"orders",exportType:Q.types.csv}),v(!1)}catch(p){v(!1),U(((q=(B=p==null?void 0:p.response)==null?void 0:B.data)==null?void 0:q.message)||(p==null?void 0:p.message))}},w=()=>{o(""),d(""),i(""),c(""),F(""),P(""),f.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:r("Orders")}),e.jsx(he,{children:e.jsx(n.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(n.CardBody,{children:e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{className:"grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2",children:[e.jsx("div",{children:e.jsx(n.Input,{ref:f,type:"search",name:"search",placeholder:"Search by Customer Name"})}),e.jsx("div",{children:e.jsxs(n.Select,{onChange:m=>i(m.target.value),children:[e.jsx("option",{value:"Status",defaultValue:!0,hidden:!0,children:r("Status")}),e.jsx("option",{value:"Delivered",children:r("PageOrderDelivered")}),e.jsx("option",{value:"Pending",children:r("PageOrderPending")}),e.jsx("option",{value:"Processing",children:r("PageOrderProcessing")}),e.jsx("option",{value:"Cancel",children:r("OrderCancel")})]})}),e.jsx("div",{children:e.jsxs(n.Select,{onChange:m=>o(m.target.value),children:[e.jsx("option",{value:"Order limits",defaultValue:!0,hidden:!0,children:r("Orderlimits")}),e.jsx("option",{value:"5",children:r("DaysOrders5")}),e.jsx("option",{value:"7",children:r("DaysOrders7")}),e.jsx("option",{value:"15",children:r("DaysOrders15")}),e.jsx("option",{value:"30",children:r("DaysOrders30")})]})}),e.jsx("div",{children:e.jsxs(n.Select,{onChange:m=>d(m.target.value),children:[e.jsx("option",{value:"Method",defaultValue:!0,hidden:!0,children:r("Method")}),e.jsx("option",{value:"Cash",children:r("Cash")}),e.jsx("option",{value:"Card",children:r("Card")}),e.jsx("option",{value:"Credit",children:r("Credit")})]})}),e.jsx("div",{children:u?e.jsxs(n.Button,{disabled:!0,type:"button",className:"h-12 w-full",children:[e.jsx("img",{src:de,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsxs("button",{onClick:L,disabled:((R=x==null?void 0:x.orders)==null?void 0:R.length)<=0||u,type:"button",className:`${(((O=x==null?void 0:x.orders)==null?void 0:O.length)<=0||u)&&"opacity-50 cursor-not-allowed bg-blue-600"} flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-blue-500 border border-transparent active:bg-blue-600 hover:bg-blue-600 `,children:["Download All Orders",e.jsx("span",{className:"ml-2 text-base",children:e.jsx(ne,{})})]})})]}),e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(n.Label,{children:"Start Date"}),e.jsx(n.Input,{type:"date",name:"startDate",onChange:m=>F(m.target.value)})]}),e.jsxs("div",{children:[e.jsx(n.Label,{children:"End Date"}),e.jsx(n.Input,{type:"date",name:"startDate",onChange:m=>c(m.target.value)})]}),e.jsxs("div",{className:"mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsxs("div",{className:"w-full mx-1",children:[e.jsx(n.Label,{style:{visibility:"hidden"},children:"Filter"}),e.jsx(n.Button,{type:"submit",className:"h-12 w-full bg-blue-700",children:"Filter"})]}),e.jsxs("div",{className:"w-full",children:[e.jsx(n.Label,{style:{visibility:"hidden"},children:"Reset"}),e.jsx(n.Button,{layout:"outline",onClick:w,type:"reset",className:"px-4 md:py-1 py-3 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})]})]})]})]})})})}),((V=x==null?void 0:x.methodTotals)==null?void 0:V.length)>0&&e.jsx(n.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(n.CardBody,{children:e.jsx("div",{className:"flex gap-1",children:($=x==null?void 0:x.methodTotals)==null?void 0:$.map((m,B)=>e.jsx("div",{className:"dark:text-gray-300",children:(m==null?void 0:m.method)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"font-medium",children:[" ",m.method]})," :"," ",e.jsxs("span",{className:"font-semibold mr-2",children:[I,g(m.total)]})]})},B+1))})})}),M?e.jsx(me,{row:12,col:7,width:160,height:20}):D?e.jsx("span",{className:"text-center mx-auto text-red-500",children:D}):(T==null?void 0:T.length)!==0?e.jsxs(n.TableContainer,{className:"mb-8 dark:bg-gray-900",children:[e.jsxs(n.Table,{children:[e.jsx(n.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(n.TableCell,{children:r("InvoiceNo")}),e.jsx(n.TableCell,{children:r("TimeTbl")}),e.jsx(n.TableCell,{children:r("CustomerName")}),e.jsx(n.TableCell,{children:r("MethodTbl")}),e.jsx(n.TableCell,{children:r("AmountTbl")}),e.jsx(n.TableCell,{children:r("OrderStatusTbl")}),e.jsx(n.TableCell,{children:r("ActionTbl")}),e.jsx(n.TableCell,{className:"text-right",children:r("InvoiceTbl")})]})}),e.jsx(je,{orders:z})]}),e.jsx(n.TableFooter,{children:e.jsx(n.Pagination,{totalResults:x==null?void 0:x.totalDoc,resultsPerPage:t,onChange:k,label:"Table navigation"})})]}):e.jsx(ie,{title:"Sorry, There are no orders right now."})]})};export{qe as default};
