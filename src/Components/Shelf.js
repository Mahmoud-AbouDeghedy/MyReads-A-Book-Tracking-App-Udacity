import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";
export default class Shelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((b) => (
                <Book
                  key={b.id}
                  book={b}
                  updateShelf={this.props.updateShelf}
                  shelf={this.props.shelf}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
Shelf.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
  name: PropTypes.string,
  shelf: PropTypes.string,
};
