input.onButtonPressed(Button.A, function () {
    radio.sendString("Ok")
    radio.sendValue("Name", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Maybe")
    radio.sendValue("Name", 2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
    radio.sendValue("Name", 2)
})
