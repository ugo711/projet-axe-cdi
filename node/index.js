const ip = require("ip");
const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
const app = express();
const port = 3000;
const ipAddr = ip.address();

let lastHouseVisited = "Gryffindor";
app.use(express.json());
app.use("/", routes);
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: lastHouseVisited });
});
app.post("/", (req, res) => {
    lastHouseVisited = req.body.house;
    res.json({ message: lastHouseVisited });
});
app.listen(port, () => {
    console.log(`Server run: http://${ipAddr}:${port}`);
});
