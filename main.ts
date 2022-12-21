input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(0)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(180)
    basic.pause(1000)
})
basic.forever(function () {
	
})
