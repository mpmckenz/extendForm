const express = require("express")
const path = require("path")
const port = 3000
const app = express()
const publicFolderPath = path.join(__dirname, "public")

const users = []

app.use(express.json())
app.use(express.static(publicFolderPath))

app.post("/api/user", (request, response) => {
    if (users.find(newUser => newUser.username === request.body.username)) {
        response.status(409).send("Username already taken please try again")
    } else {
        response.status(201).send("Success! Profile created, thanks for signing up!")
            request.body.userIDnumber = Math.floor(Math.random() * 100)
            users.push(request.body)
    }
})


app.listen(port, console.log("Started on port 3000"));