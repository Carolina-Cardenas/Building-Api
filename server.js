import express from "express"

const app= express();

const PORT= 3000;

app.get ("/", (req, res)=> {
    res.send("Welcome to our API!");
});
 
app.get ("/users",(req, res)=>{
    const users = [
        {id:1, name:"Pikachu"},
        {id:2, name:"Bulbasor"},

    ];
    res.json(users);
});

app.post("/users",(req, res)=>{
    const newUsers = req.body;
    console.log(newUsers);
    res.json({
       messege: "User added successfully",use:neWUse  });
});

app.listen (PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})