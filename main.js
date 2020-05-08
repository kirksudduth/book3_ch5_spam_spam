import customers from "./spam.js";
console.log("Spammin we spammin");
// From that array, extract just the customers'
// contact email addresses and store them in a
// new array. You will need a nested array method
// - meaning one iteration inside another one -
// since you need to iterate the entire array of
// customers, and then iterate the array of emails
// for each one.
const emailArray = [];
customers.forEach((customer) => {
  customer.contacts.email.forEach((email) => {
    emailArray.push(email);
  });
});
console.log("emails?", emailArray);
