function generateEmailBody(object){
    const html = `
    <body>
    <style>
        header h1{
            position: absolute;
            top: 30px;
            right: 500px;
            display: inline;
            color: white;
            font-style: italic;
        }

        header{
            background-color: #2e6435;
        }

        span{
            font-weight: bold;
        }

        .main-content{
            padding: 10px;
            background-color: #c4c4c4;
        }

        .contact-info{
            text-align: center;
        }
        
        .message{
            padding: 10px;
        }
    </style>
    <header>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/17080/sloth-clipart-xl.png" alt="sloth image" width="100px">
        <h1>DaySloth Mail</h1>
    </header>
    <div class="main-content">
        <div class="contact-info">
            <p><span>Name: </span>${object.firstName} ${object.lastName}</p>
            <p><span>Email: </span>${object.email}</p>
            <p><span>Contact Reason: </span>${object.contactReason}</p>
        </div>
        <div class="message">
            <h3>Message:</h3>
            <code>${object.message}</code>
        </div>
    </div>
</body>
    `

return html;

};

module.exports = generateEmailBody;