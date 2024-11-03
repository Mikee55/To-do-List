const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://milkyas:684762@cluster0.5jrjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongodbUri = process.env.MONGODB_URI;


mongoose.connect(dbURI)
    .then(() => {
        console.log('MongoDB connected successfully.')})
    .catch(err => {
        console.error('Error connecting to MongoDB:', err)});


const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false});


app.get('/', async (req,res) => {
    try {
        const todos = await Todo.find({});
        res.render('todo', { todos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/', urlencodedParser, async (req,res) => {
    try {
        const newTodo = await Todo(req.body).save();
        res.json(newTodo);
        // res.redirect('/');
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
    
});

app.delete('/:id', async (req,res) =>{
    try {
        const todoItem = req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(todoItem);
        res.json(deletedTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});