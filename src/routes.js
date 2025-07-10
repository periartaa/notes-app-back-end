const {
  siveBookHandler,
  displayAllBooksHandler,
  detailBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: siveBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: displayAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: detailBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
