const goalsModel = require("../models/goalsModel");

const getAllGoals = (req, res) => {
    try {
        const personId = req.params.personId;
        const goals = goalsModel.getAllGoalsByPersonId(personId);
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getGoalById = (req, res) => {
    const personId = req.params.personId;
    const goalId = req.params.goalId;
    try {
        const goal = goalsModel.getGoalById(personId, goalId);
        if (!goal) {
            res.status(404).json({ message: "Goal not found" });
            return;
        }
        res.json(goal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createGoal = (req, res) => {
    const personId = req.params.personId;
    const goal = req.body;
    try {
        const newGoal = goalsModel.createGoal(personId, goal);
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateGoalById = (req, res) => {
    const personId = req.params.personId;
    const goalId = req.params.goalId;
    const updatedGoal = req.body;
    try {
        const response = goalsModel.updateGoalById(
            personId,
            goalId,
            updatedGoal
        );
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteGoalById = (req, res) => {
    const personId = req.params.personId;
    const goalId = req.params.goalId;
    try {
        const deletedGoal = goalsModel.deleteGoalById(personId, goalId);
        res.json(deletedGoal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllGoals,
    getGoalById,
    createGoal,
    updateGoalById,
    deleteGoalById,
};
