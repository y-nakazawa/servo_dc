input.onButtonPressed(Button.A, function () {
    motor.servo(motor.Servos.S8, 125)
    basic.pause(800)
    motor.servo(motor.Servos.S8, 0)
})
input.onButtonPressed(Button.AB, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 50)
    basic.pause(300)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 0)
})
input.onButtonPressed(Button.B, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    basic.pause(500)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
})
