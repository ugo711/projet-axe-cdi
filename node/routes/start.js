const express = require("express");
const UsersController = require("../controllers/UsersController");
const AuthentificationController = require("../controllers/AuthentificationController");
const AuthMiddleware = require("../middlewares/auth");
const CardController = require("../controllers/CardController");
const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);
router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);
router.post("/login", AuthentificationController.login);
router.get(
    "/getMyProfile",
    AuthMiddleware.authenticate,
    UsersController.getMyProfile
);
router.get("/cards", CardController.index);
router.get("/cards", CardController.store);
router.get("/cards/:id", CardController.show);
router.get("/cards/:id", CardController.destroy);

module.exports = router;
