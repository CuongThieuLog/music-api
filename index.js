const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const Music = require("./music");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

sequelize.sync().then(() => {
  console.log("DB is ready");
});

app.get("/musics", async (req, res) => {
  try {
    const musics = await Music.findAll();
    res.status(200).json(musics);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving music");
  }
});

app.get("/musics/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const music = await Music.findByPk(id);
    if (music) {
      res.status(200).json(music);
    } else {
      res.status(404).send("Music not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving music");
  }
});

app.post("/musics", async (req, res) => {
  try {
    await Music.create(req.body);
    res.status(201).send("Created music successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating music");
  }
});

app.put("/musics/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated] = await Music.update(req.body, { where: { id } });
    if (rowsUpdated > 0) {
      res.send("Updated music successfully");
    } else {
      res.status(404).send("Music not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating music");
  }
});

app.delete("/musics/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Music.destroy({ where: { id } });
    if (rowsDeleted > 0) {
      res.send("Deleted music successfully");
    } else {
      res.status(404).send("Music not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting music");
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
