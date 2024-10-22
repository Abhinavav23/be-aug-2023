const expressApp = require("./app");

const PORT = 4000;
expressApp.listen(PORT, () => {
    console.log(`express app running at ${PORT}`);
})