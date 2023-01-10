const Joi = require("joi");

const schema = Joi.object({
    application_id: Joi.string().required(),
    type: Joi.string().required(),
    priority: Joi.string().required(),
    path: Joi.string().required(),
    message: Joi.string().required(),
    request: Joi.string().required(),
    response: Joi.string().required()
});

module.exports = schema;