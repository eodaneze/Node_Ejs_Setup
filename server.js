const express = require('express')

const app = express();

const PORT = 5000


// static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('/', (req, res, next) => {
    // res.sendFile(__dirname + '/views/index.html')
    res.json({
        message: "HELLO FROM BACKEND"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})