const Music = require("../Model/music");

const getAllMusics = async (req, res) => {
  try {
    const musics = await Music.findAndCountAll();
    res.send({
      data: musics.rows,
      total: musics.count,
    });
  } catch (error) {
    res.status(500).send({ error: "An error occurred while fetching musics." });
  }
};

const getMusic = async (req, res) => {
  try {
    const id = req.params.id;
    const music = await Music.findOne({ where: { id: id } });
    if (music) {
      res.send(music);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the music." });
  }
};

const saveMusic = async (req, res) => {
  try {
    console.log("req", req);
    const music = {
      name: req.body.name,
      link: req.body.link,
    };
    console.log(music);
    await Music.create(music);
    res.sendStatus(201);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while saving the music." });
  }
};

const updateMusic = async (req, res) => {
  try {
    const id = req.params.id;
    const music = await Music.findByPk(id);
    if (music) {
      await music.update({
        name: req.body.name,
        email: req.body.music,
      });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while updating the music." });
  }
};

const deleteMusic = async (req, res) => {
  try {
    const id = req.params.id;
    const music = await Music.findByPk(id);
    if (music) {
      await music.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the music." });
  }
};

module.exports = {
  getAllMusics,
  getMusic,
  saveMusic,
  updateMusic,
  deleteMusic,
};
