const express = require("express")
const {json,urlencoded} = require("express")
const app = express()

app.use(json(),urlencoded({extended:false}))

const userRoute = require("./userRoute")


app.use("/user",userRoute)

app.listen(2000,()=>console.log("server running at port 2000"))