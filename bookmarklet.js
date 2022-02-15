function click(n) {
	document.getElementsByClassName("button__StyledButton-sc-1hmy6jw-0 ibmPUd")[n].click();
}

if(!window.location.href.includes("covid-19.ontario.ca/school-screening")) {
	if (confirm("You must be on the screening site to use this! Click OK to be redirected")) {
		window.location.href="https://covid-19.ontario.ca/school-screening"
	}
} else {
	click(0);
	setTimeout(click, 200, 1);
	setTimeout(click, 400, 0);
	setTimeout(click, 600, 0);
	setTimeout(click, 800, 0);
	setTimeout(click, 1000, 0);
	setTimeout(click, 1200, 0);
	setTimeout(click, 1400, 0);
}
