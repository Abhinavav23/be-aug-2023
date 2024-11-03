const app = require("./app");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
dotEnv.config();

// Connecting MongoDB asynchronously
const URL = process.env.DB_Connection_URL
mongoose.connect(URL)
.then(() => {
    console.log(`Database connected successfully`);
})
.catch((err) => {
    console.log(`Err: ${err}`);
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`);
});