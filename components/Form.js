import React, { Component } from 'react';

let NumberFormat = require('react-number-format');

class Form extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(obj) {
    this.props.formChange(obj);
  }

  render() {
    return (
      <div>
        <h2>Vehicle Details</h2>
        <div className="f">
          <label htmlFor="amount" className="f-l">Vehicle Cost</label>
          <input type="text" name="cost" value={this.props.factors.cost} onChange={(e) => {this.handleChange({cost: e.target.value})}} className="f-i" />
        </div>
        <div className="f">
          <label htmlFor="amount" className="f-l">Down Payment</label>
          <input type="text" name="down" value={this.props.factors.down} onChange={(e) => {this.handleChange({down: e.target.value})}} className="f-i" />
        </div>
        <hr />
        <h2>Taxes</h2>
        <div className="f">
          <label htmlFor="tax" className="f-l">Sales Tax</label>
          <input type="text" name="amount" value={this.props.factors.tax} onChange={(e) => {this.handleChange({tax: e.target.value})}} className="f-i" />
        </div>
        <hr />
        <h2>Loan Details</h2>
        <div className="f">
          <label htmlFor="rate" className="f-l">Interest Rate</label>
          <input type="text" name="rate" value={this.props.factors.rate} onChange={(e) => {this.handleChange({rate: e.target.value})}} className="f-i" />
        </div>
        <div className="f">
          <label htmlFor="term" className="f-l">Term in Months</label>
          <input type="text" name="term" value={this.props.factors.term} onChange={(e) => {this.handleChange({term: e.target.value})}} className="f-i" />
        </div>
        <style jsx>{`
          h2 {
            margin: 0;
            line-height: 1;
          }

          .f {
            margin-top: 1rem;
          }

          .f-i {
            border: 2px solid hsla(212, 80%, 43%, 1.000);
            box-sizing: border-box;
            padding: 0.75rem;
            width: 100%;
            font-size: 125%;
          }

          .f-l {
            display: block;
            text-transform: uppercase;
            margin-bottom: 0.25rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Form
