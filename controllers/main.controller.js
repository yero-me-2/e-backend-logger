'use strinct';
const LogModel = require("../models/Log");
const express = require("express");
const mongoose = require("mongoose");

class MainController {

	async all(req, res, next) {
		let log = await LogModel.find();

		res.json({ message: 'succes', body: log });
	}

	create(req, res, next) {

		let log = new LogModel({
			application_id: mongoose.Types.ObjectId(req.body.application_id),
			type: req.body.type,
			priority: req.body.priority,
			path: req.body.path,
			message: req.body.message,
			request: req.body.request,
			response: req.body.response
		});
		log.save();

		res.json({ message: 'succes', body: log });
	}

	async info(req, res, next) {
		let log = await LogModel.findById(req.params.id);

		res.json({ message: 'succes', body: log });
	}

	async update(req, res, next) {
		let log = await LogModel.findOneAndUpdate(
			{
				_id: req.params.id
			},
			{
				$set: {
					application_id: mongoose.Types.ObjectId(req.body.application_id),
					type: req.body.type,
					priority: req.body.priority,
					path: req.body.path,
					message: req.body.message,
					request: req.body.request,
					response: req.body.response
				}

			},
			{
				new: true
			}

		);

		res.json({ message: 'succes', body: log });
	}

	async delete(req, res, next) {
		let log = await LogModel.findByIdAndRemove(req.params.id);
		res.json({ message: 'succes', body: log });
	}
}

module.exports = new MainController();
