module.exports = function(app){
	var Vuelos = require('./ApiVuelos');

	//Get
	findAllvuelos = function(req,res){
		Vuelos.find(function(err,vuelos{
			if(!err) res.send(vuelos);
			else console.log('ERROR:'+err);

		});
	}


	//GET
	findByID = function(req,res){

		Vuelos.findByID(req.param.id, function(err, vuelos ){
				if(!err) res.send(vuelos);
				else console.log('ERROR:'+err);

		});
	}


	//POST
	addVuelos = function(req,res){
		console.log('POST');
		console.log(req.body);

		var vuelos = new Vuelos({
			aerolinea:req.body.aerolinea,
			ciudad_origen:req.body.ciudad_origen,
			ciudad_destino:req.body.ciudad_destino,
			fecha_hora_salida:req.body.fecha_hora_salida,
			fecha_hora_llegada:req.body.fecha_hora_llegada
		});

		Vuelos.save(function(err){
			if(!err) console.log('Vuelo Guardado');
				else console.log('ERROR:'+err);

		});

		res.send(vuelos);

	};

	//PUT Update
	updateVuelos = function(req,res){
		Vuelos.findByID(req.params.id, function(err,vuelos){
			vuelos.aerolinea=req.body.aerolinea;
			vuelos.ciudad_origen=req.body.ciudad_origen;
			vuelos.ciudad_destino=req.body.ciudad_destino;
			vuelos.fecha_hora_salida=req.body.fecha_hora_salida;
			vuelos.fecha_hora_llegada=req.body.fecha_hora_llegada
		});

		vuelos.save(function(err){
			if(!err) console.log('Vuelo Actualizado');
				else console.log('ERROR:'+err);

		});

		
	};



	//Delete
	deleteVuelos = function(req,res){
		Vuelos.findByID(req.params.id, function(err,vuelos){
			vuelos.remove(function(err){
				if(!err) console.log('Vuelo Borrado');
				else console.log('ERROR:'+err);
			})
		});



		//API Routes
		app.get('/vuelos', findAllvuelos);
		app.get('/vuelos/:id', findByID);
		app.post('/vuelos', addVuelos);
		app.put('/vuelos/:id', updateVuelos);
		app.delete('vuelos/:id' deleteVuelos);



}