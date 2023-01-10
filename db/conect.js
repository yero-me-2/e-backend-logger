var mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1/db_tendency', 
{
    useNewUrlParser: true
},
function (err, res) {
    if (err) {
        console.log("ERROR connecting BD" + err);
    } else {
        console.log("Succeeded connected to DB");
    }
}

);
