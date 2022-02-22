const express = require('express');
const app = express()
const {dbConnection} = require('./db');

const startServer = async () => {
    await dbConnection.sync();
    app.listen(8080, () => {
        console.log('server is running')
    })
}
startServer();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const restaurantsRouter = require("./restaurantsRoute");
app.use("/restaurants", restaurantsRouter)

app.get("/", (req, res) => {
    res.send("hello")
})