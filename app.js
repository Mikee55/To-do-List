const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

var data = [{item: 'Mike'}, {item: 'SE'}, {item: '30'}];

app.get('/', (req,res)=>{
    console.log('Home Page');
    res.render('todo', { todos: data });
})
app.post('/add-todo', urlencodedParser,(req,res) => {
    data.push(req.body);
    res.render('todo', { todos: data });
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});