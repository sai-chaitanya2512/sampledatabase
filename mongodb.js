const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb+srv://saichaitanya:saibunny@cluster0.ekwphl9.mongodb.net/test",console.log("db connected"))


const database = client.db("testServer")


exports.user = database.collection("users")
