function transaction(amount) {
    var newAmount;
    
  // check if amount is a number
  if (amount === undefined) {
      console.log('Please enter an Amount for the Transaction')
  } else if ( isNaN(amount) === true) {
    console.log('Please enter a valid amount for the Transaction')
  }
  else if ( amount <= 0 ) {
    console.log ('please enter a positive value for the amount of the transaction')
      
    }
  
  else {
    if (amount >= 1 && amount <= 5000) {

      const commission = 10;
    //   newAmount = amount + commission
      console.log(
        `Your Transactions is ₦${amount} and less than ₦5,000. Commission of ₦${commission}`);
      return;
    }
    
    else if (amount > 5000 && amount <= 50000) {
      const commission = 25;
    //   newAmount = amount + commission
      console.log(`Your Transaction is ₦${amount} and it is greater than ₦5,000. Commission is ₦${commission}`);
    }

    else if (amount > 50000) {
      const commission = 50;
    //   newAmount = amount + commission;
      console.log(`Your Transaction is ₦${amount} and it is greater than ₦50,000. Commission is ₦${commission}`)
    }
  }

  return;
}

console.log(transaction());
console.log(transaction(0));
console.log(transaction(-200));
console.log(transaction(3000));
console.log(transaction(7000));
console.log(transaction(70000));
console.log(transaction(sas));
    
