const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log("request sent");
//     res.send("request received");
// })

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/cats', (req, res) => {
    res.send("meow")
})

app.post('/cats', (req, res) => {
    res.send("this is a post request to /cats.")
})
app.get('/dogs', (req, res) => {
    res.send("woof")
})

app.get('*', (req, res) => {
    res.send("I don't know that path.")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})