import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (value && Number.isInteger(value)) {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be an integer');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value && value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Object not from Currency class');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
