const express = require("express");
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        name: {type: String}
    
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;