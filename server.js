const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 4444;

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function(){
    console.log("Listening on PORT: "+ PORT);
});