const express = require("express");
const router = express.Router();
const dailyGoalsController = require("../controllers/dailyGoalsController");

router.get("/:personId", dailyGoalsController.getDailyGoalsByPersonId);
router.post("/", dailyGoalsController.createDailyGoal);
router.put("/:id", dailyGoalsController.updateDailyGoalById);

module.exports = router;
