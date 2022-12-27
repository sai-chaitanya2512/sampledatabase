// const express = require("express")
// const { MongoDBNamespace } = require("mongodb")

// const router =  express.Router() 

// const {user} = require("./mongodb")
// const mongoDB = require("mongodb")

// router.post("/createUser",async(req,res)=>{
//     try {
//         const {userId} = req.body

//         const id = new mongoDB.ObjectId(userId)
       
//         const data = await user.insertOne({...req.body})
//         res.send(data)
//     } catch (error) {
//         res.send(error)
//     }
// })

// module.exports = router
const express = require("express")
const { MongoDBNamespace } = require("mongodb")

const router =  express.Router() 

const {user} = require("./mongodb")
const mongoDB = require("mongodb")

router.post("/createUser",async(req,res)=>{
    try {
        const {names} = req.body
       
        const data = await user.findOne({names:names})
        console.log(data);
        if(data){
            res.send("email alraedy registered")
        }
        else{
            const data1 = await user.insertOne({...req.body})

            res.send(data1)
        }
    } catch (error) {
        res.send(error)
    }
})


module.exports = router