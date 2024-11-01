const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://milkyas:684762@cluster0.5jrjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongosse.connect(dbURI);

// var todoSchema = new mongosse.Schema({

//     item: String
// });

// var Todo = mongosse.model('Todo', todoSchema);
// var itemOne = Todo({item: 'enjoy coding'}).save(function(err) {
//     if (err) throw err;
//     console.log('item saved');
// });

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully.')})
    .catch(err => {
        console.error('Error connecting to MongoDB:', err)});


const todoSchema = new mongoose.Schema({
    item: String
});


const Todo = mongoose.model('Todo', todoSchema);


const newTodo = new Todo({ item: 'enjoy coding' });


newTodo.save()
    .then(() => console.log('Todo item "enjoy coding" saved successfully.'))
    .catch(err => console.error('Error saving Todo:', err));


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [{item: 'Mike'}, {item: 'SE'}, {item: '30'}];


app.get('/todo', (req,res)=>{
    console.log('Home Page');
    res.render('todo', { todos: data });
})
app.post('/todo', urlencodedParser,(req,res) => {
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', (req,res) =>{
    console.log('Task deleted');
    data = data.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);

})



const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});