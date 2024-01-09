const express = require("express");
const request = require('request');

const PORT = process.env.PORT || 3001;
const app = express();

const lolApiRouter = require("./routes/lolApiRoutes");

app.use('/api', lolApiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});