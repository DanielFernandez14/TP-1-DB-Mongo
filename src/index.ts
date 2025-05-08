import { Schema, model, connect } from "mongoose";
process.loadEnvFile();

const URI_DB = process.env.URI_DB || "";

const connectMongoDb = async () => {
    try {
    await connect(URI_DB);
    console.log("Conectado a MongoDB");
    } catch (error) {
    console.log("Error al conectar a MongoDB");
    }
};

const gamesSchema = new Schema({
    title: { type: String, required: true, unique: true },
    year: { type: Number, required: true, unique: true },
    rating: { type: Number, default: 0 },
    gender: { type: String, required: true },
});

connectMongoDb();