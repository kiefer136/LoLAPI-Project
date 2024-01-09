require('dotenv').config();
const express = require("express");
const request = require('request');
const router = express.Router();

const apiKey = process.env.LOL_API_KEY;

console.log(apiKey);

router.get("/", (req, res) => {
    const summonerName = req.query.summonerName;
    const tagLine = req.query.tagLine;;
    const URL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagLine}?api_key=${apiKey}`;

    request.get(URL, (error, response, body) => {
        console.log(error && response.statusCode)
        if (!error && response.statusCode === 200) {
            res.json({ message: body });
        } else {
            console.log(response.statusCode);
            res.json({ message: error });
        }
    });
});

router.get("/match", (req, res) => {

});

module.exports = router;