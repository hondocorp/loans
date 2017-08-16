import React, { Component } from 'react';
import {calculatePayment, calculateTotalCost, calculateInterestCost} from '../lib/math';

let NumberFormat = require('react-number-format');

class Payment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let payment = calculatePayment(this.props.factors);
    let total_cost = calculateTotalCost(this.props.factors);
    let interest_cost = calculateInterestCost(this.props.factors);

    return (
      <div className={'p'}>
        <h3>Monthly Payment</h3>
        <p className={'p-a'}><NumberFormat value={payment} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <p className={'p-m'}>Over the life of this loan, you will pay <NumberFormat value={total_cost} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />. This loan will cost you <NumberFormat value={interest_cost} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /> in interest.</p>
        <style jsx>{`
          .p {
            background-color: hsla(212, 80%, 43%, 1.000);
            color: #ffffff;
            padding: 2rem;
            text-align: center;
          }

          h3 {
            margin: 0 0 1rem;
          }

          .p-a {
            font-size: 300%;
            margin: 0 0 1rem;
            font-weight: 700;
          }

          .p-m {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Payment
