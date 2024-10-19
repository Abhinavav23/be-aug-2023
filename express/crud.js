const express = require("express");

const app = express();

const PORT = 5800
app.listen(PORT, () => {
    console.log(`crud app running on ${PORT}`);
})