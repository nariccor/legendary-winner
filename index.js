const express = require("express");
const app = express();
const cors = require('cors');

//middlewares
app.use(express.json()); // req.body w/o bodyParse
app.use(cors()); // domains interactions

//Import Routes
const authRoutes = require("./routes/jwtAuth");

//Routes middleware
app.use("/auth", authRoutes);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.listen(3000, () => console.log("server is running on port 3000"));
