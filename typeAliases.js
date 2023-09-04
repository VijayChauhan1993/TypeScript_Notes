"use strict";
// function that takes object as argument and returns an object back
Object.defineProperty(exports, "__esModule", { value: true });
function createUserUsingType(user) {
    if (user === null || user === void 0 ? void 0 : user.email)
        return { name: user.name, isPaid: user.isPaid };
    else
        return { name: user.name, isPaid: user.isPaid, email: user.email };
}
var userDetails = createUserUsingType({ name: "vijay", isPaid: true });
console.log(userDetails);
