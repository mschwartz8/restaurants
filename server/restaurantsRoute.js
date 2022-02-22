const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('welcome to this page')
})

// router.post("/add", (req, res) => {
//     // going to add our post route for our form
// })

module.exports = router; 