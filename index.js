require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./src/Model/dbconfig");
const musicRoutes = require("./src/Routes/musicRoutes");

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get("/", (req, resp) => resp.send("Application is up and running"));
app.use("/api", musicRoutes.routes);

async function initializeDatabase() {
  try {
    await sequelize.sync({ force: true });
    // await insertSampleData();
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initializeDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`Service endpoint = http://localhost:${PORT}`);
});
