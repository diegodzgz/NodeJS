var fs = require('fs');
var https = require('https');
const cron = require('node-cron');
const express = require('express');

function descargarImagen(url, ruta){
	var fullUrl = url;
	var file = fs.createWirteStream(ruta);
	var request = https.get(url, function (response){
		response.pipe(file);
	})
}
app = express();

cron.schedule( '0 0 * * *', function() {
	descargarImagen('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png', '/media')
	});

app.listen(3000);
