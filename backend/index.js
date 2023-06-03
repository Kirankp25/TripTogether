const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const connectWithDb = require("./config/db");


require("dotenv").config();
const app = express();

app.use(cors())
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// This will connect with DB
connectWithDb();

// import all routes
const user = require("./routes/userRoute");

// routes middleware
app.use("/api/v1", user);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});
