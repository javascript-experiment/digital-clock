
/*function digitalClock(){

	// 01 - time set
	let date = new Date();
	let hours = date.getHours(); // 0-23
	let minutes = date.getMinutes(); // 0-59
	let seconds = date.getSeconds(); // 0-59
	let timeFormate = 'AM';

	// 05 - 24 hourse timeFormate set(am/pm)
	if(hours === 0){
		hours = 12;
	}
	if(hours > 12){
		hours = hours - 12;
		timeFormate = 'PM';
	}

	// 06 - 10 chot hole somoy agge 0 show korbe
	if(hours < 10){
		hours = '0' + hours;
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}

	// 02 - final time set template tutorial
	let finalTime = `${hours}:${minutes}:${seconds}`;

	// 03 - time display show 
	document.getElementById('time').innerText = finalTime;
	document.getElementById('formate').innerText = timeFormate;

}
// 04 - function calling and run(setInterval function 1 second pore run krtteche)
setInterval(digitalClock, 1000)*/


/*====================================================================*/
function digitalClock(){

	// 01 - time set
	let date = new Date();
	let hours = date.getHours(); // 0-23
	let minutes = date.getMinutes(); // 0-59
	let seconds = date.getSeconds(); // 0-59
	let timeFormate = 'AM';

	// 06 - 24 hourse timeFormate set(am/pm)
	if(hours === 0){
		hours = 12;
	}
	if(hours > 12){
		hours = hours - 12;
		timeFormate = 'PM';
	}

	// 07 - 10 chot hole somoy agge 0 show korbe using ternari operator
	hours = hours < 10 ? '0' + hours : hours; //condition true hole execute hobe '0' + hours and false hole execute hobe hours
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	// 02 - final time set template tutorial
	let finalTime = `${hours}:${minutes}:${seconds}`;

	// 03 - time display show 
	document.getElementById('time').innerText = finalTime;
	document.getElementById('formate').innerText = timeFormate;

	// 04 - function run
	setInterval(digitalClock, 1000)

}
// 05 - function calling
digitalClock();