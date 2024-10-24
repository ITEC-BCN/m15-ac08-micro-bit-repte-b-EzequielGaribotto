input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", tempo), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 - A C5 - A E B ", tempo), music.PlaybackMode.UntilDone)
    while (true) {
        setTempo()
    }
})
function setTempo () {
    control.waitForEvent(input.compassHeading(), 1)
    tempo += 1
}
let tempo = 0
tempo = 120
let direccion_brujula = input.compassHeading()
basic.forever(function () {
    led.plotBarGraph(
    input.compassHeading(),
    360
    )
})
