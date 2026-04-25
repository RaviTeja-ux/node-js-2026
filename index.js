
import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = 'school';
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const app = express()


client.connect()
.then((connection) => {
   const db = connection.db(dbName)
    console.log('Connected to database')
    app.get('/api/students', async(req, res) => {
        const collection = db.collection('students')
        const students = await collection.find().toArray()
        console.log(students)
        res.send(students)
})
})
.catch((error) => {
    console.log(error)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})  