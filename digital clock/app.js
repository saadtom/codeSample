function clock() {
	// let's use the date object
	var someDate = new Date();
	var year = someDate.getFullYear(); 
	var month = someDate.getMonth() + 1;
	var day = someDate.getDate(); 
	var hours = someDate.getHours();
	var minutes = someDate.getMinutes(); 
	var seconds = someDate.getSeconds(); 
	var morningOrNoon = "AM"; 
	var daysOfTheWeek = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 

	var today = daysOfTheWeek[someDate.getDay() - 1];
	if (hours > 12) {
		hours = hours - 12; 
		morningOrNoon = "PM"; 
	}

	var currentTime = hours + ":"+ minutes + ":" + seconds;

	//now let's append the time that we made to our web page
	document.getElementById("clock").innerHTML = " "; 
	var timeParagraph = document.createElement("h1");
	var ampm = document.createElement("h1");
	    timeParagraph.innerHTML = currentTime; 
	    timeParagraph.style.width = "250px"; 
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
