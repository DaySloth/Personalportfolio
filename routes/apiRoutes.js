const nodemailer = require("nodemailer");
const { mainModule } = require("process");
const emailHTMLGenerator = require("../template/emailGenerator");

function apiRouter(app){
    app.post("/api/email", function(req, res){
        const emailObj = req.body;


        async function sendMail(){
            let transporter = nodemailer.createTransport({
                host: "smtp-relay.sendinblue.com",
                port: 587,
                secure: false,
                auth:{
                    user: "daysloth.mailsend@gmail.com",
                    pass: "xsmtpsib-cf25c8fad4eadc2c5d8a2293ba78b44c4eede1ae6733a02e89ecbd3e0bf4feeb-TbQ1cW0OjPBdVY8k",
                }
            });

            let info = await transporter.sendMail({
                from: "Daysloth Mailer <daysloth.sendmail@gmail.com>",
                to: "allisterrampenthal@gmail.com",
                subject: `[Daysloth Webpage response]`,
                html: emailHTMLGenerator(emailObj)
            });

            console.log("Email Sent");
        }

        sendMail().catch(console.error);
    })
};

module.exports = apiRouter;