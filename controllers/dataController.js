const dataModel = require("../models/dataModel");

const getAllPeople = (req, res) => {
    try {
        const people = dataModel.getAllPeople();
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPersonById = (req, res) => {
    const id = req.params.id;
    try {
        const person = dataModel.getPersonById(id);
        if (!person) {
            res.status(404).json({ message: "Person not found" });
            return;
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePersonGoals = (req, res) => {
    const id = req.params.id;
    const goals = req.body.goals;
    try {
        const updatedPerson = dataModel.updatePersonGoals(id, goals);
        res.json(updatedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllPeople,
    getPersonById,
    updatePersonGoals,
};
