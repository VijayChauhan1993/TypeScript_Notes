"use strict";
;
// this is how we define functions and methods inside of the interface. Those functions/methods can be used as shown below.
let john = { dbId: "123", name: "John", userId: "123", gmailId: "j@j.in", isActive: true, getStarted() { return "getting started"; }, getStarted2(text) { return "getting started2 " + text; }, githubToken: "qwerty" };
let adminJohn = { dbId: "123", name: "John", userId: "123", gmailId: "j@j.in", isActive: true, getStarted() { return "getting started"; }, getStarted2(text) { return "getting started2 " + text; }, githubToken: "qwerty", role: "Admin" };
