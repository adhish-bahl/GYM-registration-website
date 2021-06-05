const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 80;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/register', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug');
})

app.post("/", (req, res) => {
    cuname = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    locality = req.body.locality;
    email = req.body.email;
    number = req.body.number;

    let finalOutput = ` Name: ${cuname} \n Age: ${age}\n Gender: ${gender}\n Locality: ${locality}\n E-mail: ${email}\n Mobile Number: ${number}`;
    fs.writeFileSync("output.txt", finalOutput);
    res.status(200).render("index.pug");
});

app.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
});