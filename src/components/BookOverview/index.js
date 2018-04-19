import React, { Component } from "react";

import { BookOverviewDumb } from './BookOverviewDumb';

export class BookOverview extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [
        {id: 1, authors: 'a1', title: 't1'},
        {id: 2, authors: 'a2', title: 't2'},
      ],
      selectedBookIndex: 0,
    };
    this.state.updatedBook = this.state.books[this.state.selectedBookIndex];

    this.onBookSelect = this.onBookSelect.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onBookSave = this.onBookSave.bind(this);
  }

  onBookSelect(book) {
    this.setState((prevState) => {
      return {
        selectedBookIndex: prevState.books.indexOf(book),
        updatedBook: book,
      };
    });
  }

  onBookChange(updatedBook) {
    this.setState((prevState) => {
      return {
        updatedBook: {...prevState.updatedBook, ...updatedBook},
      }}
    );
  }

  onBookSave(book) {
    this.setState((prevState, props) => {
      const books = [...prevState.books]; 
      books[prevState.selectedBookIndex] = prevState.updatedBook;
      return {
        books,
      };
    });
  }

  render() {
    return (
      <BookOverviewDumb 
        books={this.state.books}
        currentBook={this.state.updatedBook}
        onBookSelect={this.onBookSelect}
        onBookChange={this.onBookChange}
        onBookSave={this.onBookSave}
      />
    );
  }
}
