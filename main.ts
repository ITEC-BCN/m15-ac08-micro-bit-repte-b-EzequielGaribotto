input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music.play(music.stringPlayable("C5 B A G F E D C ", tempo), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    music.stopMelody(MelodyStopOptions.Foreground)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.play(music.stringPlayable("C5 - A C5 - A E B ", tempo), music.PlaybackMode.UntilDone)
})
let tempo = 0
tempo = 120
basic.forever(function on_forever() {
    led.plotBarGraph(input.compassHeading(), 360)
    music.setTempo(input.compassHeading())
})
