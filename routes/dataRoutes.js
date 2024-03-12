const express = require("express");
const router = express.Router();
const {
    handle404Error,
    handleGlobalError,
} = require("../controllers/errorHandler");
const {
    getAllPeople,
    getPersonById,
    updatePersonGoals,
} = require("../controllers/dataController");

// People api
router.get("/people", getAllPeople);
router.get("/people/:id", getPersonById);
router.put("/people/:id/goals", updatePersonGoals);

// Global Error handling
router.use(handleGlobalError);
router.use(handle404Error);

module.exports = router;
