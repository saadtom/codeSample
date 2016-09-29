function clock() {
	// let's use the date object
	var currentDate = new Date();
	var year = currentDate.getFullYear(); 
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate(); 
	var hours = currentDate.getHours(); 
	var minutes = ("0" + currentDate.getMinutes()).slice(-2); // here we are showing 2 digits for minutes
	var seconds = ("0" + currentDate.getSeconds()).slice(-2); // here we are showing 2 digits for seconds
	var morningOrNoon = "AM"; 
	var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

	// let's find what day of the week is today
	var today = daysOfTheWeek[currentDate.getDay()];

	// if this is afternoon time the clock should show PM 
	if (hours > 12) {
		hours = hours - 12; 
		hours = ("0" + hours).slice(-2); // here we are showing 2 digits for the hours like 03:00:00
		morningOrNoon = "PM"; 
	} else if (hours == 12 ) {
		morningOrNoon = "PM"; 
	}

	var currentTime = hours + ":"+ minutes + ":" + seconds;

	//now let's append the time that we made to our web page
	document.getElementById("clock").innerHTML = " "; 
	var timeParagraph = document.createElement("h1");
	var ampm = document.createElement("h1");
	    timeParagraph.innerHTML = currentTime; 
	    timeParagraph.style.width = "300px"; 
	    ampm.innerHTML = morningOrNoon;
		$("#clock").append(timeParagraph);
		$("#clock").append(ampm);

	// now let's append the date as well 
	var todayParagraph = document.createElement("p"); 
		todayParagraph.innerHTML = today + "<br>" + month + "/" + day + "/" + year;
		$("#clock").append(todayParagraph); 
}

//using the interval we will run the clock function each second 
setInterval(clock,1000); 
window.onload = clock; 
