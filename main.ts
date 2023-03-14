let TERMINO_A = 0
let TERMINO_B = 0
let TERMINO_C = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("Hola, vamos a resolver la ecuación: ")
    basic.showNumber(TERMINO_A)
    basic.showString("X")
    basic.showString(" + ")
    basic.showNumber(TERMINO_B)
    basic.showString(" = ")
    basic.showNumber(TERMINO_C)
})
input.onButtonPressed(Button.A, function () {
    TERMINO_A += randint(1, 20)
    basic.showNumber(TERMINO_A)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("LA SOLUCIÓN ES X = ")
    basic.showNumber((TERMINO_C - TERMINO_B) / TERMINO_A)
})
input.onButtonPressed(Button.AB, function () {
    TERMINO_C += randint(0, 20)
    basic.showNumber(TERMINO_C)
})
input.onButtonPressed(Button.B, function () {
    TERMINO_B += randint(0, 20)
    basic.showNumber(TERMINO_B)
})
