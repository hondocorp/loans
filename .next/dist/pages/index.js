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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Form = require('../components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Payment = require('../components/Payment');

var _Payment2 = _interopRequireDefault(_Payment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hondo/Projects/Hondo/loans/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      cost: 12000,
      down: 1000,
      rate: 2.9,
      term: 48,
      tax: 5.25
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleFormChange',
    value: function handleFormChange(obj) {
      this.setState(obj);
    }
  }, {
    key: 'render',
    value: function render() {
      var factors = {
        cost: this.state.cost * 1,
        down: this.state.down * 1,
        rate: this.state.rate * 1,
        term: this.state.term * 1,
        tax: this.state.tax * 1
      };

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', { className: 'b', 'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Auto Loan Calculator'), _react2.default.createElement('p', {
        'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Simple auto loan calculator that you can save for offline use.')), _react2.default.createElement('div', { className: 'c', 'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('div', { className: 'c-1', 'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_Form2.default, {
        factors: factors,
        formChange: this.handleFormChange.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement('div', { className: 'c-1', 'data-jsx': 2128283019,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_Payment2.default, {
        factors: factors, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: 2128283019,
        css: '.c-1[data-jsx="2128283019"]{-webkit-flex:1;-ms-flex:1;flex:1}.c-1[data-jsx="2128283019"]:last-child{margin-top:2rem;-webkit-flex:1;-ms-flex:1;flex:1}@media (min-width:960px){.c-1[data-jsx="2128283019"]{-webkit-flex:0.67;-ms-flex:0.67;flex:0.67;margin-right:2rem;margin-top:0}.c-1[data-jsx="2128283019"]:last-child{margin-right:0;-webkit-flex:0.33;-ms-flex:0.33;flex:0.33}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHb0IsQUFJUyxBQU1KLEFBTUssZUFDTCxDQVpMLGlCQUpULFNBVXNCLE9BTHRCLFFBWUUsR0FOZSxhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ob25kby9Qcm9qZWN0cy9Ib25kby9sb2FucyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgUGF5bWVudCBmcm9tICcuLi9jb21wb25lbnRzL1BheW1lbnQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29zdDogMTIwMDAsXG4gICAgICBkb3duOiAxMDAwLFxuICAgICAgcmF0ZTogMi45LFxuICAgICAgdGVybTogNDgsXG4gICAgICB0YXg6IDUuMjUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUZvcm1DaGFuZ2Uob2JqKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvYmopO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBmYWN0b3JzID0ge1xuICAgICAgY29zdDogdGhpcy5zdGF0ZS5jb3N0ICogMSxcbiAgICAgIGRvd246IHRoaXMuc3RhdGUuZG93biAqIDEsXG4gICAgICByYXRlOiB0aGlzLnN0YXRlLnJhdGUgKiAxLFxuICAgICAgdGVybTogdGhpcy5zdGF0ZS50ZXJtICogMSxcbiAgICAgIHRheDogdGhpcy5zdGF0ZS50YXggKiAxXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYid9PlxuICAgICAgICAgIDxoMT5BdXRvIExvYW4gQ2FsY3VsYXRvcjwvaDE+XG4gICAgICAgICAgPHA+U2ltcGxlIGF1dG8gbG9hbiBjYWxjdWxhdG9yIHRoYXQgeW91IGNhbiBzYXZlIGZvciBvZmZsaW5lIHVzZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2MnfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2MtMSd9PlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgZmFjdG9ycz17ZmFjdG9yc31cbiAgICAgICAgICAgICAgZm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjLTEnfT5cbiAgICAgICAgICAgIDxQYXltZW50XG4gICAgICAgICAgICAgIGZhY3RvcnM9e2ZhY3RvcnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmMtMSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jLTE6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgICAgIC5jLTEge1xuICAgICAgICAgICAgICBmbGV4OiAwLjY3O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jLTE6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgZmxleDogMC4zMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;