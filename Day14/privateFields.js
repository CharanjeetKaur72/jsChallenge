// Activity 5:  Private Fields

// Task 9:Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// Task 10: Create an instance of the Account class and test the depsit and withdraw methods, logging the balance after each operation.

class Account {
  #balance = 1000;
  #transactions = [];

  constructor() {
    let curDate = new Date();
    this.#transactions.push({
      Balance: this.#balance,
      Time: curDate.toLocaleString(),
      Deposit: 0,
      Withdraw: 0,
    });
  }

  depositAmount(amount) {
    this.#balance += amount;
    this.#updateTransactions(amount, 0);
  }

  withdrawAmount(amount) {
    if (this.#balance < amount) {
      console.log("Error: Cannot withdraw due to insufficient blance. ");
    } else {
      this.#balance -= amount;
      this.#updateTransactions(0, amount);
    }
  }

  get balanceAmount() {
    return this.#balance;
  }

  #updateTransactions(dAmount, wAmount) {
    let curDate = new Date();

    this.#transactions.push({
      Balance: this.#balance,
      Time: curDate.toLocaleString(),
      Deposit: dAmount,
      Withdraw: wAmount,
    });
  }

  showTransactions() {
    console.log("*** Transactions ***");

    for (let x in this.#transactions) {
      console.log(this.#transactions[x]);
    }
    console.log("*** ********* ***");
  }
}

const myAccount = new Account();
myAccount.showTransactions();
console.log("Initial Balance : ", myAccount.balanceAmount);

myAccount.depositAmount(200);
console.log("Balance : ", myAccount.balanceAmount);

myAccount.withdrawAmount(20);
console.log("Balance : ", myAccount.balanceAmount);

myAccount.depositAmount(400);
console.log("Balance : ", myAccount.balanceAmount);

myAccount.showTransactions();
