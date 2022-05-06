input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1)
})
basic.forever(function () {
    basic.showNumber(0)
    basic.pause(500)
    basic.showNumber(1)
})
