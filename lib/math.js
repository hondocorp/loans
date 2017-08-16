export function calculatePayment(obj) {
  let cost = obj.cost || 0;
  let down = obj.down || 0;
  let term = obj.term || 0;
  let rate = obj.rate || 0;
  let tax = obj.tax || false;
  let total_amount = null;
  let factor = null;
  let interest_factor = null;
  let payment = null;
  let amount = cost - down;

  if (amount > 0) {
    if (tax > 0) {
      total_amount = amount + (amount * (tax / 100));
    } else {
      total_amount = amount;
    }

    if (rate > 0) {
      factor = (rate / 100) / 12;
    } else {
      factor = 0
    }

    interest_factor = Math.pow((1 + factor), (term * -1));
    factor = factor / (1 - interest_factor);
    payment = total_amount * factor;
  } else {
    payment = 0;
  }

  return Math.round(payment * 100) / 100;
}

export function calculateTotalCost(obj) {
  let payment = calculatePayment(obj);

  return Math.round((payment * obj.term) * 100) / 100;
}

export function calculateInterestCost(obj) {
  let cost = obj.cost || 0;
  let down = obj.down || 0;
  let amount = cost - down;
  let total_cost = calculateTotalCost(obj);

  if (amount > 0) {
    return Math.round((total_cost - amount) * 100) / 100;
  } else {
    return 0;
  }
}
