const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { getStudents, addStudent, connectDb } = require("./db");
const app = express();

// Routes ------

app.use(express.json()); // => req.body 

app.get('/students', (req, res) => {
    console.log('GET /students');
    getStudents()
        .then(studs => res.status(StatusCodes.OK).json(studs))
        .catch((e) => res.status(StatusCodes.NOT_ACCEPTABLE).send(e.message));
})

app.post('/student', (req, res) => {
    console.log(`POST /student: ${JSON.stringify(req.body)}`);
    addStudent(req.body)
        .then((stud) => res.status(StatusCodes.ACCEPTED).json(stud))
        .catch((e) => res.status(StatusCodes.NOT_ACCEPTABLE).send(e.message));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectDb();
})