const express = require("express");
const bodyParser = require("body-parser");
const playerController = require("../controllers/playerController");
const playersRouter = express.Router();
playersRouter.use(bodyParser.json());
//creat player controller
playersRouter
  .route("/")
  .get(playerController.index)
  .post(playerController.create);
//edit player controller
playersRouter.
route("/edit/:playerId")
.get(playerController.formEdit)
.post(playerController.edit)
//delete player controller
playersRouter.
route("/delete/:playerId")
.get(playerController.delete)
module.exports = playersRouter;
