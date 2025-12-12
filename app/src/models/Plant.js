const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    location: { type: String },
    plantedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Plant", PlantSchema);
