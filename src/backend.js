// Express
// login  api
// signUp api

const { application, request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const PORT = 8080;
const DB_URL = 'http://localhost:8000';

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log('App is running on port' + PORT)
});

app.on('error', (e) => {
    console.log(e);
})


// dummy api

app.get('/', (req, res) => {
    console.log("Request is comming");
    res.status(200).send('Hy app is running')
})


app.post('/login', (req, res) => {

    console.log('/login')
    if (req.body) {
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body);
        axios.get(DB_URL+'/users?email='+email)
            .then(function (response) {
                // handle success
                console.log("This is the response",response.data);
                if(response.data.length<=0){
                    res.status(200).send("USER NOT FOUND")
                }
                else{
                    res.status(200).send("USER FOUND");
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
    }
    else {
        res.status(400).send('Password or Email is missing')
    }
})


app.post('/signUp', (req, res) => {
    if (req.body && req.body.password && req.body.email) {
        const email = req.body.email;
        const password = req.body.password;
        // 

        axios.post(DB_URL+'/users',{
            email:email,
            password:password
        })
            .then(function (response) {
                // handle success
                console.log("This is the response",response.data);
                res.status(200).send("USER POSTED");
            })
            .catch(function (error) {
                // handle error
                res.status(500).send(error)
                console.log(error);
              })
    }
    else {
        res.status(400).send('Password or Email is missing')
    }
})
