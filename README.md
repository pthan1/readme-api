# API for readMe project

### Setup

- Clone down this repo
- CD into the root folder, 
- Run npm install
- Run `node server.js` from your command line.

### Endpoints

| Method | Endpoint          | Request Body        | Sample Response                          | Note                                       |
| ------ | ----------------- | ------------------- | ---------------------------------------- | ------------------------------------------ |
| GET    | /users          | n/a                 | [{ id: "userID", username: "username", password: "user_password", name: "Carlos the Fox", readingList: [] }] | Get all users                              |
| GET    | /users/:id      | {id: "user_id"}            | {id: "a2",username:"xxx"}                | Get one user by id                         |
| PATCH  | /users/add/:id    | { "author": book_author", "category": "book_genre", "imageLinks": "image_url", "title": "book_title", "rating": 3.5, "id": "book_id", "overview": "book_overview" } | Array containg book objects in list: []                 | Add a book to one user's reading list      |
| PATCH  | /users/delete/:id | {bookId:"book_id"}    | Array containg book objects in list: []                          | Delete a book from one user's reading list |

### Notes

There are three hard coded users in the data when the server starts.
