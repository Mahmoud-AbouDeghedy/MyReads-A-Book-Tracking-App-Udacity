import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import { Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    this.showBooks();
  }
  showBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((b) => {
      this.showBooks();
    });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} updateShelf={this.updateShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
