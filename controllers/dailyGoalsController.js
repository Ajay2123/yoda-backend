const dailyGoalsModel = require("../models/dailyGoalsModel");

const getDailyGoalsByPersonId = (req, res) => {
    const personId = req.params.personId;
    try {
        const dailyGoals = dailyGoalsModel.getDailyGoalsByPersonId(personId);
        console.log(dailyGoals);
        res.json(dailyGoals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDailyGoal = (req, res) => {
    const dailyGoal = req.body;
    try {
        const newDailyGoal = dailyGoalsModel.createDailyGoal(dailyGoal);
        res.status(201).json(newDailyGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateDailyGoalById = (req, res) => {
    const id = req.params.id;
    const updatedDailyGoal = req.body;
    try {
        const response = dailyGoalsModel.updateDailyGoalById(
            id,
            updatedDailyGoal
        );
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getDailyGoalsByPersonId,
    createDailyGoal,
    updateDailyGoalById,
};
