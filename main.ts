let addResult = 0
let number1 = 0
let number2 = 0
let result = 0
input.onButtonPressed(Button.A, function () {
    addResult = add(3, 4)
    basic.showNumber(addResult)
})
function showName1 () {
    basic.showString("Adam")
}
function showNameWithParameter (name: string) {
    basic.showString(name)
}
input.onButtonPressed(Button.AB, function () {
    number1 = 1
    number2 = 1
    for (let index = 0; index < 4; index++) {
        result = add(number1, number2)
        number1 += 1
        number2 += result
        basic.showNumber(result)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    showNameWithParameter("Adam")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    showNameWithParameter("Adam")
    showNameWithParameter("Bob")
    showNameWithParameter("Sarah")
    showNameWithParameter("Jessica")
})
function add (num: number, num2: number) {
    return num + num2
}
