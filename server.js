import express from 'express'

const app = express();

const PORT = 5000


// static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})