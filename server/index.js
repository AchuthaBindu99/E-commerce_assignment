const mongoose = require("mongoose")
const app = require ("./App")

const port = process.env.port || 3030;

mongoose.connect(" mongodb://127.0.0.1:27017/electronics")
.then(() => {
    console.log("Connected to the data base")
    app.listen(port, () => console.log("app is listening at 3030"))
})