import mongoose from "mongoose";
mongoose.connect("mongodb+srv://abduhamidbotirovweb:abduhamidjon707@cluster0.ab9kvno.mongodb.net/EdTech?retryWrites=true&w=majority").then(() => {
    console.log("connection");
});