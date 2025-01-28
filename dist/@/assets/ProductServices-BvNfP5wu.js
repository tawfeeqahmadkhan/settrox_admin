import{r as e}from"./httpService-y4n1pDxN.js";const p={getAllAttributes:async({type:t,option:r,option1:u})=>e.get("products/attribute/get-all"),getShowingAttributes:async t=>e.get("/products/attribute/show",t),addAttribute:async t=>e.post("/products/attribute/add",t),addChildAttribute:async(t,r)=>e.put(`/products/attribute/add/child/${t}`,r),addAllAttributes:async t=>e.post("/products/attribute/add/all",t),getAttributeById:async t=>e.get(`/products/attribute/${t}`),getChildAttributeById:async({id:t,ids:r})=>e.get(`/products/attribute/child/${t}/${r}`),updateAttributes:async(t,r)=>e.put(`/products/attribute/${t}`,r),updateChildAttributes:async({id:t,ids:r},u)=>e.put(`/products/attribute/update/child/${r}/${t}`,u),updateStatus:async(t,r)=>e.put(`/products/attribute/status/${t}`,r),updateChildStatus:async(t,r)=>e.put(`/products/attribute/status/child/${t}`,r),deleteAttribute:async(t,r)=>e.delete(`/products/attribute/${t}`,r),deleteChildAttribute:async({id:t,ids:r},u)=>e.put(`/products/attribute/delete/child/${r}/${t}`,u),updateManyAttribute:async t=>e.patch("/products/attribute/update/many",t),updateManyChildAttribute:async t=>e.patch("/products/attribute/update/child/many",t),deleteManyAttribute:async t=>e.patch("/products/attribute/delete/many",t),deleteManyChildAttribute:async t=>e.patch("/products/attribute/delete/child/many",t)},y={getAllCategory:async()=>e.get("/category"),getAllCategories:async()=>e.get("/category/all"),getCategoryById:async t=>e.get(`/category/${t}`),addCategory:async t=>e.post("/category/add",t),addAllCategory:async t=>e.post("/category/add/all",t),updateCategory:async(t,r)=>e.put(`/category/${t}`,r),updateStatus:async(t,r)=>e.put(`/category/status/${t}`,r),deleteCategory:async(t,r)=>e.delete(`/category/${t}`,r),updateManyCategory:async t=>e.patch("/category/update/many",t),deleteManyCategory:async t=>e.patch("/category/delete/many",t)},l={addCoupon:async t=>e.post("/coupon/add",t),addAllCoupon:async t=>e.post("/coupon/add/all",t),getAllCoupons:async()=>e.get("/coupon"),getCouponById:async t=>e.get(`/coupon/${t}`),updateCoupon:async(t,r)=>e.put(`/coupon/${t}`,r),updateManyCoupons:async t=>e.patch("/coupon/update/many",t),updateStatus:async(t,r)=>e.put(`/coupon/status/${t}`,r),deleteCoupon:async t=>e.delete(`/coupon/${t}`),deleteManyCoupons:async t=>e.patch("/coupon/delete/many",t)},i={getAllCustomers:async({searchText:t=""})=>e.get(`/customer?searchText=${t}`),addAllCustomers:async t=>e.post("/customer/add/all",t),createCustomer:async t=>e.post("/customer/create",t),filterCustomer:async t=>e.post(`/customer/filter/${t}`),getCustomerById:async t=>e.get(`/customer/${t}`),updateCustomer:async(t,r)=>e.put(`/customer/${t}`,r),deleteCustomer:async t=>e.delete(`/customer/${t}`)},g={getAllProducts:async({page:t,limit:r,category:u,title:a,price:n})=>{const s=u!==null?u:"",c=a!==null?a:"",d=n!==null?n:"";return e.get(`/products?page=${t}&limit=${r}&category=${s}&title=${c}&price=${d}`)},getProductById:async t=>e.post(`/products/${t}`),addProduct:async t=>e.post("/products/add",t),addAllProducts:async t=>e.post("/products/all",t),updateProduct:async(t,r)=>e.patch(`/products/${t}`,r),updateManyProducts:async t=>e.patch("products/update/many",t),addVariantProduct:async({id:t,data:r})=>e.put(`/products/new/variant/${t}`,r),updateVariantProduct:async({productId:t,data:r})=>e.put(`/products/update/variant/${t}`,r),deleteVariantProduct:async({productId:t,variantId:r})=>e.delete(`/products/delete/variant/${t}/${r}`),updateStatus:async(t,r)=>e.put(`/products/status/${t}`,r),deleteProduct:async t=>e.delete(`/products/${t}`),deleteManyProducts:async t=>e.patch("/products/delete/many",t)};export{p as A,y as C,g as P,i as a,l as b};
