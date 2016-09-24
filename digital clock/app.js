function clock() {
	var someDate = new Date();
	var year = someDate.getFullYear(); 
	var month = someDate.getMonth();
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
	document.getElementById("clock").innerHTML = " "; 
	var timeParagragh = document.createElement("h1");
	var ampm = document.createElement("h1");
	    timeParagragh.innerHTML = currentTime; 
	    ampm.innerHTML = morningOrNoon;
		$("#clock").append(timeParagragh);
		$("#clock").append(ampm);

	var todayParagragh = document.createElement("p"); 
		todayParagragh.innerHTML = today + "<br>" + month + "/" + day + "/" + year;
		$("#clock").append(todayParagragh); 
}

setInterval(clock,1000); 