const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req,res)=>{
    console.log('Home Page');
    res.sendFile(__dirname + '/todo.html');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});