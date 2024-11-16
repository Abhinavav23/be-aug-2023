const app = require("./app");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
dotEnv.config();

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log(`Database connected successfully`);
    
})
.catch((err) => {
    console.log(`Err: ${err.message}`);
    
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`blog server running at ${PORT}`);
})