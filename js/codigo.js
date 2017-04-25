var a = $('section.prueba').children();
var b;
var c;
var x = 0;
var preg = [
	//Naruraleza
	{categorias: 'Naturaleza', preguntas: [
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false, },
	]},
	//Deportes
	{categorias: 'Deportes', preguntas: [
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
	]},
	//Geografía
	{categorias: 'Geografía', preguntas: [
		{textoEnunciado: '¿Sabes cual de estas 2 playas tiene mayor longitud?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', incorrecta: 'Playa de la Barceloneta', correcta: 'Playa de La Concha', incorrectaExplicacion: 'Muy mal!!! Es una de las más largas con una longitud de 1100 metros. Junto con la de San Splaya cercana) es una de las más antiguas y de mayor tradición de la ciudad y también una de las preferidas por los usuarios extranjeros. Mientras que la playa de La Concha tiene una longitad de 1350m.', correctaExplicacion: 'Muy bien!!! Ubicada al oeste de la desembocadura del río Urumea, separada del mismo por el monte Urgull y alojada en la bahía de la Concha, tiene una longitud media de 1.350 m, una anchura media de 40 m y una superficie media de 54.000 m². <span>Mientras que la playa de la Barceloneta tiene una longitud de 1100m.', estado: false},
		{textoEnunciado: '¿Sabes que oceano es mas profundo?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Ocenao Pacífico', incorrecta: 'Oceano Atlántico', incorrectaExplicacion: '<span>Muy mal!!!</span> El océano Atlántico es el océano que separa América, al oeste de Europa y África, al este. Tiene una profundidad maxima de 8 605 m (fosa de Puerto Rico). Se extiende desde el océano Ártico, en el norte, hasta el océano Antártico, en el sur. Es el segundo océano más extenso de la Tierra tras el océano Pacífico. <span>Mientras que el oceano Pacífico tiene una profundidad máxima de 10.924m</span>', correctaExplicacion: '<span>Muy bien!!!</span> El océano Pacífico es el mayor océano de la Tierra. Tiene una profundidad máxima de 10.924m (Abismo Challenger en la Fosa de las Marianas). Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 000 km desde el mar de Bering limitando con el Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida. <span>Mientras que el oceano Atlantico tiene una profundidad de Máxima: 8 605 m (fosa de Puerto Rico).</span>', estado: false},
		{textoEnunciado: '¿Sabes que país tiene mas superficie?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Reino Unido', incorrecta: 'Rumania', incorrectaExplicacion: '<span>¡Muy mal!</span> Rumania es un país ubicado en la intersección de Europa Central y del Sureste, en la frontera con el mar Negro. Rumania limita con Hungría y Serbia al oeste, Ucrania y Moldavia al noreste y al este, y Bulgaria al sur. Con una superficie de 238 391 km2. <span>Mientras que el Reino unido tiene 243 610km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El Reino Unido, denominado oficialmente Reino Unido de Gran Bretaña e Irlanda del Norte (United Kingdom of Great Britain and Northern Ireland),con una superficie de 243 610km² es un país soberano e insular, miembro de la Unión Europea,nota 1 ubicado al noroeste de la Europa Continental. <span>Mientras que Rumania tiene 238 391 km2.', estado: false},
		{textoEnunciado: '¿Sabes que ciudad tiene mas población metropolitana?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Seúl', incorrecta: 'Bombay', incorrectaExplicacion: '<span>¡Muy mal!</span> Bombay, también conocida bajo la forma local Mumbai y actualmente el nombre oficial en inglés desde 1995, es la capital del estado federal de Maharashtra en la India. Es la ciudad portuaria más importante del subcontinente con cerca del 40 % del tráfico exterior del país. Tiene una población metropolitana de 20.654.359 habitantes.', correctaExplicacion: '<span>¡Muy Bien!</span>Seúl, pronunciado: [sʌ.ul], oficialmente Ciudad Especial de Seúl, es la capital de Corea del Sur desde la creación de esta república en 1948, la capital histórica de Corea desde hace más de 600 años y la ciudad más poblada de la península de Corea. Tiene una población metropolitana de 25.620.000 habitantes. Situada al noroeste del país, a unos 50 kilómetros de la zona desmilitarizada que separa las dos Coreas, forma una unidad administrativa propia dentro del Estado. Está atravesada por el río Han.<span>Mientras que la ciudad de Bombay tiene 20.654.359 habitantes.</span><span>', estado: false},
		{textoEnunciado: '¿Sabes que lago es mas grande?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Lago Hurón', incorrecta: 'Lago Míchigan', incorrectaExplicacion: '<span>¡Muy mal!</span> El lago Míchigan es el único de los Grandes Lagos que se encuentra completamente dentro del territorio de los Estados Unidos; los otros están compartidos con Canadá. Con 57.750 km², una superficie similar a la de Croacia, es el mayor lago perteneciente a un único país y el quinto a escala mundial. <span> Mientras que el lago Hurón tiene una superficie de de 59.596 km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El lago Hurón (en inglés: Lake Huron)? es el segundo lago en tamaño de los cinco conocidos como Grandes Lagos, y se halla en la zona central de Norteamérica, entre Estados Unidos y Canadá y tiene una superficie de 59.596 km².<span> Mientras que el Lago Míchigan tiene una superficie de 57.750 km².</span>', estado: false},
		{textoEnunciado: '¿Sabes que volcan es mas alto?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Monte Pissis', incorrecta: 'Cerro Bonete Chico', incorrectaExplicacion: '<span>¡Muy mal!</span> El Cerro Bonete Chico (a veces llamado cerro Bonete) es un volcán apagado en el noroeste de la Provincia de La Rioja, cerca del límite con la Provincia de Catamarca, en la República Argentina. Forma parte del hemiciclo de los volcanes más altos del mundo compuesto por Veladero, Baboso, Reclus, Gemelos, Pissis, Peñas Azules y Bonete Grande, midiendo  6759m.<span> Mientras que el volcan de Monte Pissis tiene una altitud de 6795m.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El monte Pissis es un estratovolcán inactivo, situado sobre un ramal de la Cordillera de los Andes dentro de la región del altiplano puneño de la Argentina, ubicado entre las Provincias de La Rioja y Catamarca. Este volcán es la tercera cumbre de mayor altura de los hemisferios Sur y Occidental, con una altitud de 6795m. <span> Mientras que el volcan Cerro Bonete Chico tiene una altitud de 6759m.</span>', estado: false},
		{textoEnunciado: '¿Sabes que país tiene mayor area de bosque?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Canadá', incorrecta: 'Estados Unidos', incorrectaExplicacion: '<span>¡Muy mal!</span> Estados Unidos, oficialmente Estados Unidos de América es un país soberano constituido en república federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del país se ubica en el centro de América del Norte y tiene un area de bosque de 310.095 miles de hectareas. <span> Mientras que Canadá tiene un area de bosque de 347.069 miles de hectareas.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Canadá es un país soberano de América del Norte, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto. Con un area de bosque de 347.069 miles de hectareas. <span> Mientras que Estados Unidos tiene un area de bosque de 310.095 miles de hectareas.</span>', estado: false},
		{textoEnunciado: '¿Sabes que rio es mas largo?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Rio Amazonas', incorrecta: 'Rio Nilo', incorrectaExplicacion: '<span>¡Muy Mal!</span> El Nilo es el mayor río de África y fue considerado durante siglos el río más largo del mundo, sin embargo, mediciones de los años 2007 y 2008 han redefinido el nacimiento del río Amazonas. La fuente más lejana del lago Victoria es el río Kagera, localizado al oeste de Tanzania. Si se considera este como fuente del Nilo, su nacimiento sería el curso de agua más largo de los que desembocan en el Mediterráneo, siendo el Nilo-Kagera el segundo río más largo del mundo, con una longitud de 6853km. <span> Mientras que el rio Amazonas tiene una longitud de 7062km.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El río Amazonas es un río de América del Sur, que atraviesa Perú (nacimiento), Colombia y Brasil (desembocadura). Es el río más caudaloso del mundo y contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos, y supone cerca de una quinta parte del agua dulce en estado líquido del planeta con una longitud de 7062km. <span> Mientras que el Nilo tiene una longitud de 6853km.</span>', estado: false},
		{textoEnunciado: '¿Sabes cual es la capital de Zambia?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Lusaka', incorrecta: 'Harare', incorrectaExplicacion: '<span>¡Muy mal!</span>Harare (denominada Salisbury hasta 1982) es la ciudad más poblada y capital de Zimbabue. Tiene una población estimada de 1.600.000 habitantes, con unas 2.800.000 personas en su área metropolitana (2006). Es el centro administrativo, comercial, y de comunicaciones de Zimbabue. Es centro de comercio para el tabaco, maíz, algodón y cítricos. <span> Mientras que Lusaka es la capital de Zambia.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Lusaka es la capital de Zambia, de la provincia de Lusaka y del distrito homónimo, además de la ciudad más poblada del país. Está localizada en la zona centro-sur de Zambia, sobre una meseta a 1279 metros de altitud. Fue fundada como ciudad colonial en 1905 sobre un poblado preexistente. <span> Mientras que Harare es la capital de Zimbabue.</span>', estado: false},
		{textoEnunciado: '¿Sabes que polo es mas frio?', imagenCorrecta: 'Oceanoatlantico.jpg', imagenIncorrecta: 'Oceanopacifico.jpg', correcta: 'Polo Sur', incorrecta: 'Polo Norte', incorrectaExplicacion: '<span>¡Muy mal!</span>El polo norte, también conocido como polo norte geográfico es uno de los dos lugares de la superficie de un planeta coincidente con el eje de rotación; es opuesto al polo sur. Todos los cuerpos celestes poseen un polo norte y otro sur cuyo eje de rotación no suele ser perpendicular al eje de traslación. Con una temperatura mínima registrada de -70 grados centígrados. <span> Mientras que en el Polo Sur la temperatura mínima registrada es de -89,6 grados centígrados.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El término polo sur se refiere normalmente al polo sur geográfico, el punto más austral de la superficie terrestre, el opuesto al polo norte. Otros «polo sur» incluyen el polo sur ceremonial, el polo sur magnético y geomagnético, y el polo sur de inaccesibilidad. Con una temperatura mínima registrada de -89,6 grados centígrados. <span> Mientras que en el Polo Norte la temperatura mínima registrada de -70 grados centígrados.</span>', estado: false},
	]},
	//Historia
	{categorias: 'Historia', preguntas: [
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagen1: '', imagen2: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
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
					a.addClass('hidden');
					preguntas(todos = true);
				}, 1500)
			}else{
				setTimeout(function(){
					$('.flip').removeClass('flip');
				}, 1500);
				setTimeout(function(){
					a.addClass('hidden');
					preguntas(todos = false);
				}, 3000);
			}
		}
	});
}

