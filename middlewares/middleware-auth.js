const authModel = require("../models/Authorization");

const middleware = async function (req, res, next) {
    let query = await authModel.findOne({token: req.headers.token});
    if (query) {
        console.log("Success Loged");
        next();
    } else {
        console.log("Invalid Token");
        // res.status(401).send("Invalid Token");
        res.status(401).json({message: "Invalid Token"});
    }

}
module.exports = middleware;