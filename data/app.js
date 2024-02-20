const express = require('express')

const body_parser = require('body-parser')

const path = require('path')

global.mock_db = path.join(_dirname, './data/mock_db.json');

const app = express();

app.get('/', function(req,res){
    return res.json({
        message:'hello world'
    })
})

const port = 3000;
app.listen(port,() => console.log('server running on port ${port}'));