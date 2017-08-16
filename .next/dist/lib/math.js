"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePayment = calculatePayment;
exports.calculateTotalCost = calculateTotalCost;
exports.calculateInterestCost = calculateInterestCost;
function calculatePayment(obj) {
  var cost = obj.cost || 0;
  var down = obj.down || 0;
  var term = obj.term || 0;
  var rate = obj.rate || 0;
  var tax = obj.tax || false;
  var total_amount = null;
  var factor = null;
  var interest_factor = null;
  var payment = null;
  var amount = cost - down;

  if (amount > 0) {
    if (tax > 0) {
      total_amount = amount + amount * (tax / 100);
    } else {
      total_amount = amount;
    }

    if (rate > 0) {
      factor = rate / 100 / 12;
    } else {
      factor = 0;
    }

    interest_factor = Math.pow(1 + factor, term * -1);
    factor = factor / (1 - interest_factor);
    payment = total_amount * factor;
  } else {
    payment = 0;
  }

  return Math.round(payment * 100) / 100;
}

function calculateTotalCost(obj) {
  var payment = calculatePayment(obj);

  return Math.round(payment * obj.term * 100) / 100;
}

function calculateInterestCost(obj) {
  var cost = obj.cost || 0;
  var down = obj.down || 0;
  var amount = cost - down;
  var total_cost = calculateTotalCost(obj);

  if (amount > 0) {
    return Math.round((total_cost - amount) * 100) / 100;
  } else {
    return 0;
  }
}