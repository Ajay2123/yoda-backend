const express = require("express");
const router = express.Router();
const {
    handle404Error,
    handleGlobalError,
} = require("../controllers/errorHandler");

const personController = require("../controllers/peopleController");

// People api
router.get("/", personController.getAllPeople);
router.get("/:id", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:id", personController.updatePersonById);
router.delete("/:id", personController.deletePersonById);

// Global Error handling
router.use(handleGlobalError);
router.use(handle404Error);

module.exports = router;
