const Plant = require("../models/Plant");

exports.getPlants = async (req, res) => {
    const plants = await Plant.find();
    res.json(plants);
};

exports.createPlant = async (req, res) => {
    const plant = await Plant.create(req.body);
    res.json(plant);
};

exports.deletePlant = async (req, res) => {
    const { id } = req.params;
    await Plant.findByIdAndDelete(id);
    res.json({ message: "Plant deleted" });
};
