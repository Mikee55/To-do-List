const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var data = [{item: 'Mike'}, {item: 'SE'}, {item: '30'}];

app.get('/', (req,res)=>{
    console.log('Home Page');
    res.render('todo', { todos: data });
})
// app.post('/add-todo', (req,res) => {
//     const newToDo = {text: req.body.todo};
//     todos.push(newToDo);
//     res.redirect('/');
// });



const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});