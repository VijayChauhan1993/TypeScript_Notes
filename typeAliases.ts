// function that takes object as argument and returns an object back

// function createUser({ name: string, isPaid: boolean }): {name: string, isPaid: boolean}{
//     console.log({ name: this.name, isPaid: this.isPaid });
//     return { name: this.name, isPaid: this.isPaid };
// }

// createUser({ name: "Vijay", isPaid: true });

// type aliases examples
type User = {
    name: string;
    email?: string;
    isPaid: boolean;
}
 
function createUserUsingType(user: User): User {
    if(user?.email)
        return { name: user.name, isPaid: user.isPaid };
    else
        return { name: user.name, isPaid:user.isPaid, email: user.email };
}

let userDetails = createUserUsingType({ name: "vijay", isPaid: true });
console.log(userDetails);

/** In case you want the User properties to unchanged from the original state : example _id(MongoDB ids) 
 * You can make it read only. 
 */

type User1 = {
    readonly _id: string; // readonly keyword makes this property unchangable
    name: string;
    email?: string;
    isPaid: boolean;
}

let user1: User1 = {
    _id: "12123", // readonly keyword makes this property unchangable
    name: "Vijay",
    email: "v@v.in",
    isPaid: true
}

user1.email = "vijay@gmail.com"; // does not throw an error
// user1._id = "123123";  ---------> throws an error as _id property is defined as readonly

type CardNumber = {
    cardNumber: number;
}

type CardDate = {
    cardDate: string;
}

// defining new type from the existing ones
type CardDetails = CardNumber & CardDate & {cvv : number}; 

let cardDetails: CardDetails = {
    cardNumber: 1231234,
    cardDate: "14/12/1993",
    cvv : 978123
}

type OptionalCardDetails = CardNumber | CardDate | { cvv: number }

let newFormCardDetails: OptionalCardDetails = {
    cardNumber: 1231234,
    cvv: 123
}

export {};



