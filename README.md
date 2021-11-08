# API for readMe project

### Starting the server

Use the command node server.js to begin the API server.

### Endpoints

| Method | Endpoint          | Request Body        | Sample Response                          | Note                                       |
| ------ | ----------------- | ------------------- | ---------------------------------------- | ------------------------------------------ |
| GET    | '/users'          | n/a                 | [{id: "a1", name:"Carlos the Fox"}, ...] | Get all users                              |
| GET    | /users/:id'       | id: "a2"            | {id: "a2",username:"xxx"}                | Get one user by id                         |
| PATCH  | /users/add/:id    | newBook: bookObject | [{bookObj}, {newBook}]                   | Add a book to one user's reading list      |
| PATCH  | /users/delete/:id | bookId:"book id"    | [{bookObj},...]                          | Delete a book from one user's reading list |

### Notes

There are three users in the data when the server begins.