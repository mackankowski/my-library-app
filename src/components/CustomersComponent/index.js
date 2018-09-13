import React, { Component } from 'react';

export class CustomersComponent extends Component {
  componentDidMount() {
    this.dbConnect();
  }
  dbConnect = () => {
    fetch('/api/sql/connect');
  };
  render() {
    return (
      <div>
        <h2>Customers!</h2>
      </div>
    );
  }
}
