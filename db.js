const mongoose = require('mongoose');

let Student = null;

const connectDb = () => {
    mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.1izer.mongodb.net/Sandbox?retryWrites=true&w=majority')
        .then(() => {;
            Student = mongoose.model('student', { name: 'string', first_name: 'string', email: 'string' });
            console.log('DB connected + "student" model created');
        });
}

const getStudents = () => {
    return Student.find()
        .catch((e) => console.log('## error: ', e.message));
}

const addStudent = (stud) => {
    return (new Student({...stud }))
        .save().then((newSt) => {
            console.log(newSt);
            return newSt;
        })
        .catch((e) => console.log('## error: ', e.message));
};

module.exports = { connectDb, getStudents, addStudent };