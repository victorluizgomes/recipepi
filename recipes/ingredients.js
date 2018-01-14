var indexButtons = document.querySelectorAll(".startCookingButton"); 

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