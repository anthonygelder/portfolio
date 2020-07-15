function getStylesheet() {
	var currentTime = new Date().getHours();
	if (0 <= currentTime&&currentTime < 12) {
	 document.write("<link rel='stylesheet' href='main.css' type='text/css'>");
	} if (12 <= currentTime&&currentTime < 24) {
		document.write("<link rel='stylesheet' href='main2.css' type='text/css'>");
	}
	// if (5 <= currentTime&&currentTime < 11) {
	//  document.write("<link rel='stylesheet' href='main.css' type='text/css'>");
	// }
	// if (11 <= currentTime&&currentTime < 16) {
	//  document.write("<link rel='stylesheet' href='main.css' type='text/css'>");
	// }
	// if (16 <= currentTime&&currentTime < 22) {
	//  document.write("<link rel='stylesheet' href='main.css' type='text/css'>");
	// }
	// if (22 <= currentTime&&currentTime <= 24) {
	//  document.write("<link rel='stylesheet' href='main.css' type='text/css'>");
	// }
}

getStylesheet();

