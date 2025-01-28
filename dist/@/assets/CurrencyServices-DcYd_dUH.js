import{r}from"./httpService-y4n1pDxN.js";const t={getAllCurrency:async()=>r.get("/currency"),getShowingCurrency:async()=>r.get("/currency/show"),getCurrencyById:async e=>r.get(`/currency/${e}`),addCurrency:async e=>r.post("/currency/add",e),addAllCurrency:async e=>r.post("/currency/add/all",e),updateCurrency:async(e,n)=>r.put(`/currency/${e}`,n),updateManyCurrencies:async e=>r.patch("currency/update/many",e),updateEnabledStatus:async(e,n)=>r.put(`/currency/status/enabled/${e}`,n),updateLiveExchangeRateStatus:async(e,n)=>r.put(`/currency/status/live-exchange-rates/${e}`,n),deleteCurrency:async(e,n)=>r.delete(`/currency/${e}`,n),deleteManyCurrency:async e=>r.patch("/currency/delete/many",e)};export{t as C};
