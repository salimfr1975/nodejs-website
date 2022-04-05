const express = require("express");

const app = express();
const port = 3000;
app.set("view engine","hbs");
app.set("views","./view");
app.use(express.static(__dirname+'public'));

app.get("/",(req, res) => 
{
    res.render("index");
});



app.get("/about",(req, res) => 
{
    res.render("about");
});

















app.get("/product",(req, res) => 
{
    res.render("product");
});
app.get("/contact",(req, res) => 
{
    res.render("contact");
});
app.get("/signup",(req, res) => 
{
    res.render("signup");
});
app.get("/register",(req, res) => 
{
    res.render("register");
});
app.get("/admin",(req, res) => 
{
    res.render("admin");
});

app.listen(port, (err) => {
    if(err)
        throw err
    else
        console.log("Server..........%d", port);
})
