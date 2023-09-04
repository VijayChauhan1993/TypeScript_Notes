"use strict";
// function that takes object as argument and returns an object back
Object.defineProperty(exports, "__esModule", { value: true });
function createUserUsingType(user) {
    if (user === null || user === void 0 ? void 0 : user.email)
        return { name: user.name, isPaid: user.isPaid };
    else
        return { name: user.name, isPaid: user.isPaid, email: user.email };
}
let userDetails = createUserUsingType({ name: "vijay", isPaid: true });
console.log(userDetails);
let user1 = {
    _id: "12123",
    name: "Vijay",
    email: "v@v.in",
    isPaid: true
};
user1.email = "vijay@gmail.com"; // does not throw an error
let cardDetails = {
    cardNumber: 1231234,
    cardDate: "14/12/1993",
    cvv: 978123
};
let newFormCardDetails = {
    cardNumber: 1231234,
    cvv: 123
};
