const express = require("express")
const app = express()
const cors = require("cors")

app.set("port", process.env.PORT || 5000)
app.locals.title = "ReadMe User API"
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello, you just reached the user api")
})

app.locals.users = [
  { id: "a1", username: "carlosg", password: "123456", name: "Carlos the Fox", readingList: [] },
  { id: "a2", username: "philongt", password: "123456", name: "Phil the Rabbit", readingList: [] },
  { id: "a3", username: "beiz", password: "123456", name: "Bei the Sloth", readingList: [] },
]

//get all users
app.get("/api/v1/users", (req, res) => {
  const users = app.locals.users
  res.send(users)
})

//get one user by id
app.get("/api/v1/users/:id", (req, res) => {
  const foundUser = app.locals.users.find(user => user.id === req.params.id)
  if (!foundUser) {
    return res.sendStatus(404)
  }
  res.status(200).send(foundUser)
})

//create a new user
app.post("/api/v1/users", (req, res) => {
  let id = Date.now()
  let newUser = req.body
  for (let requiredParam of ["username", "password"]) {
    if (!newUser[requiredParam]) {
      res
        .status(422)
        .send({ error: `Expected format:{username:<string>, password: <string>}. You are missing ${requiredParam}` })
    }
  }
  let { username, password } = newUser
  app.locals.users.push({ id, username, password })
  res.status(201).send({ id, username, password })
})

// add new book to user's reading list
app.patch("/api/v1/users/add/:id", (req, res) => {
  const newBook = req.body.newBook;
  const userIndex = app.locals.users.findIndex(user => 
   user.id === req.params.id);

  const isBookFound = app.locals.users[userIndex].readingList.some(ele => ele.id === newBook.id)
  
  if (isBookFound) {
    res.status(400).send("Book already exists")
  }else {
    app.locals.users[userIndex].readingList.push(newBook);
    res.status(202).send(app.locals.users[userIndex].readingList)

  }
  }
)

// delete a book from user's reading list
app.patch("/api/v1/users/delete/:id", (req, res) => {
  const bookId = req.body.bookId;
  console.log(bookId);
  const userIndex = app.locals.users.findIndex(user => 
   user.id === req.params.id);
    
   const bookIndex= app.locals.users[userIndex].readingList.findIndex(book => book.id === bookId)
   app.locals.users[userIndex].readingList.splice(bookIndex, 1)
 
  res.status(202).send(app.locals.users[userIndex].readingList)

  })
  


app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get("port")}.`)
})
