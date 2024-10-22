const express = require("express");

const app = express();

const user = [];



const PORT = 5800
app.listen(PORT, () => {
    console.log(`crud app running on ${PORT}`);
})