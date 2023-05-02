const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
app.listen(9992, function check(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running');
    }
});
mongoose.connect('mongodb://localhost/27017/travel', {userNewUrlParams: true , useUnifiedTopology: true});
function checkConnection(error){
    if(error){
        console.log('Connection error');

    }else{
        console.log('Connection success');
    }
};