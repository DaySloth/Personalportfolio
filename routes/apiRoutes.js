const nodemailer = require("nodemailer");
const { mainModule } = require("process");
const emailHTMLGenerator = require("../template/emailGenerator");

function apiRouter(app){
    app.post("/api/email", function(req, res){
        const emailObj = req.body;


        async function sendMail(){
            let transporter = nodemailer.createTransport({
                host: "smtp.sendgrid.net",
                port: 587,
                secure: false,
                auth:{
                    user: "apikey",
                    pass: "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",
                }
            });

            let info = await transporter.sendMail({
                from: "Daysloth Mailer",
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