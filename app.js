const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const dbURI = 'mongodb+srv://Mike:0941104990@MIKe@cluster0.5jrjl.mongodb.net/';

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

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