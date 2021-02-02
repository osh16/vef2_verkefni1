function duration(length) {
	var minutes = Math.floor(length/60);
	var seconds = length-minutes*60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	return minutes + ":" + seconds;
}
/*
    Ef aldur er meiri en eitt ár (365 dagar) er birt Fyrir X ári/árum síðan
    Annars, ef aldur er meiri en mánuður (30 dagar) er birt Fyrir X mánuði/mánuðum síðan
    Annars, ef aldur er meiri en vika (7 dagar) er birt Fyrir X viku/vikum síðan
    Annars, ef aldur er meiri en dagur (24 klst) er birt Fyrir X degi/dögum síðan
    Annars, er aldur í klukkustundum birtur Fyrir x klukkustund/klukkustundum síðan
*/
function age(created) {
	var ms = Date.now()-created;
	var seconds = Math.floor(ms/1000);
	var minutes = Math.floor(seconds/60);
	var hour = Math.floor(minutes/60);
	var days = Math.floor(hour/24);
	var weeks = Math.floor(days/7);
	var month = Math.floor(days/30);
	var year = Math.floor(days/365);

	if (year > 1) return `Fyrir ${year} árum síðan`;
	else if (year == 1) return "Fyrir 1 ári síðan";
	else if (month > 1) return `Fyrir ${month} mánuðum síðan`;
	else if (month == 1) return "Fyrir 1 mánuði síðan";
	else if (days > 1) return `Fyrir ${days} dögum síðan`;
	else if (days == 1) return "Fyrir 1 degi síðan";
	else if (hour > 1) return `Fyrir ${hour} klukkustundum síðan`;
	else if (hour == 1) return "Fyrir 1 klukkustund síðan";
}

module.exports = { duration, age };
