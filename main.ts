input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        # # # # #
        . . . . #
        # # . . #
        # # # . #
        . # # . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        # # # # #
        `)
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        basic.showArrow(ArrowNames.East)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        basic.showArrow(ArrowNames.South)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        basic.showArrow(ArrowNames.West)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        basic.showArrow(ArrowNames.North)
    }
})
