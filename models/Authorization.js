const mongoose = require("mongoose");

const authorizationSchema = new mongoose.Schema(
    {
        application_id: {type: mongoose.Schema.Types.ObjectId },
        token: {type: String}
    },
    {
        timestamps: true
    }
);

const Authorization = mongoose.model("Authorization", authorizationSchema);
module.exports = Authorization;