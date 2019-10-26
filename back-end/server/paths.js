var server = require('express');
var paths = server.Router();

var db = require('../database/database');


paths.post("/login", (req, res) => {
    let emailAndPassword = req.body;
    // console.log(req.body);
    db.login((user , userID) => {let allData = {transactionData:user,userID};
     res.send(allData) }, emailAndPassword);
    // console.log("Login")
})


paths.post("/register", (req, res) => {

    db.register((response) => { res.send(response) }, req.body);

})

paths.put("/editUser/:id", (req, res) => {

    db.updateUser((response) => { res.send(response) }, req.body, req.params.id);

})

paths.post("/addTransaction/:userId", (req, res) => {
    // Add Code Here To Edit Database
    db.addTransaction((response) => { res.send(response) }, req.body, req.params.userId)

})

paths.get('/dashboard/:id', (req, res) => {
    db.getTransactions((response) => { res.send(response) }, req.params.id)

})

paths.put('/changepassword/:id', (req, res) => {
    db.editPassword((response) => { res.send(response) },req.body, req.params.id)

})



paths.get('/getTransactionDetaile/:tranKey', (req, res) => {
    // Add Code Here To Get From Database


    res.send("Get Transaction Detail " + req.params.tranKey);
})



paths.delete("/deleteTransaction/:tranKey", (req, res) => {
    // Add Code Here To Delete From Database

    res.send("Delete Transaction Page" + req.params.tranKey);


})

paths.put("/initialConfirmation/:transactionID", (req, res) => {
    // Add Code Here To Edit Database

    res.send("Initial Confimation Page" + req.params.transactionID);
})

paths.put("/finalConfirmation/:transactionID", (req, res) => {
    // Add Code Here To Edit Database

    res.send("Final Confimation Page" + req.params.transactionID);
})


module.exports = paths;