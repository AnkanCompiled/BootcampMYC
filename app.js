const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { port } = require("./config/config");
const errorHandler = require("./exceptions/errorHandler");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
