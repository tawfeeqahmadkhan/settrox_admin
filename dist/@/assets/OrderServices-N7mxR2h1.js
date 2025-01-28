import{r as t}from"./httpService-y4n1pDxN.js";const O={getAllOrders:async({body:e,headers:r,customerName:s,status:a,page:l=1,limit:u=8,day:n,method:d,startDate:o,endDate:c})=>{const g=s!==null?s:"",$=a!==null?a:"",h=n!==null?n:"",y=d!==null?d:"",i=o!==null?o:"",m=c!==null?c:"";return t.get(`/orders?customerName=${g}&status=${$}&day=${h}&page=${l}&limit=${u}&startDate=${i}&endDate=${m}&method=${y}`,e,r)},getAllOrdersTwo:async({invoice:e,body:r,headers:s})=>{const a=e!==null?e:"";return t.get(`/orders/all?invoice=${a}`,r,s)},getRecentOrders:async({page:e=1,limit:r=8,startDate:s="1:00",endDate:a="23:59"})=>t.get(`/orders/recent?page=${e}&limit=${r}&startDate=${s}&endDate=${a}`),getOrderCustomer:async(e,r)=>t.get(`/orders/customer/${e}`,r),getOrderById:async(e,r)=>t.get(`/orders/${e}`,r),updateOrder:async(e,r,s)=>t.put(`/orders/${e}`,r,s),deleteOrder:async e=>t.delete(`/orders/${e}`),getDashboardOrdersData:async({page:e=1,limit:r=8,endDate:s="23:59"})=>t.get(`/orders/dashboard?page=${e}&limit=${r}&endDate=${s}`),getDashboardAmount:async()=>t.get("/orders/dashboard-amount"),getDashboardCount:async()=>t.get("/orders/dashboard-count"),getDashboardRecentOrder:async({page:e=1,limit:r=8})=>t.get(`/orders/dashboard-recent-order?page=${e}&limit=${r}`),getBestSellerProductChart:async()=>t.get("/orders/best-seller/chart")};export{O};
