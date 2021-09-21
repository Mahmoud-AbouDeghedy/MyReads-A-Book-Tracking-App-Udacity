import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                name="Currently Reading"
                books={this.props.books.filter(
                  (b) => b.shelf === "currentlyReading"
                )}
                updateShelf={this.props.updateShelf}
                shelf="currentlyReading"
              />
              <Shelf
                name="Want to Read"
                books={this.props.books.filter((b) => b.shelf === "wantToRead")}
                updateShelf={this.props.updateShelf}
                shelf="wantToRead"
              />
              <Shelf
                name="Read"
                books={this.props.books.filter((b) => b.shelf === "read")}
                updateShelf={this.props.updateShelf}
                shelf="read"
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}
MainPage.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
};
