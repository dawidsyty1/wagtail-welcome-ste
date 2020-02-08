import './Spinner.css';
import React, { Component } from 'react';
import SpinnerTest from 'react-bootstrap/Spinner'


class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <SpinnerTest animation="border" />
      </div>
    );
  }
}

export default Spinner;
