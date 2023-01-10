const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
    {
        application_id: {type: mongoose.Schema.Types.ObjectId},
        type: {type: String},
        priority: {type: String},
        path: {type: String},
        message: {type: String},
        request: {type: mongoose.SchemaTypes.Mixed},
        response: {type: mongoose.SchemaTypes.Mixed}

    },
    {
        timestamps: true
    }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;