function preguntas(todos){
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
		var elegir = '<div id="correcta" class="juntos"><img class="marco2" src=img/' + b.preguntas[c].imagenCorrecta + '><p class="letra">&mdash;' + b.preguntas[c].correcta + '&mdash;</p></div>'
		var random = Math.floor(Math.random()*2 + 0);
		if (random == 1) {
			$('section.prueba').append('<h1>' + b.categorias + '</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight">' + elegir + '<div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div></div>');
			$('img.marco2').one('click', function(event){
				event.stopImmediatePropagation();
				setTimeout(function(){
					$('p.pregunta').removeClass('animated bounceInRight');
					$('div.conjunto').removeClass('animated bounceInRight');
				}, 1500);
				if ($(this).attr('src') == 'img/' + b.preguntas[c].imagenCorrecta) {
					$('#incorrecta').children().addClass('hidden');
					$('#incorrecta').append('<p class="texto animated bounceInRight">' + b.preguntas[c].correctaExplicacion + '</p>');
					setTimeout(function(){
						$('p.pregunta').removeClass('animated bounceInRight');
						$('div.conjunto').removeClass('animated bounceInRight')
						$('#incorrecta').removeClass('animated bounceInRight')
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 6000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 7000);
				}else{
					$('#correcta').children().addClass('hidden');
					$('#correcta').append('<p class="texto animated bounceInLeft">' + b.preguntas[c].incorrectaExplicacion + '</p>');
					setTimeout(function(){
						$('p.pregunta').removeClass('animated bounceInRight');
						$('div.conjunto').removeClass('animated bounceInRight')
						$('#correcta').removeClass('animated bounceInLeft')
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 6000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 7000);
				}
			});
		}else{
			$('section.prueba').append('<h1>' + b.categorias + '</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight"><div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div>' + elegir + '</div>');
			$('img.marco2').one('click', function(event){
				setTimeout(function(){
					$('p.pregunta').removeClass('animated bounceInRight');
					$('div.conjunto').removeClass('animated bounceInRight');
				}, 1500);
				if ($(this).attr('src') == 'img/' + b.preguntas[c].imagenCorrecta) {
					$('#incorrecta').children().addClass('hidden');
					$('#incorrecta').append('<p class="texto animated bounceInLeft">' + b.preguntas[c].correctaExplicacion + '</p>');
					setTimeout(function(){
						$('p.pregunta').removeClass('animated bounceInRight');
						$('div.conjunto').removeClass('animated bounceInRight')
						$('#incorrecta').removeClass('animated bounceInLeft')
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 6000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 7000);
				}else{
					$('#correcta').children().addClass('hidden');
					$('#correcta').append('<p class="texto animated bounceInRight">' + b.preguntas[c].incorrectaExplicacion + '</p>');
					setTimeout(function(){
						$('p.pregunta').removeClass('animated bounceInRight');
						$('div.conjunto').removeClass('animated bounceInRight')
						$('#correcta').removeClass('animated bounceInRight')
					}, 1500);
					setTimeout(function(){
						$('p.pregunta').addClass('animated bounceOutLeft');
						$('div.conjunto').addClass('animated bounceOutLeft');
						$('#incorrecta').addClass('animated bounceOutLeft');
					}, 6000);
					setTimeout(function(){
						$('h1').remove();
						$('p.pregunta').remove();
						$('div.conjunto').remove();
						preguntas();
					}, 7000);
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