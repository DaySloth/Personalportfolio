const emailHTMLGenerator = require("../template/emailGenerator");
const sendmail = require('sendmail')();

function apiRouter(app) {
    app.post("/api/email", function (req, res) {
        const emailObj = req.body;

        sendmail({
            from: 'arampenthal@outlook.com',
            to: 'allisterrampenthal@gmail.com',
            subject: 'test sendmail',
            html: emailHTMLGenerator(emailObj),
        }, function (err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    })
};

module.exports = apiRouter;