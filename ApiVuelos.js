var mongoose = requiere('mongoose'),
	Schema=mongoose.Schema;


	var vuelos = new Schema({
		aerolinea:String,
		ciudad_origen:String,
		ciudad_destino:String,
		fecha_hora_salida:String,
		fecha_hora_llegada:String
	});

	module.exports = mongoose.model('Vuelos',vuelos); 