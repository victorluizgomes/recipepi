var indexButtons = document.querySelectorAll(".button");
var currentIndex = 0;

window.addEventListener('keypress', function (e) {
	var keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode == 50) { // down key
    	if(currentIndex + 1 < indexButtons.length){
            indexButtons[currentIndex].classList.remove("selected");
            indexButtons[currentIndex + 1].classList.add("selected");
            currentIndex = currentIndex + 1;
        }
    }

    if(keyCode == 56) { // up key
    	if(currentIndex - 1 >= 0){
            indexButtons[currentIndex].classList.remove("selected");
            indexButtons[currentIndex - 1].classList.add("selected");
            currentIndex = currentIndex - 1;
        }
    }

    if(keyCode == 13) { // enter key
    	indexButtons[currentIndex].click();
    }

    if(keyCode == 45) { // - key
    	window.history.back();
    }

    if(keyCode == 42) { // * key
        window.location.reload();
    }
});


