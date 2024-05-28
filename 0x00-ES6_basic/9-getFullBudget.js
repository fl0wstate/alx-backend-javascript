import getBudgetObject from "./7-getBudgetObject";

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function () {
      return `$${this.income}`;
    },
    getIncomeInEuros: function () {
      return `${this.income} euros`;
    },
  };

  return fullBudget;
}
