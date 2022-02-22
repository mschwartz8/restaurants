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
app.use(express.static(__dirname + "/public"));

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const restaurantsRouter = require("./restaurantsRoute");
app.use("/restaurants", restaurantsRouter)

app.get("/", (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
            <html>
                <head>
                    <title>Restaurant App</title>
                </head>
                <body>
                    <div id="app"></div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `
    )
})