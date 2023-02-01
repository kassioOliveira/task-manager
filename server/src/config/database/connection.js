const mongoose = require("mongoose");

mongoose.set("strictQuery",false);


module.exports = async function connect () {

    await mongoose.connect(process.env.MONGOOSE_CONNECTION);
}