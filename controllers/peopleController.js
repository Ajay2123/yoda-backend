const peopleModel = require("../models/peopleModel");

const getAllPeople = (req, res) => {
    try {
        const people = peopleModel.getAllPeople();
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getPersonById = (req, res) => {
    const id = req.params.id;
    try {
        const people = peopleModel.getPersonById(id);
        res.json(people);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPerson = (req, res) => {
    const person = req.body;
    try {
        const newPerson = peopleModel.createPerson(person);
        res.status(201).json(newPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePersonById = (req, res) => {
    const id = req.params.id;
    const updatedPerson = req.body;
    try {
        const response = peopleModel.updatePerson(id, updatedPerson);
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePersonById = (req, res) => {
    const id = req.params.id;
    try {
        const deletedPerson = peopleModel.deletePerson(id);
        res.json(deletedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllPeople,
    getPersonById,
    createPerson,
    updatePersonById,
    deletePersonById,
};
