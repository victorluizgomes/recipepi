var indexButtons = document.querySelectorAll(".startCookingButton"); 

function playRandomAudio(){
    var random = Math.floor(Math.random() * 6);
    console.log('here');

    if(random == 0) {
        new Audio('../../audio/Audio 5_1.wav').play();
    } else if(random == 1) {
        new Audio('../../audio/Audio 6_1.wav').play();
    } else if(random == 2) {
        new Audio('../../audio/Audio 7_1.wav').play();
    } else if(random == 3) {
        new Audio('../../audio/Audio 8_1.wav').play();
    } else if(random == 4) {
        new Audio('../../audio/Audio 9_1.wav').play();
    } else {
        new Audio('../../audio/Audio 10_1.wav').play();
    }
}

window.addEventListener('keypress', function (e) {
	var keyCode = e.keyCode;
    console.log(keyCode);

    if(keyCode == 13) { // enter key

    	indexButtons[0].click();
    }

    if(keyCode == 43) { // + key
		indexButtons[1].click();
	}

    if(keyCode == 45) { // minus key ( - )
    	window.history.back();
    }
});