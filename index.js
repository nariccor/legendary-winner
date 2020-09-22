const express = require("express");
const app = express();

//Import Routes
const authRoutes = require("./routes/jwtAuth");

//Routes middleware
app.use("/auth", authRoutes);

app.listen(3000, () => console.log("server is running on port 3000"));
