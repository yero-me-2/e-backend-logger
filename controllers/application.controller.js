'use strinct';
const AppicationModel = require("../models/Application");
const express = require("express");
const mongoose = require("mongoose");
const Authorization = require("../models/Authorization");
const randomstring = require("randomstring");

class ApplicationController {

    async loginapp(req, res, next) {
        let name = req.body.name;
        let find_app = await AppicationModel.findOne({name: name});
        
        if (!find_app) {
            res.status(401).json({message: "Invalid Application Name", body: []});
            return false;
        }
        let find_auth = await Authorization.findOne({application_id: find_app.id});

        res.status(401).json({message: "Successful login", body: [], token: find_auth.token});
    }

	async all(req, res, next) {
		let query = await AppicationModel.find();

		res.json({ message: 'succes', body: query });
	}

	async create(req, res, next) {

		let query = new AppicationModel({
			name: req.body.name
		});
		await query.save();

        let token = randomstring.generate(30);
        let query_authorization = new Authorization({
            application_id: query.id,
            token: token
        });
        query_authorization.save();


		res.json({ message: 'succes', body: query });
	}

	async info(req, res, next) {
		let query = await AppicationModel.findById(req.params.id);

		res.json({ message: 'succes', body: query });
	}

	async update(req, res, next) {
		let query = await AppicationModel.findOneAndUpdate(
			{
				_id: req.params.id
			},
			{
				$set: {
					name: req.body.name
				}

			},
			{
				new: true
			}

		);

		res.json({ message: 'succes', body: query });
	}

	async delete(req, res, next) {
		let query = await AppicationModel.findByIdAndRemove(req.params.id);
		res.json({ message: 'succes', body: query });
	}
}

module.exports = new ApplicationController();
