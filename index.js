require("dotenv").config();
const express = require("express");
const { connectionToDb } = require("./config/dbConfig");
const cors = require("cors");
const { userRouter } = require("./routes/user.route");
const { vehicleRouter } = require("./routes/user.vehicle");
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.use("/users",userRouter);
app.use("/vehicles",vehicleRouter);

app.listen(port, async()=> {
    await connectionToDb();
    console.log(`Server is running at port number ${port}`);
})


