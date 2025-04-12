const mongoose = require('mongoose');

// ✅ Atlas DB URL + Sellers database
const connect = mongoose.connect("mongodb+srv://rjhajharia2704:Vk6VBPmEb6MIKwVc@cluster0.4wflees.mongodb.net/Sellers?retryWrites=true&w=majority");

connect.then(() => {
    console.log("✅ Database Connected Successfully");
}).catch((err) => {
    console.error("❌ Database Connection Error:", err);
});

// ✅ Schema: REMOVE email & mobile since not sent during signup
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", Loginschema);

module.exports = collection;
