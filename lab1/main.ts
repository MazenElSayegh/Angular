abstract class Account {

    // public acc_no:Number; 
    // public balance:Number;
    constructor (public acc_no:Number, public balance:Number){}
    debitAmount() {}
    creditAmount() {}
    getBalance() {}
}

interface IAccount {
    date_of_opening:Date;

    addCustomer();
    removeCustomer();
}

class Current_account extends Account implements IAccount {
    date_of_opening: Date;
    // interest_rate:Number;
    constructor (acc_no:Number,balance:Number,public interest_rate:Number){
        super(acc_no,balance);
    }

    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}

class Saving_account extends Account implements IAccount {
    date_of_opening: Date;
    // min_balance: Number;
    constructor (acc_no:Number,balance:Number,public min_balance:Number){
        super(acc_no,balance);
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}