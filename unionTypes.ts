// Introduction to union types

let score: string | number = "";
// union types allows us to use the combination of types i.e. score can be either a string or number.
score = "55";
score = 55;

type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}
// custom types
type SuperAdminUser = Admin & User; // This would declare a type with userName, name, id as properties.

let adminUser: SuperAdminUser = {
    name: "Vijay",
    userName: "Vijay",
    id: 1
}

type SubAdminUser = Admin | User // This would declare a custom datatype with either Admin or User data

// usage 1
let subAdminUser: SubAdminUser = {
    name: "Vijay",
    id: 1,
    userName: "Vijay"
}

// usage 2
let subAdminUser2: SubAdminUser = {
    name: "Vijay",
    id: 2
}

// using ids with optional datatypes 
function getIdFromDb(id: number|string): number|string {
    if (typeof id === "string") {
        return id.toLowerCase();
    } else {
        return id.toFixed(2);
    }
}



// variable accepting only certain set of values
let seatAllotment: "lower" | "middle" | "upper";
// seatAllotment = "sideLower"; will throw an error as seatAllotment can take up only above three values.