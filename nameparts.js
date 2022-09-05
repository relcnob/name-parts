("use strict");
const fullName = `Peter Heronimous Lind`;

const firstNameEnd = fullName.indexOf(` `);
const fistName = fullName.substring(0, firstNameEnd);
const middleNameEnd = fullName.indexOf(` `, firstNameEnd + 1);
const middleName = fullName.substring(firstNameEnd + 1, middleNameEnd);
const lastName = fullName.substring(middleNameEnd + 1);
console.log(fistName);
console.log(middleName);
console.log(lastName);
