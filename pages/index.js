import Link from 'next/link'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Payment from '../components/Payment'
import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cost: 12000,
      down: 1000,
      rate: 2.9,
      term: 48,
      tax: 5.25,
    };
  }

  handleFormChange(obj) {
    this.setState(obj);
  }

  render() {
    let factors = {
      cost: this.state.cost * 1,
      down: this.state.down * 1,
      rate: this.state.rate * 1,
      term: this.state.term * 1,
      tax: this.state.tax * 1
    }

    return (
      <Layout>
        <div className={'b'}>
          <h1>Auto Loan Calculator</h1>
          <p>Simple auto loan calculator that you can save for offline use.</p>
        </div>
        <div className={'c'}>
          <div className={'c-1'}>
            <Form
              factors={factors}
              formChange={this.handleFormChange.bind(this)} />
          </div>
          <div className={'c-1'}>
            <Payment
              factors={factors} />
          </div>
        </div>
        <style jsx>{`
          .c-1 {
            flex: 1;
          }

          .c-1:last-child {
            margin-top: 2rem;
            flex: 1;
          }

          @media (min-width: 960px) {
            .c-1 {
              flex: 0.67;
              margin-right: 2rem;
              margin-top: 0;
            }

            .c-1:last-child {
              margin-right: 0;
              flex: 0.33;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index
