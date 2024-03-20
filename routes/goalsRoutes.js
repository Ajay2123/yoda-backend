const express = require("express");
const router = express.Router();
const {
    handle404Error,
    handleGlobalError,
} = require("../controllers/errorHandler");

const goalsController = require("../controllers/goalsController");

// Goals API
router.get("/:personId", goalsController.getAllGoals);
router.get("/:personId/:goalId", goalsController.getGoalById);
router.post("/:personId", goalsController.createGoal);
router.put("/:personId/:goalId", goalsController.updateGoalById);
router.delete("/:personId/:goalId", goalsController.deleteGoalById);

// Global Error handling
router.use(handleGlobalError);
router.use(handle404Error);

module.exports = router;
