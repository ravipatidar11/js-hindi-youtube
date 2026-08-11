const accountId="1420"
let accountEmail="ravi@google.com"
var accountPassword="12345"
accountcity="Jaipur"

//accountId=2  Not Possible/Not Allowed
accountEmail="rj@rj.com"
accountPassword="21212121"
accountcity="Bengarulu"

/*
Prefer not to use var 
because of issue in block scope and 
function scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountcity])
