const path = require("path");
const { readDataFromFile, writeDataToFile } = require("./fileHelper");

const DAILY_GOALS_FILE_PATH = path.join(
    __dirname,
    "../data",
    "dailyGoals.json"
);

const getDailyGoalsByPersonId = (personId) => {
    const data = readDataFromFile(DAILY_GOALS_FILE_PATH);
    console.log(data);
    return data
        ? data.dailyGoals.filter((goal) => goal.personId === personId)
        : [];
};
const createDailyGoal = (dailyGoal) => {
    const data = readDataFromFile(DAILY_GOALS_FILE_PATH);
    dailyGoal.id = (data.dailyGoals.length + 1).toString(); // Incremental ID
    dailyGoal.completed = false; // Initial completion status
    data.dailyGoals.push(dailyGoal);
    writeDataToFile(DAILY_GOALS_FILE_PATH, data);
    return dailyGoal;
};

const updateDailyGoalById = (id, updatedDailyGoal) => {
    const data = readDataFromFile(DAILY_GOALS_FILE_PATH);
    const index = data.dailyGoals.findIndex((goal) => goal.id === id);
    if (index === -1) {
        throw new Error("Daily goal not found");
    }
    updatedDailyGoal.id = id;
    data.dailyGoals[index] = updatedDailyGoal;
    writeDataToFile(DAILY_GOALS_FILE_PATH, data);
    return updatedDailyGoal;
};

module.exports = {
    getDailyGoalsByPersonId,
    createDailyGoal,
    updateDailyGoalById,
};
