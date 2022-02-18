
// async function teste() {
//     fetch('http://localhost:8080/api/customer').then((res)=>{
//         return res.json()
//     }).then((body)=> {
//         console.log(body);
//     })
// }

// teste();


import verifyIfAlreadyLogged from './modules/login.js';

verifyIfAlreadyLogged();