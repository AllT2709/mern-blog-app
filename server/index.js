require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db");

const authRoutes = require("./api/routes/auth");
const userRoutes = require("./api/routes/users");
const postRoutes = require("./api/routes/posts");
const categoryRoutes = require("./api/routes/categories");
const uploadRoute = require("./api/routes/upload");

const app = express();
connection(process.env.MONGO_URI);

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "./images")));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api", uploadRoute);
app.use("/api", authRoutes);
app.use("/", (req, res) => {
  res.send("Endpoint works!!!");
});

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
  console.log("**** SERVER WORKS****");
});
