const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config/config");
const loginRoute = require("./routes/loginRoute");
const registerRoute = require("./routes/registerRoute");
const userRoute = require("./routes/userRoute");
const tourSearchRoute = require("./routes/searchRoute");
const tourBookRoute = require("./routes/bookRoute");
const tourCreateRoute = require("./routes/addPackage");
const tourEditRoute = require("./routes/updatePackage");
const tourDeleteRoute = require("./routes/deletePackage");
const tourCancelRoute = require("./routes/cancelRoute");
const PORT = 3000;

const app = express();

app.use(express.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);
app.use("/api/user/profile", userRoute);
app.use("/api/tours", tourSearchRoute);
app.use("/api/user/bookTour", tourBookRoute);
app.use("/api/booking/cancelBooking", tourCancelRoute);
app.use("/api/admin/addTourPackage", tourCreateRoute);
app.use("/api/admin/updateTourPackage", tourEditRoute);
app.use("/api/admin/deleteTourPackage", tourDeleteRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
