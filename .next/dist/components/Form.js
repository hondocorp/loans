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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hondo/Projects/Hondo/loans/components/Form.js';


var NumberFormat = require('react-number-format');

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form(props) {
    (0, _classCallCheck3.default)(this, Form);

    return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));
  }

  (0, _createClass3.default)(Form, [{
    key: 'handleChange',
    value: function handleChange(obj) {
      this.props.formChange(obj);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('h2', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Vehicle Details'), _react2.default.createElement('div', { className: 'f', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('label', { htmlFor: 'amount', className: 'f-l', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Vehicle Cost'), _react2.default.createElement('input', { type: 'text', name: 'cost', value: this.props.factors.cost, onChange: function onChange(e) {
          _this2.handleChange({ cost: e.target.value });
        }, className: 'f-i', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement('div', { className: 'f', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('label', { htmlFor: 'amount', className: 'f-l', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Down Payment'), _react2.default.createElement('input', { type: 'text', name: 'down', value: this.props.factors.down, onChange: function onChange(e) {
          _this2.handleChange({ down: e.target.value });
        }, className: 'f-i', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement('hr', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('h2', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Taxes'), _react2.default.createElement('div', { className: 'f', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('label', { htmlFor: 'tax', className: 'f-l', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Sales Tax'), _react2.default.createElement('input', { type: 'text', name: 'amount', value: this.props.factors.tax, onChange: function onChange(e) {
          _this2.handleChange({ tax: e.target.value });
        }, className: 'f-i', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('hr', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('h2', {
        'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Loan Details'), _react2.default.createElement('div', { className: 'f', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('label', { htmlFor: 'rate', className: 'f-l', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Interest Rate'), _react2.default.createElement('input', { type: 'text', name: 'rate', value: this.props.factors.rate, onChange: function onChange(e) {
          _this2.handleChange({ rate: e.target.value });
        }, className: 'f-i', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement('div', { className: 'f', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('label', { htmlFor: 'term', className: 'f-l', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Term in Months'), _react2.default.createElement('input', { type: 'text', name: 'term', value: this.props.factors.term, onChange: function onChange(e) {
          _this2.handleChange({ term: e.target.value });
        }, className: 'f-i', 'data-jsx': 2478274767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 2478274767,
        css: 'h2[data-jsx="2478274767"]{margin:0;line-height:1}.f[data-jsx="2478274767"]{margin-top:1rem}.f-i[data-jsx="2478274767"]{border:2px solid hsla(212,80%,43%,1.000);box-sizing:border-box;padding:0.75rem;width:100%;font-size:125%}.f-l[data-jsx="2478274767"]{display:block;text-transform:uppercase;margin-bottom:0.25rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBR3NCLEFBS08sQUFJNEIsQUFROUIsU0FoQkEsS0FpQlcsRUFaM0IsT0FKQSxnQkFpQndCLEVBVEEsb0JBVXhCLEVBVGtCLGdCQUNMLFdBQ0ksZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ob25kby9Qcm9qZWN0cy9Ib25kby9sb2FucyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmxldCBOdW1iZXJGb3JtYXQgPSByZXF1aXJlKCdyZWFjdC1udW1iZXItZm9ybWF0Jyk7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShvYmopIHtcbiAgICB0aGlzLnByb3BzLmZvcm1DaGFuZ2Uob2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlZlaGljbGUgRGV0YWlsczwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZlwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwiZi1sXCI+VmVoaWNsZSBDb3N0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29zdFwiIHZhbHVlPXt0aGlzLnByb3BzLmZhY3RvcnMuY29zdH0gb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5oYW5kbGVDaGFuZ2Uoe2Nvc3Q6IGUudGFyZ2V0LnZhbHVlfSl9fSBjbGFzc05hbWU9XCJmLWlcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJmLWxcIj5Eb3duIFBheW1lbnQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkb3duXCIgdmFsdWU9e3RoaXMucHJvcHMuZmFjdG9ycy5kb3dufSBvbkNoYW5nZT17KGUpID0+IHt0aGlzLmhhbmRsZUNoYW5nZSh7ZG93bjogZS50YXJnZXQudmFsdWV9KX19IGNsYXNzTmFtZT1cImYtaVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGgyPlRheGVzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXhcIiBjbGFzc05hbWU9XCJmLWxcIj5TYWxlcyBUYXg8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiB2YWx1ZT17dGhpcy5wcm9wcy5mYWN0b3JzLnRheH0gb25DaGFuZ2U9eyhlKSA9PiB7dGhpcy5oYW5kbGVDaGFuZ2Uoe3RheDogZS50YXJnZXQudmFsdWV9KX19IGNsYXNzTmFtZT1cImYtaVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGgyPkxvYW4gRGV0YWlsczwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZlwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0ZVwiIGNsYXNzTmFtZT1cImYtbFwiPkludGVyZXN0IFJhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyYXRlXCIgdmFsdWU9e3RoaXMucHJvcHMuZmFjdG9ycy5yYXRlfSBvbkNoYW5nZT17KGUpID0+IHt0aGlzLmhhbmRsZUNoYW5nZSh7cmF0ZTogZS50YXJnZXQudmFsdWV9KX19IGNsYXNzTmFtZT1cImYtaVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlcm1cIiBjbGFzc05hbWU9XCJmLWxcIj5UZXJtIGluIE1vbnRoczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRlcm1cIiB2YWx1ZT17dGhpcy5wcm9wcy5mYWN0b3JzLnRlcm19IG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuaGFuZGxlQ2hhbmdlKHt0ZXJtOiBlLnRhcmdldC52YWx1ZX0pfX0gY2xhc3NOYW1lPVwiZi1pXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mLWkge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgaHNsYSgyMTIsIDgwJSwgNDMlLCAxLjAwMCk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMjUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mLWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iXX0= */\n/*@ sourceURL=components/Form.js */'
      }));
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;