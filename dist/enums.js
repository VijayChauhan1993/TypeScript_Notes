"use strict";
// Enums exist when you want to restrict user's choice for the selection of variables.
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Aisle111";
    SeatChoice["MIDDLE"] = "Middle222";
    SeatChoice[SeatChoice["MIDDLE2"] = 12] = "MIDDLE2";
    SeatChoice["WINDOW"] = "Window444";
})(SeatChoice || (SeatChoice = {}));
let windowSeat = SeatChoice.WINDOW;
console.log(windowSeat);
