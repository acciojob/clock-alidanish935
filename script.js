//your JS code here. If required.
function updateTimer() {
	const timerElem = document.getElementById("timer");
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth()+1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2,"0");
	const hour = date.getHours();
	const min = String(date.getMinutes()).padStart(2, "0");
	const sec = String(date.getSeconds()).padStart(2,"0");
	const ampm = hour>=12?"PM":"AM";
	const formattedHr = hour%12|| 12;
	const formattedTime =`${month}/${day}/${year}, ${formattedHr}:${min}:${sec} ${ampm} `;
	timerElem.textContent = formattedTime;
	
}
updateTimer()
setInterval(updateTimer, 1000);

