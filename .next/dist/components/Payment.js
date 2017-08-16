'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _math = require('../lib/math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hondo/Projects/Hondo/loans/components/Payment.js';


var NumberFormat = require('react-number-format');

var Payment = function (_Component) {
  (0, _inherits3.default)(Payment, _Component);

  function Payment(props) {
    (0, _classCallCheck3.default)(this, Payment);

    return (0, _possibleConstructorReturn3.default)(this, (Payment.__proto__ || (0, _getPrototypeOf2.default)(Payment)).call(this, props));
  }

  (0, _createClass3.default)(Payment, [{
    key: 'render',
    value: function render() {
      var payment = (0, _math.calculatePayment)(this.props.factors);
      var total_cost = (0, _math.calculateTotalCost)(this.props.factors);
      var interest_cost = (0, _math.calculateInterestCost)(this.props.factors);

      return _react2.default.createElement('div', { className: 'p', 'data-jsx': 2587915688,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 2587915688,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Monthly Payment'), _react2.default.createElement('p', { className: 'p-a', 'data-jsx': 2587915688,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(NumberFormat, { value: payment, displayType: 'text', thousandSeparator: true, prefix: '$', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement('p', { className: 'p-m', 'data-jsx': 2587915688,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Over the life of this loan, you will pay ', _react2.default.createElement(NumberFormat, { value: total_cost, decimalPrecision: 2, displayType: 'text', thousandSeparator: true, prefix: '$', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), '. This loan will cost you ', _react2.default.createElement(NumberFormat, { value: interest_cost, decimalPrecision: 2, displayType: 'text', thousandSeparator: true, prefix: '$', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), ' in interest.'), _react2.default.createElement(_style2.default, {
        styleId: 2587915688,
        css: '.p[data-jsx="2587915688"]{background-color:hsla(212,80%,43%,1.000);color:#ffffff;padding:2rem;text-align:center}h3[data-jsx="2587915688"]{margin:0 0 1rem}.p-a[data-jsx="2587915688"]{font-size:300%;margin:0 0 1rem;font-weight:700}.p-m[data-jsx="2587915688"]{margin:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGF5bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBR3lELEFBTzVCLEFBSUQsQUFNTixTQUNYLE1BTmtCLENBSmxCLGVBS2tCLFVBWkYsTUFhaEIsUUFaZSxhQUNLLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1BheW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvbmRvL1Byb2plY3RzL0hvbmRvL2xvYW5zIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y2FsY3VsYXRlUGF5bWVudCwgY2FsY3VsYXRlVG90YWxDb3N0LCBjYWxjdWxhdGVJbnRlcmVzdENvc3R9IGZyb20gJy4uL2xpYi9tYXRoJztcblxubGV0IE51bWJlckZvcm1hdCA9IHJlcXVpcmUoJ3JlYWN0LW51bWJlci1mb3JtYXQnKTtcblxuY2xhc3MgUGF5bWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXltZW50ID0gY2FsY3VsYXRlUGF5bWVudCh0aGlzLnByb3BzLmZhY3RvcnMpO1xuICAgIGxldCB0b3RhbF9jb3N0ID0gY2FsY3VsYXRlVG90YWxDb3N0KHRoaXMucHJvcHMuZmFjdG9ycyk7XG4gICAgbGV0IGludGVyZXN0X2Nvc3QgPSBjYWxjdWxhdGVJbnRlcmVzdENvc3QodGhpcy5wcm9wcy5mYWN0b3JzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J3AnfT5cbiAgICAgICAgPGgzPk1vbnRobHkgUGF5bWVudDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17J3AtYSd9PjxOdW1iZXJGb3JtYXQgdmFsdWU9e3BheW1lbnR9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSBwcmVmaXg9eyckJ30gLz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17J3AtbSd9Pk92ZXIgdGhlIGxpZmUgb2YgdGhpcyBsb2FuLCB5b3Ugd2lsbCBwYXkgPE51bWJlckZvcm1hdCB2YWx1ZT17dG90YWxfY29zdH0gZGVjaW1hbFByZWNpc2lvbj17Mn0gZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHByZWZpeD17JyQnfSAvPi4gVGhpcyBsb2FuIHdpbGwgY29zdCB5b3UgPE51bWJlckZvcm1hdCB2YWx1ZT17aW50ZXJlc3RfY29zdH0gZGVjaW1hbFByZWNpc2lvbj17Mn0gZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHByZWZpeD17JyQnfSAvPiBpbiBpbnRlcmVzdC48L3A+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIxMiwgODAlLCA0MyUsIDEuMDAwKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wLWEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnAtbSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFxuIl19 */\n/*@ sourceURL=components/Payment.js */'
      }));
    }
  }]);

  return Payment;
}(_react.Component);

exports.default = Payment;