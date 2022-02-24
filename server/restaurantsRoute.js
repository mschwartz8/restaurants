const express = require('express');
const router = express.Router();
const {Restaurant} = require('./db')

router.get("/", async (req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll()
        res.send(restaurants)
    } catch (e){
        next(e)
    }
})

// router.post("/add", (req, res) => {
//     // going to add our post route for our form
// })

module.exports = router; 