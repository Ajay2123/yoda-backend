const express = require("express");
const router = express.Router();
const {
    handle404Error,
    handleGlobalError,
} = require("../controllers/errorHandler");

const goalsController = require("../controllers/goalsController");

// Goals API
router.get("/:personId", goalsController.getAllGoals);
router.get("/:personId/:id", goalsController.getGoalById);
router.post("/:personId", goalsController.createGoal);
router.put("/:personId/:id", goalsController.updateGoalById);
router.delete("/:personId/:id", goalsController.deleteGoalById);

// Global Error handling
router.use(handleGlobalError);
router.use(handle404Error);

module.exports = router;
