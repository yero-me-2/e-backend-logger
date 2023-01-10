module.exports = function (schema) {
    return async function (req, res, next) {

        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            res.json({ message: error });
        }
    };
};