const nodemailer = require("nodemailer");
const { mainModule } = require("process");
const emailHTMLGenerator = require("../template/emailGenerator");

function apiRouter(app) {
    app.post("/api/email", function (req, res) {
        const emailObj = req.body;
        console.log(process.env.SENDGRID_API_KEY);

        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: 'arampenthal@outlook.com',
            from: 'app188086466@heroku.com',
            subject: '[Daysloth Webpage Response]',
            html: emailHTMLGenerator(emailObj),
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    })
};

module.exports = apiRouter;