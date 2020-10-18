const nodemailer = require("nodemailer");
const { mainModule } = require("process");

function apiRouter(app){
    app.post("/api/email", function(req, res){
        const emailObj = req.body;


        async function sendMail(){
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth:{
                    user: "daysloth.sendmail@gmail.com",
                    pass: "Batmanisc00l",
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
}