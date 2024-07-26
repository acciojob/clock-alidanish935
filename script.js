//your JS code here. If required.
function updateTimer() {
	const timerElem = document.getElementById("timer");
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth()+1);
	const day = String(date.getDate());
	const hour = date.getHours();
	const day = String(date.getMinutes());
	const day = String(date.getSeconds());
	const formattedTime =`${month}/${day}/${year}`;
	timerElem.textContent = formattedTime;
	
}
updateTimer()

