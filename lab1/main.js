class Account {
    // public acc_no:Number; 
    // public balance:Number;
    constructor(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class Current_account extends Account {
    // interest_rate:Number;
    constructor(acc_no, balance, interest_rate) {
        super(acc_no, balance);
        this.interest_rate = interest_rate;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class Saving_account extends Account {
    // min_balance: Number;
    constructor(acc_no, balance, min_balance) {
        super(acc_no, balance);
        this.min_balance = min_balance;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
