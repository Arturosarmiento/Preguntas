var a = $('section.prueba').children();
var b;
var c;
var x = 0;
var todos = false;
var preg = [
	//Naruraleza
	{categorias: 'Naturaleza', preguntas: [
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
	]},
	//Deportes
	{categorias: 'Deportes', preguntas: [
		{textoEnunciado: '¿Sabías que país ha ganado más medallas olímpicas de invierno en la historia?', imagenIncorrecta: 'banderaestadosunidos.jpg', imagenCorrecta: 'banderanoruega.png', correcta: 'Noruega', incorrecta: 'Esatdos Unidos', incorrectaExplicacion: '<span>¡Muy mal!</span> Contando las medallas otorgadas en los pasados JJ.OO de Londres, el país norteamericano lidera este ránking de los juegos de verano con 2.298 medallas en total (930 de oro, 730 de plata y 638 de bronce), seguido por Rusia (URSS) con un total de 1010 (395-319-296) y Reino Unido con 715 (236-255-253). Por su parte, España es 28ª en número de medallas con 130 en total (37-59-34). <span>Sin embargo, en lo que respecta a los JJ.OO de invierno la tendencia cambia, ya que el país con más medallas es Noruega con 303 (107-106-90), seguido por los EE.UU gracias a sus 253 preseas (87-95-71).</span>', correctaExplicacion: '<span>¡Muy bien!</span> Ha participado en 25 ediciones de los Juegos Olímpicos de Verano, su primera presencia tuvo lugar en París 1900. El país ha obtenido un total de 152 medallas en las ediciones de verano: 56 de oro, 49 de plata y 47 de bronce. <span>En los Juegos Olímpicos de Invierno ha participado en todas las ediciones (22 en total). El país ha conseguido un total de 329 medallas en las ediciones de invierno: 118 de oro, 111 de plata y 100 de bronce.</span>', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
	]},
		//Geografía
	{categorias: 'Geografía', preguntas: [
		{textoEnunciado: '¿Sabías cual de estas 2 playas tiene mayor longitud?', imagenCorrecta: 'playadelaconcha.jpg', imagenIncorrecta: 'playadelabarceloneta.jpg', incorrecta: 'Playa de la Barceloneta', correcta: 'Playa de La Concha', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es una de las más largas con una longitud de 1100 metros. Junto con la de San Splaya cercana) es una de las más antiguas y de mayor tradición de la ciudad y también una de las preferidas por los usuarios extranjeros.<span> Mientras que la playa de La Concha tiene una longitad de 1350m.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Ubicada al oeste de la desembocadura del río Urumea, separada del mismo por el monte Urgull y alojada en la bahía de la Concha, tiene una longitud media de 1.350 m, una anchura media de 40 m y una superficie media de 54.000 m². <span>Mientras que la playa de la Barceloneta tiene una longitud de 1100m.', estado: false},
		{textoEnunciado: '¿Sabías que oceano es mas profundo?', imagenCorrecta: 'Oceanopacifico.jpg', imagenIncorrecta: 'Oceanoatlantico.jpg', correcta: 'Ocenao Pacífico', incorrecta: 'Oceano Atlántico', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El océano Atlántico es el océano que separa América, al oeste de Europa y África, al este. Tiene una profundidad maxima de 8 605 m (fosa de Puerto Rico). Se extiende desde el océano Ártico, en el norte, hasta el océano Antártico, en el sur. Es el segundo océano más extenso de la Tierra tras el océano Pacífico. <span> Mientras que el oceano Pacífico tiene una profundidad máxima de 10.924m </span>', correctaExplicacion: '<span>¡Muy bien!</span> El océano Pacífico es el mayor océano de la Tierra. Tiene una profundidad máxima de 10.924m (Abismo Challenger en la Fosa de las Marianas). Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 000 km desde el mar de Bering limitando con el Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida. <span>Mientras que el oceano Atlantico tiene una profundidad de Máxima: 8 605 m (fosa de Puerto Rico).</span>', estado: false},
		{textoEnunciado: '¿Sabías que país tiene mas superficie?', imagenCorrecta: 'reinounido.jpg', imagenIncorrecta: 'rumania.jpg', correcta: 'Reino Unido', incorrecta: 'Rumania', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Rumania es un país ubicado en la intersección de Europa Central y del Sureste, en la frontera con el mar Negro. Rumania limita con Hungría y Serbia al oeste, Ucrania y Moldavia al noreste y al este, y Bulgaria al sur. Con una superficie de 238 391 km2. <span>Mientras que el Reino unido tiene 243 610km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El Reino Unido, denominado oficialmente Reino Unido de Gran Bretaña e Irlanda del Norte (United Kingdom of Great Britain and Northern Ireland),con una superficie de 243 610km² es un país soberano e insular, miembro de la Unión Europea,nota 1 ubicado al noroeste de la Europa Continental. <span>Mientras que Rumania tiene 238 391 km2.', estado: false},
		{textoEnunciado: '¿Sabías que ciudad tiene mas población metropolitana?', imagenCorrecta: 'seul.jpg', imagenIncorrecta: 'bombay.jpg', correcta: 'Seúl', incorrecta: 'Bombay', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Bombay, también conocida bajo la forma local Mumbai y actualmente el nombre oficial en inglés desde 1995, es la capital del estado federal de Maharashtra en la India. Es la ciudad portuaria más importante del subcontinente con cerca del 40 % del tráfico exterior del país. Tiene una población metropolitana de 20.654.359 habitantes.<span> Mientras que Seúl tiene una población metropolitana de 25.620.000 habitantes.', correctaExplicacion: '<span>¡Muy Bien!</span> Seúl, es la capital de Corea del Sur desde la creación de esta república en 1948, la capital histórica de Corea desde hace más de 600 años y la ciudad más poblada de la península de Corea. Tiene una población metropolitana de 25.620.000 habitantes. Situada al noroeste del país, a unos 50 kilómetros de la zona desmilitarizada que separa las dos Coreas, forma una unidad administrativa propia dentro del Estado. Está atravesada por el río Han.<span> Mientras que la ciudad de Bombay tiene 20.654.359 habitantes.</span><span>', estado: false},
		{textoEnunciado: '¿Sabías que lago es mas grande?', imagenCorrecta: 'lagohuron.jpg', imagenIncorrecta: 'lagomichigan.jpg', correcta: 'Lago Hurón', incorrecta: 'Lago Míchigan', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El lago Míchigan es el único de los Grandes Lagos que se encuentra completamente dentro del territorio de los Estados Unidos; los otros están compartidos con Canadá. Con 57.750 km², una superficie similar a la de Croacia, es el mayor lago perteneciente a un único país y el quinto a escala mundial. <span> Mientras que el lago Hurón tiene una superficie de de 59.596 km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El lago Hurón es el segundo lago en tamaño de los cinco conocidos como Grandes Lagos, y se halla en la zona central de Norteamérica, entre Estados Unidos y Canadá y tiene una superficie de 59.596 km².<span> Mientras que el Lago Míchigan tiene una superficie de 57.750 km².</span>', estado: false},
		{textoEnunciado: '¿Sabías que volcan es mas alto?', imagenCorrecta: 'montepissis.jpg', imagenIncorrecta: 'cerrobonetechico.jpg', correcta: 'Monte Pissis', incorrecta: 'Cerro Bonete Chico', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El Cerro Bonete Chico (a veces llamado cerro Bonete) es un volcán apagado en el noroeste de la Provincia de La Rioja, cerca del límite con la Provincia de Catamarca, en la República Argentina. Forma parte del hemiciclo de los volcanes más altos del mundo compuesto por Veladero, Baboso, Reclus, Gemelos, Pissis, Peñas Azules y Bonete Grande, midiendo  6759m.<span> Mientras que el volcan de Monte Pissis tiene una altitud de 6795m.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El monte Pissis es un estratovolcán inactivo, situado sobre un ramal de la Cordillera de los Andes dentro de la región del altiplano puneño de la Argentina, ubicado entre las Provincias de La Rioja y Catamarca. Este volcán es la tercera cumbre de mayor altura de los hemisferios Sur y Occidental, con una altitud de 6795m. <span> Mientras que el volcan Cerro Bonete Chico tiene una altitud de 6759m.</span>', estado: false},
		{textoEnunciado: '¿Sabías que país tiene mayor area de bosque?', imagenCorrecta: 'bosquecanada.jpg', imagenIncorrecta: 'bosqueestadosunidos.jpg', correcta: 'Canadá', incorrecta: 'Estados Unidos', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Estados Unidos, oficialmente Estados Unidos de América es un país soberano constituido en república federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del país se ubica en el centro de América del Norte y tiene un area de bosque de 310.095 miles de hectareas. <span> Mientras que Canadá tiene un area de bosque de 347.069 miles de hectareas.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Canadá es un país soberano de América del Norte, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto. Con un area de bosque de 347.069 miles de hectareas. <span> Mientras que Estados Unidos tiene un area de bosque de 310.095 miles de hectareas.</span>', estado: false},
		{textoEnunciado: '¿Sabías que rio es mas largo?', imagenCorrecta: 'amazonas.jpg', imagenIncorrecta: 'nilo.jpg', correcta: 'Rio Amazonas', incorrecta: 'Rio Nilo', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El Nilo es el mayor río de África y fue considerado durante siglos el río más largo del mundo, sin embargo, mediciones de los años 2007 y 2008 han redefinido el nacimiento del río Amazonas. La fuente más lejana del lago Victoria es el río Kagera, localizado al oeste de Tanzania. Si se considera este como fuente del Nilo, su nacimiento sería el curso de agua más largo de los que desembocan en el Mediterráneo, siendo el Nilo-Kagera el segundo río más largo del mundo, con una longitud de 6853km. <span> Mientras que el rio Amazonas tiene una longitud de 7062km.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El río Amazonas es un río de América del Sur, que atraviesa Perú (nacimiento), Colombia y Brasil (desembocadura). Es el río más caudaloso del mundo y contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos, y supone cerca de una quinta parte del agua dulce en estado líquido del planeta con una longitud de 7062km. <span> Mientras que el Nilo tiene una longitud de 6853km.</span>', estado: false},
		{textoEnunciado: '¿Sabías cual es la capital de Zambia?', imagenCorrecta: 'lusaka.jpg', imagenIncorrecta: 'harare.jpg', correcta: 'Lusaka', incorrecta: 'Harare', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Harare (denominada Salisbury hasta 1982) es la ciudad más poblada y capital de Zimbabue. Tiene una población estimada de 1.600.000 habitantes, con unas 2.800.000 personas en su área metropolitana (2006). Es el centro administrativo, comercial, y de comunicaciones de Zimbabue. Es centro de comercio para el tabaco, maíz, algodón y cítricos. <span> Mientras que Lusaka es la capital de Zambia.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Lusaka es la capital de Zambia, de la provincia de Lusaka y del distrito homónimo, además de la ciudad más poblada del país. Está localizada en la zona centro-sur de Zambia, sobre una meseta a 1279 metros de altitud. Fue fundada como ciudad colonial en 1905 sobre un poblado preexistente. <span> Mientras que Harare es la capital de Zimbabue.</span>', estado: false},
		{textoEnunciado: '¿Sabías que polo es mas frio?', imagenCorrecta: 'polosur.jpg', imagenIncorrecta: 'polonorte.jpg', correcta: 'Polo Sur', incorrecta: 'Polo Norte', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El polo norte, también conocido como polo norte geográfico es uno de los dos lugares de la superficie de un planeta coincidente con el eje de rotación; es opuesto al polo sur. Todos los cuerpos celestes poseen un polo norte y otro sur cuyo eje de rotación no suele ser perpendicular al eje de traslación. Con una temperatura mínima registrada de -70 grados centígrados. <span> Mientras que en el Polo Sur la temperatura mínima registrada es de -89,6 grados centígrados.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El término polo sur se refiere normalmente al polo sur geográfico, el punto más austral de la superficie terrestre, el opuesto al polo norte. Otros «polo sur» incluyen el polo sur ceremonial, el polo sur magnético y geomagnético, y el polo sur de inaccesibilidad. Con una temperatura mínima registrada de -89,6 grados centígrados. <span> Mientras que en el Polo Norte la temperatura mínima registrada de -70 grados centígrados.</span>', estado: false},
	]},
	//Historia
	{categorias: 'Historia', preguntas: [
		{textoEnunciado: '¿Sabías que cabo fue descubierto antes?', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: 'Cabo San Lucas', incorrecta: 'Cabo de Hornos', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En 1525, el marino español Francisco de Hoces, que formaba parte de la expedición de García Jofre de Loaísa, se encontró con un temporal cuando trataba de cruzar el estrecho de Magallanes, lo que le obligó a viajar hasta los 55º de latitud sur, convirtiéndose en el primero en descubrir el paso al sur del cabo de Hornos, en el extremo meridional del continente, anticipándose en más de medio siglo al pirata inglés Francis Drake. <span> Mientras que el cabo de San Lucas fue descubierto en 1534. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Actualmente se considera que el primer europeo que desembarcó en la península de Baja California fue el piloto y navegante español Fortún Jiménez, quien (al mando del navío Concepción) avistó y visitó en el año 1534 la península, que pensó que era una isla. <span> Mientras que el cabo de Hornos fue descubierto en 1525.</span>', estado: false},
		{textoEnunciado: '¿Sabías quien descubrió America?', imagenCorrecta: 'coloncristobal.jpg', imagenIncorrecta: 'americovespucio.jpg', correcta: 'Cristobal Colón', incorrecta: 'Américo Vespucio', incorrectaExplicacion: '<span>¡Uy lo siento!</span> América debería llamarse Columba, porque su descubridor fue Cristóbal Colón. Sin embargo, Américo Vespucio acabó por imponerse sobre Colón. Podría resumirse en que Américo escribía mejor que Colón, de 1499 a 1502 realizó varios viajes a América. <span> Mientras que Cristobal Colón viajo a América en 1492. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Fue una expedición marítima capitaneada por Cristóbal Colón, al servicio de los Reyes Católicos, Isabel y Fernando de Castilla y Aragón, que partió el 3 de agosto del 1492 del Puerto de Palos de la Frontera. Participaron tres embarcaciones: la carabela Pinta, la carabela Niña y la carabela Santa María <span> Mientras que el Américo Vespucio viajo a America en 1499.</span>', estado: false},
		{textoEnunciado: '¿Sabías que emperador romano conquistó Hispania?', imagenCorrecta: 'cesaraugusto.png', imagenIncorrecta: 'tiberio.jpg', correcta: 'César Augusto', incorrecta: 'Tiberio Julio César', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Fue emperador del Imperio romano desde el 18 de septiembre del año 14 d.c hasta su muerte, el 16 de marzo del año 37 d.c. Fue el segundo emperador de Roma y perteneció a la dinastía Julio-Claudia. Era hijo de Tiberio Claudio Nerón y Livia Drusila. <span> Mientras que César Augusto termino la conquista en el año 19a.c.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Se conoce como conquista de Hispania al periodo histórico comprendido entre el desembarco romano en Ampurias (218 a. C.) y la conclusión de la conquista romana de la península ibérica con el fin de las guerras cántabras por César Augusto (19 a. C.), así como a los hechos históricos que conforman dicho periodo. <span> Mientras que Tiberio Julio César fue emperador en el año 14 d.c.</span>', estado: false},
		{textoEnunciado: '¿Sabías que faraón comenzó la construccion de las piramides?', imagenCorrecta: 'dyeser.jpg', imagenIncorrecta: 'sejemjet.jpg', correcta: 'Faraón Dyeser', incorrecta: 'Faraón Sejemjet', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Gobernó en 2645 - 2638 a. C. Como su predecesor, Dyeser, Sejemjet inició la construcción de una pirámide escalonada en Saqqara, pero sólo las gradas más bajas estaban terminadas en el momento de su muerte. Algunos egiptólogos creen que la pirámide de Sejemjet habría sido más grande que la de Dyeser si se hubiera terminado. <span> Mientras que el Faraón Dyeser gobernó de ca. 2665 a 2645 a. C. y comenzó la construccion de las piramides.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Gobernó de ca. 2665 a 2645 a. C. Este periodo se inicia bajo la Dinastía III, la capital se estableció en Memfis, y es esta dinastía, bajo el mandato del Faraón Dyeser, donde los egipcios comienzan a erigir esas maravillosas y colosales construcciones llamadas Pirámides. <span> Mientras que Faraón Sejemjet gobernó en 2645 - 2638 a. C. y solo continuó su construcción de las piramides.</span>', estado: false},
		{textoEnunciado: '¿Sabías quien invento los auriculares?', imagenCorrecta: 'nathanielbaldwin.jpg', imagenIncorrecta: 'grahambell.jpg', correcta: 'Nathaniel Baldwin', incorrecta: 'Alexander Graham Bell', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En 1876 Alexander Graham Bell inventó el teléfono y por primera vez incluyó un micrófono funcional que usaba un electroimán, este era conocido como transmisor líquido donde el diafragma se adjuntaba a una varilla conductora en una solución de ácido. <span> Mientras que Nathaniel Baldwin fué quien invento los auriculares.</span>', correctaExplicacion: '<span>¡Muy bien!</span> La invención de los audífonos se remonta a 1910 en Utah en Estados Unidos a finales del año 1930, fue Nathaniel Baldwin quien los creó y dejó al mundo un gadget hoy indispensable. <span> Mientras que Graham Bell fué quien inventó el telefono.', estado: false},
		{textoEnunciado: '', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
	]},
	//Todo
	{categorias: 'Todo'},
];

$(document).ready(function() {
	a.addClass('animated bounceInLeft');
	a.fadeTo('fast', 0.1);
	a.mouseenter(categoria);
	$('html, body').css({
    overflow: 'auto',
    height: 'auto'
});
	setTimeout(function(){ a.removeClass('animated bounceInLeft'); }, 1000);
});

function categoria (){
	a.fadeTo('fast', 0.1);
	$(this).fadeTo('fast', 1);
	$(this).one('click', function(event){
		event.stopImmediatePropagation();
		if (a.addClass()[2].className == 'col-md-2 col-sm-4 col-xs-4 tamaño div-img'){
			$(this).addClass('animated flip');
			a.addClass('animated bounceOutLeft');
			$('#creador').addClass('animated bounceOutLeft');
			b = preg[$(this).index()];
			if (b.categorias == "Todo"){
				setTimeout(function(){
					$('.flip').removeClass('flip');
				}, 1500);
				setTimeout(function(){
					todos = true;
					a.addClass('hidden');
					preguntas();
				}, 1500)
			}else{
				setTimeout(function(){
					$('.flip').removeClass('flip');
				}, 1500);
				setTimeout(function(){
					a.addClass('hidden');
					preguntas();
				}, 3000);
			}
		}
	});
}

function preguntas(){
	if (todos === true){
		b = preg[Math.floor(Math.random()*4 + 0)];
	}
	if (x < 10) {
		x++
		c = Math.floor(Math.random()*10 + 0);
		while (b.preguntas[c].estado == true){
			c = Math.floor(Math.random()*10 + 0);
		}
		b.preguntas[c].estado = true;
		var elegir = '<div id="correcta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenCorrecta + '><p class="letra">&mdash;' + b.preguntas[c].correcta + '&mdash;</p></div>'
		var random = Math.floor(Math.random()*2 + 0);
		if (random == 1) {
			$('section.prueba').append('<h1 class="categoria">' + b.categorias + '</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight">' + elegir + '<div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div></div>');
			$('img.marco2').one('click', function(event){
				event.stopImmediatePropagation();
				setTimeout(function(){
					$('p.pregunta').removeClass('animated bounceInRight');
					$('div.conjunto').removeClass('animated bounceInRight');
				}, 1500);
				if ($(this).attr('src') == 'img/' + b.categorias + '/' + b.preguntas[c].imagenCorrecta){
					$('#incorrecta').children().addClass('hidden');
					$('#incorrecta').append('<div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].correctaExplicacion + '</div>')
					setTimeout(function(){
						$('#incorrecta').removeClass('animated bounceInRight')
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 13000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 14000);
				}else{
					$('#correcta').children().addClass('hidden');
					$('#correcta').append('<div class="texto animated bounceInLeft"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].incorrectaExplicacion + '</div>');
					setTimeout(function(){
						$('#correcta').removeClass('animated bounceInLeft');
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 13000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 14000);
				}
			});
		}else{
			$('section.prueba').append('<h1 class="categoria">' + b.categorias + '</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight"><div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div>' + elegir + '</div>');
			$('img.marco2').one('click', function(event){
				setTimeout(function(){
					$('p.pregunta').removeClass('animated bounceInRight');
					$('div.conjunto').removeClass('animated bounceInRight');
				}, 1500);
				if ($(this).attr('src') == 'img/'  + b.categorias + '/' + b.preguntas[c].imagenCorrecta) {
					$('#incorrecta').children().addClass('hidden');
					$('#incorrecta').append('<div class="texto animated bounceInLeft"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].correctaExplicacion + '</div>');
					setTimeout(function(){
						$('#incorrecta').removeClass('animated bounceInLeft');
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 13000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 14000);
				}else{
					$('#correcta').children().addClass('hidden');
					$('#correcta').append('<div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].incorrectaExplicacion + '</div>');
					setTimeout(function(){
						$('#correcta').removeClass('animated bounceInRight');
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 13000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 14000);
				}
			});
		}
	}else{
		llamarCategoria();
	}
}

function llamarCategoria(){
	x = 0;
	a.removeClass('animated bounceOutLeft hidden');
	a.addClass('animated bounceInLeft');
	for (var i = 0; i < 4; i++) {
		preg[i]
		for (var h = 0; h < 10; h++) {
			b.preguntas[h].estado = false;
		}
	}
	setTimeout(function(){
		a.removeClass('animated bounceInLeft');
	}, 500);
}

// MUSICA BOTON stop
function audioplay() {
	var audio = document.getElementById("audio1");
	var button = document.getElementById("play");
	if (audio.paused) {
		audio.play();
		button.textContent = "||";
	} else {
		audio.pause();
		button.textContent = ">";
	}
}
