// Enums exist when you want to restrict user's choice for the selection of variables.
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Aisle111";
    SeatChoice["MIDDLE"] = "Middle222";
    SeatChoice["MIDDLE2"] = "Middle333";
    SeatChoice["WINDOW"] = "Window444";
})(SeatChoice || (SeatChoice = {}));
var windowSeat = SeatChoice.WINDOW;
console.log(windowSeat);
