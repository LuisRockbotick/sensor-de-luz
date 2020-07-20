basic.forever(function () {
    if (input.compassHeading() < 45 && false) {
        while (input.compassHeading() < 45) {
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        }
    } else {
        basic.showNumber(input.compassHeading())
    }
})
basic.forever(function () {
	
})
