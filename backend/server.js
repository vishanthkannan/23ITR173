//call express
const express = require('express');

//create instance
const app = express();

//enable middleware
app.use(express.json());

//in-memory
let vehicles = [];

//define route
app.post('/vehicles',(req,res) => {
    const {MechanicalHours} = req.body;

    const newVehicle = {
        "id": vehicles.length + 1,
        "Mechanical Hours": MechanicalHours
    }
   vehicles.push(newVehicle); 
    console.log(vehicles);     
    res.status(201).json(newVehicle); // 201 for the indication of created.
})

//define get method to call data
app.get('/vehicles',(req,res) => {
    res.send(vehicles); 
})

//define port
const port = 3000;
app.listen(port,() => {
    console.log("Server is listening on the port "+ port);
});