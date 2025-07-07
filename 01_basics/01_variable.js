const accountId = 144553
let accountEmail = "shrey123@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "axis@xyz.com"
accountPassword = "00000099999"
accountCity = "Ahmedabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
