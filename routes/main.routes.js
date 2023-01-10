'use strict';

const router = require('express').Router();
const prefix = '/logs';
const express = require("express");
const app = express();

const controller = require('../controllers/main.controller');
const application_controller = require('../controllers/application.controller');
//
const validator_schema = require("../validator-schema/log-schema");
const application_schema = require("../validator-schema/application_schema");
const middleware_validate = require("../middlewares/middleware_validate");
const middleware_auth = require("../middlewares/middleware-auth");

// URL DOCUMENTATION: https://documenter.getpostman.com/view/19215424/2s8Z76wUic

// login app;
router.post(`${prefix}/loginapp/`, application_controller.loginapp);


// Log
router.get(`${prefix}/log/`, middleware_auth, controller.all);
router.post(`${prefix}/log/`, middleware_auth, middleware_validate(validator_schema), controller.create);
router.get(`${prefix}/log/:id`, middleware_auth, controller.info);
router.put(`${prefix}/log/:id`, middleware_auth, middleware_validate(validator_schema), controller.update);
router.delete(`${prefix}/log/:id`, middleware_auth, controller.delete);

// Application
router.get(`${prefix}/applications/`, middleware_auth, application_controller.all);
router.post(`${prefix}/applications/`, middleware_validate(application_schema), application_controller.create);
router.get(`${prefix}/applications/:id`, middleware_auth, application_controller.info);
router.put(`${prefix}/applications/:id`, middleware_auth, middleware_validate(application_schema), application_controller.update);
router.delete(`${prefix}/applications/:id`, middleware_auth, application_controller.delete);


module.exports = router;