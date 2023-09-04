"use strict";
// Introduction to union types
let score = "";
// union types allows us to use the combination of types i.e. score can be either a string or number.
score = "55";
score = 55;
let adminUser = {
    name: "Vijay",
    userName: "Vijay",
    id: 1
};
// usage 1
let subAdminUser = {
    name: "Vijay",
    id: 1,
    userName: "Vijay"
};
// usage 2
let subAdminUser2 = {
    name: "Vijay",
    id: 2
};
// using ids with optional datatypes 
function getIdFromDb(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else {
        return id.toFixed(2);
    }
}
// variable accepting only certain set of values
let seatAllotment;
// seatAllotment = "sideLower"; will throw an error as seatAllotment can take up only above three values.
