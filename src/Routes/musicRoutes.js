const express = require("express");
const {
  getAllMusics,
  getMusic,
  saveMusic,
  updateMusic,
  deleteMusic,
} = require("../Controller/musicController");

const router = express.Router();

router.get("/musics", getAllMusics);
router.get("/music/:id", getMusic);
router.post("/music", saveMusic);
router.put("/music/:id", updateMusic);
router.delete("/music/:id", deleteMusic);

module.exports = {
  routes: router,
};
