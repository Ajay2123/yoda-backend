const { readDataFromFile, writeDataToFile } = require("./fileHelper");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const GOALS_FILE_PATH = path.join(__dirname, "../data", "goals.json");

const getAllGoalsByPersonId = (personId) => {
    const data = readDataFromFile(GOALS_FILE_PATH);
    return data
        ? data.goals.filter((goal) => goal.personId === parseInt(personId))
        : [];
};

const getGoalById = (personId, goalId) => {
    const data = readDataFromFile(GOALS_FILE_PATH);
    return data
        ? data.goals.find(
              (goal) =>
                  goal.personId === parseInt(personId) &&
                  goal.id === parseInt(goalId)
          )
        : null;
};

const createGoal = (personId, goal) => {
    const data = readDataFromFile(GOALS_FILE_PATH);
    const newId = uuidv4().substr(0, 8);
    goal.id = newId;
    goal.personId = personId;
    data.goals.push(goal);
    writeDataToFile(GOALS_FILE_PATH, data);
    return goal;
};

const updateGoalById = (personId, goalId, updatedGoal) => {
    const data = readDataFromFile(GOALS_FILE_PATH);
    const index = data.goals.findIndex(
        (goal) =>
            goal.personId === parseInt(personId) && goal.id === parseInt(goalId)
    );
    if (index === -1) {
        throw new Error("Goal not found");
    }
    updatedGoal.id = parseInt(goalId);
    updatedGoal.personId = parseInt(personId);
    data.goals[index] = updatedGoal;
    writeDataToFile(GOALS_FILE_PATH, data);
    return updatedGoal;
};

const deleteGoalById = (personId, goalId) => {
    const data = readDataFromFile(GOALS_FILE_PATH);
    const index = data.goals.findIndex(
        (goal) =>
            goal.personId === parseInt(personId) && goal.id === parseInt(goalId)
    );
    if (index === -1) {
        throw new Error("Goal not found");
    }
    const deletedGoal = data.goals.splice(index, 1)[0];
    writeDataToFile(GOALS_FILE_PATH, data);
    return deletedGoal;
};

module.exports = {
    getAllGoalsByPersonId,
    getGoalById,
    createGoal,
    updateGoalById,
    deleteGoalById,
};
