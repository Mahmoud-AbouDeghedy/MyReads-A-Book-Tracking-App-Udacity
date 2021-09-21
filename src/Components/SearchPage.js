import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
export default class SearchPage extends Component {
  state = {
    resultedBooks: [],
    searchText: "",
  };
  update(value) {
    this.setState({ searchText: value });
    if (value)
      BooksAPI.search(value).then((res) =>
        this.setState({ resultedBooks: res.error ? [] : res })
      );
    else this.setState({ resultedBooks: [] });
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.update(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.resultedBooks.map((b) => {
              let shelf = "none";
              this.props.books.map(
                (book) => b.id === book.id && (shelf = book.shelf)
              );

              return (
                <li key={b.id}>
                  <Book
                    book={b}
                    updateShelf={this.props.updateShelf}
                    shelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
