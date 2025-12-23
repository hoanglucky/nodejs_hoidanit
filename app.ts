import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Test server");
});
app.get("/admin", (req, res) => {
    res.send("Test admin");
});
app.listen(PORT, () => {
    console.log('My app is running on port : $(PORT)');
});
