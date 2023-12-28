const express = require('express');
const app = express();
const data = require('./data.json')
app.set('view engine', 'ejs')

const mahasiswa = [{
        id: "clj2k4u62021l0872l5005sgr",
        name: "M. Asror",
        nim: "M010001",
        address: "Madiun"
    },
    {
        id: "clj2kasoz028b0872zqir86qr",
        name: "M. Farhan",
        nim: "M010002",
        address: "Jambi"
    },
    {
        id: "clj2k7jq4025r0872ka031aam",
        name: "Laili AR",
        nim: "M010003",
        address: "Magetan"
    },
    {
        id: "ckacmayji9qmx33jmns1",
        name: "Azzahra Kareena",
        nim: "M010004",
        address: "Madiun"
    }
]

app.get('/v1', (req, res) => {
    const nim = req.query.nim;
    const name = req.query.name
        // res.sendFile(path.join(__dirname, 'index.html'));
    res.render('index', { name, nim })
});

app.get('/v1/profile', (req, res) => {
    const newMahasiswa = data.data;

    //res.sendFile(path.join(__dirname, 'profile.html'));
    res.render('profile', { newMahasiswa })
});

app.get('/v1/listmhs', (req, res) => {

    //res.sendFile(path.join(__dirname, 'profile.html'));
    res.render('listmhs', { mahasiswa })
});

app.listen(3000, () => {
    console.log(`Listening to port 3000`);
});