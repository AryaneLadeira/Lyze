(async () => {
    const db = require("./db");
    console.log("Começou!");

    // console.log('Insert into clientes');
    // const result = await db.insertCustomer({nome: "Zé"});
    // console.log(result);

    // console.log('update clientes');
    // const result2 = await db.updateCustomer(1, {nome: "Zé2"});
    // console.log(result2);

    console.log('delete cliente');
    const result3 = await db.deleteCustomer(1);
    console.log(result3);

    console.log('Select * from clientes');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();

// async function teste() {
//     fetch('./db').then((res)=>{
//         console.log(res);
//     })
// }

// teste();