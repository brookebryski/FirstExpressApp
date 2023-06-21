const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log("request sent");
//     res.send("request received");
// })

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>welcome to r/${subreddit}</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> viewing the post ${postId} on r/${subreddit}</h1>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Cannot send search results with no search.')
    }
        res.send(`<h1>Search results for ${q}</h1>`)
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