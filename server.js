const express = require("express");
const app = express();
const PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//data json
//-----------------------------------------
const homies = [{
    routeName: "yoda",
    name: "yoda",
    age: 500
},
{
    routeName: "denzale",
    name: "denzale",
    age: 23
},
{
    routeName: "Hikmat",
    name: "hikmat",
    age: 24
}
]





//Routes
//--------------------------------------
app.get("/", function (req, res) {
    res.send("My Home Page!")
});

app.get("/api/homies", function (req, res) {
    res.json(homies)
});

let myShirts = [
    "Red",
    "Blue",
    "Yellow"
]

arraySwap = myShirts.slice(2)



//console.log(arraySwap)

function whatToWear() {
    let color = "I am going to wear"(arraySwap) 
    
console.log (color)
}

if(whatToWear = arraySwap) {
console.log ("Thats a good color!")

} else {
    console.log("I dont like that color")
}
//listener 
//--------------------------------------
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})