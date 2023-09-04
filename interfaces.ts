interface NewUser {
    readonly dbId: string
    name: string
    userId: string
    gmailId: string
    isActive: boolean
    getStarted: () => string // signifies getStarted is a method inside interface, string is the return type here.
    getStarted2(text:string) : string // this is another way you can define a function inside of the interface.
};

// this is how we define functions and methods inside of the interface. Those functions/methods can be used as shown below.
let john: NewUser = { dbId: "123", name: "John", userId: "123", gmailId: "j@j.in", isActive: true, getStarted() { return "getting started"; }, getStarted2(text) { return "getting started2 " + text }, githubToken: "qwerty" };

// re-opening the interface. 
// This adds githubToken property to the existing interface.
interface NewUser {
    githubToken: string;
}


// Inheritence

interface Administrator extends NewUser {
    role: "Admin" | "Member" | "Non-member";
}

let adminJohn: Administrator = { dbId: "123", name: "John", userId: "123", gmailId: "j@j.in", isActive: true, getStarted() { return "getting started"; }, getStarted2(text) { return "getting started2 " + text }, githubToken: "qwerty", role: "Admin" };

// One can inherit multiple interfaces as shown below

interface Member { }

interface SuperAdmin extends Administrator, Member { }
