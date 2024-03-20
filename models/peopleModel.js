const { readDataFromFile, writeDataToFile } = require("../shared/fileHelper");
const PEOPLE_FILE_PATH = path.join(__dirname, "../data", "people.json");

const getAllPeople = () => {
    const data = readDataFromFile(PEOPLE_FILE_PATH);
    return data ? data.people : [];
};

const getPersonById = (id) => {
    const data = readDataFromFile(PEOPLE_FILE_PATH);
    return data
        ? data.people.find((person) => person.id === parseInt(id))
        : null;
};

const createPerson = (person) => {
    const data = readDataFromFile(PEOPLE_FILE_PATH);
    const newId = data
        ? data.people.length > 0
            ? data.people[data.people.length - 1].id + 1
            : 1
        : 1;
    person.id = newId;
    if (data) {
        data.people.push(person);
        writeDataToFile(PEOPLE_FILE_PATH, data);
    }
    return person;
};

const updatePerson = (id, updatedPerson) => {
    const data = readDataFromFile(PEOPLE_FILE_PATH);
    if (!data) {
        throw new Error("Data file not found");
    }
    const index = data.people.findIndex((person) => person.id === parseInt(id));
    if (index === -1) {
        throw new Error("Person not found");
    }
    updatedPerson.id = parseInt(id);
    data.people[index] = updatedPerson;
    writeDataToFile(PEOPLE_FILE_PATH, data);
    return updatedPerson;
};

const deletePerson = (id) => {
    const data = readDataFromFile(PEOPLE_FILE_PATH);
    if (!data) {
        throw new Error("Data file not found");
    }
    const index = data.people.findIndex((person) => person.id === parseInt(id));
    if (index === -1) {
        throw new Error("Person not found");
    }
    const deletedPerson = data.people.splice(index, 1)[0];
    writeDataToFile(PEOPLE_FILE_PATH, data);
    return deletedPerson;
};

module.exports = {
    getAllPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson,
};
