const express = require("express");
const app = express();
const plantRoutes = require("./routes/plants");

app.use(express.json());
app.use("/api/plants", plantRoutes);

app.get("/", (req, res) => res.send("Plantation App Running"));

module.exports = app;
